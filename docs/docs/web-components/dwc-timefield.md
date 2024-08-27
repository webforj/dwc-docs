# dwc-timefield
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--timefield-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `BBjInputT<dwc-timefield>` provides methods for manipulating a UI time control.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<div style="overflow-x: auto;">

| Name                           | Attribute                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Reflects | Type                                                                                                                                                                   | Default                                                         |
| ------------------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| ``autoValidate``               | ``auto-validate``                | When true, the control will be validated with every change.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | &#x2718; | ``boolean``                                                                                                                                                            | ``true``                                                        |
| ``autoValidateOnLoad``         | ``auto-validate-on-load``        | When true, the control will be validated when it is loaded for the first time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | &#x2718; | ``boolean``                                                                                                                                                            | ``false``                                                       |
| ``autoWasValidated``           | ``auto-was-validated``           | When true, the control will switch the ``valid`` property automatically after the control is validated and became valid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | &#x2718; | ``boolean``                                                                                                                                                            | ``false``                                                       |
| ``autofocus``                  | ``autofocus``                    | Automatically focuses the form control when the page is loaded.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | &#x2718; | ``boolean``                                                                                                                                                            | ``false``                                                       |
| ``customValue``                | ``custom-value``                 | When false, then the user won't be able to type a new value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | &#x2718; | ``boolean``                                                                                                                                                            | ``true``                                                        |
| ``disabled``                   | ``disabled``                     | When true, the input is enabled; otherwise, it is disabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | &#x2714; | ``boolean``                                                                                                                                                            | ``false``                                                       |
| ``expanse``                    | ``expanse``                      | The component's expanse                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | &#x2714; | ``"l" \| "m" \| "s" \| "xl" \| "xs"``                                                                                                                                  | ``'m'``                                                         |
| ``hasFocus``                   | ``has-focus``                    | <img style="vertical-align: middle; margin-right: 5px;" src="https://img.shields.io/badge/readonly-%23006aff" />When true, the control has focus; otherwise, it is blurred.                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | &#x2714; | ``boolean``                                                                                                                                                            | ``false``                                                       |
| ``helperText``                 | ``helper-text``                  | The component's helper text.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | &#x2718; | ``string``                                                                                                                                                             |                                                                 |
| ``highlightBehaviors``         |                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | &#x2718; | ``DwcHighlightBehaviors[]``                                                                                                                                            | ``[]``                                                          |
| ``insertMode``                 | ``insert-mode``                  | If in insert mode, then characters are inserted into the control when typed. Otherwise, the characters are overwritten.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | &#x2718; | ``boolean``                                                                                                                                                            | ``true``                                                        |
| ``invalid``                    | ``invalid``                      | Set to true to indicate that the user input is invalid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | &#x2714; | ``boolean``                                                                                                                                                            | ``false``                                                       |
| ``invalidMessage``             | ``invalid-message``              | An error message to display to the user when the control is invalid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | &#x2718; | ``string``                                                                                                                                                             | ``''``                                                          |
| ``label``                      | ``label``                        | The input's label                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | &#x2718; | ``string``                                                                                                                                                             |                                                                 |
| ``locale``                     | ``locale``                       | The input's locale. Used to localize the input. By default, it is the browser language.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | &#x2718; | ``string``                                                                                                                                                             | ``Intl.DateTimeFormat().resolvedOptions().locale \|\| 'en-US'`` |
| ``mask``                       | ``mask``                         | The bbj string mask                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | &#x2718; | ``string``                                                                                                                                                             | ``DwcTime.DEFAULT_TIME_MASK``                                   |
| ``max``                        | ``max``                          | The maximum allowed time as number.&nbsp;When the value is negative, there is no maximum time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | &#x2718; | ``number``                                                                                                                                                             | ``-1``                                                          |
| ``min``                        | ``min``                          | The minimum time allowed time as number.&nbsp;When the value is negative, there is no minimum time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | &#x2718; | ``number``                                                                                                                                                             | ``-1``                                                          |
| ``name``                       | ``name``                         | The input's name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | &#x2714; | ``string``                                                                                                                                                             |                                                                 |
| ``pattern``                    | ``pattern``                      | A regular expression the input's value should match.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | &#x2718; | ``string``                                                                                                                                                             |                                                                 |
| ``pickerAutoOpen``             | ``picker-auto-open``             | When true, the control will open the picker automatically when the user start&nbsp;interacting with the control by click, clicking Enter or arrow keys.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | &#x2718; | ``boolean``                                                                                                                                                            | ``false``                                                       |
| ``pickerDistance``             | ``picker-distance``              | The distance in pixels to offset the picker away from the control.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | &#x2718; | ``number``                                                                                                                                                             | ``6``                                                           |
| ``pickerIconVisible``          | ``picker-icon-visible``          | When true, the input will show an icon to toggle the time's picker.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | &#x2718; | ``boolean``                                                                                                                                                            | ``true``                                                        |
| ``pickerMaxRowCount``          | ``picker-max-row-count``         | Sets the maximum number of rows that the drop-down picker list will display.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | &#x2718; | ``number``                                                                                                                                                             |                                                                 |
| ``pickerOpenHeight``           | ``picker-open-height``           | The height of the picker's dropdown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | &#x2718; | ``string``                                                                                                                                                             | ``''``                                                          |
| ``pickerOpenWidth``            | ``picker-open-width``            | The width of the picker's dropdown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | &#x2718; | ``string``                                                                                                                                                             | ``''``                                                          |
| ``pickerPlacement``            | ``picker-placement``             | The preferred placement of the picker dropdown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | &#x2718; | ``"bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"`` | ``'bottom-start'``                                              |
| ``pickerSkidding``             | ``picker-skidding``              | The distance in pixels to offset the picker list along its trigger.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | &#x2718; | ``number``                                                                                                                                                             | ``0``                                                           |
| ``pickerType``                 | ``picker-type``                  | Give the timer picker dropdown a custom type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | &#x2714; | ``string``                                                                                                                                                             | ``'timepicker'``                                                |
| ``placeholder``                | ``placeholder``                  | A text that appears in the input when it has no value set.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | &#x2718; | ``string``                                                                                                                                                             |                                                                 |
| ``rawValue``                   | ``raw-value``                    | The input's raw value as number. (Unmasked value).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | &#x2718; | ``number``                                                                                                                                                             |                                                                 |
| ``readonly``                   | ``readonly``                     | When true, puts the input in readonly mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | &#x2714; | ``boolean``                                                                                                                                                            | ``false``                                                       |
| ``required``                   | ``required``                     | A true value indicates a value is required for the form to be submittable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | &#x2714; | ``boolean``                                                                                                                                                            | ``false``                                                       |
| ``restoreValue``               | ``restore-value``                | The restore value is the number that appears when the user hits the restore key (usually ESC).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | &#x2718; | ``string``                                                                                                                                                             | ``'-1'``                                                        |
| ``showSpinners``               | ``show-spinners``                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | &#x2718; | ``boolean``                                                                                                                                                            | ``false``                                                       |
| ``spinnable``                  | ``spinnable``                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | &#x2718; | ``boolean``                                                                                                                                                            | ``false``                                                       |
| ``step``                       | ``step``                         | The interval in seconds between the time values displayed in the dropdown.&nbsp;&nbsp;It specifies how frequently the time values are generated.&nbsp;For example, if step is set to 1800 (30 minutes), the generated&nbsp;items will contain time values at 30-minute intervals throughout the day.                                                                                                                                                                                                                                                                                                                                             | &#x2718; | ``number``                                                                                                                                                             | ``3600``                                                        |
| ``tabTraversable``             | ``tab-traversable``              | Indicates that the component can receive focus. A negative value indicates that the component is not reachable via sequential keyboard navigation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | &#x2718; | ``number``                                                                                                                                                             | ``0``                                                           |
| ``valid``                      | ``valid``                        | Set to true to indicate that the user input is valid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | &#x2714; | ``boolean``                                                                                                                                                            | ``false``                                                       |
| ``validationIcon``             | ``validation-icon``              | The icon to use with the validation message&nbsp;&nbsp;<ol>&nbsp;<li> <b>URL</b>: (ex: /path/to/image.png)&nbsp;<li> <b>Data URL</b>: (ex: data:image/jpeg;base64,/9j/4SDpRXhpZgAAT....)&nbsp;<li> <b>ICON_NAME</b>: An icon to load from the default Dwc icons pool. (ex: ``x``)&nbsp;<li> <b>POOL_NAME:ICON_NAME</b>: An icon to load from the passed pool. (ex: ``feather:x``)&nbsp;<li> <b>An object</b> which provides all the required properties to build the icon.&nbsp;   for instance:&nbsp;   <ol>&nbsp;     <li> {name: 'x'}&nbsp;     <li> {pool: 'feather', name: 'x'}&nbsp;     <li> {src: 'image/path'}&nbsp;   </ol>&nbsp;</ol> | &#x2718; | ``object \| string``                                                                                                                                                   | ``'dwc:info'``                                                  |
| ``validationPopoverDistance``  | ``validation-popover-distance``  | The distance in pixels from which to offset the validation message away from the control.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | &#x2718; | ``number``                                                                                                                                                             | ``6``                                                           |
| ``validationPopoverPlacement`` | ``validation-popover-placement`` | Describes the preferred placement of the validation message.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | &#x2718; | ``"bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"`` | ``'bottom'``                                                    |
| ``validationPopoverSkidding``  | ``validation-popover-skidding``  | The distance in pixels from which to offset the validation message along the control.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | &#x2718; | ``number``                                                                                                                                                             | ``0``                                                           |
| ``validationStyle``            | ``validation-style``             | When ``popover``, the invalid message will be displayed as a popover, as an inline message otherwise.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | &#x2714; | ``"inline" \| "popover"``                                                                                                                                              | ``'popover'``                                                   |
| ``validator``                  | ``validator``                    | A Javascript expression or function to validate the control.&nbsp;If the expression has the 'return' keyword in it, then it is used as is;&nbsp;if not, then wrap it with ``return`` and ';' to make a function.&nbsp;&nbsp;The expression has access to the following parameters:&nbsp;&nbsp;<ol>&nbsp; <li>``value``: The control's&nbsp; <li>``x``: Alias for value&nbsp; <li>``text``: For consistency with the legacy control and form validation APIs, same as ``value``&nbsp; <li>``component``: The instance of the client component&nbsp; <li>``control``: Alias for component&nbsp;</ol>                                               | &#x2718; | ``((...args: any[]) => any) \| string``                                                                                                                                |                                                                 |
| ``value``                      | ``value``                        | The input's masked value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | &#x2718; | ``string``                                                                                                                                                             | ``''``                                                          |


