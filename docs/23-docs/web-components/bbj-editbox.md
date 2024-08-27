# bbj-editbox
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-bbj--editbox-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `BBjEditBox<bbj-editbox>` provides methods for manipulating a UI edit box control.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<div style="overflow-x: auto;">

| Name                           | Attribute                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Reflects | Type                                                                                                                                                                       | Default        |
| ------------------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| ``accept``                     | ``accept``                       | Hint for expected file type in file upload controls.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | &#x2718; | ``string``                                                                                                                                                                 | ``''``         |
| ``autoValidate``               | ``auto-validate``                | When true, the component will be validated with every change.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | &#x2718; | ``boolean``                                                                                                                                                                | ``true``       |
| ``autoValidateOnLoad``         | ``auto-validate-on-load``        | When true, the component will be validated when it is loaded for the first time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | &#x2718; | ``boolean``                                                                                                                                                                | ``false``      |
| ``autoWasValidated``           | ``auto-was-validated``           | When true, the component will switch on the ``valid`` property automatically after it is validated and becomes valid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | &#x2718; | ``boolean``                                                                                                                                                                | ``false``      |
| ``autocomplete``               | ``autocomplete``                 | Toggles the auto-completion feature on/off.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | &#x2718; | ``string``                                                                                                                                                                 | ``'off'``      |
| ``autocorrect``                | ``autocorrect``                  | A string indicating whether or not autocorrect is on or off. Safari only.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | &#x2718; | ``"off" \| "on"``                                                                                                                                                          | ``'off'``      |
| ``autofocus``                  | ``autofocus``                    | Automatically focuses the form control when the page is loaded.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | &#x2718; | ``boolean``                                                                                                                                                                | ``false``      |
| ``disabled``                   | ``disabled``                     | When true, the component cannot be interacted with.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | &#x2714; | ``boolean``                                                                                                                                                                | ``false``      |
| ``expanse``                    | ``expanse``                      | The component's expanse.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | &#x2714; | ``"l" \| "m" \| "s" \| "xl" \| "xs"``                                                                                                                                      | ``'m'``        |
| ``hasFocus``                   | ``has-focus``                    | When true, the component has focus; otherwise it is blurred.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | &#x2714; | ``boolean``                                                                                                                                                                | ``false``      |
| ``highlightBehaviors``         |                                  | An array of supported of highlight behaviors.&nbsp;&nbsp;<ol>&nbsp; <li>KEY     : Contents of the component are automatically highlighted when the component gets focus by tabbing into it.&nbsp; <li>MOUSE   : Contents of the component are automatically highlighted when the component gets focus by clicking into it with the mouse.&nbsp; <li>REQUEST : Contents of the component are automatically highlighted when the component gets focus under program control by calling the ``setFocus`` method.&nbsp;</ol>                                                                                                                          | &#x2718; | ``BbjHighlightBehaviors[]``                                                                                                                                                | ``[]``         |
| ``invalid``                    | ``invalid``                      | Set to true to indicate that the user input is invalid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | &#x2714; | ``boolean``                                                                                                                                                                | ``false``      |
| ``invalidMessage``             | ``invalid-message``              | An error message to display to the user when the component is invalid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | &#x2718; | ``string``                                                                                                                                                                 | ``''``         |
| ``label``                      | ``label``                        | the component's label.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | &#x2718; | ``string``                                                                                                                                                                 |                |
| ``max``                        | ``max``                          | Maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | &#x2718; | ``number \| string``                                                                                                                                                       |                |
| ``maxlength``                  | ``maxlength``                    | Maximum length (number of characters) of value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | &#x2718; | ``number``                                                                                                                                                                 |                |
| ``min``                        | ``min``                          | Minimum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | &#x2718; | ``number \| string``                                                                                                                                                       |                |
| ``minlength``                  | ``minlength``                    | Minimum length (number of characters) of value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | &#x2718; | ``number``                                                                                                                                                                 |                |
| ``multiple``                   | ``multiple``                     | Boolean representing whether or not to allow multiple values.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | &#x2718; | ``boolean``                                                                                                                                                                |                |
| ``name``                       | ``name``                         | The component's name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | &#x2714; | ``string``                                                                                                                                                                 |                |
| ``passwordReveal``             | ``password-reveal``              | Show/Hide the password reveal icon when the component type is ``password``.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | &#x2718; | ``boolean``                                                                                                                                                                | ``true``       |
| ``pattern``                    | ``pattern``                      | The pattern that the value must match for the component to be considered valid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | &#x2718; | ``string``                                                                                                                                                                 |                |
| ``placeholder``                | ``placeholder``                  | Text that appears in the component when it has no value set.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | &#x2718; | ``string``                                                                                                                                                                 |                |
| ``readonly``                   | ``readonly``                     | When true, put the component in readonly mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | &#x2714; | ``boolean``                                                                                                                                                                | ``false``      |
| ``required``                   | ``required``                     | When true, a value is required for the form to be submittable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | &#x2714; | ``boolean``                                                                                                                                                                | ``false``      |
| ``showSpinners``               | ``show-spinners``                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | &#x2718; | ``boolean``                                                                                                                                                                | ``false``      |
| ``size``                       | ``size``                         | The size of the component.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | &#x2718; | ``number``                                                                                                                                                                 |                |
| ``spellcheck``                 | ``spellcheck``                   | When true, the component will have its spelling and grammar checked.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | &#x2718; | ``boolean``                                                                                                                                                                | ``false``      |
| ``spinnable``                  | ``spinnable``                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | &#x2718; | ``boolean``                                                                                                                                                                | ``false``      |
| ``step``                       | ``step``                         | Incremental values that are valid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | &#x2718; | ``number``                                                                                                                                                                 |                |
| ``tabTraversable``             | ``tab-traversable``              | Indicates that the component can receive focus. A negative value indicates that the component is not reachable via sequential keyboard navigation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | &#x2718; | ``number``                                                                                                                                                                 | ``0``          |
| ``type``                       | ``type``                         | Type of form control ('color' \| 'date' \| 'datetime-local' \| 'email' \| 'file' \| 'month' \| 'number' \| 'password' \| 'range' \| 'search' \| 'tel' \| 'text' \| 'time' \| 'url' \| 'week')                                                                                                                                                                                                                                                                                                                                                                                                                                                     | &#x2714; | ``"color" \| "date" \| "datetime-local" \| "email" \| "file" \| "month" \| "number" \| "password" \| "range" \| "search" \| "tel" \| "text" \| "time" \| "url" \| "week"`` | ``'text'``     |
| ``valid``                      | ``valid``                        | Set to true to indicate that the user input is valid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | &#x2714; | ``boolean``                                                                                                                                                                | ``false``      |
| ``validationIcon``             | ``validation-icon``              | The icon to use with the validation message.&nbsp;&nbsp;<ol>&nbsp;<li> <b>URL</b>: (ex: /path/to/image.png)&nbsp;<li> <b>Data URL</b>: (ex: data:image/jpeg;base64,/9j/4SDpRXhpZgAAT....)&nbsp;<li> <b>ICON_NAME</b>: An icon to load from the default BBj icons pool. (ex: ``x``)&nbsp;<li> <b>POOL_NAME:ICON_NAME</b>: An icon to load from the passed pool. (ex: ``feather:x``)&nbsp;<li> <b>An object</b> which provides all the required properties to build the icon.&nbsp;   for instance:&nbsp;   <ol>&nbsp;     <li> {name: 'x'}&nbsp;     <li> {pool: 'feather', name: 'x'}&nbsp;     <li> {src: 'image/path'}&nbsp;   </ol>&nbsp;</ol> | &#x2718; | ``object \| string``                                                                                                                                                       | ``'bbj:info'`` |
| ``validationPopoverDistance``  | ``validation-popover-distance``  | The distance in pixels to offset the validation message away from the component.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | &#x2718; | ``number``                                                                                                                                                                 | ``6``          |
| ``validationPopoverPlacement`` | ``validation-popover-placement`` | The preferred placement of the validation message.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | &#x2718; | ``"bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"``     | ``'bottom'``   |
| ``validationPopoverSkidding``  | ``validation-popover-skidding``  | The distance in pixels to offset the validation message along the component.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | &#x2718; | ``number``                                                                                                                                                                 | ``0``          |
| ``validationStyle``            | ``validation-style``             | When ``popover``, the invalid message will be displayed as a popover; otherwise it will be displayed as an inline message.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | &#x2714; | ``"inline" \| "popover"``                                                                                                                                                  | ``'popover'``  |
| ``validator``                  | ``validator``                    | A Javascript expression or function to validate the component.&nbsp;&nbsp;If the expression has the ``return`` keyword in it, then it is used as is;&nbsp;if not, then wrap it with ``return`` and ``;`` to make a function.&nbsp;&nbsp;The expression has access to the following parameters:&nbsp;<ol>&nbsp; <li>``value``: The control's&nbsp; <li>``x``: Alias for value&nbsp; <li>``text``: For consistency with the legacy control and form validation APIs, same as ``value``&nbsp; <li>``component``: The instance of the client component&nbsp; <li>``control``: Alias for component&nbsp;</ol>                                          | &#x2718; | ``((...args: any[]) => any) \| string``                                                                                                                                    |                |
| ``value``                      | ``value``                        | The component's value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | &#x2718; | ``any``                                                                                                                                                                    | ``''``         |


