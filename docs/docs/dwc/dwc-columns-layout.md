# dwc-columns-layout
![Documentation Type](https://img.shields.io/badge/Documentation-dwc-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--columns--layout-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `dwc-columns-layout` component provides a flexible layout with dynamic columns based on the width of the layout.
It adjusts the number of columns automatically according to the specified breakpoints.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.

!> **Tip:** From BBj you can set and get the attributes using the [BBjControl::setAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setAttribute.htm)
and [BBjControl::getAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getAttribute.htm) methods respectively.
And to set properties you can use the [BBjControl::setProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setProperty.htm) and [BBjControl::getProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getProperty.htm) methods respectively.
<div style="overflow-x: auto;">

| Name            | Attribute | Description                                                          | Reflects | Type                             | Default                                                                                                                                                                                    |
| --------------- | --------- | -------------------------------------------------------------------- | :------: | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ``breakpoints`` |           | Breakpoints for the number of columns depending on the layout width. | &#x2718; | ``DwcColumnsLayoutBreakpoint[]`` | ``[&nbsp;    { minWidth: 0, columns: 1, name: 'default' },&nbsp;    { minWidth: '20em', columns: 1, name: 'small' },&nbsp;    { minWidth: '40em', columns: 2, name: 'medium' },&nbsp;  ]`` |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part        | Description                         |
| ----------- | ----------------------------------- |
| ``control`` | The base wrapper for the component. |


</div>

## CSS Properties


CSS Properties are DWC-defined variables in CSS, denoted by `--`, followed by a name.
They enable dynamic styling, reusability, and easy customization of components.
With CSS Properties, you can change the look and feel of a component simply by changing the value of a variable.
[[Read more]](theme-engine/css-variables).
<div style="overflow-x: auto;">

| Name                                          | Description                                |
| --------------------------------------------- | ------------------------------------------ |
| ``--dwc-columns-layout-horizontal-alignment`` | The horizontal alignment of the columns    |
| ``--dwc-columns-layout-horizontal-spacing``   | The horizontal spacing between the columns |
| ``--dwc-columns-layout-vertical-alignment``   | The vertical alignment of the columns      |
| ``--dwc-columns-layout-vertical-spacing``     | The vertical spacing between the columns   |


</div>

----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
