# dwc-toolbar
![Documentation Type](https://img.shields.io/badge/Documentation-dwc-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--toolbar-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `dwc-toolbar` provides a flexible container for grouping and aligning
elements and components in a toolbar layout.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.

!> **Tip:** From BBj you can set and get the attributes using the [BBjControl::setAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setAttribute.htm)
and [BBjControl::getAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getAttribute.htm) methods respectively.
And to set properties you can use the [BBjControl::setProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setProperty.htm) and [BBjControl::getProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getProperty.htm) methods respectively.
<div style="overflow-x: auto;">

| Name        | Attribute   | Description                                                | Reflects | Type                                                                                 | Default       |
| ----------- | ----------- | ---------------------------------------------------------- | :------: | ------------------------------------------------------------------------------------ | ------------- |
| ``compact`` | ``compact`` | If ``true``, the toolbar will be rendered without padding. | &#x2714; | ``boolean``                                                                          | ``false``     |
| ``theme``   | ``theme``   | The theme name.                                            | &#x2714; | ``"danger" \| "default" \| "gray" \| "info" \| "primary" \| "success" \| "warning"`` | ``'default'`` |


</div>

## Slots

<div style="overflow-x: auto;">

| Slot      | Description       |
| --------- | ----------------- |
|           | The default slot. |
| ``end``   | The end slot.     |
| ``start`` | The start slot.   |
| ``title`` | The title slot.   |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part        | Description                   |
| ----------- | ----------------------------- |
| ``content`` | The default slot container.   |
| ``control`` | The container of the toolbar. |
| ``end``     | The end slot container.       |
| ``start``   | The start slot container.     |
| ``title``   | The title slot container.     |


</div>

----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
