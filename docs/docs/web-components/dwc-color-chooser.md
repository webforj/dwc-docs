# dwc-color-chooser
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--color--chooser-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-scoped-%23006aff)

The `BBjColorChooser<dwc-color-chooser>` provides methods for manipulating a UI color chooser control and an interface which allows users to select colors, for example, in a preferences dialog.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<div style="overflow-x: auto;">

| Name                 | Attribute              | Description                                                                                                                                                                                                                                                                                          | Reflects | Type                                                                                                                                                                   | Default                                                                  |
| -------------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| ``alpha``            | ``alpha``              | <img style="vertical-align: middle; margin-right: 5px;" src="https://img.shields.io/badge/readonly-%23006aff" />The alpha value, which ranges from 0 to 1.                                                                                                                                           | &#x2718; | ``number``                                                                                                                                                             |                                                                          |
| ``approveAccessKey`` | ``approve-access-key`` | The approve button access key.                                                                                                                                                                                                                                                                       | &#x2718; | ``string``                                                                                                                                                             |                                                                          |
| ``blue``             | ``blue``               | <img style="vertical-align: middle; margin-right: 5px;" src="https://img.shields.io/badge/readonly-%23006aff" />The blue value, which ranges from 0 to 255.                                                                                                                                          | &#x2718; | ``number``                                                                                                                                                             |                                                                          |
| ``brightness``       | ``brightness``         | <img style="vertical-align: middle; margin-right: 5px;" src="https://img.shields.io/badge/readonly-%23006aff" />The perceived brightness of a color, which ranges from 0-255, as defined by [Web Content Accessibility Guidelines (Version 1.0)](https://www.w3.org/TR/AERT/#color-contrast).        | &#x2718; | ``number``                                                                                                                                                             |                                                                          |
| ``cancelAccessKey``  | ``cancel-access-key``  | The cancel button access key.                                                                                                                                                                                                                                                                        | &#x2718; | ``string``                                                                                                                                                             |                                                                          |
| ``colorName``        | ``color-name``         | <img style="vertical-align: middle; margin-right: 5px;" src="https://img.shields.io/badge/readonly-%23006aff" />The name of the color.                                                                                                                                                               | &#x2718; | ``string``                                                                                                                                                             |                                                                          |
| ``components``       | ``components``         | The list of UI components to render.                                                                                                                                                                                                                                                                 | &#x2718; | ``string``                                                                                                                                                             | ``'saturation, hue, alpha, preview, eyeDropper, copy, input, swatches'`` |
| ``disabled``         | ``disabled``           | When true, the component cannot be interacted with.                                                                                                                                                                                                                                                  | &#x2714; | ``boolean``                                                                                                                                                            | ``false``                                                                |
| ``distance``         | ``distance``           | The distance in pixels to offset the popover away from its trigger.                                                                                                                                                                                                                                  | &#x2718; | ``number``                                                                                                                                                             | ``5``                                                                    |
| ``expanse``          | ``expanse``            | The component's expanse.                                                                                                                                                                                                                                                                             | &#x2714; | ``"l" \| "m" \| "s" \| "xl" \| "xs" \| "xxs" \| "xxxs"``                                                                                                               | ``'m'``                                                                  |
| ``green``            | ``green``              | <img style="vertical-align: middle; margin-right: 5px;" src="https://img.shields.io/badge/readonly-%23006aff" />The green value, which ranges from 0 to 255.                                                                                                                                         | &#x2718; | ``number``                                                                                                                                                             |                                                                          |
| ``hex``              | ``hex``                | <img style="vertical-align: middle; margin-right: 5px;" src="https://img.shields.io/badge/readonly-%23006aff" />The value as a hex string.                                                                                                                                                           | &#x2718; | ``string``                                                                                                                                                             |                                                                          |
| ``hex8``             | ``hex-8``              | <img style="vertical-align: middle; margin-right: 5px;" src="https://img.shields.io/badge/readonly-%23006aff" />The value as a hex8 string.                                                                                                                                                          | &#x2718; | ``string``                                                                                                                                                             |                                                                          |
| ``hsl``              |                        | <img style="vertical-align: middle; margin-right: 5px;" src="https://img.shields.io/badge/readonly-%23006aff" />The value as a hsl object.                                                                                                                                                           | &#x2718; | ``{ h: number; s: number; l: number; a: number; }``                                                                                                                    |                                                                          |
| ``hslString``        | ``hsl-string``         | <img style="vertical-align: middle; margin-right: 5px;" src="https://img.shields.io/badge/readonly-%23006aff" />The value as a hsl string.                                                                                                                                                           | &#x2718; | ``string``                                                                                                                                                             |                                                                          |
| ``hsv``              |                        | <img style="vertical-align: middle; margin-right: 5px;" src="https://img.shields.io/badge/readonly-%23006aff" />The value as a hsv object.                                                                                                                                                           | &#x2718; | ``{ h: number; s: number; v: number; a: number; }``                                                                                                                    |                                                                          |
| ``hsvString``        | ``hsv-string``         | <img style="vertical-align: middle; margin-right: 5px;" src="https://img.shields.io/badge/readonly-%23006aff" />The value as a hsv string.                                                                                                                                                           | &#x2718; | ``string``                                                                                                                                                             |                                                                          |
| ``hue``              | ``hue``                | <img style="vertical-align: middle; margin-right: 5px;" src="https://img.shields.io/badge/readonly-%23006aff" />The hue value, which ranges from 0 to 360.                                                                                                                                           | &#x2718; | ``number``                                                                                                                                                             |                                                                          |
| ``i18n``             | ``i18n``               | The component translation object.                                                                                                                                                                                                                                                                    | &#x2718; | ``string \| { approve?: string; cancel?: string; swatches?: string; themeSwatches?: string; copy?: string; pick?: string; themeColors?: string; }``                    | ``DwcColorChooserDefaultI18n``                                           |
| ``lightness``        | ``lightness``          | <img style="vertical-align: middle; margin-right: 5px;" src="https://img.shields.io/badge/readonly-%23006aff" />The color lightness value.                                                                                                                                                           | &#x2718; | ``number``                                                                                                                                                             |                                                                          |
| ``luminance``        | ``luminance``          | <img style="vertical-align: middle; margin-right: 5px;" src="https://img.shields.io/badge/readonly-%23006aff" />The perceived luminance of a color, from 0-1. as defined in [Web Content Accessibility Guidelines (Version 2.0)](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef). | &#x2718; | ``number``                                                                                                                                                             |                                                                          |
| ``name``             | ``name``               | The name of the trigger button when the popover mode is enabled.                                                                                                                                                                                                                                     | &#x2718; | ``string``                                                                                                                                                             | ``'Color Chooser'``                                                      |
| ``native``           | ``native``             | When true, the native color picker provided by the browser will be used.&nbsp;&nbsp;Note that with native color pickers, colors with an alpha channel are not supported;                                                                                                                             | &#x2718; | ``boolean``                                                                                                                                                            | ``false``                                                                |
| ``openHeight``       | ``open-height``        | Sets the popover max-height.                                                                                                                                                                                                                                                                         | &#x2718; | ``string``                                                                                                                                                             | ``''``                                                                   |
| ``openWidth``        | ``open-width``         | Sets the popover width.                                                                                                                                                                                                                                                                              | &#x2718; | ``string``                                                                                                                                                             | ``'280px'``                                                              |
| ``opened``           | ``opened``             | When true, the popover is opened; otherwise it is closed.                                                                                                                                                                                                                                            | &#x2714; | ``boolean``                                                                                                                                                            | ``false``                                                                |
| ``placement``        | ``placement``          | The preferred placement of the popover.                                                                                                                                                                                                                                                              | &#x2718; | ``"bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"`` | ``'bottom-end'``                                                         |
| ``popup``            | ``popup``              | When true, the color picker will be rendered as a popover; otherwise it will be inline.                                                                                                                                                                                                              | &#x2714; | ``boolean``                                                                                                                                                            | ``false``                                                                |
| ``red``              | ``red``                | <img style="vertical-align: middle; margin-right: 5px;" src="https://img.shields.io/badge/readonly-%23006aff" />The red value, which ranges from 0 to 255.                                                                                                                                           | &#x2718; | ``number``                                                                                                                                                             |                                                                          |
| ``rgb``              |                        | <img style="vertical-align: middle; margin-right: 5px;" src="https://img.shields.io/badge/readonly-%23006aff" />The value as a rgb object.                                                                                                                                                           | &#x2718; | ``{ r: number; g: number; b: number; a: number; }``                                                                                                                    |                                                                          |
| ``rgbString``        | ``rgb-string``         | <img style="vertical-align: middle; margin-right: 5px;" src="https://img.shields.io/badge/readonly-%23006aff" />The value as a rgb string.                                                                                                                                                           | &#x2718; | ``string``                                                                                                                                                             |                                                                          |
| ``saturation``       | ``saturation``         | <img style="vertical-align: middle; margin-right: 5px;" src="https://img.shields.io/badge/readonly-%23006aff" />The saturation value, which ranges 0 to 100.                                                                                                                                         | &#x2718; | ``number``                                                                                                                                                             |                                                                          |
| ``skidding``         | ``skidding``           | The distance in pixels to offset the popover along its trigger.                                                                                                                                                                                                                                      | &#x2718; | ``number``                                                                                                                                                             | ``12``                                                                   |
| ``swatches``         | ``swatches``           | An array of predefined color swatches to display.                                                                                                                                                                                                                                                    | &#x2718; | ``DwcColorChooserSwatch[] \| string``                                                                                                                                  | ``DwcColorChooserDefaultSwatches``                                       |
| ``theme``            | ``theme``              | The theme name.                                                                                                                                                                                                                                                                                      | &#x2714; | ``"danger" \| "default" \| "gray" \| "info" \| "primary" \| "success" \| "warning"``                                                                                   | ``'default'``                                                            |
| ``value``            | ``value``              | The component's value                                                                                                                                                                                                                                                                                | &#x2718; | ``HSL \| HSLA \| HSV \| HSVA \| RGB \| RGBA \| TinyColor \| number \| string``                                                                                         | ``'#000'``                                                               |


</div>

## Events

<div style="overflow-x: auto;">

| Event            | Description                                     | Type          |
| ---------------- | ----------------------------------------------- | ------------- |
| ``dwc-approved`` | Emitted when the approve button is clicked.     | ``TinyColor`` |
| ``dwc-canceled`` | Emitted when the cancel button is clicked.      | ``void``      |
| ``dwc-changed``  | Emitted whenever the selected color is changed. | ``TinyColor`` |


</div>

## Hosted Classes


Hosted Classes are CSS classes that are applied to the host element of a component. They are useful for styling the host element from outside the component's own CSS.
They can either reflect the component's state, such as "disabled" or "active," or provide options to alter the component's style based on user interaction or other conditions.
<div style="overflow-x: auto;">

| CSS Class        | Description                                                         |
| ---------------- | ------------------------------------------------------------------- |
| ``BBjControl``   | Always applied                                                      |
| ``BBjChooser``   | Applied when the component is used as a normal button               |
| ``bbj-disabled`` | Applied when the component is disabled                              |
| ``bbj-popup``    | Applied when the component is in popup mode                         |
| ``bbj-noborder`` | ``[optional]`` Can be added manually to remove the component border |


</div>

## CSS Properties


CSS Properties are DWC-defined variables in CSS, denoted by `--`, followed by a name.
They enable dynamic styling, reusability, and easy customization of components.
With CSS Properties, you can change the look and feel of a component simply by changing the value of a variable.
[[Read more]](theme-engine/css-variables).
<div style="overflow-x: auto;">

| Name                                   | Description                                        |
| -------------------------------------- | -------------------------------------------------- |
| ``--dwc-color-chooser-box-height``     | The height of the saturation box                   |
| ``--dwc-color-chooser-pointer-size``   | The size of the saturation, hue and alpha pointers |
| ``--dwc-color-chooser-slider-height``  | The height of the hue and alpha sliders            |
| ``--dwc-color-chooser-swatch-per-row`` | Number of swatches per row                         |


</div>

## Components Dependencies

- [dwc-field-spinner](web-components/dwc-field-spinner.md)
- [dwc-field](web-components/dwc-field.md)
- [dwc-icon-button](web-components/dwc-icon-button.md)
- [dwc-button](web-components/dwc-button.md)
- [dwc-popover](web-components/dwc-popover.md)

## Methods

### `approve() => Promise<void>`

Clicks the approve button.

### Returns

Type: `Promise<void>`

### `cancel() => Promise<void>`

Clicks the cancel button.

### Returns

Type: `Promise<void>`



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
