# bbj-slider
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-bbj--slider-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `BBjSlider<bbj-slider>` provides methods for manipulating a UI slider control.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<div style="overflow-x: auto;">

| Name                        | Attribute                      | Description                                                                                                                                                                                                                                              | Reflects | Type                                                                    | Default          |
| --------------------------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: | ----------------------------------------------------------------------- | ---------------- |
| ``allowMajorLabelsOverlap`` | ``allow-major-labels-overlap`` | When true, the slider will paint major ticks labels and the custom labels at the same time.                                                                                                                                                              | &#x2718; | ``boolean``                                                             | ``false``        |
| ``connect``                 | ``connect``                    | When true, the handle/thumb will be connected to the slider edge.                                                                                                                                                                                        | &#x2718; | ``boolean``                                                             | ``false``        |
| ``disabled``                | ``disabled``                   | True to disable the slider, false to enable it.                                                                                                                                                                                                          | &#x2714; | ``boolean``                                                             | ``false``        |
| ``hasFocus``                | ``has-focus``                  | True when the slider has focus, false otherwise.                                                                                                                                                                                                         | &#x2714; | ``boolean``                                                             | ``false``        |
| ``inverted``                | ``inverted``                   | By default, the minimum value of a vertical slider is at the bottom and the maximum value is at the top. For a horizontal slider, the minimum value is to the left and the maximum value is to the right. The orientation reverses for inverted sliders. | &#x2718; | ``boolean``                                                             | ``false``        |
| ``labels``                  | ``labels``                     |                                                                                                                                                                                                                                                          | &#x2718; | ``any``                                                                 | ``{}``           |
| ``majorTickSpacing``        | ``major-tick-spacing``         | Specifies the major tick spacing.                                                                                                                                                                                                                        | &#x2718; | ``number``                                                              | ``0``            |
| ``max``                     | ``max``                        | The slider's max value                                                                                                                                                                                                                                   | &#x2718; | ``number``                                                              | ``100``          |
| ``min``                     | ``min``                        | The slider's min value                                                                                                                                                                                                                                   | &#x2718; | ``number``                                                              | ``0``            |
| ``minorTickSpacing``        | ``minor-tick-spacing``         | Specifies the minor tick spacing.                                                                                                                                                                                                                        | &#x2718; | ``number``                                                              | ``0``            |
| ``orientation``             | ``orientation``                | The slider's orientation                                                                                                                                                                                                                                 | &#x2714; | ``"horizontal" \| "vertical"``                                          | ``'horizontal'`` |
| ``paintLabels``             | ``paint-labels``               | Specifies whether labels are painted on the slider.                                                                                                                                                                                                      | &#x2718; | ``boolean``                                                             | ``false``        |
| ``paintTicks``              | ``paint-ticks``                | Specifies whether ticks are painted on the slider.                                                                                                                                                                                                       | &#x2718; | ``boolean``                                                             | ``false``        |
| ``scrollableByWheel``       | ``scrollable-by-wheel``        | When true, the slider can be scrolled by mouse wheel                                                                                                                                                                                                     | &#x2718; | ``boolean``                                                             | ``true``         |
| ``slideByClickingPips``     | ``slide-by-clicking-pips``     | When true, you the user click on a pip value , the slider will seek to that value                                                                                                                                                                        | &#x2718; | ``boolean``                                                             | ``true``         |
| ``snapToTicks``             | ``snap-to-ticks``              | Specifies whether the slider should snap to the nearest tick when the user drags the thumb.                                                                                                                                                              | &#x2718; | ``boolean``                                                             | ``false``        |
| ``theme``                   | ``theme``                      | The theme name                                                                                                                                                                                                                                           | &#x2714; | ``"danger" \| "default" \| "gray" \| "info" \| "success" \| "warning"`` | ``'default'``    |
| ``tooltipExpression``       | ``tooltip-expression``         | A Javascript expression to format the tooltip.&nbsp;if the expression has the 'return' word in it, then we use as is,&nbsp;if not, then wrap it with return and ';' to make a function.&nbsp;&nbsp;for example&nbsp; "return x + '$'"                    | &#x2718; | ``((...args: any[]) => any) \| string``                                 |                  |
| ``tooltips``                | ``tooltips``                   | When true enable tooltips.                                                                                                                                                                                                                               | &#x2714; | ``boolean``                                                             | ``false``        |
| ``tooltipsOnlyWhenSliding`` | ``tooltips-only-when-sliding`` | When true and tooltips are enabled, the the tooltips will be shown only when sliding                                                                                                                                                                     | &#x2718; | ``boolean``                                                             | ``false``        |
| ``value``                   | ``value``                      | The slider's value                                                                                                                                                                                                                                       | &#x2718; | ``number``                                                              | ``50``           |


