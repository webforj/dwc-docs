# dwc-alert
![Documentation Type](https://img.shields.io/badge/Documentation-dwc-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--alert-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `dwc-alert` provides contextual feedback messages for the user.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.

!> **Tip:** From BBj you can set and get the attributes using the [BBjControl::setAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setAttribute.htm)
and [BBjControl::getAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getAttribute.htm) methods respectively.
And to set properties you can use the [BBjControl::setProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setProperty.htm) and [BBjControl::getProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getProperty.htm) methods respectively.
<div style="overflow-x: auto;">

| Name         | Attribute    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Reflects | Type                                                                                 | Default       |
| ------------ | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: | ------------------------------------------------------------------------------------ | ------------- |
| ``closable`` | ``closable`` | When true, the alert will add a close button to remove the component from the DOM.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | &#x2714; | ``boolean``                                                                          | ``false``     |
| ``expanse``  | ``expanse``  | The component's expanse.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | &#x2714; | ``"l" \| "m" \| "s" \| "xl" \| "xs"``                                                | ``'m'``       |
| ``icon``     | ``icon``     | The icon to use with the message.&nbsp;&nbsp;<ol>&nbsp;<li> <b>URL</b>: (ex: /path/to/image.png)&nbsp;<li> <b>Data URL</b>: (ex: data:image/jpeg;base64,/9j/4SDpRXhpZgAAT....)&nbsp;<li> <b>ICON_NAME</b>: An icon to load from the default Dwc icons pool. (ex: ``x``)&nbsp;<li> <b>POOL_NAME:ICON_NAME</b>: An icon to load from the passed pool. (ex: ``feather:x``)&nbsp;<li> <b>An object</b> which provides all the required properties to build the icon.&nbsp;   for instance:&nbsp;   <ol>&nbsp;     <li> {name: 'x'}&nbsp;     <li> {pool: 'feather', name: 'x'}&nbsp;     <li> {src: 'image/path'}&nbsp;   </ol>&nbsp;</ol> | &#x2718; | ``object \| string``                                                                 | ``''``        |
| ``message``  | ``message``  | The message to display.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | &#x2718; | ``string``                                                                           |               |
| ``opened``   | ``opened``   | When true, the alert will be visible, otherwise it will be hidden.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | &#x2714; | ``boolean``                                                                          | ``true``      |
| ``theme``    | ``theme``    | The theme name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | &#x2714; | ``"danger" \| "default" \| "gray" \| "info" \| "primary" \| "success" \| "warning"`` | ``'default'`` |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part             | Description                  |
| ---------------- | ---------------------------- |
| ``close-button`` | The alert's close button     |
| ``control``      | The component's base wrapper |
| ``icon``         | The alert's icon             |
| ``message``      | The alert's message          |


</div>

## CSS Properties


CSS Properties are DWC-defined variables in CSS, denoted by `--`, followed by a name.
They enable dynamic styling, reusability, and easy customization of components.
With CSS Properties, you can change the look and feel of a component simply by changing the value of a variable.
[[Read more]](theme-engine/css-variables).
<div style="overflow-x: auto;">

| Name                       | Description            |
| -------------------------- | ---------------------- |
| ``--dwc-alert-background`` | The alert's background |
| ``--dwc-alert-border``     | The alert's border     |
| ``--dwc-alert-color``      | The alert's color      |
| ``--dwc-alert-icon-color`` | The alert's icon color |
| ``--dwc-alert-padding``    | The alert's padding    |


</div>

## Components Dependencies

- [dwc-icon](web-components/dwc-icon.md)
- [dwc-icon-button](web-components/dwc-icon-button.md)


## Dependent Components

- [dwc-alert-popover](web-components/dwc-alert-popover.md)
- [dwc-checkbox](web-components/dwc-checkbox.md)
- [dwc-choicebox](web-components/dwc-choicebox.md)
- [dwc-combobox](web-components/dwc-combobox.md)
- [dwc-datefield](web-components/dwc-datefield.md)
- [dwc-field](web-components/dwc-field.md)
- [dwc-listbox](web-components/dwc-listbox.md)
- [dwc-login](web-components/dwc-login.md)
- [dwc-numberfield](web-components/dwc-numberfield.md)
- [dwc-radio](web-components/dwc-radio.md)
- [dwc-textarea](web-components/dwc-textarea.md)
- [dwc-textfield](web-components/dwc-textfield.md)
- [dwc-timefield](web-components/dwc-timefield.md)


----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
