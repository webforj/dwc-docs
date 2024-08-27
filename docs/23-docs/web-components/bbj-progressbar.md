# bbj-progressbar
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-bbj--progressbar-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `BBjProgressBar<bbj-progressbar>` provides methods for manipulating a UI progress bar control.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<div style="overflow-x: auto;">

| Name              | Attribute         | Description                                                                                                                                                                                                                                                                                                                                    | Reflects | Type                                                                    | Default          |
| ----------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: | ----------------------------------------------------------------------- | ---------------- |
| ``animated``      | ``animated``      | When true and striped is enabled, the stripes will be animated.                                                                                                                                                                                                                                                                                | &#x2718; | ``boolean``                                                             | ``false``        |
| ``disabled``      | ``disabled``      | True to disable the button, false to enable it.                                                                                                                                                                                                                                                                                                | &#x2714; | ``boolean``                                                             | ``false``        |
| ``indeterminate`` | ``indeterminate`` | Indicates that the duration of the task is not yet known.                                                                                                                                                                                                                                                                                      | &#x2714; | ``boolean``                                                             | ``false``        |
| ``max``           | ``max``           | The maximum range for progressbar.                                                                                                                                                                                                                                                                                                             | &#x2718; | ``number``                                                              | ``100``          |
| ``min``           | ``min``           | The minimum range for progressbar.                                                                                                                                                                                                                                                                                                             | &#x2718; | ``number``                                                              | ``0``            |
| ``orientation``   | ``orientation``   | The progressbar moving orientation.                                                                                                                                                                                                                                                                                                            | &#x2714; | ``"horizontal" \| "vertical"``                                          | ``'horizontal'`` |
| ``striped``       | ``striped``       | When true, the progressbar will draw stripes over the current progress.                                                                                                                                                                                                                                                                        | &#x2714; | ``boolean``                                                             | ``false``        |
| ``text``          | ``text``          | Specifies the text to be displayed on the progressbar.&nbsp;If text is set to "", the progress bar will display percentage&nbsp;complete in the format "XX%".&nbsp;&nbsp;In the text you can use the placeholder ``{{x}}`` to get the current&nbsp;value as percentage and you can use the placeholder ``{{value}}`` to get the&nbsp;raw value | &#x2718; | ``string``                                                              | ``''``           |
| ``textVisible``   | ``text-visible``  | When true, the text is visible; otherwise, it is hidden.                                                                                                                                                                                                                                                                                       | &#x2718; | ``boolean``                                                             | ``true``         |
| ``theme``         | ``theme``         | The theme name                                                                                                                                                                                                                                                                                                                                 | &#x2714; | ``"danger" \| "default" \| "gray" \| "info" \| "success" \| "warning"`` | ``'default'``    |
| ``value``         | ``value``         | The progressbar value                                                                                                                                                                                                                                                                                                                          | &#x2718; | ``number``                                                              | ``0``            |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part           | Description                    |
| -------------- | ------------------------------ |
| ``back``       | The back part of the progress  |
| ``back-text``  | The back part label            |
| ``control``    | The component's base wrapper.  |
| ``front``      | The front part of the progress |
| ``front-text`` | The front part label           |
| ``text``       | The component's text.          |


</div>

## Hosted Classes


Hosted Classes are CSS classes that are applied to the host element of a component. They are useful for styling the host element from outside the component's own CSS.
They can either reflect the component's state, such as "disabled" or "active," or provide options to alter the component's style based on user interaction or other conditions.
<div style="overflow-x: auto;">

| CSS Class          | Description                            |
| ------------------ | -------------------------------------- |
| ``BBjControl``     | Always applied                         |
| ``BBjProgressBar`` | Always applied                         |
| ``bbj-disabled``   | Applied when the component is disabled |


</div>

## CSS Properties


CSS Properties are DWC-defined variables in CSS, denoted by `--`, followed by a name.
They enable dynamic styling, reusability, and easy customization of components.
With CSS Properties, you can change the look and feel of a component simply by changing the value of a variable.
[[Read more]](theme-engine/css-variables).
<div style="overflow-x: auto;">

| Name                                   | Description                                             |
| -------------------------------------- | ------------------------------------------------------- |
| ``--bbj-progressbar-back-background``  | The back background of the progressbar                  |
| ``--bbj-progressbar-back-color``       | The back color of the progressbar                       |
| ``--bbj-progressbar-border-color``     | The border color of the progressbar                     |
| ``--bbj-progressbar-front-background`` | The front background of the progressbar                 |
| ``--bbj-progressbar-front-color``      | The front color of the progressbar                      |
| ``--bbj-progressbar-height``           | The default progressbar height                          |
| ``--bbj-progressbar-width``            | The default progressbar width                           |
| ``--bbj-stripes-color``                | The stripes color when the progressbar is progress mode |


</div>
## Methods

### `getPart(part: string) => Promise<unknown>`

Queries one of the component supported parts

### Returns

Type: `Promise<unknown>`



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