</div>

## Events

<div style="overflow-x: auto;">

| Event           | Description                            | Type                           |
| --------------- | -------------------------------------- | ------------------------------ |
| ``bbj-blurred`` | Emitted after the control is blurred.  | ``void``                       |
| ``bbj-focused`` | Emitted after the control is focused.  | ``void``                       |
| ``bbj-slide``   | Emitted after while slider is dragging | ``BbjSliderSlideEventPayload`` |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part                | Description                  |
| ------------------- | ---------------------------- |
| ``base``            | The component's base wrapper |
| ``control``         |                              |
| ``noUi-base``       | auto generated               |
| ``noUi-connects``   | auto generated               |
| ``noUi-handle``     | auto generated               |
| ``noUi-marker``     | auto generated               |
| ``noUi-origin``     | auto generated               |
| ``noUi-pips``       | auto generated               |
| ``noUi-tooltip``    | auto generated               |
| ``noUi-touch-area`` | auto generated               |
| ``noUi-value``      | auto generated               |


</div>

## Hosted Classes


Hosted Classes are CSS classes that are applied to the host element of a component. They are useful for styling the host element from outside the component's own CSS.
They can either reflect the component's state, such as "disabled" or "active," or provide options to alter the component's style based on user interaction or other conditions.
<div style="overflow-x: auto;">

| CSS Class          | Description                            |
| ------------------ | -------------------------------------- |
| ``BBjControl``     | Always applied                         |
| ``BBjSlider``      | Always applied                         |
| ``bbj-disabled``   | Applied when the component is disabled |
| ``bbj-focused``    | Applied when the component is focused  |
| ``bbj-horizontal`` | Applied when the slider is horizontal  |
| ``bbj-vertical``   | Applied when the slider is vertical    |


</div>

## CSS Properties


CSS Properties are DWC-defined variables in CSS, denoted by `--`, followed by a name.
They enable dynamic styling, reusability, and easy customization of components.
With CSS Properties, you can change the look and feel of a component simply by changing the value of a variable.
[[Read more]](theme-engine/css-variables).
<div style="overflow-x: auto;">

| Name                                      | Description                                                   |
| ----------------------------------------- | ------------------------------------------------------------- |
| ``--bbj-slider-background``               | The slider background                                         |
| ``--bbj-slider-connect-background``       | The connect bar background                                    |
| ``--bbj-slider-handle-active-background`` | The handle background when active                             |
| ``--bbj-slider-handle-background``        | The handle background                                         |
| ``--bbj-slider-handler-border-color``     | The border of the handle                                      |
| ``--bbj-slider-horizontal-height``        | The default slider height when the orientation is horizontal  |
| ``--bbj-slider-horizontal-width``         | The default slider width when the orientation is horizontal   |
| ``--bbj-slider-label-font-size``          | The label marker font size                                    |
| ``--bbj-slider-label-marker-height``      | Label markers height                                          |
| ``--bbj-slider-label-marker-width``       | Label markers width                                           |
| ``--bbj-slider-major-font-size``          | The major marker font size                                    |
| ``--bbj-slider-major-marker-height``      | Major markers height                                          |
| ``--bbj-slider-major-marker-width``       | Major markers width                                           |
| ``--bbj-slider-marker-background``        | The slider markers background                                 |
| ``--bbj-slider-minor-marker-height``      | Minor markers height                                          |
| ``--bbj-slider-minor-marker-width``       | Minor markers width                                           |
| ``--bbj-slider-thumb-border-radius``      | The thumb border radius                                       |
| ``--bbj-slider-thumb-size``               | The thumb size                                                |
| ``--bbj-slider-track-border-radius``      | The track border radius                                       |
| ``--bbj-slider-track-size``               | The track size (width when vertical , height when horizontal) |
| ``--bbj-slider-value-color``              | The color of the slider values                                |
| ``--bbj-slider-vertical-height``          | The default slider height when the orientation is vertical    |
| ``--bbj-slider-vertical-width``           | The default slider width when the orientation is vertical     |


</div>
## Methods

### `getPart(part: string) => Promise<unknown>`

Queries one of the component supported parts.

### Returns

Type: `Promise<unknown>`

### `removeFocus() => Promise<void>`

Removes focus from the slider.

### Returns

Type: `Promise<void>`

### `setFocus() => Promise<void>`

Sets focus on the slider.

### Returns

Type: `Promise<void>`



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
