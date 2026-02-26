# dwc-badge
![Documentation Type](https://img.shields.io/badge/Documentation-dwc-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--badge-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `dwc-badge` component displays a small label or indicator.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.

!> **Tip:** From BBj you can set and get the attributes using the [BBjControl::setAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setAttribute.htm)
and [BBjControl::getAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getAttribute.htm) methods respectively.
And to set properties you can use the [BBjControl::setProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setProperty.htm) and [BBjControl::getProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getProperty.htm) methods respectively.
<div style="overflow-x: auto;">

| Name         | Attribute    | Description                                         | Reflects | Type                                                                                                                                                                                                                                    | Default       |
| ------------ | ------------ | --------------------------------------------------- | :------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| ``animated`` | ``animated`` | When true, a subtle attention animation is applied. | &#x2714; | ``boolean``                                                                                                                                                                                                                             | ``false``     |
| ``expanse``  | ``expanse``  | The component's expanse.                            | &#x2714; | ``"2xl" \| "2xs" \| "3xl" \| "3xs" \| "l" \| "m" \| "s" \| "xl" \| "xs"``                                                                                                                                                               | ``'s'``       |
| ``theme``    | ``theme``    | The DWC theme.                                      | &#x2714; | ``"danger" \| "default" \| "gray" \| "info" \| "outlined-danger" \| "outlined-default" \| "outlined-gray" \| "outlined-info" \| "outlined-primary" \| "outlined-success" \| "outlined-warning" \| "primary" \| "success" \| "warning"`` | ``'default'`` |
| ``variant``  | ``variant``  | The visual variant.                                 | &#x2714; | ``"filled" \| "subtle"``                                                                                                                                                                                                                | ``'subtle'``  |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part        | Description        |
| ----------- | ------------------ |
| ``control`` | The badge element. |


</div>

## CSS Properties


CSS Properties are DWC-defined variables in CSS, denoted by `--`, followed by a name.
They enable dynamic styling, reusability, and easy customization of components.
With CSS Properties, you can change the look and feel of a component simply by changing the value of a variable.
[[Read more]](theme-engine/css-variables).
<div style="overflow-x: auto;">

| Name                          | Description                |
| ----------------------------- | -------------------------- |
| ``--dwc-badge-background``    | The badge's background.    |
| ``--dwc-badge-border-color``  | The badge's border color.  |
| ``--dwc-badge-border-radius`` | The badge's border radius. |
| ``--dwc-badge-color``         | The badge's text color.    |
| ``--dwc-badge-font-size``     | The badge's font size.     |
| ``--dwc-badge-font-weight``   | The badge's font weight.   |
| ``--dwc-badge-padding``       | The badge's padding.       |


</div>

----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2026.*
