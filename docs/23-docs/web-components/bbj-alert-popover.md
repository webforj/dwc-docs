# bbj-alert-popover
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-bbj--alert--popover-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `bbj-alert-popover` provides a popover variation of `bbj-alert`.
This component is mainly used for validation.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<div style="overflow-x: auto;">

| Name          | Attribute     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Reflects | Type                                                                                                                                                                   | Default        |
| ------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| ``distance``  | ``distance``  | The distance in pixels from which to offset the alert away from its trigger.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | &#x2718; | ``number``                                                                                                                                                             | ``2``          |
| ``icon``      | ``icon``      | The icon to use with the alert.&nbsp;&nbsp;<ol>&nbsp;<li> <b>URL</b>: (ex: /path/to/image.png)&nbsp;<li> <b>Data URL</b>: (ex: data:image/jpeg;base64,/9j/4SDpRXhpZgAAT....)&nbsp;<li> <b>ICON_NAME</b>: An icon to load from the default BBj icons pool. (ex: ``x``)&nbsp;<li> <b>POOL_NAME:ICON_NAME</b>: An icon to load from the passed pool. (ex: ``feather:x``)&nbsp;<li> <b>An object</b> which provides all the required properties to build the icon.&nbsp;   for instance:&nbsp;   <ol>&nbsp;     <li> {name: 'x'}&nbsp;     <li> {pool: 'feather', name: 'x'}&nbsp;     <li> {src: 'image/path'}&nbsp;   </ol>&nbsp;</ol> | &#x2718; | ``object \| string``                                                                                                                                                   | ``'bbj:info'`` |
| ``message``   | ``message``   | The alert's message to display.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | &#x2718; | ``string``                                                                                                                                                             |                |
| ``opened``    | ``opened``    | When true, the popover will be opened, otherwise it will be closed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | &#x2714; | ``boolean``                                                                                                                                                            | ``false``      |
| ``placement`` | ``placement`` | The preferred placement of the popover.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | &#x2718; | ``"bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"`` | ``'bottom'``   |
| ``skidding``  | ``skidding``  | The distance in pixels from which to offset the alert along its trigger.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | &#x2718; | ``number``                                                                                                                                                             | ``0``          |
| ``theme``     | ``theme``     | The theme name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | &#x2714; | ``"danger" \| "default" \| "gray" \| "info" \| "primary" \| "success" \| "warning"``                                                                                   | ``'default'``  |


</div>

## Components Dependencies

- [bbj-alert](web-components/bbj-alert.md)


## Dependent Components

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
