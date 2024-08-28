# dwc-tab-panel
![Documentation Type](https://img.shields.io/badge/Documentation-dwc-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--tab--panel-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `<dwc-tab-panel>` provides methods for manipulating a UI tab panel.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.

!> **Tip:** From BBj you can set and get the attributes using the [BBjControl::setAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setAttribute.htm)
and [BBjControl::getAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getAttribute.htm) methods respectively.
And to set properties you can use the [BBjControl::setProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setProperty.htm) and [BBjControl::getProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getProperty.htm) methods respectively.
<div style="overflow-x: auto;">

| Name               | Attribute           | Description                                                                                                                             | Reflects | Type                                                                    | Default       |
| ------------------ | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | :------: | ----------------------------------------------------------------------- | ------------- |
| ``active``         | ``active``          | When true, the panel is visible, hidden otherwise.                                                                                      | &#x2714; | ``boolean``                                                             | ``false``     |
| ``hasFocus``       | ``has-focus``       | When true, the tab is focused, false otherwise.                                                                                         | &#x2714; | ``boolean``                                                             | ``false``     |
| ``name``           | ``name``            | The panel's name                                                                                                                        | &#x2714; | ``string``                                                              | ``''``        |
| ``tabTraversable`` | ``tab-traversable`` | Indicates that the element can be focused. A negative value means that the element is not reachable via sequential keyboard navigation. | &#x2718; | ``number``                                                              | ``0``         |
| ``theme``          | ``theme``           | The theme name                                                                                                                          | &#x2714; | ``"danger" \| "default" \| "gray" \| "info" \| "success" \| "warning"`` | ``'default'`` |


</div>

## Slots

<div style="overflow-x: auto;">

| Slot  | Description          |
| ----- | -------------------- |
|       | The panel's content. |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part        | Description                   |
| ----------- | ----------------------------- |
| ``control`` | The component's base wrapper. |


</div>

## CSS Properties


CSS Properties are DWC-defined variables in CSS, denoted by `--`, followed by a name.
They enable dynamic styling, reusability, and easy customization of components.
With CSS Properties, you can change the look and feel of a component simply by changing the value of a variable.
[[Read more]](theme-engine/css-variables).
<div style="overflow-x: auto;">

| Name                                   | Description                           |
| -------------------------------------- | ------------------------------------- |
| ``--dwc-tab-panel-border``             | The panel's border                    |
| ``--dwc-tab-panel-focus-border-color`` | The panel's border color when focused |
| ``--dwc-tab-panel-focus-ring``         | the panel's focus ring                |


</div>

----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
