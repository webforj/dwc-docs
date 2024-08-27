# bbj-cedit
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-bbj--cedit-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `BBjCEdit<bbj-cedit>` provides methods for manipulating a UI textarea control.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<div style="overflow-x: auto;">

| Name                           | Attribute                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Reflects | Type                                                                                                                                                                   | Default        |
| ------------------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| ``autoValidate``               | ``auto-validate``                | When true, the component will be validated with every change.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | &#x2718; | ``boolean``                                                                                                                                                            | ``true``       |
| ``autoValidateOnLoad``         | ``auto-validate-on-load``        | When true, the component will be validated when it is loaded for the first time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | &#x2718; | ``boolean``                                                                                                                                                            | ``false``      |
| ``autoWasValidated``           | ``auto-was-validated``           | When true, the component will switch the ``valid`` property on automatically after the component is validated and became valid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | &#x2718; | ``boolean``                                                                                                                                                            | ``false``      |
| ``autocomplete``               | ``autocomplete``                 | Toggles the auto-completion feature on/off.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | &#x2718; | ``string``                                                                                                                                                             | ``'off'``      |
| ``autocorrect``                | ``autocorrect``                  | A string indicating whether or not autocorrect is on or off. Safari only.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | &#x2718; | ``"off" \| "on"``                                                                                                                                                      | ``'off'``      |
| ``autofocus``                  | ``autofocus``                    | Automatically focus the form control when the page is loaded.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | &#x2718; | ``boolean``                                                                                                                                                            | ``false``      |
| ``cols``                       | ``cols``                         | The visible width of the component, in average character widths. If it is specified, it must be a positive integer. If it is not specified, the default value is 20.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | &#x2718; | ``number``                                                                                                                                                             | ``20``         |
| ``disabled``                   | ``disabled``                     | When true, the component cannot be interacted with.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | &#x2714; | ``boolean``                                                                                                                                                            | ``false``      |
| ``expanse``                    | ``expanse``                      | The component's expanse.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | &#x2714; | ``"l" \| "m" \| "s" \| "xl" \| "xs"``                                                                                                                                  | ``'m'``        |
| ``hasFocus``                   | ``has-focus``                    | When true, the component has focus; otherwise, it is blurred                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | &#x2714; | ``boolean``                                                                                                                                                            | ``false``      |
| ``highlightBehaviors``         |                                  | An array of supported of highlight behaviors.&nbsp;&nbsp;<ol>&nbsp; <li>KEY     : Contents of the component are automatically highlighted when the component receives focus by tabbing into it.&nbsp; <li>MOUSE   : Contents of the component are automatically highlighted when the component receives focus by clicking into it with the mouse.&nbsp; <li>REQUEST : Contents of the component are automatically highlighted when the component receives focus programmatically by calling the ``setFocus`` method.&nbsp;</ol>                                                                                                                         | &#x2718; | ``BbjHighlightBehaviors[]``                                                                                                                                            | ``[]``         |
| ``insertMode``                 | ``insert-mode``                  | If in insert mode, then characters are inserted into the component when typed. Otherwise, the characters are overwritten.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | &#x2718; | ``boolean``                                                                                                                                                            | ``true``       |
| ``invalid``                    | ``invalid``                      | Set to true to indicate that user input is invalid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | &#x2714; | ``boolean``                                                                                                                                                            | ``false``      |
| ``invalidMessage``             | ``invalid-message``              | An error message to present to the user when the component is invalid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | &#x2718; | ``string``                                                                                                                                                             | ``''``         |
| ``label``                      | ``label``                        | the component's label.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | &#x2718; | ``string``                                                                                                                                                             |                |
| ``maxLineCount``               | ``max-line-count``               | Sets the maximum number of paragraphs (lines) that can be entered.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | &#x2718; | ``number``                                                                                                                                                             |                |
| ``maxLineLength``              | ``max-line-length``              | Sets the maximum number of characters allowed in a control paragraph.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | &#x2718; | ``number``                                                                                                                                                             |                |
| ``maxlength``                  | ``maxlength``                    | Maximum length (number of characters) of value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | &#x2718; | ``number``                                                                                                                                                             |                |
| ``minlength``                  | ``minlength``                    | Minimum length (number of characters) of value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | &#x2718; | ``number``                                                                                                                                                             |                |
| ``name``                       | ``name``                         | The component's name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | &#x2714; | ``string``                                                                                                                                                             |                |
| ``placeholder``                | ``placeholder``                  | Text that appears in the component when it has no value set.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | &#x2718; | ``string``                                                                                                                                                             |                |
| ``readonly``                   | ``readonly``                     | When true, put the input in readonly mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | &#x2714; | ``boolean``                                                                                                                                                            | ``false``      |
| ``required``                   | ``required``                     | When true, a value is required for the form to be submittable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | &#x2714; | ``boolean``                                                                                                                                                            | ``false``      |
| ``rows``                       | ``rows``                         | The number of visible text lines for the component.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | &#x2718; | ``number``                                                                                                                                                             |                |
| ``spellcheck``                 | ``spellcheck``                   | When true, the component will have its spelling and grammar checked.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | &#x2718; | ``boolean``                                                                                                                                                            | ``false``      |
| ``tabTraversable``             | ``tab-traversable``              | Indicates that the component can be focused. A negative value means that the component is not reachable via sequential keyboard navigation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | &#x2718; | ``number``                                                                                                                                                             | ``0``          |
| ``valid``                      | ``valid``                        | Set to true to indicate that the user input is valid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | &#x2714; | ``boolean``                                                                                                                                                            | ``false``      |
| ``validationIcon``             | ``validation-icon``              | The icon to use with the validation message.&nbsp;&nbsp;<ol>&nbsp;<li> <b>URL</b>: (ex: /path/to/image.png)&nbsp;<li> <b>Data URL</b>: (ex: data:image/jpeg;base64,/9j/4SDpRXhpZgAAT....)&nbsp;<li> <b>ICON_NAME</b>: An icon to load from the default BBj icons pool. (ex: ``x``)&nbsp;<li> <b>POOL_NAME:ICON_NAME</b>: An icon to load from the passed pool. (ex: ``feather:x``)&nbsp;<li> <b>An object</b> which provides all the required properties to build the icon.&nbsp;   for instance:&nbsp;   <ol>&nbsp;     <li> {name: 'x'}&nbsp;     <li> {pool: 'feather', name: 'x'}&nbsp;     <li> {src: 'image/path'}&nbsp;   </ol>&nbsp;</ol>       | &#x2718; | ``object \| string``                                                                                                                                                   | ``'bbj:info'`` |
| ``validationPopoverDistance``  | ``validation-popover-distance``  | The distance in pixels to offset the validation message away from the component.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | &#x2718; | ``number``                                                                                                                                                             | ``6``          |
| ``validationPopoverPlacement`` | ``validation-popover-placement`` | The preferred placement of the validation message.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | &#x2718; | ``"bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"`` | ``'bottom'``   |
| ``validationPopoverSkidding``  | ``validation-popover-skidding``  | The distance in pixels to offset the validation message along the component.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | &#x2718; | ``number``                                                                                                                                                             | ``0``          |
| ``validationStyle``            | ``validation-style``             | When ``popover``, the invalid message will be displayed as a popover; otherwise it will display as an inline message.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | &#x2714; | ``"inline" \| "popover"``                                                                                                                                              | ``'popover'``  |
| ``validator``                  | ``validator``                    | A Javascript expression or function to validate the component.&nbsp;&nbsp;If the expression has the ``return`` keyword in it, then it is used as is;&nbsp;if not, then wrap it with ``return`` and ``;`` to make a function.&nbsp;&nbsp;The expression has access to the following parameters:&nbsp;<ol>&nbsp; <li>``value``: the component's value&nbsp; <li>``x``: Alias for value&nbsp; <li>``text``: For consistency with the legacy control and form validation APIs, same as ``value``&nbsp; <li>``component``: The instance of the client component&nbsp; <li>``control``: Alias for component&nbsp;</ol>                                        | &#x2718; | ``((...args: any[]) => any) \| string``                                                                                                                                |                |
| ``value``                      | ``value``                        | The input's value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | &#x2718; | ``any``                                                                                                                                                                | ``''``         |
| ``wrap``                       | ``wrap``                         | Indicates how the component will wrap the text. Possible values are:&nbsp;&nbsp;<ol>&nbsp; <li>``hard``: The browser automatically inserts line breaks ``(CR+LF)`` so that each line has no more than the width of the component; the cols attribute must also be specified for this to take effect.&nbsp; <li>``soft``: The browser ensures that all line breaks in the value consist of a ``CR+LF`` pair, but does not insert any additional line breaks.&nbsp; <li>``off`` : Like soft but changes appearance to white-space: pre so line segments exceeding cols are not wrapped and the ``<textarea>`` becomes horizontally scrollable.&nbsp;</ol> | &#x2718; | ``"hard" \| "off" \| "soft"``                                                                                                                                          | ``'off'``      |


