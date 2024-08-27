# dwc-radio
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--radio-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `BBjRadioButton<dwc-radio>` provides methods for manipulating a UI radio button control.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<div style="overflow-x: auto;">

| Name                           | Attribute                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Reflects | Type                                                                                                                                                                   | Default        |
| ------------------------------ | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| ``activation``                 | ``activation``                   | When set to auto, radio buttons will be selected when they gain focus for any reason. When set to&nbsp; manual, radio buttons will not be selected when they gain focus programmatically or by user keyboard operation (LEFT,  RIGHT, UP, DOWN arrows within a group).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | &#x2718; | ``"auto" \| "manual"``                                                                                                                                                 | ``'manual'``   |
| ``autoValidate``               | ``auto-validate``                | When true, the control will be validated with every change.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | &#x2718; | ``boolean``                                                                                                                                                            | ``true``       |
| ``autoValidateOnLoad``         | ``auto-validate-on-load``        | When true, the control will be validated when it is loaded for the first time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | &#x2718; | ``boolean``                                                                                                                                                            | ``false``      |
| ``autoWasValidated``           | ``auto-was-validated``           | When true, the control will switch the ``valid`` property automatically after the control is validated and became valid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | &#x2718; | ``boolean``                                                                                                                                                            | ``false``      |
| ``checked``                    | ``checked``                      | When true, the radio button is checked , false otherwise                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | &#x2714; | ``boolean``                                                                                                                                                            | ``false``      |
| ``disabled``                   | ``disabled``                     | True to disable the radio button , false to enable it                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | &#x2714; | ``boolean``                                                                                                                                                            | ``false``      |
| ``expanse``                    | ``expanse``                      | The component's expanse.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | &#x2714; | ``"l" \| "m" \| "s" \| "xl" \| "xs"``                                                                                                                                  | ``'m'``        |
| ``hasFocus``                   | ``has-focus``                    | When true,  the radio button is focused , false otherwise                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | &#x2714; | ``boolean``                                                                                                                                                            | ``false``      |
| ``helperText``                 | ``helper-text``                  | The component's helper text.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | &#x2718; | ``string``                                                                                                                                                             |                |
| ``invalid``                    | ``invalid``                      | Set to true to indicate that the user input is invalid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | &#x2714; | ``boolean``                                                                                                                                                            | ``false``      |
| ``invalidMessage``             | ``invalid-message``              | An error message to present to the user when the control is invalid                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | &#x2718; | ``string``                                                                                                                                                             |                |
| ``label``                      | ``label``                        | The radio button label                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | &#x2718; | ``string``                                                                                                                                                             |                |
| ``name``                       | ``name``                         | The radio button name<br><br>&nbsp;&nbsp;A radio group is defined by giving each of radio buttons in the group&nbsp; the same name. Once a radio group is established, selecting any radio&nbsp; button in that group automatically deselects any currently-selected&nbsp; radio button in the same group.<br><br>&nbsp;&nbsp;You can have as many radio groups on a page as you like, as long as&nbsp; each has its own unique name.<br><br>&nbsp;&nbsp;For example, if your form needs to ask the user for their preferred&nbsp; contact method, you might create three radio buttons, each with&nbsp; the name property set to contact but one with the value email, one&nbsp; with the value phone, and one with the value mail.<br><br>&nbsp;&nbsp;The user never sees the value or the name unless you&nbsp; expressly add code to display it. | &#x2714; | ``string``                                                                                                                                                             | ``''``         |
| ``readonly``                   | ``readonly``                     | When true, put the radio button in readonly mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | &#x2714; | ``boolean``                                                                                                                                                            | ``false``      |
| ``required``                   | ``required``                     | When true, a value is required or must be check for the form to be submittable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | &#x2714; | ``boolean``                                                                                                                                                            | ``false``      |
| ``switch``                     | ``switch``                       | When true, the radio button will be rendered as a switch.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | &#x2714; | ``boolean``                                                                                                                                                            | ``false``      |
| ``tabTraversable``             | ``tab-traversable``              | Indicates that the element can be focused. A negative value means that the element is not reachable via sequential keyboard navigation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | &#x2718; | ``number``                                                                                                                                                             | ``0``          |
| ``valid``                      | ``valid``                        | Set to true to indicate that the user input is valid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | &#x2714; | ``boolean``                                                                                                                                                            | ``false``      |
| ``validationIcon``             | ``validation-icon``              | The icon to use with the validation message&nbsp;&nbsp;<ol>&nbsp;<li> <b>URL</b>: (ex: /path/to/image.png)&nbsp;<li> <b>Data URL</b>: (ex: data:image/jpeg;base64,/9j/4SDpRXhpZgAAT....)&nbsp;<li> <b>ICON_NAME</b>: An icon to load from the default Dwc icons pool. (ex: ``x``)&nbsp;<li> <b>POOL_NAME:ICON_NAME</b>: An icon to load from the passed pool. (ex: ``feather:x``)&nbsp;<li> <b>An object</b> which provides all the required properties to build the icon.&nbsp;   for instance:&nbsp;   <ol>&nbsp;     <li> {name: 'x'}&nbsp;     <li> {pool: 'feather', name: 'x'}&nbsp;     <li> {src: 'image/path'}&nbsp;   </ol>&nbsp;</ol>                                                                                                                                                                                                     | &#x2718; | ``object \| string``                                                                                                                                                   | ``'dwc:info'`` |
| ``validationPopoverDistance``  | ``validation-popover-distance``  | The distance in pixels from which to offset the validation message away from the control.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | &#x2718; | ``number``                                                                                                                                                             | ``6``          |
| ``validationPopoverPlacement`` | ``validation-popover-placement`` | Describes the preferred placement of the validation message.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | &#x2718; | ``"bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"`` | ``'bottom'``   |
| ``validationPopoverSkidding``  | ``validation-popover-skidding``  | The distance in pixels from which to offset the validation message along the control.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | &#x2718; | ``number``                                                                                                                                                             | ``0``          |
| ``validationStyle``            | ``validation-style``             | When ``popover``, the invalid message will be displayed as a popover, as an inline message otherwise.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | &#x2714; | ``"inline" \| "popover"``                                                                                                                                              | ``'popover'``  |
| ``validator``                  | ``validator``                    | A Javascript expression or function to validate the control.&nbsp;If the expression has the 'return' keyword in it, then it is used as is;&nbsp;if not, then wrap it with ``return`` and ';' to make a function.&nbsp;&nbsp;The expression has access to the following parameters:&nbsp;<ol>&nbsp; <li>``value``: The control's&nbsp; <li>``x``: Alias for value&nbsp; <li>``text``: For consistency with the legacy control and form validation APIs, same as ``value``&nbsp; <li>``component``: The instance of the client component&nbsp; <li>``control``: Alias for component&nbsp;</ol>                                                                                                                                                                                                                                                         | &#x2718; | ``((...args: any[]) => any) \| string``                                                                                                                                |                |
| ``value``                      | ``value``                        | The radio button value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | &#x2718; | ``string``                                                                                                                                                             | ``''``         |