</div>

## Events

<div style="overflow-x: auto;">

| Event             | Description                                     | Type        |
| ----------------- | ----------------------------------------------- | ----------- |
| ``bbj-blurred``   | Emitted after the component has been blurred.   | ``void``    |
| ``bbj-focused``   | Emitted after the component has been focused.   | ``void``    |
| ``bbj-modified``  | Emitted after the component has been modified.  | ``string``  |
| ``bbj-spun-down`` | Emitted after the component has been spun down. | ``void``    |
| ``bbj-spun-up``   | Emitted after the component has been spun up.   | ``void``    |
| ``bbj-validated`` | Emitted when the component is invalid           | ``boolean`` |


</div>

## Slots

<div style="overflow-x: auto;">

| Slot       | Description                                         |
| ---------- | --------------------------------------------------- |
| ``prefix`` | the component's prefix. Can be used to insert icons |
| ``suffix`` | the component's suffix. Can be used to insert icons |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part                | Description                             |
| ------------------- | --------------------------------------- |
| ``alert``           | The alert component(validation)         |
| ``alert-popover``   | The alert-popover component(validation) |
| ``control``         | The component's base wrapper            |
| ``down-button``     | the component's down spinner button     |
| ``eye-icon``        | The eye open icon                       |
| ``eye-off-icon``    | The eye closed icon                     |
| ``input``           | The actual input                        |
| ``input-wrapper``   | the component, prefix & suffix wrapper  |
| ``label``           | the component's label                   |
| ``password-reveal`` | The password reveal icon's container    |
| ``prefix``          | the component's prefix                  |
| ``spinners``        | the component's spinners wrapper        |
| ``suffix``          | the component's suffix                  |
| ``up-button``       | the component's up spinner button       |


