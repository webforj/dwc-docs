# dwc-textfield
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--textfield-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `BBjInputE<dwc-textfield>` object provides methods for manipulating a UI InputE control.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<div style="overflow-x: auto;">

| Name                           | Attribute                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Reflects | Type                                                                                                                                                                   | Default        |
| ------------------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| ``autoValidate``               | ``auto-validate``                | When true, the control will be validated with every change.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | &#x2718; | ``boolean``                                                                                                                                                            | ``true``       |
| ``autoValidateOnLoad``         | ``auto-validate-on-load``        | When true, the control will be validated when it is loaded for the first time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | &#x2718; | ``boolean``                                                                                                                                                            | ``false``      |
| ``autoWasValidated``           | ``auto-was-validated``           | When true, the control will switch the ``valid`` property automatically after the control is validated and became valid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | &#x2718; | ``boolean``                                                                                                                                                            | ``false``      |
| ``autocomplete``               | ``autocomplete``                 | Enable / disable auto completion                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | &#x2718; | ``string``                                                                                                                                                             | ``'off'``      |
| ``autocorrect``                | ``autocorrect``                  | A string indicating whether or not autocorrect is on or off. Safari only.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | &#x2718; | ``"off" \| "on"``                                                                                                                                                      | ``'off'``      |
| ``autofocus``                  | ``autofocus``                    | Automatically focuses the form control when the page is loaded.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | &#x2718; | ``boolean``                                                                                                                                                            | ``false``      |
| ``disabled``                   | ``disabled``                     | Enable/disable the input                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | &#x2714; | ``boolean``                                                                                                                                                            | ``false``      |
| ``expanse``                    | ``expanse``                      | The component's expanse                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | &#x2714; | ``"l" \| "m" \| "s" \| "xl" \| "xs"``                                                                                                                                  | ``'m'``        |
| ``hasFocus``                   | ``has-focus``                    | When true, the control is focused; otherwise it is blurred.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | &#x2714; | ``boolean``                                                                                                                                                            | ``false``      |
| ``helperText``                 | ``helper-text``                  | The component's helper text.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | &#x2718; | ``string``                                                                                                                                                             |                |
| ``highlightBehaviors``         |                                  | An array of supported of highlight behaviors.&nbsp;<ol>&nbsp; <li>KEY     : Contents of the control are automatically highlighted when the control receives focus by tabbing into it.&nbsp; <li>MOUSE   : Contents of the control are automatically highlighted when the control receives focus by clicking into it with the mouse.&nbsp; <li>REQUEST : Contents of the control are automatically highlighted when the control receives focus programmatically by calling the ``setFocus`` method.&nbsp;</ol>                                                                                                                                    | &#x2718; | ``DwcHighlightBehaviors[]``                                                                                                                                            | ``[]``         |
| ``insertMode``                 | ``insert-mode``                  | If in insert mode, characters are inserted into the control when typed. Otherwise, the characters are overwritten.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | &#x2718; | ``boolean``                                                                                                                                                            | ``false``      |
| ``invalid``                    | ``invalid``                      | Set to true to indicate that the user input is invalid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | &#x2714; | ``boolean``                                                                                                                                                            | ``false``      |
| ``invalidMessage``             | ``invalid-message``              | An error message to present to the user when the control is invalid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | &#x2718; | ``string``                                                                                                                                                             |                |
| ``label``                      | ``label``                        | The inputs label                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | &#x2718; | ``string``                                                                                                                                                             |                |
| ``mask``                       | ``mask``                         | The bbj string mask                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | &#x2718; | ``string``                                                                                                                                                             | ``''``         |
| ``maskedValue``                | ``masked-value``                 | The input's masked value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | &#x2718; | ``string``                                                                                                                                                             | ``''``         |
| ``name``                       | ``name``                         | The input's name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | &#x2714; | ``string``                                                                                                                                                             |                |
| ``padCharacter``               | ``pad-character``                | Specifies the pad character.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | &#x2718; | ``string``                                                                                                                                                             | ``' '``        |
| ``pattern``                    | ``pattern``                      | Pattern the value must match to be valid                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | &#x2718; | ``string``                                                                                                                                                             |                |
| ``placeholder``                | ``placeholder``                  | Text that appears in the input when it has no value set                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | &#x2718; | ``string``                                                                                                                                                             |                |
| ``readonly``                   | ``readonly``                     | When true, puts the input in readonly mode                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | &#x2714; | ``boolean``                                                                                                                                                            | ``false``      |
| ``required``                   | ``required``                     | If true, a value is required or must be check for the form to be submittable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | &#x2714; | ``boolean``                                                                                                                                                            | ``false``      |
| ``restoreValue``               | ``restore-value``                | The restore value is the number that appears when the user hits the restore key (usually ESC).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | &#x2718; | ``string``                                                                                                                                                             |                |
| ``showSpinners``               | ``show-spinners``                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | &#x2718; | ``boolean``                                                                                                                                                            | ``false``      |
| ``spellcheck``                 | ``spellcheck``                   | The spellcheck global attribute is an enumerated attribute defines whether the element may be checked for spelling errors.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | &#x2718; | ``boolean``                                                                                                                                                            | ``false``      |
| ``spinnable``                  | ``spinnable``                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | &#x2718; | ``boolean``                                                                                                                                                            | ``false``      |
| ``tabTraversable``             | ``tab-traversable``              | Indicates that the component can receive focus. A negative value indicates that the component is not reachable via sequential keyboard navigation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | &#x2718; | ``number``                                                                                                                                                             | ``0``          |
| ``valid``                      | ``valid``                        | Set to true to indicate that the user input is valid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | &#x2714; | ``boolean``                                                                                                                                                            | ``false``      |
| ``validationIcon``             | ``validation-icon``              | The icon to use with the validation message&nbsp;&nbsp;<ol>&nbsp;<li> <b>URL</b>: (ex: /path/to/image.png)&nbsp;<li> <b>Data URL</b>: (ex: data:image/jpeg;base64,/9j/4SDpRXhpZgAAT....)&nbsp;<li> <b>ICON_NAME</b>: An icon to load from the default Dwc icons pool. (ex: ``x``)&nbsp;<li> <b>POOL_NAME:ICON_NAME</b>: An icon to load from the passed pool. (ex: ``feather:x``)&nbsp;<li> <b>An object</b> which provides all the required properties to build the icon.&nbsp;   for instance:&nbsp;   <ol>&nbsp;     <li> {name: 'x'}&nbsp;     <li> {pool: 'feather', name: 'x'}&nbsp;     <li> {src: 'image/path'}&nbsp;   </ol>&nbsp;</ol> | &#x2718; | ``object \| string``                                                                                                                                                   | ``'dwc:info'`` |
| ``validationPopoverDistance``  | ``validation-popover-distance``  | The distance in pixels to offset the validation message away from the control.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | &#x2718; | ``number``                                                                                                                                                             | ``6``          |
| ``validationPopoverPlacement`` | ``validation-popover-placement`` | Describes the preferred placement of the validation message.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | &#x2718; | ``"bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"`` | ``'bottom'``   |
| ``validationPopoverSkidding``  | ``validation-popover-skidding``  | The distance in pixels to offset the validation message along the control.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | &#x2718; | ``number``                                                                                                                                                             | ``0``          |
| ``validationStyle``            | ``validation-style``             | When ``popover``, the invalid message will be displayed as a popover; otherwise it will be shown as an inline message.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | &#x2714; | ``"inline" \| "popover"``                                                                                                                                              | ``'popover'``  |
| ``validator``                  | ``validator``                    | A javascript expression or function to validate the control.&nbsp;if the expression has the 'return' word in it, then we use as is,&nbsp;if not, then wrap it with return and ';' to make a function.&nbsp;&nbsp;The expression has access to the following parameters:&nbsp;&nbsp;<ol>&nbsp;<li> ``value``: The control's unmasked value.&nbsp;<li> ``x``: Alias for value.&nbsp;<li> ``text``: For consistency with the legacy control and form validation APIs, same as ``value``.&nbsp;<li> ``component``: The instance of the client component.&nbsp;<li> ``control``: Alias for component.&nbsp;</ol>                                      | &#x2718; | ``((...args: any[]) => any) \| string``                                                                                                                                |                |
| ``value``                      | ``value``                        | The input's unmasked value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | &#x2718; | ``string``                                                                                                                                                             |                |


