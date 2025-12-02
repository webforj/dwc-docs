# dwc-avatar
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--avatar-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

A customizable avatar component that displays an image, initials, or an icon.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<div style="overflow-x: auto;">

| Name         | Attribute    | Description                     | Reflects | Type                                                                                                                                                                                                                                    | Default       |
| ------------ | ------------ | ------------------------------- | :------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| ``expanse``  | ``expanse``  | Size of the avatar              | &#x2714; | ``"2xl" \| "2xs" \| "3xl" \| "3xs" \| "l" \| "m" \| "s" \| "xl" \| "xs"``                                                                                                                                                               | ``'m'``       |
| ``fallback`` | ``fallback`` | Fallback image URL              | &#x2718; | ``string``                                                                                                                                                                                                                              | ``''``        |
| ``initials`` | ``initials`` | Initials fallback when no image | &#x2718; | ``string``                                                                                                                                                                                                                              | ``''``        |
| ``label``    | ``label``    | Accessible label for the avatar | &#x2718; | ``string``                                                                                                                                                                                                                              | ``'avatar'``  |
| ``loading``  | ``loading``  | Image loading strategy          | &#x2718; | ``"eager" \| "lazy"``                                                                                                                                                                                                                   | ``'eager'``   |
| ``shape``    | ``shape``    | Shape of the avatar             | &#x2714; | ``"circle" \| "square"``                                                                                                                                                                                                                | ``'circle'``  |
| ``src``      | ``src``      | Image source URL                | &#x2718; | ``string``                                                                                                                                                                                                                              | ``''``        |
| ``theme``    | ``theme``    | The theme name.                 | &#x2714; | ``"danger" \| "default" \| "gray" \| "info" \| "outlined-danger" \| "outlined-default" \| "outlined-gray" \| "outlined-info" \| "outlined-primary" \| "outlined-success" \| "outlined-warning" \| "primary" \| "success" \| "warning"`` | ``'default'`` |


</div>

## Events

<div style="overflow-x: auto;">

| Event              | Description                                | Type     |
| ------------------ | ------------------------------------------ | -------- |
| ``dwc-load-error`` | Event emitted when the image fails to load | ``void`` |


</div>

## Slots

<div style="overflow-x: auto;">

| Slot  | Description                  |
| ----- | ---------------------------- |
|       | slot for custom icon content |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part               | Description                                                    |
| ------------------ | -------------------------------------------------------------- |
| ``control``        | The main container of the avatar                               |
| ``icon``           | The icon displayed when no image or initials are available     |
| ``image``          | The image of the avatar                                        |
| ``image-fallback`` | The fallback image displayed when the main image fails to load |
| ``initials``       | The initials displayed when no image is available              |


</div>

## CSS Properties


CSS Properties are DWC-defined variables in CSS, denoted by `--`, followed by a name.
They enable dynamic styling, reusability, and easy customization of components.
With CSS Properties, you can change the look and feel of a component simply by changing the value of a variable.
[[Read more]](theme-engine/css-variables).
<div style="overflow-x: auto;">

| Name                          | Description               |
| ----------------------------- | ------------------------- |
| ``--dwc-avatar-background``   | The avatar's background   |
| ``--dwc-avatar-border``       | The avatar's border       |
| ``--dwc-avatar-border-color`` | The avatar's border color |
| ``--dwc-avatar-color``        | The avatar's color        |
| ``--dwc-avatar-size``         | The avatar's size         |


</div>

## Components Dependencies

- [dwc-icon](web-components/dwc-icon.md)


----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2025.*