</div>

## Events

<div style="overflow-x: auto;">

| Event             | Description                                    | Type        |
| ----------------- | ---------------------------------------------- | ----------- |
| ``dwc-blurred``   | Emitted after the control is blurred.          | ``void``    |
| ``dwc-focused``   | Emitted after the control is focused.          | ``void``    |
| ``dwc-modified``  | Emitted after the controls's value is changed. | ``string``  |
| ``dwc-spun-down`` | Emitted after the control has spun down.       | ``void``    |
| ``dwc-spun-up``   | Emitted after the control has spun up.         | ``void``    |
| ``dwc-validated`` | Emitted when the control is invalid.           | ``boolean`` |


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

| Part              | Description                                         |
| ----------------- | --------------------------------------------------- |
| ``alert``         | The alert component(validation)                     |
| ``alert-popover`` | The alert-popover component(validation)             |
| ``control``       | The component's base wrapper                        |
| ``down-button``   | The input's down spinner button                     |
| ``helper-text``   | The helper text part                                |
| ``input``         | The actual input                                    |
| ``input-wrapper`` | The input,prefix & suffix wrapper                   |
| ``label``         | The input's label                                   |
| ``picker``        | The time picker dropdown                            |
| ``picker-button`` | The calendar icon button which toggles the calendar |
| ``prefix``        | The input's prefix                                  |
| ``spinners``      | The input's spinners wrapper                        |
| ``suffix``        | The input's suffix                                  |
| ``up-button``     | The input's up spinner button                       |


