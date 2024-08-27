# Attributes

Attributes are additional values that configure the BBj controls, or adjust their behavior in various ways to meet the user's desired criteria.

?> **Note:** Each BBjControl defines a list of supported attributes which can be set to customize the control behavior.
You can find these variables listed under the `Attributes` section of the control documentation.

## Setting Attributes

To set an attribute on a BBjControl, you can use [BBjControl::setAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setAttribute.htm).

For instance, the `BBjButton` control supports the `theme` and `autofocus` attributes.

| **Attribute** | **Description**                                        |
| ------------- | ------------------------------------------------------ |
| `autofocus`   | Automatically focus the button when the page is loaded |
| `theme`       | Sets the component's theme name                        |

```BBj
window! = BBjAPI().openSysGui("X0").addWindow(25,25,150,50,"BBjButton",$00090003$)
window!.setCallback(window!.ON_CLOSE,"eoj")

button! = window!.addButton(1,10,10,130,30,"Button",$$)
button!.setAttribute("theme","danger")
button!.setAttribute("autofocus","true")

process_events

eoj:
release
```

<div style="text-align: center">
  <img  src="_media/attributes/setAttribute.png" alt="Setting BBj Attributes">
</div>

## Getting Attributes

To Get an attribute from the BBjControl, you can use [BBjControl::getAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getAttribute.htm).

```BBj
window! = BBjAPI().openSysGui("X0").addWindow(25,25,150,50,"BBjButton",$00090003$)
window!.setCallback(window!.ON_CLOSE,"eoj")

button! = window!.addButton(1,10,10,130,30,"Button",$$)
button!.setCallback(button!.ON_BUTTON_PUSH,"event")

process_events

event:
    event! = BBjAPI().getLastEvent()
    button! = event!.getButton()
    i = msgbox(button!.getAttribute("theme"),0,"The Theme Name")
return

eoj:
release
```

<div style="text-align: center">
  <img  src="_media/attributes/getAttribute.png" alt="Getting BBj Attributes">
</div>