</div>

## Events

<div style="overflow-x: auto;">

| Event             | Description                              | Type        |
| ----------------- | ---------------------------------------- | ----------- |
| ``dwc-blurred``   | Emitted after the control is blurred.    | ``void``    |
| ``dwc-focused``   | Emitted after the control is focused.    | ``void``    |
| ``dwc-modified``  | Emitted after the input is changed.      | ``string``  |
| ``dwc-spun-down`` | Emitted after the control has spun down. | ``void``    |
| ``dwc-spun-up``   | Emitted after the control has spun up.   | ``void``    |
| ``dwc-validated`` | Emitted when the control is validated    | ``boolean`` |


</div>

## Slots

<div style="overflow-x: auto;">

| Slot            | Description                                      |
| --------------- | ------------------------------------------------ |
| ``helper-text`` | The slot where the helper text should be placed. |
| ``prefix``      | The input's prefix. Can be used to insert icons  |
| ``suffix``      | The input's suffix. Can be used to insert icons  |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part               | Description                             |
| ------------------ | --------------------------------------- |
| ``alert``          | The alert component(validation)         |
| ``alert-popover``  | The alert-popover component(validation) |
| ``control``        | The component's base wrapper            |
| ``down-button``    | The input's down spinner button         |
| ``helper-text``    | The helper text part                    |
| ``input``          | The actual input                        |
| ``input-group``    | A wrapper around all inputs             |
| ``input-masked``   |                                         |
| ``input-pad``      | The hidden pad char input               |
| ``input-unmasked`` | The unmasked input                      |
| ``input-wrapper``  | The input,prefix & suffix wrapper       |
| ``label``          | The input's label                       |
| ``prefix``         | The input's prefix                      |
| ``spinners``       | The input's spinners wrapper            |
| ``suffix``         | The input's suffix                      |
| ``up-button``      | The input's up spinner button           |


