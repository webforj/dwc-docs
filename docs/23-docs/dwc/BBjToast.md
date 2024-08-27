# BBjToast
![Documentation Type](https://img.shields.io/badge/Documentation-dwc-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-bbj--toast-%23006aff) <a href="https://bbj-plugins.github.io/BBjToast/#/" title="The BBj Widget Name">
      <img src="https://img.shields.io/badge/Widget-BBjToast &#8599;-%23006aff" alt="BBj v20.11" />
    </a> ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

A Toast is a subtle notification commonly used in modern applications.
It can be used to provide feedback about an operation or to display a system message.

A toast can contain buttons by adding `a` and `button` elements to the message's body. If
any of these elements has the `data-action="close"` attribute then it will behave as a dismiss button.

```html
<bbj-toast message="The application has new update available" opened>
  <button>Update</button>
  <button data-action="close">Later</button>
</bbj-toast>
```


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.

!> **Tip:** From BBj you can set and get the attributes using the [BBjControl::setAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setAttribute.htm)
and [BBjControl::getAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getAttribute.htm) methods respectively.
And to set properties you can use the [BBjControl::setProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setProperty.htm) and [BBjControl::getProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getProperty.htm) methods respectively.
<div style="overflow-x: auto;">

| Name          | Attribute     | Description                                                                                                                                                                                                     | Reflects | Type                                                                                              | Default       |
| ------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: | ------------------------------------------------------------------------------------------------- | ------------- |
| ``duration``  | ``duration``  | The duration in milliseconds to show the toast.&nbsp;After that this time is elapsed , the toast will be hidden automatically.&nbsp;If the duration number is negative the toast will never close automatically | &#x2718; | ``number``                                                                                        | ``3000``      |
| ``message``   | ``message``   | The toast's message.                                                                                                                                                                                            | &#x2718; | ``string``                                                                                        | ``''``        |
| ``opened``    | ``opened``    | When true, the toast will be shown , hidden otherwise                                                                                                                                                           | &#x2714; | ``boolean``                                                                                       | ``false``     |
| ``placement`` | ``placement`` | The placement of the toast                                                                                                                                                                                      | &#x2714; | ``"bottom" \| "bottom-left" \| "bottom-right" \| "center" \| "top" \| "top-left" \| "top-right"`` | ``'bottom'``  |
| ``theme``     | ``theme``     | The theme name                                                                                                                                                                                                  | &#x2714; | ``"danger" \| "default" \| "gray" \| "info" \| "primary" \| "success" \| "warning"``              | ``'default'`` |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part        | Description                  |
| ----------- | ---------------------------- |
| ``buttons`` | The button's container       |
| ``control`` | The component's base wrapper |
| ``message`` | The message's container      |


</div>

## Hosted Classes


Hosted Classes are CSS classes that are applied to the host element of a component. They are useful for styling the host element from outside the component's own CSS.
They can either reflect the component's state, such as "disabled" or "active," or provide options to alter the component's style based on user interaction or other conditions.
<div style="overflow-x: auto;">

| CSS Class      | Description                      |
| -------------- | -------------------------------- |
| ``bbj-opened`` | Applied when the toast is opened |


</div>

## CSS Properties


CSS Properties are DWC-defined variables in CSS, denoted by `--`, followed by a name.
They enable dynamic styling, reusability, and easy customization of components.
With CSS Properties, you can change the look and feel of a component simply by changing the value of a variable.
[[Read more]](theme-engine/css-variables).
<div style="overflow-x: auto;">

| Name                               | Description                  |
| ---------------------------------- | ---------------------------- |
| ``--bbj-toast-background``         | The toast background         |
| ``--bbj-toast-border-color``       | The toast border-color       |
| ``--bbj-toast-border-radius``      | The toast border-radius      |
| ``--bbj-toast-border-style``       | The toast border-style       |
| ``--bbj-toast-border-width``       | The toast border-width       |
| ``--bbj-toast-button-color``       | The toast button colors      |
| ``--bbj-toast-button-font-weight`` | The toast button font-weight |
| ``--bbj-toast-color``              | The toast color              |
| ``--bbj-toast-maxWidth``           | The toast max width          |
| ``--bbj-toast-minWidth``           | The toast min width          |
| ``--bbj-toast-shadow``             | The toast box shadow         |
| ``--bbj-toast-width``              | The toast width              |


</div>

## Components Dependencies

- [bbj-toast-group](web-components/bbj-toast-group.md)


----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