</div>

## Hosted Classes


Hosted Classes are CSS classes that are applied to the host element of a component. They are useful for styling the host element from outside the component's own CSS.
They can either reflect the component's state, such as "disabled" or "active," or provide options to alter the component's style based on user interaction or other conditions.
<div style="overflow-x: auto;">

| CSS Class           | Description                                                             |
| ------------------- | ----------------------------------------------------------------------- |
| ``BBjControl``      | Always applied                                                          |
| ``BBjEditBox``      | Always applied                                                          |
| ``bbj-disabled``    | Applied when the component is disabled                                  |
| ``bbj-focused``     | Applied when the component is focused                                   |
| ``bbj-readonly``    | Applied when the component is readonly                                  |
| ``bbj-hasLabel``    | Applied when the component renders a label                              |
| ``bbj-valid``       | Applied when the component is marked as valid                           |
| ``bbj-invalid``     | Applied when the component is marked as invalid                         |
| ``bbj-required``    | Applied when the component required                                     |
| ``bbj-password``    | Applied when the component's type is ``password``                       |
| ``bbj-transparent`` | ``[optional]`` Can be added manually to remove the component background |
| ``bbj-noborder``    | ``[optional]`` Can be added manually to remove the component border     |


</div>

## CSS Properties


CSS Properties are DWC-defined variables in CSS, denoted by `--`, followed by a name.
They enable dynamic styling, reusability, and easy customization of components.
With CSS Properties, you can change the look and feel of a component simply by changing the value of a variable.
[[Read more]](theme-engine/css-variables).
<div style="overflow-x: auto;">