</div>

## Hosted Classes


Hosted Classes are CSS classes that are applied to the host element of a component. They are useful for styling the host element from outside the component's own CSS.
They can either reflect the component's state, such as "disabled" or "active," or provide options to alter the component's style based on user interaction or other conditions.
<div style="overflow-x: auto;">

| CSS Class           | Description                                                             |
| ------------------- | ----------------------------------------------------------------------- |
| ``BBjControl``      | Always applied                                                          |
| ``BBjInputE``       | Always applied                                                          |
| ``bbj-disabled``    | Applied when the component is disabled                                  |
| ``bbj-focused``     | Applied when the component is focused                                   |
| ``bbj-readonly``    | Applied when the component is readonly                                  |
| ``bbj-hasLabel``    | Applied when the input renders a label                                  |
| ``bbj-valid``       | Applied when the input is marked as valid                               |
| ``bbj-invalid``     | Applied when the input is marked as invalid                             |
| ``bbj-required``    | Applied when the input required                                         |
| ``bbj-transparent`` | ``[optional]`` can be added manually to remove the component background |
| ``bbj-noborder``    | ``[optional]`` can be added manually to remove the component border     |


</div>

## CSS Properties


CSS Properties are DWC-defined variables in CSS, denoted by `--`, followed by a name.
They enable dynamic styling, reusability, and easy customization of components.
With CSS Properties, you can change the look and feel of a component simply by changing the value of a variable.
[[Read more]](theme-engine/css-variables).
<div style="overflow-x: auto;">

| Name                                           | Description                                       |
| ---------------------------------------------- | ------------------------------------------------- |
| ``--dwc-input-color``                          | The input's color                                 |
| ``--dwc-input-font-weight``                    | The input's font weight                           |
| ``--dwc-input-label-color``                    | The input's label color                           |
| ``--dwc-input-label-hover-color``              | The input's label color when the input is hovered |
| ``--dwc-input-pad-color``                      | The color of the pad input                        |
| ``--dwc-input-placeholder-color``              | The color of the placeholder                      |
| ``--dwc-input-required-field-indicator``       | The symbol of the required field indicator        |
| ``--dwc-input-required-field-indicator-color`` | The color of the required field indicator         |
| ``--dwc-input-spinner-color``                  | The color of the spinner arrows                   |


</div>

## Components Dependencies

- [dwc-alert-popover](web-components/dwc-alert-popover.md)
- [dwc-alert](web-components/dwc-alert.md)
- [dwc-icon-button](web-components/dwc-icon-button.md)

## Methods

### `getCursorPos() => Promise<number>`

Gets the caret position in the input. *

### Returns

Type: `Promise<number>`

### `getPart(part: string) => Promise<unknown>`

Query one of the component supported parts

### Returns

Type: `Promise<unknown>`

### `removeFocus() => Promise<void>`

Removes focus from the input.

### Returns

Type: `Promise<void>`

### `restore() => Promise<void>`

Sets the input's value in the control to the `restoreValue` string.

### Returns

Type: `Promise<void>`

### `selectAll() => Promise<void>`

Selects the input text.

### Returns

Type: `Promise<void>`

### `setCursorPos(position: number) => Promise<void>`

Sets the caret position in the input. *

### Returns

Type: `Promise<void>`

### `setFocus() => Promise<void>`

Sets focus on the input.

### Returns

Type: `Promise<void>`

### `setSelectionRange(start: number, end: number) => Promise<void>`

Sets the input selection range

### Returns

Type: `Promise<void>`

### `spin(upDirection: boolean) => Promise<void>`

Causes the spinner to spin in the specified direction.

### Returns

Type: `Promise<void>`

### `validate() => Promise<boolean>`

Validate the control

### Returns

Type: `Promise<boolean>`



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
