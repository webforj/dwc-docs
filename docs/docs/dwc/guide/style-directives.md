# Style Directives

![DWC-Removed](https://img.shields.io/badge/DWC-Removed-red)

!> **important** Starting from BBj v24.00, the style directives are no longer available. Instead, their equivalent can now be found in BBjWebManager. For more information, please refer to the BBjWebManager documentation at [BBjWebManager documentation](https://documentation.basis.cloud/BASISHelp/WebHelp/bui/BBjBuiManager/bbjbuimanager.htm).

?> **Note** The style directives accept only JSON strings. Plain CSS is not acceptable

## What is a Directive

A Style Directive is a special keyword that means something specific for the `SetStyleMessage` and the `GetStyleMessage` messages. The style messages are executed in response of invoking [BBjControl::setStyle](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setStyle.htm) and [BBjControl::getStyle](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getStyle.htm) respectively.

## Available Directives

| **Directive** | **Description**                                                                                                                                                         |  **Type**   |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | 
| `@root`        | see [CSS :root](https://developer.mozilla.org/en-US/docs/Web/CSS/:root). That's the right directive to use in order to override BASIS default custom properties.        | `JSON string`    |
| `@element`      | A JSON object which describes the component/control style. The directive will scope the style for the given component/control so it won't conflict with other controls. |   `JSON string`  |
| `@global`       | Add global styles (for instance animations, media queries, ...)                                                                                                         |   `JSON string`  |

## How To Use

```bbj
rem /**
rem  * Using JsonObject is optional. You can build your JSON
rem  * in away you prefer.
rem  *
rem  * For instance, you can define your styles in files
rem  *   1. root.json
rem  *   2. global.json
rem  *   3. buttons.json
rem  *   4. inputs.json
rem  *   5. .....
rem  */
use com.google.gson.JsonObject

sysgui = unt
open (sysgui)"X0"
sysgui! = bbjapi().getSysGui()
window! = sysgui!.addWindow(0,0,w,h,"Style Directives",$01101000$)
window!.setCallback(window!.ON_CLOSE,"eoj")

rem /**
rem  * Build root style as JSON Object and attach it using the @root directive.
rem  * This is the correct place to override BASIS default custom properties.
rem  *
rem  * @see https://developer.mozilla.org/en-US/docs/Web/CSS/:root
rem  */
appTheme! = new JsonObject()
appTheme!.addProperty("--bbj-color-primary-h","262")
appTheme!.addProperty("--bbj-color-primary-s","52%")
window!.setStyle("@root", appTheme!.toString())

rem /**
rem  * Build a CSS animation from a JSON string then attach it using the @global directive
rem  *
rem  * Note: CSS keyframes must always be global
rem  */

wiggleAnimation! = "" +
: "{" +
: "   ""@keyframes wiggle "":{" +
: "      ""0%"":{" +
: "         ""transform"":""rotate(0deg);""" +
: "      }," +
: "      ""80%"":{" +
: "         ""transform"":""rotate(0deg);""" +
: "      }," +
: "      ""85%"":{" +
: "         ""transform"":""rotate(5deg);""" +
: "      }," +
: "      ""95%"":{" +
: "         ""transform"":""rotate(-5deg);""" +
: "      }," +
: "      ""100%"":{" +
: "         ""transform"":""rotate(0deg);""" +
: "      }" +
: "   }" +
: "}"
window!.setStyle("@global", wiggleAnimation!)

button! = window!.addButton(1,0,0,0,0,"My Awesome Button",$$)
button!.setCallback(button!.ON_BUTTON_PUSH,"event")
button!.setAttribute("expanse","xl")
button!.setAttribute("theme","primary")

rem /**
rem  * Build the button theme and attach it using the @element directive
rem  *
rem  * The @element directive will make sure that the style is scoped only for this
rem  * control so it won't effect other buttons in the app
rem  */
buttonTheme! = new JsonObject()
buttonTheme!.addProperty("margin","50vh auto 0 !important")
buttonTheme!.addProperty("display","flex")
buttonTheme!.addProperty("justify-content","center")
buttonTheme!.addProperty("align-items","center")
rem Notice how we are using the animation that we previously attached with the @global directive
buttonTheme!.addProperty("animation","wiggle 2s ease infinite")

rem /**
rem  * Target the inner button in bbj-button component
rem  *
rem  * @see https://developer.mozilla.org/en-US/docs/Web/CSS/::part
rem  * @see https://github.com/BasisHub/basis-next/tree/main/src/components/basis-button#shadow-parts
rem  */
innerButtonStyle! = new JsonObject()
innerButtonStyle!.addProperty("cursor","pointer")
innerButtonStyle!.addProperty("padding","50px")
innerButtonStyle!.addProperty("font-size","var(--bbj-font-size-2xl)")
rem Notice the "&" which refers to the current control
buttonTheme!.addProperty("&::part(button)",innerButtonStyle!.toString())

button!.setStyle("@element", buttonTheme!.toString())

process_events

event:
  rem /**
  rem  * After the button is clicked we build a new style object
  rem  * to stop the button animation and attach it with the
  rem  * @element directive.
  rem  *
  rem  * In theory you can just modify the buttonTheme! JsonObject and
  rem  * send it again , but it is not recommenced , send only what it is required
  rem  */
  newStyle! = new JsonObject()
  newStyle!.addProperty("animation","wiggle 2s ease forwards")
  button!.setStyle("@element", newStyle!.toString())

  rem /**
  rem  * The client keeps tracking the updated styles so the getStyle method
  rem  * will return a JSON string for the given directive.
  rem  *
  rem  * It is recommend not to query the client for this information because
  rem  * your programme already knows about it.
  rem  */
  i = msgbox(button!.getStyle("@element"), 0, "@element")
return

eoj:
release
```