</div>

## Events

<div style="overflow-x: auto;">

| Event             | Description                             | Type        |
| ----------------- | --------------------------------------- | ----------- |
| ``bbj-blurred``   | Emitted after the component is blurred. | ``void``    |
| ``bbj-focused``   | Emitted after the component is focused. | ``void``    |
| ``bbj-modified``  | Emitted after the input is changed.     | ``string``  |
| ``bbj-validated`` | Emitted when the input is invalid.      | ``boolean`` |


</div>

## Slots

<div style="overflow-x: auto;">

| Slot       | Description                                      |
| ---------- | ------------------------------------------------ |
| ``prefix`` | The input's prefix - can be used to insert icons |
| ``suffix`` | The input's suffix - can be used to insert icons |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part              | Description                             |
| ----------------- | --------------------------------------- |
| ``alert``         | The alert component(validation)         |
| ``alert-popover`` | The alert-popover component(validation) |
| ``control``       | The component's base wrapper.           |
| ``input``         | The actual input                        |
| ``input-wrapper`` | The input, prefix and suffix wrapper    |
| ``label``         | The input's label                       |


</div>

## Hosted Classes


Hosted Classes are CSS classes that are applied to the host element of a component. They are useful for styling the host element from outside the component's own CSS.
They can either reflect the component's state, such as "disabled" or "active," or provide options to alter the component's style based on user interaction or other conditions.
<div style="overflow-x: auto;">

