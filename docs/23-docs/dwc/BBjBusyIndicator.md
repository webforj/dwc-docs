# BBjBusyIndicator
![Documentation Type](https://img.shields.io/badge/Documentation-dwc-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-bbj--busy-%23006aff) <a href="https://documentation.basis.cloud/BASISHelp/WebHelp/bui/BBjBusyIndicator/BBjBusyIndicator.html" title="The BBj Control Name">
      <img src="https://img.shields.io/badge/Control-BBjBusyIndicator &#8599;-%23006aff" alt="BBj v20.11" />
    </a> ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `BBjBusyIndicator<bbj-busy>` provides an interface to manipulate an animated busy indicator with a developer-defined message.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.

!> **Tip:** From BBj you can set and get the attributes using the [BBjControl::setAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setAttribute.htm)
and [BBjControl::getAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getAttribute.htm) methods respectively.
And to set properties you can use the [BBjControl::setProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setProperty.htm) and [BBjControl::getProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getProperty.htm) methods respectively.
<div style="overflow-x: auto;">

| Name                 | Attribute             | Description                                                                                                 | Reflects | Type                                                                                 | Default       |
| -------------------- | --------------------- | ----------------------------------------------------------------------------------------------------------- | :------: | ------------------------------------------------------------------------------------ | ------------- |
| ``message``          | ``message``           | The busy message.                                                                                           | &#x2718; | ``string``                                                                           | ``''``        |
| ``noBackdrop``       | ``no-backdrop``       | When true, the backdrop will be hidden. otherwise, it is visible.                                           | &#x2718; | ``boolean``                                                                          | ``false``     |
| ``opened``           | ``opened``            | When true, the busy indicator is opened; otherwise, it is hidden.                                           | &#x2714; | ``boolean``                                                                          | ``false``     |
| ``spinnerClockwise`` | ``spinner-clockwise`` | When true, the spinner's animation will be played clockwise; otherwise, it will be played counterclockwise. | &#x2714; | ``boolean``                                                                          | ``true``      |
| ``spinnerExpanse``   | ``spinner-expanse``   | The spinner's expanse.                                                                                      | &#x2714; | ``"2xl" \| "2xs" \| "3xl" \| "3xs" \| "l" \| "m" \| "s" \| "xl" \| "xs"``            |               |
| ``spinnerPaused``    | ``spinner-paused``    | When true, the spinner's animation will be paused; otherwise, it will continue to play.                     | &#x2714; | ``boolean``                                                                          | ``false``     |
| ``spinnerSpeed``     | ``spinner-speed``     | The spinner's animation speed in milliseconds.                                                              | &#x2718; | ``number``                                                                           | ``1000``      |
| ``spinnerTheme``     | ``spinner-theme``     | The theme name.                                                                                             | &#x2714; | ``"danger" \| "default" \| "gray" \| "info" \| "primary" \| "success" \| "warning"`` | ``'default'`` |
| ``suppressMessage``  | ``suppress-message``  | When false, the message will be visible; otherwise, it is hidden.                                           | &#x2718; | ``boolean``                                                                          | ``false``     |
| ``suppressSpinner``  | ``suppress-spinner``  | When false, the spinner will be visible; otherwise, it is hidden.                                           | &#x2718; | ``boolean``                                                                          | ``false``     |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part           | Description                  |
| -------------- | ---------------------------- |
| ``backdrop``   | The backdrop element         |
| ``control``    | The component's base wrapper |
| ``focus-trap`` | The focus trap element       |
| ``spinner``    | The spinner element          |


</div>

## CSS Properties


CSS Properties are DWC-defined variables in CSS, denoted by `--`, followed by a name.
They enable dynamic styling, reusability, and easy customization of components.
With CSS Properties, you can change the look and feel of a component simply by changing the value of a variable.
[[Read more]](theme-engine/css-variables).
<div style="overflow-x: auto;">

| Name                      | Description                          |
| ------------------------- | ------------------------------------ |
| ``--bbj-busy-background`` | The background of the busy indicator |
| ``--bbj-busy-border``     | The border of the busy indicator     |


</div>

## Components Dependencies

- [bbj-backdrop](web-components/bbj-backdrop.md)
- [bbj-spinner](web-components/bbj-spinner.md)


## Dependent Components

- [bbj-file-chooser](web-components/bbj-file-chooser.md)


## Messages

Messages are the BBj instructions that are sent to the browser form the server to create and configure the BBj control.<!-- tabs:start -->

#### **Async create component**

| Message                   | Description               | Returns  |
| ------------------------- | ------------------------- | -------- |
| BuildBusyIndicatorMessage | Build a BBjBusyIndicator. | ``Void`` |


#### **Synchronous component message**

| Message          | Description                             | Returns     |
| ---------------- | --------------------------------------- | ----------- |
| IsVisibleMessage | Implements BBjBusyIndicator::isVisible. | ``Boolean`` |


#### **Async component message**

| Message         | Description                   | Returns  |
| --------------- | ----------------------------- | -------- |
| SetFocusMessage | Implements BBjControl::focus. | ``Void`` |


<!-- tabs:end -->



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
