# dwc-font-chooser
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--font--chooser-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-scoped-%23006aff)

The `BBjFontChooser<dwc-font-chooser>` object provides methods for manipulating a GUI font chooser control and an interface to allow users to select fonts, for example, in a preferences dialog.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<div style="overflow-x: auto;">

| Name                   | Attribute                 | Description                                                                                                                                       | Reflects | Type                                                                                                                                                                         | Default                                           |
| ---------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | :------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| ``approveAccessKey``   | ``approve-access-key``    | The approve button access key.                                                                                                                    | &#x2718; | ``string``                                                                                                                                                                   |                                                   |
| ``cancelAccessKey``    | ``cancel-access-key``     | The cancel button access key                                                                                                                      | &#x2718; | ``string``                                                                                                                                                                   |                                                   |
| ``components``         | ``components``            | The list of UI components to render. Possible values are:&nbsp; ``family``, ``style``, ``size``, ``preview``, ``approveButton``, ``cancelButton`` | &#x2718; | ``string``                                                                                                                                                                   | ``'family, style, size, preview'``                |
| ``disabled``           | ``disabled``              | True to disable the font chooser, false to enable it.                                                                                             | &#x2714; | ``boolean``                                                                                                                                                                  | ``false``                                         |
| ``distance``           | ``distance``              | The distance in pixels to offset the popover away from its trigger.                                                                               | &#x2718; | ``number``                                                                                                                                                                   | ``5``                                             |
| ``expanse``            | ``expanse``               | The component's expanse                                                                                                                           | &#x2714; | ``"l" \| "m" \| "s" \| "xl" \| "xs"``                                                                                                                                        | ``'m'``                                           |
| ``familiesList``       | ``families-list``         | An array of predefined font families to display.                                                                                                  | &#x2718; | ``string \| string[]``                                                                                                                                                       | ``DwcFontChooserDefaultFamilyList``               |
| ``fontFamily``         | ``font-family``           | The default font value                                                                                                                            | &#x2718; | ``string``                                                                                                                                                                   | ``'Arial'``                                       |
| ``fontSize``           | ``font-size``             | The default font size                                                                                                                             | &#x2718; | ``number``                                                                                                                                                                   | ``14``                                            |
| ``fontStyle``          | ``font-style``            | The default font style                                                                                                                            | &#x2718; | ``string``                                                                                                                                                                   | ``'Plain'``                                       |
| ``i18n``               | ``i18n``                  | The font chooser translation object                                                                                                               | &#x2718; | ``string \| { approve?: string; cancel?: string; family?: string; style?: string; size?: string; plain?: string; bold?: string; italic?: string; 'bold italic'?: string; }`` | ``DwcFontChooserDefaultI18n``                     |
| ``openHeight``         | ``open-height``           | Sets the popover max-height.                                                                                                                      | &#x2718; | ``string``                                                                                                                                                                   | ``'480px'``                                       |
| ``openWidth``          | ``open-width``            | Sets the popover width.                                                                                                                           | &#x2718; | ``string``                                                                                                                                                                   | ``'480px'``                                       |
| ``opened``             | ``opened``                | When true, the popover is opened; otherwise it is closed.                                                                                         | &#x2714; | ``boolean``                                                                                                                                                                  | ``false``                                         |
| ``placement``          | ``placement``             | Describes the preferred placement of the popover                                                                                                  | &#x2718; | ``"bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"``       | ``'bottom-end'``                                  |
| ``popup``              | ``popup``                 | When true, the chooser will be rendered as a popover; otherwise it will be rendered inline.                                                       | &#x2714; | ``boolean``                                                                                                                                                                  | ``false``                                         |
| ``previewFontsInList`` | ``preview-fonts-in-list`` | When true, families list items will use the font family to create an in-place preview.                                                            | &#x2718; | ``boolean``                                                                                                                                                                  | ``false``                                         |
| ``previewText``        | ``preview-text``          | The preview text to use                                                                                                                           | &#x2718; | ``string``                                                                                                                                                                   | ``'The quick brown fox jumps over the lazy dog'`` |
| ``sizesList``          | ``sizes-list``            | An array of predefined font sizes to use.                                                                                                         | &#x2718; | ``number[] \| string``                                                                                                                                                       | ``[...[8, 9, 10, 11, 12], ...range(14, 72, 2)]``  |
| ``skidding``           | ``skidding``              | The distance in pixels to offset the popover along its trigger.                                                                                   | &#x2718; | ``number``                                                                                                                                                                   | ``12``                                            |
| ``stylesList``         | ``styles-list``           | An array of predefined font styles to display. Supported values are ``bold`` , ``italic``, ``plain`` and ``bold italic``                          | &#x2718; | ``string \| string[]``                                                                                                                                                       | ``DwcFontChooserDefaultStyles``                   |


</div>

## Events

<div style="overflow-x: auto;">

| Event            | Description                                  | Type                                                 |
| ---------------- | -------------------------------------------- | ---------------------------------------------------- |
| ``dwc-approved`` | Fired when the approve button is clicked.    | ``{ family: string; style: string; size: number; }`` |
| ``dwc-canceled`` | Fired when the cancel button is clicked.     | ``void``                                             |
| ``dwc-changed``  | Fired whenever the selected font is changed. | ``{ family: string; style: string; size: number; }`` |


</div>

## Hosted Classes


Hosted Classes are CSS classes that are applied to the host element of a component. They are useful for styling the host element from outside the component's own CSS.
They can either reflect the component's state, such as "disabled" or "active," or provide options to alter the component's style based on user interaction or other conditions.
<div style="overflow-x: auto;">

| CSS Class          | Description                                 |
| ------------------ | ------------------------------------------- |
| ``BBjControl``     | Always applied                              |
| ``BBjFontChooser`` | Always applied                              |
| ``bbj-disabled``   | Applied when the component is disabled      |
| ``bbj-popup``      | Applied when the component is in popup mode |


</div>

## Components Dependencies

- [dwc-field](web-components/dwc-field.md)
- [dwc-listbox](web-components/dwc-listbox.md)
- [dwc-button](web-components/dwc-button.md)
- [dwc-popover](web-components/dwc-popover.md)
- [dwc-icon](web-components/dwc-icon.md)

## Methods

### `approve() => Promise<void>`

Clicks the approve button

### Returns

Type: `Promise<void>`

### `cancel() => Promise<void>`

Clicks the cancel button

### Returns

Type: `Promise<void>`



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
