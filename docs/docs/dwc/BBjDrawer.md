# BBjDrawer
![Documentation Type](https://img.shields.io/badge/Documentation-dwc-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--drawer-%23006aff) <a href="https://bbj-plugins.github.io/BBjDrawer/#/" title="The BBj Widget Name">
      <img src="https://img.shields.io/badge/Widget-BBjDrawer &#8599;-%23006aff" alt="BBj v20.11" />
    </a> ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

`<dwc-drawer>` is a container which slides in and out of the viewport to expose or hide additional options and information.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.

!> **Tip:** From BBj you can set and get the attributes using the [BBjControl::setAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setAttribute.htm)
and [BBjControl::getAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getAttribute.htm) methods respectively.
And to set properties you can use the [BBjControl::setProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setProperty.htm) and [BBjControl::getProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getProperty.htm) methods respectively.
<div style="overflow-x: auto;">

| Name              | Attribute          | Description                                                                 | Reflects | Type                                                                          | Default      |
| ----------------- | ------------------ | --------------------------------------------------------------------------- | :------: | ----------------------------------------------------------------------------- | ------------ |
| ``autofocus``     | ``autofocus``      | When true, automatically focuses the first focusable element in the drawer. | &#x2718; | ``boolean``                                                                   | ``false``    |
| ``contained``     | ``contained``      | When true, the drawer won't attempt to lock body scrollbars and trap focus. | &#x2714; | ``boolean``                                                                   | ``false``    |
| ``footerVisible`` | ``footer-visible`` | When true, the drawer will show the footer section.                         | &#x2718; | ``boolean``                                                                   | ``true``     |
| ``headerVisible`` | ``header-visible`` | When true, the drawer will show the header section.                         | &#x2718; | ``boolean``                                                                   | ``true``     |
| ``label``         | ``label``          | The drawer's label. (Used for accessibility)                                | &#x2718; | ``string``                                                                    | ``'Drawer'`` |
| ``opened``        | ``opened``         | Indicates whether or not the drawer is open.                                | &#x2714; | ``boolean``                                                                   | ``false``    |
| ``placement``     | ``placement``      | The drawer position.                                                        | &#x2714; | ``"bottom" \| "bottom-center" \| "left" \| "right" \| "top" \| "top-center"`` | ``'left'``   |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part               | Description                |
| ------------------ | -------------------------- |
| ``backdrop``       | The backdrop element       |
| ``body``           | The body element           |
| ``close-button``   | The close button element   |
| ``control``        | The control element        |
| ``footer``         | The footer element         |
| ``header``         | The header element         |
| ``header-actions`` | The header actions element |
| ``title``          | The title element          |


</div>

## Hosted Classes


Hosted Classes are CSS classes that are applied to the host element of a component. They are useful for styling the host element from outside the component's own CSS.
They can either reflect the component's state, such as "disabled" or "active," or provide options to alter the component's style based on user interaction or other conditions.
<div style="overflow-x: auto;">

| CSS Class      | Description               |
| -------------- | ------------------------- |
| ``bbj-opened`` | When the drawer is opened |


</div>

## CSS Properties


CSS Properties are DWC-defined variables in CSS, denoted by `--`, followed by a name.
They enable dynamic styling, reusability, and easy customization of components.
With CSS Properties, you can change the look and feel of a component simply by changing the value of a variable.
[[Read more]](theme-engine/css-variables).
<div style="overflow-x: auto;">

| Name                           | Description                                                                                                                        |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| ``--dwc-drawer-border``        | The border of the drawer                                                                                                           |
| ``--dwc-drawer-border-radius`` | The border-radius of the drawer when the placement is ``top-center`` or ``bottom-center``                                          |
| ``--dwc-drawer-max-size``      | The max width of the drawer when the placement is ``left`` or ``right`` and max height when the placement is ``top`` or ``bottom`` |
| ``--dwc-drawer-max-width``     | The max width of the drawer when the placement is ``top-center`` or ``bottom-center``                                              |
| ``--dwc-drawer-shadow``        | The shadow of the drawer                                                                                                           |
| ``--dwc-drawer-size``          | The width of the drawer when the placement is ``left`` or ``right`` and height when the placement is ``top`` or ``bottom``         |


</div>

## Components Dependencies

- [dwc-backdrop](web-components/dwc-backdrop.md)
- [dwc-icon-button](web-components/dwc-icon-button.md)


## Dependent Components

- [dwc-app-layout](web-components/dwc-app-layout.md)


----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
