# dwc-popover
![Documentation Type](https://img.shields.io/badge/Documentation-dwc-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--popover-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-scoped-%23006aff)

The `<dwc-popover>` provides methods for manipulating a UI popover panel that shows on a content screen
when a user clicks on a control or within a defined area.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.

!> **Tip:** From BBj you can set and get the attributes using the [BBjControl::setAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setAttribute.htm)
and [BBjControl::getAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getAttribute.htm) methods respectively.
And to set properties you can use the [BBjControl::setProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setProperty.htm) and [BBjControl::getProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getProperty.htm) methods respectively.
<div style="overflow-x: auto;">

| Name              | Attribute           | Description                                                                                       | Reflects | Type                                                                                                                                                                   | Default          |
| ----------------- | ------------------- | ------------------------------------------------------------------------------------------------- | :------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| ``arrow``         | ``arrow``           | When true the popover arrow will be shown, hidden otherwise.                                      | &#x2714; | ``boolean``                                                                                                                                                            | ``true``         |
| ``disabled``      | ``disabled``        | Specifies that the control should be disabled.                                                    | &#x2714; | ``boolean``                                                                                                                                                            | ``false``        |
| ``distance``      | ``distance``        | The distance in pixels from which to offset the popover away from its trigger.                    | &#x2718; | ``number``                                                                                                                                                             | ``2``            |
| ``openHeight``    | ``open-height``     | Sets the popover max-height                                                                       | &#x2718; | ``string``                                                                                                                                                             | ``''``           |
| ``openWidth``     | ``open-width``      | Sets the popover width                                                                            | &#x2718; | ``string``                                                                                                                                                             | ``''``           |
| ``opened``        | ``opened``          | When true then the popover is opened, closed otherwise.                                           | &#x2714; | ``boolean``                                                                                                                                                            | ``false``        |
| ``placement``     | ``placement``       | Describes the preferred placement of the popover                                                  | &#x2718; | ``"bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"`` | ``'bottom-end'`` |
| ``skidding``      | ``skidding``        | The distance in pixels from which to offset the popover along its trigger.                        | &#x2718; | ``number``                                                                                                                                                             | ``0``            |
| ``togglable``     | ``togglable``       | When true, the popover cannot be closed or opened by the user, otherwise only togglable with API. | &#x2718; | ``boolean``                                                                                                                                                            | ``true``         |
| ``toggleOnArrow`` | ``toggle-on-arrow`` | When true, the popover will open when arrows keys are used.                                       | &#x2718; | ``boolean``                                                                                                                                                            | ``true``         |
| ``toggleOnClick`` | ``toggle-on-click`` | When true, the popover will be toggled when the handler is clicked.                               | &#x2718; | ``boolean``                                                                                                                                                            | ``true``         |
| ``toggleOnEnter`` | ``toggle-on-enter`` | When true, the popover will toggled when enter is pressed.                                        | &#x2718; | ``boolean``                                                                                                                                                            | ``true``         |
| ``type``          | ``type``            | Give the popover a custom type attribute.                                                         | &#x2714; | ``string``                                                                                                                                                             |                  |


</div>

## Slots

<div style="overflow-x: auto;">

| Slot        | Description            |
| ----------- | ---------------------- |
|             | The popover's content. |
| ``handler`` | The popover's handler. |


</div>

## CSS Properties


CSS Properties are DWC-defined variables in CSS, denoted by `--`, followed by a name.
They enable dynamic styling, reusability, and easy customization of components.
With CSS Properties, you can change the look and feel of a component simply by changing the value of a variable.
[[Read more]](theme-engine/css-variables).
<div style="overflow-x: auto;">

| Name                             | Description                                        |
| -------------------------------- | -------------------------------------------------- |
| ``--dwc-popover-open-height``    | The height of the popover element when it is open. |
| ``--dwc-popover-open-width``     | The width of the popover element when it is open.  |
| ``--dwc-popup-arrow-background`` | The background color of the popup's arrow element. |
| ``--dwc-popup-arrow-size``       | The size of the popup's arrow element.             |
| ``--dwc-popup-background``       | The background color of the popup element.         |
| ``--dwc-popup-border``           | The border of the popup element.                   |
| ``--dwc-popup-shadow``           | The shadow of the popup element.                   |


</div>

## Dependent Components

- [dwc-color-chooser](web-components/dwc-color-chooser.md)
- [dwc-font-chooser](web-components/dwc-font-chooser.md)


----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
