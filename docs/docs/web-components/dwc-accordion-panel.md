# dwc-accordion-panel
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--accordion--panel-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `<dwc-accordion-panel>` provides a collapsible/expandable content panel with a clickable header.
It can be used standalone or inside a `<dwc-accordion>` group for coordinated behavior.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<div style="overflow-x: auto;">

| Name               | Attribute           | Description                                                                                                                             | Reflects | Type        | Default   |
| ------------------ | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | :------: | ----------- | --------- |
| ``disabled``       | ``disabled``        | When true, the component cannot be interacted with.                                                                                     | &#x2714; | ``boolean`` | ``false`` |
| ``label``          | ``label``           | Text label rendered in the header (alternative to slotting header content).                                                             | &#x2718; | ``string``  | ``''``    |
| ``opened``         | ``opened``          | Whether the panel body is visible.                                                                                                      | &#x2714; | ``boolean`` | ``false`` |
| ``tabTraversable`` | ``tab-traversable`` | Indicates that the element can be focused. A negative value means that the element is not reachable via sequential keyboard navigation. | &#x2718; | ``number``  | ``0``     |


</div>

## Events

<div style="overflow-x: auto;">

| Event                           | Description                             | Type        |
| ------------------------------- | --------------------------------------- | ----------- |
| ``dwc-accordion-panel-closed``  | Fired after the panel has fully closed. | ``void``    |
| ``dwc-accordion-panel-opened``  | Fired after the panel has fully opened. | ``void``    |
| ``dwc-accordion-panel-toggled`` | Fired before state changes.             | ``boolean`` |


</div>

## Slots

<div style="overflow-x: auto;">

| Slot       | Description                                                    |
| ---------- | -------------------------------------------------------------- |
|            | The panel body content.                                        |
| ``header`` | Custom header content (replaces ``label`` text when provided). |
| ``icon``   | Custom expand/collapse icon (replaces default chevron).        |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part               | Description                                              |
| ------------------ | -------------------------------------------------------- |
| ``body``           | The collapsible body wrapper (handles height animation). |
| ``content``        | The inner content wrapper inside body.                   |
| ``control``        | The outer wrapper.                                       |
| ``header``         | The clickable header area (button element).              |
| ``header-content`` | The header text/slot container.                          |
| ``icon``           | The expand/collapse icon container.                      |


</div>

## CSS Properties


CSS Properties are DWC-defined variables in CSS, denoted by `--`, followed by a name.
They enable dynamic styling, reusability, and easy customization of components.
With CSS Properties, you can change the look and feel of a component simply by changing the value of a variable.
[[Read more]](theme-engine/css-variables).
<div style="overflow-x: auto;">

| Name                                | Description                                |
| ----------------------------------- | ------------------------------------------ |
| ``--dwc-accordion-background``      | The background of the whole panel.         |
| ``--dwc-accordion-body-background`` | The background of the body content.        |
| ``--dwc-accordion-body-padding``    | The padding of the body content.           |
| ``--dwc-accordion-border-color``    | The border color of the panel.             |
| ``--dwc-accordion-border-radius``   | The border radius of the panel.            |
| ``--dwc-accordion-border-width``    | The border width of the panel.             |
| ``--dwc-accordion-focus-ring``      | The focus ring for the panel header.       |
| ``--dwc-accordion-header-color``    | The text color of the header.              |
| ``--dwc-accordion-header-padding``  | The padding of the header.                 |
| ``--dwc-accordion-transition``      | The height transition timing for the body. |


</div>

## Components Dependencies

- [dwc-icon](web-components/dwc-icon.md)


----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2026.*