| CSS Class              | Description                                                                                                                                                   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ``BBjControl``         | Always applied                                                                                                                                                |
| ``BBjCEdit``           | Always applied                                                                                                                                                |
| ``bbj-disabled``       | Applied when the component is disabled                                                                                                                        |
| ``bbj-focused``        | Applied when the component is focused                                                                                                                         |
| ``bbj-readonly``       | Applied when the component is readonly                                                                                                                        |
| ``bbj-hasLabel``       | Applied when the input renders a label                                                                                                                        |
| ``bbj-valid``          | Applied when the input is marked as valid                                                                                                                     |
| ``bbj-invalid``        | Applied when the input is marked as invalid                                                                                                                   |
| ``bbj-required``       | Applied when the input required                                                                                                                               |
| ``bbj-transparent``    | ``[optional]`` Can be added manually to remove the component background                                                                                       |
| ``bbj-noborder``       | ``[optional]`` Can be added manually to remove the component border                                                                                           |
| ``bbj-no-overflow-x``  | ``[optional]`` Can be added manually to disable horizontal overflow                                                                                           |
| ``bbj-no-overflow-y``  | ``[optional]`` Can be added manually to disable vertical overflow                                                                                             |
| ``bbj-no-overflow``    | ``[optional]`` Can be added manually to disable horizontal & vertical overflow                                                                                |
| ``bbj-wordBreak-word`` | ``[optional]`` Can be added manually to use the default line break rule.                                                                                      |
| ``bbj-wordBreak-all``  | ``[optional]`` Can be added manually to prevent overflow; word breaks should be inserted between any two characters (excluding Chinese/Japanese/Korean text). |


</div>

## CSS Properties


CSS Properties are DWC-defined variables in CSS, denoted by `--`, followed by a name.
They enable dynamic styling, reusability, and easy customization of components.
With CSS Properties, you can change the look and feel of a component simply by changing the value of a variable.
[[Read more]](theme-engine/css-variables).
<div style="overflow-x: auto;">

| Name                                     | Description                                     |
| ---------------------------------------- | ----------------------------------------------- |
| ``--basis-input-color``                  | The input's color                               |
| ``--basis-input-label-color``            | The input's label color                         |
| ``--bbj-input-font-weight``              | The input's font weight                         |
| ``--bbj-input-invalid-background-color`` | The input's background color when it is invalid |
| ``--bbj-input-invalid-color``            | The input's color when it is invalid            |
| ``--bbj-input-placeholder-color``        | The color of the placeholder                    |
| ``--bbj-input-valid-background-color``   | The input's background color when it is valid   |
| ``--bbj-input-valid-color``              | The input's color when it is valid              |


</div>

## Components Dependencies

- [bbj-alert](web-components/bbj-alert.md)
- [bbj-alert-popover](web-components/bbj-alert-popover.md)

## Methods

### `getCursorPos() => Promise<number>`

Gets the caret position in the input.

### Returns

Type: `Promise<number>`

### `getPart(part: string) => Promise<unknown>`

Queries one of the component supported parts.

### Returns

Type: `Promise<unknown>`

### `getSelectionRange() => Promise<{ start: number; end: number; }>`

Gets the input selection range.

### Returns

Type: `Promise<{ start: number; end: number; }>`

### `removeFocus() => Promise<void>`

Removes focus from the input.

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

Sets the input selection range.

### Returns

Type: `Promise<void>`

### `validate() => Promise<boolean>`

Validates the component.

### Returns

Type: `Promise<boolean>`



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
