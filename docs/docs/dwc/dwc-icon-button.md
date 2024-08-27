# dwc-icon-button
![Documentation Type](https://img.shields.io/badge/Documentation-dwc-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--icon--button-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `<dwc-icon-button>` provides methods for displaying a UI icon button.

An icon button is an selectable SVG image that represents a capability, or some other concept or
specific entity with meaning for the user.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.

!> **Tip:** From BBj you can set and get the attributes using the [BBjControl::setAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setAttribute.htm)
and [BBjControl::getAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getAttribute.htm) methods respectively.
And to set properties you can use the [BBjControl::setProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setProperty.htm) and [BBjControl::getProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getProperty.htm) methods respectively.
<div style="overflow-x: auto;">

| Name               | Attribute           | Description                                                                                                                             | Reflects | Type                                                                                 | Default       |
| ------------------ | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | :------: | ------------------------------------------------------------------------------------ | ------------- |
| ``disabled``       | ``disabled``        | True to disable the button, false to enable it.                                                                                         | &#x2714; | ``boolean``                                                                          | ``false``     |
| ``expanse``        | ``expanse``         | The button's expanse                                                                                                                    | &#x2714; | ``"2xl" \| "2xs" \| "3xl" \| "l" \| "m" \| "s" \| "xl" \| "xs"``                     | ``'xs'``      |
| ``focusVisible``   | ``focus-visible``   | When true, The button will show the focus ring when it is focused by keyboard.                                                          | &#x2718; | ``boolean``                                                                          | ``false``     |
| ``label``          | ``label``           | The button's label                                                                                                                      | &#x2718; | ``string``                                                                           |               |
| ``name``           | ``name``            | The button's name                                                                                                                       | &#x2714; | ``string``                                                                           |               |
| ``pool``           | ``pool``            | The button's pool name                                                                                                                  | &#x2718; | ``string``                                                                           | ``'tabler'``  |
| ``src``            | ``src``             | The button's src                                                                                                                        | &#x2718; | ``string``                                                                           |               |
| ``tabTraversable`` | ``tab-traversable`` | Indicates that the element can be focused. A negative value means that the element is not reachable via sequential keyboard navigation. | &#x2718; | ``number``                                                                           | ``0``         |
| ``theme``          | ``theme``           | The theme name                                                                                                                          | &#x2714; | ``"danger" \| "default" \| "gray" \| "info" \| "primary" \| "success" \| "warning"`` | ``'default'`` |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part        | Description                  |
| ----------- | ---------------------------- |
| ``control`` | The component's base wrapper |
| ``icon``    | The dwc-icon component       |


</div>

## CSS Properties


CSS Properties are DWC-defined variables in CSS, denoted by `--`, followed by a name.
They enable dynamic styling, reusability, and easy customization of components.
With CSS Properties, you can change the look and feel of a component simply by changing the value of a variable.
[[Read more]](theme-engine/css-variables).
<div style="overflow-x: auto;">

| Name                                       | Description                     |
| ------------------------------------------ | ------------------------------- |
| ``--dwc-icon-button-active-color``         | The button's active color       |
| ``--dwc-icon-button-border-color``         | The button's border color       |
| ``--dwc-icon-button-color``                | The button's color              |
| ``--dwc-icon-button-focus-ring``           | The button's focus ring         |
| ``--dwc-icon-button-focused-border-color`` | The button's focus border color |
| ``--dwc-icon-button-hover-color``          | The button's hover color        |


</div>

## Components Dependencies

- [dwc-icon](web-components/dwc-icon.md)


## Dependent Components

- [dwc-alert](web-components/dwc-alert.md)
- [dwc-color-chooser](web-components/dwc-color-chooser.md)
- [dwc-datefield](web-components/dwc-datefield.md)
- [dwc-drawer](web-components/dwc-drawer.md)
- [dwc-field](web-components/dwc-field.md)
- [dwc-file-chooser](web-components/dwc-file-chooser.md)
- [dwc-menubar](web-components/dwc-menubar.md)
- [dwc-numberfield](web-components/dwc-numberfield.md)
- [dwc-tab](web-components/dwc-tab.md)
- [dwc-tabbed-pane](web-components/dwc-tabbed-pane.md)
- [dwc-textfield](web-components/dwc-textfield.md)
- [dwc-timefield](web-components/dwc-timefield.md)
- [dwc-upload](web-components/dwc-upload.md)


----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