</div>

## Events

<div style="overflow-x: auto;">

| Event             | Description                                   | Type        |
| ----------------- | --------------------------------------------- | ----------- |
| ``dwc-blurred``   | Emitted after the control is blurred.         | ``void``    |
| ``dwc-changed``   | Emitted after the input is checked/unchecked. | ``void``    |
| ``dwc-focused``   | Emitted after the control is focused.         | ``void``    |
| ``dwc-validated`` | Emitted when the control is validated         | ``boolean`` |


</div>

## Slots

<div style="overflow-x: auto;">

| Slot            | Description                                      |
| --------------- | ------------------------------------------------ |
| ``helper-text`` | The slot where the helper text should be placed. |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part                 | Description                             |
| -------------------- | --------------------------------------- |
| ``alert``            | The alert component(validation)         |
| ``alert-popover``    | The alert-popover component(validation) |
| ``checked-icon``     | The checked icon wrapper                |
| ``checked-icon-svg`` | The checked svg                         |
| ``control``          | The component's base wrapper            |
| ``helper-text``      | The helper text part                    |
| ``input``            | The actual input                        |
| ``input-wrapper``    | The input's wrapper                     |
| ``label``            | The input's label                       |


</div>

## Hosted Classes


Hosted Classes are CSS classes that are applied to the host element of a component. They are useful for styling the host element from outside the component's own CSS.
They can either reflect the component's state, such as "disabled" or "active," or provide options to alter the component's style based on user interaction or other conditions.
<div style="overflow-x: auto;">

