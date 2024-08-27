# bbj-spinner
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-bbj--spinner-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `bbj-spinner` provide a way to show the progress of an indeterminate operation.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<div style="overflow-x: auto;">

| Name          | Attribute     | Description                                                                     | Reflects | Type                                                                                 | Default       |
| ------------- | ------------- | ------------------------------------------------------------------------------- | :------: | ------------------------------------------------------------------------------------ | ------------- |
| ``clockwise`` | ``clockwise`` | When true, the animation will be played clockwise, counter clockwise otherwise. | &#x2714; | ``boolean``                                                                          | ``true``      |
| ``expanse``   | ``expanse``   | The component's expanse                                                         | &#x2714; | ``"2xl" \| "2xs" \| "3xl" \| "3xs" \| "l" \| "m" \| "s" \| "xl" \| "xs"``            |               |
| ``paused``    | ``paused``    | When true, the animation will be paused, played otherwise.                      | &#x2714; | ``boolean``                                                                          | ``false``     |
| ``speed``     | ``speed``     | The animation speed in milliseconds                                             | &#x2718; | ``number``                                                                           | ``1000``      |
| ``theme``     | ``theme``     | The theme name                                                                  | &#x2714; | ``"danger" \| "default" \| "gray" \| "info" \| "primary" \| "success" \| "warning"`` | ``'default'`` |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part        | Description                   |
| ----------- | ----------------------------- |
| ``control`` | The component's base wrapper. |


</div>

## CSS Properties


CSS Properties are DWC-defined variables in CSS, denoted by `--`, followed by a name.
They enable dynamic styling, reusability, and easy customization of components.
With CSS Properties, you can change the look and feel of a component simply by changing the value of a variable.
[[Read more]](theme-engine/css-variables).
<div style="overflow-x: auto;">

| Name                          | Description                        |
| ----------------------------- | ---------------------------------- |
| ``--bbj-spinner-color``       | The spinner color                  |
| ``--bbj-spinner-size``        | The spinner size                   |
| ``--bbj-spinner-speed``       | The animation speed of the spinner |
| ``--bbj-spinner-stoke-size``  | The spinner stoke size             |
| ``--bbj-spinner-stoke-width`` | The spinner stoke width            |
| ``--bbj-spinner-track-color`` | The spinner track color            |


</div>

## Dependent Components

- [bbj-busy](web-components/bbj-busy.md)


----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