| Name                                           | Description                                       |
| ---------------------------------------------- | ------------------------------------------------- |
| ``--bbj-input-color``                          | The input's color                                 |
| ``--bbj-input-font-weight``                    | The input's font weight                           |
| ``--bbj-input-label-color``                    | The input's label color                           |
| ``--bbj-input-label-hover-color``              | The input's label color when the input is hovered |
| ``--bbj-input-placeholder-color``              | The color of the placeholder                      |
| ``--bbj-input-required-field-indicator``       | The symbol of the required field indicator        |
| ``--bbj-input-required-field-indicator-color`` | The color of the required field indicator         |
| ``--bbj-input-spinner-color``                  | The color of the spinner arrows                   |


</div>

## Components Dependencies

- [bbj-icon-button](web-components/bbj-icon-button.md)
- [bbj-alert](web-components/bbj-alert.md)
- [bbj-alert-popover](web-components/bbj-alert-popover.md)


## Dependent Components

- [bbj-color-chooser](web-components/bbj-color-chooser.md)
- [bbj-file-chooser](web-components/bbj-file-chooser.md)
- [bbj-file-save](web-components/bbj-file-save.md)
- [bbj-font-chooser](web-components/bbj-font-chooser.md)
- [bbj-list-edit](web-components/bbj-list-edit.md)
- [bbj-login](web-components/bbj-login.md)
- [bbj-navigator](web-components/bbj-navigator.md)
- [bbj-tree](web-components/bbj-tree.md)

## Methods

### `getCursorPos() => Promise<number>`

Gets the caret position in the component. *

### Returns

Type: `Promise<number>`

### `getPart(part: string) => Promise<unknown>`

Queries one of the component-supported parts.

### Returns

Type: `Promise<unknown>`

### `getSelectionRange() => Promise<{ start: number; end: number; }>`

Gets the component selection range.

### Returns

Type: `Promise<{ start: number; end: number; }>`

### `removeFocus() => Promise<void>`

Removes focus from the component.

### Returns

Type: `Promise<void>`

### `selectAll() => Promise<void>`

Selects the component text.

### Returns

Type: `Promise<void>`

### `setCursorPos(position: number) => Promise<void>`

Sets the caret position in the component. *

### Returns

Type: `Promise<void>`

### `setFocus() => Promise<void>`

Sets focus on the component.

### Returns

Type: `Promise<void>`

### `setSelectionRange(start: number, end: number) => Promise<void>`

Sets the component selection range.

### Returns

Type: `Promise<void>`

### `spin(upDirection: boolean) => Promise<void>`

Causes the spinner to spin in the specified direction.

### Returns

Type: `Promise<void>`

### `validate() => Promise<boolean>`

Validate the component.

### Returns

Type: `Promise<boolean>`



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
