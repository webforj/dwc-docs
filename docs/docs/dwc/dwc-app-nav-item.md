# dwc-app-nav-item
![Documentation Type](https://img.shields.io/badge/Documentation-dwc-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--app--nav--item-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

A menu item for the application navigator AppNav.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.

!> **Tip:** From BBj you can set and get the attributes using the [BBjControl::setAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setAttribute.htm)
and [BBjControl::getAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getAttribute.htm) methods respectively.
And to set properties you can use the [BBjControl::setProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setProperty.htm) and [BBjControl::getProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getProperty.htm) methods respectively.
<div style="overflow-x: auto;">

| Name             | Attribute         | Description                                                                                                                                          | Reflects | Type        | Default   |
| ---------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | :------: | ----------- | --------- |
| ``disabled``     | ``disabled``      | Whether the item is disabled or not                                                                                                                  | &#x2718; | ``boolean`` | ``false`` |
| ``hasItems``     | ``has-items``     | <img style="vertical-align: middle; margin-right: 5px;" src="https://img.shields.io/badge/readonly-%23006aff" />Whether the item has children or not | &#x2714; | ``boolean`` | ``false`` |
| ``opened``       | ``opened``        | Whether the item is opened or not                                                                                                                    | &#x2714; | ``boolean`` | ``false`` |
| ``path``         | ``path``          | The path of the item                                                                                                                                 | &#x2718; | ``string``  |           |
| ``routerIgnore`` | ``router-ignore`` | Whether the item represents a router link or not                                                                                                     | &#x2718; | ``boolean`` | ``false`` |
| ``selected``     | ``selected``      | Whether the item is selected or not                                                                                                                  | &#x2714; | ``boolean`` |           |
| ``target``       | ``target``        | The target of the item                                                                                                                               | &#x2718; | ``string``  |           |


</div>

## Slots

<div style="overflow-x: auto;">

| Slot       | Description                                      |
| ---------- | ------------------------------------------------ |
|            | The default slot where the nav items are placed. |
| ``items``  | The slot for the items.                          |
| ``prefix`` | The slot for the prefix content.                 |
| ``suffix`` | The slot for the suffix content.                 |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part             | Description            |
| ---------------- | ---------------------- |
| ``chevron``      | The chevron part.      |
| ``control``      | The control part.      |
| ``items``        | The items part.        |
| ``link``         | The link part.         |
| ``link-wrapper`` | The link wrapper part. |
| ``suffix``       | The suffix part.       |


</div>

## Components Dependencies

- [dwc-icon](web-components/dwc-icon.md)


----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
