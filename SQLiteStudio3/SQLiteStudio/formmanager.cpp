#include "formmanager.h"
#include "services/config.h"
#include "services/pluginmanager.h"
#include "sqlitestudio.h"
#include "uiloader.h"
#include "common/configradiobutton.h"
#include "common/configcombobox.h"
#include "common/fileedit.h"
#include "common/unused.h"
#include <QFile>
#include <QDir>
#include <QRegularExpression>
#include <QApplication>
#include <QDebug>

FormManager::FormManager()
{
    init();
}

FormManager::~FormManager()
{
    if (uiLoader)
    {
        delete uiLoader;
        uiLoader = nullptr;
    }
}

QWidget* FormManager::createWidget(const QString& name)
{
    if (!widgetNameToFullPath.contains(name))
    {
        qCritical() << "Asked for widget name which isn't managed by FormManager:" << name << ", while available widgets are:"
                    << widgetNameToFullPath.keys();
        return nullptr;
    }
    return createWidgetByFullPath(widgetNameToFullPath[name]);
}

bool FormManager::hasWidget(const QString& name)
{
    return widgetNameToFullPath.contains(name);
}

QStringList FormManager::getAvailableForms() const
{
    return widgetNameToFullPath.keys();
}

QWidget* FormManager::createWidgetByFullPath(const QString& path)
{
    QWidget* widget = uiLoader->load(path);
    if (!widget)
    {
        qCritical() << "Error occured while loading ui file:" << path << ". Error message: "
                    << uiLoader->errorString();
        return nullptr;
    }
    return widget;
}

void FormManager::rescanResources(Plugin* plugin, PluginType* pluginType)
{
    UNUSED(pluginType);
    rescanResources(plugin->getName());
}

void FormManager::rescanResources(const QString& pluginName)
{
    if (PLUGINS->isBuiltIn(pluginName))
        return;

    for (const QString& widgetName : resourceForms)
        widgetNameToFullPath.remove(widgetName);

    resourceForms.clear();
    loadRecurently(":/forms", "");
}

void FormManager::pluginsAboutToMassUnload()
{
    disconnect(PLUGINS, SIGNAL(loaded(Plugin*,PluginType*)), this, SLOT(rescanResources(Plugin*,PluginType*)));
    disconnect(PLUGINS, SIGNAL(unloaded(QString,PluginType*)), this, SLOT(rescanResources(QString)));
}

void FormManager::init()
{
    initUiLoader();

    QStringList dirs;
    dirs += qApp->applicationDirPath() + "/forms";
    dirs += ":/forms";
    dirs += QDir(CFG->getConfigDir()).absoluteFilePath("forms");

    QString envDirs = SQLITESTUDIO->getEnv("SQLITESTUDIO_FORMS");
    if (!envDirs.isNull())
        dirs += envDirs.split(PATH_LIST_SEPARATOR);

    dirs += PLUGINS->getPluginDirs();

#ifdef FORMS_DIR
    dirs += FORMS_DIR;
#endif

    foreach (QString dirPath, dirs)
        loadRecurently(dirPath, "");

    connect(PLUGINS, SIGNAL(loaded(Plugin*,PluginType*)), this, SLOT(rescanResources(Plugin*,PluginType*)));
    connect(PLUGINS, SIGNAL(unloaded(QString,PluginType*)), this, SLOT(rescanResources(QString)));
    connect(PLUGINS, SIGNAL(aboutToQuit()), this, SLOT(pluginsAboutToMassUnload()));
}

void FormManager::initUiLoader()
{
    uiLoader = new UiLoader();
    REGISTER_WIDGET(uiLoader, ConfigRadioButton);
    REGISTER_WIDGET(uiLoader, ConfigComboBox);
    REGISTER_WIDGET(uiLoader, FileEdit);
}

void FormManager::loadRecurently(const QString& path, const QString& prefix)
{
    static const QStringList fileExtensions = {"*.ui", "*.UI"};

    QDir dir(path);
    QString fullPath;
    QString widgetName;
    foreach (QFileInfo entry, dir.entryInfoList(fileExtensions, QDir::AllDirs|QDir::Files|QDir::NoDotAndDotDot|QDir::Readable))
    {
        fullPath = entry.absoluteFilePath();
        if (entry.isDir())
        {
            loadRecurently(fullPath, prefix+entry.fileName()+"_");
            continue;
        }

        qDebug() << "Loading form file:" << fullPath;

        widgetName = getWidgetName(fullPath);
        if (widgetName.isNull())
            continue;

        if (widgetNameToFullPath.contains(widgetName))
        {
            qCritical() << "Widget named" << widgetName << "was already loaded by FormManager from file" << widgetNameToFullPath[widgetName]
                        << "therefore file" << fullPath << "will be ignored";
            continue;
        }

        widgetNameToFullPath[widgetName] = fullPath;
        if (fullPath.startsWith(":/"))
            resourceForms << widgetName;
    }
}

QString FormManager::getWidgetName(const QString& path)
{
    static const QRegularExpression re(R"(<widget class\=\"\w+\" name\=\"(\w+)\">)");

    QFile file(path);
    if (!file.open(QIODevice::ReadOnly))
    {
        qWarning() << "Could not open" << path << "for reading. Form file ignored.";
        return QString::null;
    }

    QString contents = file.readAll();
    file.close();

    QRegularExpressionMatch match = re.match(contents);
    if (!match.hasMatch())
    {
        qWarning() << "Could not match widget in" << path << " document. File ignored.";
        return QString::null;
    }

    QString widgetName = match.captured(1);

    return widgetName;
}
