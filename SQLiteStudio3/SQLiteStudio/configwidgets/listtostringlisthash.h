#ifndef LISTTOSTRINGLISTHASH_H
#define LISTTOSTRINGLISTHASH_H

#include "customconfigwidgetplugin.h"
#include "plugins/genericplugin.h"

class ListToStringListHash: public GenericPlugin, public CustomConfigWidgetPlugin
{
    public:
        ListToStringListHash(CfgEntry* key);
        bool isConfigForWidget(CfgEntry* key, QWidget* widget);
        void applyConfigToWidget(CfgEntry* key, QWidget* widget, const QVariant& value);
        void saveWidgetToConfig(QWidget* widget, CfgEntry* key);
        const char*getModifiedNotifier() const;
        QString getFilterString(QWidget* widget) const;

    private:
        CfgEntry* assignedKey = nullptr;
};

#endif // LISTTOSTRINGLISTHASH_H
