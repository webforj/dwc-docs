# BBjSplitter
![Documentation Type](https://img.shields.io/badge/Documentation-dwc-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--splitter-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `BBjSplitter<dwc-splitter>` encapsulates two resizable components separated by a divider that
enables the user to dynamically resize them.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.

!> **Tip:** From BBj you can set and get the attributes using the [BBjControl::setAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setAttribute.htm)
and [BBjControl::getAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getAttribute.htm) methods respectively.
And to set properties you can use the [BBjControl::setProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setProperty.htm) and [BBjControl::getProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getProperty.htm) methods respectively.
<div style="overflow-x: auto;">

| Name                 | Attribute             | Description                                                                                                                                                                                | Reflects | Type                                                                                 | Default          |
| -------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------: | ------------------------------------------------------------------------------------ | ---------------- |
| ``autosave``         | ``autosave``          | When true, the size of the panels will be saved in local storage and restored on reload.&nbsp;In order for auto save to work, the component must have an id attribute or a name attribute. | &#x2718; | ``boolean``                                                                          | ``false``        |
| ``detailMaxSize``    | ``detail-max-size``   | The maximum width of the detail panel when orientation is horizontal and the maximum height when vertical.                                                                                 | &#x2718; | ``string``                                                                           |                  |
| ``detailMinSize``    | ``detail-min-size``   | The minimum width of the detail panel when orientation is horizontal and the minimum height when vertical.                                                                                 | &#x2718; | ``string``                                                                           |                  |
| ``disabled``         | ``disabled``          | True to disable the resizing, false to enable it.                                                                                                                                          | &#x2714; | ``boolean``                                                                          | ``false``        |
| ``masterMaxSize``    | ``master-max-size``   | The maximum width of the master panel when orientation is horizontal and the maximum height when vertical.                                                                                 | &#x2718; | ``string``                                                                           |                  |
| ``masterMinSize``    | ``master-min-size``   | The minimum width of the master panel when orientation is horizontal and the minimum height when vertical.                                                                                 | &#x2718; | ``string``                                                                           |                  |
| ``orientation``      | ``orientation``       | The layout's orientation.                                                                                                                                                                  | &#x2714; | ``"horizontal" \| "vertical"``                                                       | ``'horizontal'`` |
| ``position``         | ``position``          | The current position of the gutter from the primary panel's edge in pixels.                                                                                                                | &#x2718; | ``number``                                                                           |                  |
| ``positionRelative`` | ``position-relative`` | The current position of the gutter from the primary panel's edge as a percentage 0-100.                                                                                                    | &#x2718; | ``number``                                                                           | ``50``           |
| ``resizing``         | ``resizing``          | <img style="vertical-align: middle; margin-right: 5px;" src="https://img.shields.io/badge/readonly-%23006aff" />True if the user is currently dragging the gutter.                         | &#x2714; | ``boolean``                                                                          | ``false``        |
| ``tabTraversable``   | ``tab-traversable``   | Indicates that the element can be focused. A negative value means that the element is not reachable via sequential keyboard navigation.                                                    | &#x2718; | ``number``                                                                           | ``0``            |
| ``theme``            | ``theme``             | The gutter's theme                                                                                                                                                                         | &#x2714; | ``"danger" \| "default" \| "gray" \| "info" \| "primary" \| "success" \| "warning"`` | ``'default'``    |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part              | Description                |
| ----------------- | -------------------------- |
| ``gutter``        | The gutter element.        |
| ``gutter-handle`` | The gutter handle element. |


</div>

## Hosted Classes


Hosted Classes are CSS classes that are applied to the host element of a component. They are useful for styling the host element from outside the component's own CSS.
They can either reflect the component's state, such as "disabled" or "active," or provide options to alter the component's style based on user interaction or other conditions.
<div style="overflow-x: auto;">

| CSS Class           | Description                                                     |
| ------------------- | --------------------------------------------------------------- |
| ``BBjControl``      | Always applied                                                  |
| ``BBjSplitter``     | Always applied                                                  |
| ``bbj-disabled``    | Applied when the component is disabled                          |
| ``bbj-no-overflow`` | Can be added manually to restrict the panels overflow behaviour |


</div>

## CSS Properties


CSS Properties are DWC-defined variables in CSS, denoted by `--`, followed by a name.
They enable dynamic styling, reusability, and easy customization of components.
With CSS Properties, you can change the look and feel of a component simply by changing the value of a variable.
[[Read more]](theme-engine/css-variables).
<div style="overflow-x: auto;">

| Name                                              | Description                                                                                                                                            |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ``--dwc-splitter-gutter-handle-border``           | The border of the gutter handle.                                                                                                                       |
| ``--dwc-splitter-gutter-handle-border-color``     | The border color of the gutter handle.                                                                                                                 |
| ``--dwc-splitter-gutter-handle-border-radius``    | The border radius of the gutter handle.                                                                                                                |
| ``--dwc-splitter-gutter-handle-color``            | The color of the gutter handle.                                                                                                                        |
| ``--dwc-splitter-gutter-handle-height``           | The height of the gutter handle if orientation is horizontal. The width of the gutter handle if orientation is vertical.                               |
| ``--dwc-splitter-gutter-handle-hover-background`` | The background of the gutter handle when hovered.                                                                                                      |
| ``--dwc-splitter-gutter-handle-hover-color``      | The color of the gutter handle when hovered. @pro --dwc-splitter-gutter-handle-focus-border-color: The border color of the gutter handle when focused. |
| ``--dwc-splitter-gutter-handle-width``            | The width of the gutter handle if orientation is horizontal. The height of the gutter handle if orientation is vertical.                               |
| ``--dwc-splitter-gutter-size``                    | The size of the gutter between the two panes.                                                                                                          |


</div>

## Components Dependencies

- [dwc-icon](web-components/dwc-icon.md)


## Messages

Messages are the BBj instructions that are sent to the browser form the server to create and configure the BBj control.<!-- tabs:start -->

#### **Async create component**

| Message              | Description          | Returns  |
| -------------------- | -------------------- | -------- |
| BuildSplitterMessage | Build a BBjSplitter. | ``Void`` |


#### **Async component message**

| Message                  | Description                                                   | Returns  |
| ------------------------ | ------------------------------------------------------------- | -------- |
| SetFirstComponentMessage | Implements BBjSplitter::setFirstComponent.                    | ``Void`` |
| SetIntegerValueMessage   | Implements BBjColorChooser::setColor and BBjSlider::setValue. | ``Void`` |


#### **Synchronous component message**

| Message                | Description                                                   | Returns     |
| ---------------------- | ------------------------------------------------------------- | ----------- |
| GetIntegerValueMessage | Implements BBjColorChooser::getColor and BBjSlider::getValue. | ``Integer`` |


#### **Async event callback message**

| Message                           | Description                                          | Returns  |
| --------------------------------- | ---------------------------------------------------- | -------- |
| ControlScrollEventCallbackMessage | Implements event callback for BBjControlScrollEvent. | ``Void`` |


<!-- tabs:end -->



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