| CSS Class             | Description                                  |
| --------------------- | -------------------------------------------- |
| ``BBjControl``        | Always applied                               |
| ``BBjRadioButton``    | Always applied                               |
| ``bbj-disabled``      | Applied when the component is disabled       |
| ``bbj-focused``       | Applied when the component is focused        |
| ``bbj-readonly``      | Applied when the component is readonly       |
| ``bbj-checked``       | Applied when the checkbox is checked         |
| ``bbj-unchecked``     | Applied when the checkbox is unchecked       |
| ``bbj-valid``         | Applied when the checkbox is valid           |
| ``bbj-invalid``       | Applied when the checkbox is invalid         |
| ``bbj-reverse-order`` | reverse the order of the label and the radio |


</div>

## CSS Properties


CSS Properties are DWC-defined variables in CSS, denoted by `--`, followed by a name.
They enable dynamic styling, reusability, and easy customization of components.
With CSS Properties, you can change the look and feel of a component simply by changing the value of a variable.
[[Read more]](theme-engine/css-variables).
<div style="overflow-x: auto;">

| Name                                       | Description                                                                                |
| ------------------------------------------ | ------------------------------------------------------------------------------------------ |
| ``--dwc-radio-background``                 | The radio default background when unchecked                                                |
| ``--dwc-radio-checked-background``         | The radio background when checked                                                          |
| ``--dwc-radio-checked-border-color``       | The radio border color when checked                                                        |
| ``--dwc-radio-checked-color``              | The radio color when checked                                                               |
| ``--dwc-radio-focus-ring``                 | The radio focus ring                                                                       |
| ``--dwc-radio-hover-background``           | The radio hover background when unchecked                                                  |
| ``--dwc-radio-hover-border-color``         | The radio hover border color when unchecked                                                |
| ``--dwc-radio-hover-checked-background``   | The radio background when checked and hovered                                              |
| ``--dwc-radio-hover-checked-border-color`` | The radio border color when checked and hovered                                            |
| ``--dwc-radio-hover-checked-color``        | The radio color when checked and hovered                                                   |
| ``--dwc-radio-label-color``                | The radio label's color                                                                    |
| ``--dwc-radio-padding``                    | The radio padding (should be equal to or higher than the ``--dwc-focus-ring-width``)       |
| ``--dwc-radio-size``                       | The radio default size (This variable is overridden when the ``expanse`` attribute is set) |
| ``--dwc-switch-background``                | The switch background when unchecked                                                       |
| ``--dwc-switch-border-color``              | The switch border color when unchecked                                                     |
| ``--dwc-switch-border-radius``             | The switch border radius when unchecked                                                    |
| ``--dwc-switch-checked-background``        | The switch background when checked                                                         |
| ``--dwc-switch-checked-border-color``      | The switch border color when checked                                                       |
| ``--dwc-switch-focus-border-color``        | The switch focus border color                                                              |
| ``--dwc-switch-focus-ring``                | The switch focus ring                                                                      |
| ``--dwc-switch-hover-background``          | The switch hover background when unchecked                                                 |
| ``--dwc-switch-hover-checked-background``  | The switch background when checked and hovered                                             |
| ``--dwc-switch-padding``                   | The switch padding when unchecked                                                          |
| ``--dwc-switch-size``                      | The switch size                                                                            |
| ``--dwc-switch-thumb-background``          | The switch thumb background when unchecked                                                 |
| ``--dwc-switch-thumb-shadow``              | The switch thumb shadow when unchecked                                                     |
| ``--dwc-switch-thumb-size``                | The switch thumb size                                                                      |


</div>

## Components Dependencies

- [dwc-alert](web-components/dwc-alert.md)
- [dwc-alert-popover](web-components/dwc-alert-popover.md)

## Methods

### `getPart(part: string) => Promise<unknown>`

Query one of the component supported parts

### Returns

Type: `Promise<unknown>`

### `removeFocus() => Promise<void>`

Remove focus from the radio button

### Returns

Type: `Promise<void>`

### `setFocus() => Promise<void>`

Set focus on the radio button

### Returns

Type: `Promise<void>`

### `validate() => Promise<boolean>`

Validate the control

### Returns

Type: `Promise<boolean>`



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
