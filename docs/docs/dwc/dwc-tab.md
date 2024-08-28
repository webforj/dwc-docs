# dwc-tab
![Documentation Type](https://img.shields.io/badge/Documentation-dwc-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--tab-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `<dwc-tab>` provides methods for manipulating a UI tab.


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
| ``active``         | ``active``          | Put the tab in an active state.                                                                                                         | &#x2714; | ``boolean``                                                             | ``false``     |
| ``closable``       | ``closable``        | When true, shows the close button.                                                                                                      | &#x2714; | ``boolean``                                                             | ``false``     |
| ``disabled``       | ``disabled``        | True to disable the tab, false to enable it.                                                                                            | &#x2714; | ``boolean``                                                             | ``false``     |
| ``expanse``        | ``expanse``         | The component's expanse                                                                                                                 | &#x2714; | ``"l" \| "m" \| "s" \| "xl" \| "xs"``                                   | ``'m'``       |
| ``hasFocus``       | ``has-focus``       | When true, the tab is focused, false otherwise.                                                                                         | &#x2714; | ``boolean``                                                             | ``false``     |
| ``label``          | ``label``           | The tab's label                                                                                                                         | &#x2718; | ``string``                                                              | ``''``        |
| ``panel``          | ``panel``           | Associate's the tab with the given panel name.                                                                                          | &#x2714; | ``string``                                                              | ``''``        |
| ``tabTraversable`` | ``tab-traversable`` | Indicates that the element can be focused. A negative value means that the element is not reachable via sequential keyboard navigation. | &#x2718; | ``number``                                                              | ``0``         |
| ``theme``          | ``theme``           | The theme name                                                                                                                          | &#x2714; | ``"danger" \| "default" \| "gray" \| "info" \| "success" \| "warning"`` | ``'default'`` |


</div>

## Slots

<div style="overflow-x: auto;">

| Slot       | Description       |
| ---------- | ----------------- |
|            | The tab's label.  |
| ``prefix`` | The tab's prefix. |
| ``suffix`` | The tab's suffix. |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part                  | Description                    |
| --------------------- | ------------------------------ |
| ``close-button``      | The tab's close button wrapper |
| ``close-button-icon`` | The tab's close button icon    |
| ``control``           | The component's base wrapper   |
| ``label``             | The tab's label                |
| ``prefix``            | The tab's prefix               |
| ``suffix``            | The tab's suffix               |
| ``tab-wrapper``       | A wrapper for the tab content  |


</div>

## Hosted Classes


Hosted Classes are CSS classes that are applied to the host element of a component. They are useful for styling the host element from outside the component's own CSS.
They can either reflect the component's state, such as "disabled" or "active," or provide options to alter the component's style based on user interaction or other conditions.
<div style="overflow-x: auto;">

| CSS Class        | Description                                        |
| ---------------- | -------------------------------------------------- |
| ``bbj-disabled`` | Applied when the component is disabled             |
| ``bbj-focused``  | Applied when the component is focused              |
| ``bbj-active``   | Applied when the button is toggleable and selected |


</div>

## CSS Properties


CSS Properties are DWC-defined variables in CSS, denoted by `--`, followed by a name.
They enable dynamic styling, reusability, and easy customization of components.
With CSS Properties, you can change the look and feel of a component simply by changing the value of a variable.
[[Read more]](theme-engine/css-variables).
<div style="overflow-x: auto;">

| Name                                  | Description                                 |
| ------------------------------------- | ------------------------------------------- |
| ``--dwc-tab-active-background``       | The tab's background when active (selected) |
| ``--dwc-tab-active-color``            | The tab's color when active (selected)      |
| ``--dwc-tab-background``              | The tab's background                        |
| ``--dwc-tab-close-button-color``      | The tab's close button color                |
| ``--dwc-tab-close-button-order``      | close button flex order                     |
| ``--dwc-tab-close-button-padding``    | The padding of the close button             |
| ``--dwc-tab-color``                   | The tab's color                             |
| ``--dwc-tab-font-weight``             | The tab's font-weight                       |
| ``--dwc-tab-height``                  | The tab's height                            |
| ``--dwc-tab-hover-background``        | The tab's background when hovered           |
| ``--dwc-tab-hover-color``             | The tab's color when hovered                |
| ``--dwc-tab-wrapper-justify-content`` | tab-wrapper flex justify-content            |
| ``--dwc-tab-wrapper-order``           | tab-wrapper flex order                      |


</div>

## Components Dependencies

- [dwc-icon-button](web-components/dwc-icon-button.md)


----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
