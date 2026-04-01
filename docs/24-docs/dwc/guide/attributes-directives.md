# Attributes Directive


![DWC-Removed](https://img.shields.io/badge/DWC-Removed-red)

!> **important:** Starting from BBj v23.00, the attributes directives are no longer available. Instead, their equivalent can now be found in [`BBjWebManager`](https://documentation.basis.cloud/BASISHelp/WebHelp/bui/BBjBuiManager/bbjbuimanager.htm). This page is solely meant to guide you on how to transition to the new API.

## What is a Directive

An Attribute Directive is a special keyword that means something specific for the `SetAttributeMessage` and the `GetAttributeMessage` messages. The attribute messages are executed in response to invoking [BBjControl::setAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setAttribute.htm) and [BBjControl::getAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getAttribute.htm) respectively.

## Available Directives

| **Directive**                                                                                                                                                                                    | **Description**                                                                                                                                                                                                                                                         | **Type**                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `@app-theme` <br><br> Use [`BBjWebManger::setTheme`](https://documentation.basis.cloud/BASISHelp/WebHelp/bui/BBjBuiManager/BBjWebManager_setTheme.htm) instead.                                  | Allows multiple themes to co-exist with the DWC's default themes. The DWC supports three themes currently: `light`, `dark`, and `dark-pure`. The directive accepts the theme name.                                                                                       | `string`                     |
| `@app-theme-switcher` <br><br> Use [`BBjWebManger::setTheme`](https://documentation.basis.cloud/BASISHelp/WebHelp/bui/BBjBuiManager/BBjWebManager_setTheme.htm) instead.                         | Used to switch the current theme based on the user preference. The user might indicate this preference through an operating system setting (e.g. light or dark mode) or a user agent setting. The directive accepts the name of the `dark` theme and the `light` theme. | `JSON string` OR `key=value` |
| `@app-attr` <br><br> Use [`BBjWebManger::setAttribute`](https://documentation.basis.cloud/BASISHelp/WebHelp/bui/BBjBuiManager/BBjBuiManager_setAttribute.htm) instead.                           | Set an attribute on the HTML tag.                                                                                                                                                                                                                                       | `JSON string` OR `key=value` |
| `@app-meta` <br><br> Use [`BBjWebManger::setMeta`](https://documentation.basis.cloud/BASISHelp/WebHelp/bui/BBjBuiManager/BBjBuiManager_setMeta.htm)                                              | Attach or modify a meta tag. @see [The Metadata Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) & [Standard Metadata Names](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name)                                               | `JSON string` OR `key=value` |
| `@app-link` OR `@app-link-top` <br><br> Use [`BBjWebManager::injectLinkUrl`](https://documentation.basis.cloud/BASISHelp/WebHelp/bui/BBjBuiManager/BBjBuiManager_injectLinkUrl.htm) instead.     | Attach or modify a link at the top of the page. @see [The External Resource Link Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/)link)                                                                                                              | `JSON string` OR `key=value` |
| `@app-link-bottom` <br><br> Use [`BBjWebManager::injectLinkUrl`](https://documentation.basis.cloud/BASISHelp/WebHelp/bui/BBjBuiManager/BBjBuiManager_injectLinkUrl.htm) instead                  | Attach or modify a link at the bottom of the page.                                                                                                                                                                                                                      | `JSON string` OR `key=value` |
| `@app-script` OR `@app-script-top` <br><br> Use [`BBjWebManager::injectScriptUrl`](https://documentation.basis.cloud/BASISHelp/WebHelp/bui/BBjBuiManager/BBjBuiManager_injectScriptUrl.htm) instead | Attach or modify a script at the top of the page. @see [The Script Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)                                                                                                                           | `JSON string` OR `key=value` |
| `@app-script-bottom` <br><br> Use [`BBjWebManager::injectScriptUrl`](https://documentation.basis.cloud/BASISHelp/WebHelp/bui/BBjBuiManager/BBjBuiManager_injectScriptUrl.htm) instead               | Attach or modify a script at the bottom of the page.                                                                                                                                                                                                                    | `JSON string` OR `key=value` |
| `@app-style` OR `@app-style-top` <br><br> Use [`BBjWebManager::injectStyle`](https://documentation.basis.cloud/BASISHelp/WebHelp/bui/BBjBuiManager/BBjBuiManager_injectStyle.htm) instead        | Attach or modify a style at the top of the page. The directive accepts plain CSS. @see [The Style Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style)                                                                                             | `string`                     |
| `@app-style-bottom` <br><br> Use [`BBjWebManager::injectStyle`](https://documentation.basis.cloud/BASISHelp/WebHelp/bui/BBjBuiManager/BBjBuiManager_injectStyle.htm) instead                     | Attach or modify a style at the bottom of the page. The directive accepts plain CSS.                                                                                                                                                                                    | `string`                     |
| `@app-components` <br><br> Use the STBL `!COMPONENTS` instead                                                                                                                                    | Configures the UI components' URL. This directive **must** be set directly after creating the BBj Window                                                                                                                                                                | `string`                     |

## How To Use

```bbj
sysgui = unt
open (sysgui)"X0"
sysgui! = bbjapi().getSysGui()
window! = sysgui!.addWindow(25,25,200,225,"Attributes Directives",$00090003$)
window!.setCallback(window!.ON_CLOSE,"eoj")

window!.setAttribute("@app-attr", "lang=en-US")
window!.setAttribute("@app-meta","name=viewport content=width=device-width,initial-scale=1,user-scalable=no,minimal-ui")
window!.setAttribute("@app-link", "href=https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css rel=stylesheet integrity=sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We crossorigin=anonymous")
window!.setAttribute("@app-script", "src=https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js integrity=sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj crossorigin=anonymous")
window!.setAttribute("@app-style", "html[data-app-theme=""my-theme-name""]{ --bbj-color-primary-h: 255}")

appAttr! = window!.addButton(101,25,25,150,25,"@app-attr",$$)
appAttr!.setToolTipText("Get all app attributes as JSON")
appAttr!.setCallback(appAttr!.ON_BUTTON_PUSH,"getAttribute")

meta! = window!.addButton(102,25,60,150,25,"@app-meta",$$)
meta!.setToolTipText("Get all app metas as JSON")
meta!.setCallback(meta!.ON_BUTTON_PUSH,"getAttribute")

link! = window!.addButton(103,25,95,150,25,"@app-link",$$)
link!.setToolTipText("Get all app links as JSON")
link!.setCallback(link!.ON_BUTTON_PUSH,"getAttribute")

script! = window!.addButton(104,25,130,150,25,"@app-script",$$)
script!.setToolTipText("Get all app scripts as JSON")
script!.setCallback(script!.ON_BUTTON_PUSH,"getAttribute")

style! = window!.addButton(105,25,165,150,25,"@app-style",$$)
style!.setToolTipText("Get the style as plain text")
style!.setCallback(style!.ON_BUTTON_PUSH,"getAttribute")

process_events

eoj:
release

getAttribute:
  attr$ = sysgui!.getLastEvent().getControl().getText()
  x = msgbox(window!.getAttribute(attr$),0,attr$)
return
```