</div>

## Hosted Classes


Hosted Classes are CSS classes that are applied to the host element of a component. They are useful for styling the host element from outside the component's own CSS.
They can either reflect the component's state, such as "disabled" or "active," or provide options to alter the component's style based on user interaction or other conditions.
<div style="overflow-x: auto;">

| CSS Class           | Description                                                             |
| ------------------- | ----------------------------------------------------------------------- |
| ``BBjControl``      | Always applied                                                          |
| ``BBjInputT``       | Always applied                                                          |
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
| ``--dwc-input-placeholder-color``              | The color of the placeholder                      |
| ``--dwc-input-required-field-indicator``       | The symbol of the required field indicator        |
| ``--dwc-input-required-field-indicator-color`` | The color of the required field indicator         |
| ``--dwc-input-spinner-color``                  | The color of the spinner arrows                   |


</div>

## Components Dependencies

- [dwc-dropdown](web-components/dwc-dropdown.md)
- [dwc-icon-button](web-components/dwc-icon-button.md)
- [dwc-alert](web-components/dwc-alert.md)
- [dwc-alert-popover](web-components/dwc-alert-popover.md)

## Methods

### `getCursorPos() => Promise<number>`

Gets the caret position in the input. *

### Returns

Type: `Promise<number>`

### `getPart(part: string) => Promise<unknown>`

Query one of the component supported parts.

### Returns

Type: `Promise<unknown>`

### `getSelectionRange() => Promise<{ start: number; end: number; }>`

Gets the input selection range.

### Returns

Type: `Promise<{ start: number; end: number; }>`

### `openPicker() => Promise<void>`

Programmatically show the inputt picker.

### Returns

Type: `Promise<void>`

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

Sets the caret position in the input.

### Returns

Type: `Promise<void>`

### `setFocus() => Promise<void>`

Sets focus on the input.

### Returns

Type: `Promise<void>`

### `setSelectionRange(start: number, end: number) => Promise<void>`

Set the input selection range.

### Returns

Type: `Promise<void>`

### `spin(upDirection: boolean) => Promise<void>`

Causes the spinner to spin in the specified direction.

### Returns

Type: `Promise<void>`

### `validate() => Promise<boolean>`

Validates the control

### Returns

Type: `Promise<boolean>`



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
