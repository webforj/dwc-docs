# bbj-alert
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-bbj--alert-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `bbj-alert` provides contextual feedback messages for the user.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<div style="overflow-x: auto;">

| Name         | Attribute    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Reflects | Type                                                                                 | Default       |
| ------------ | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: | ------------------------------------------------------------------------------------ | ------------- |
| ``closable`` | ``closable`` | When true, the alert will add a close button to remove the component from the DOM.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | &#x2714; | ``boolean``                                                                          | ``false``     |
| ``expanse``  | ``expanse``  | The component's expanse.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | &#x2714; | ``"l" \| "m" \| "s" \| "xl" \| "xs"``                                                | ``'m'``       |
| ``icon``     | ``icon``     | The icon to use with the message.&nbsp;&nbsp;<ol>&nbsp;<li> <b>URL</b>: (ex: /path/to/image.png)&nbsp;<li> <b>Data URL</b>: (ex: data:image/jpeg;base64,/9j/4SDpRXhpZgAAT....)&nbsp;<li> <b>ICON_NAME</b>: An icon to load from the default BBj icons pool. (ex: ``x``)&nbsp;<li> <b>POOL_NAME:ICON_NAME</b>: An icon to load from the passed pool. (ex: ``feather:x``)&nbsp;<li> <b>An object</b> which provides all the required properties to build the icon.&nbsp;   for instance:&nbsp;   <ol>&nbsp;     <li> {name: 'x'}&nbsp;     <li> {pool: 'feather', name: 'x'}&nbsp;     <li> {src: 'image/path'}&nbsp;   </ol>&nbsp;</ol> | &#x2718; | ``object \| string``                                                                 | ``''``        |
| ``message``  | ``message``  | The message to display.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | &#x2718; | ``string``                                                                           |               |
| ``opened``   | ``opened``   | When true, the alert will be visible, otherwise it will be hidden.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | &#x2714; | ``boolean``                                                                          | ``true``      |
| ``theme``    | ``theme``    | The theme name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | &#x2714; | ``"danger" \| "default" \| "gray" \| "info" \| "primary" \| "success" \| "warning"`` | ``'default'`` |


</div>

## Events

<div style="overflow-x: auto;">

| Event          | Description                        | Type     |
| -------------- | ---------------------------------- | -------- |
| ``bbj-closed`` | Emitted after the alert is closed. | ``void`` |


</div>

## Slots

<div style="overflow-x: auto;">

| Slot  | Description                                                                 |
| ----- | --------------------------------------------------------------------------- |
|       | The alert's message. When the slot is provided, the icon wont be displayed. |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part             | Description                  |
| ---------------- | ---------------------------- |
| ``close-button`` | The alert's close button     |
| ``control``      | The component's base wrapper |
| ``icon``         | The alert's icon             |
| ``message``      | The alert's message          |


</div>

## CSS Properties


CSS Properties are DWC-defined variables in CSS, denoted by `--`, followed by a name.
They enable dynamic styling, reusability, and easy customization of components.
With CSS Properties, you can change the look and feel of a component simply by changing the value of a variable.
[[Read more]](theme-engine/css-variables).
<div style="overflow-x: auto;">

| Name                       | Description            |
| -------------------------- | ---------------------- |
| ``--bbj-alert-background`` | The alert's background |
| ``--bbj-alert-border``     | The alert's border     |
| ``--bbj-alert-color``      | The alert's color      |
| ``--bbj-alert-icon-color`` | The alert's icon color |
| ``--bbj-alert-padding``    | The alert's padding    |


</div>

## Components Dependencies

- [bbj-icon](web-components/bbj-icon.md)
- [bbj-icon-button](web-components/bbj-icon-button.md)


## Dependent Components

- [bbj-alert-popover](web-components/bbj-alert-popover.md)
- [bbj-cedit](web-components/bbj-cedit.md)
- [bbj-checkbox](web-components/bbj-checkbox.md)
- [bbj-editbox](web-components/bbj-editbox.md)
- [bbj-inputd](web-components/bbj-inputd.md)
- [bbj-inpute](web-components/bbj-inpute.md)
- [bbj-inputn](web-components/bbj-inputn.md)
- [bbj-inputt](web-components/bbj-inputt.md)
- [bbj-list](web-components/bbj-list.md)
- [bbj-list-button](web-components/bbj-list-button.md)
- [bbj-list-edit](web-components/bbj-list-edit.md)
- [bbj-radio](web-components/bbj-radio.md)


----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
