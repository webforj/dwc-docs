# Form validation

Form validation is a technical process where a web-form checks if the information provided by a user is correct.
The form will inform the user about what they need to fix in order to proceed with the submission process.

Generally speaking, there are two types of form validation:

## Server-side validation

When the users types in all the data and submits the form, usually by clicking the `submit` button or the `BBjButton` control, the information is sent to BBj. You can validate the sent data by listening to the [BBjFormValidationEvent](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjevents/BBjFormValidationEvent/bbjformvalidationevent.htm?Highlight=BBjFormValidationEvent) event. At this stage, BBj locks the top level window, disabling all user input. To unlock the window, the program must respond to the event by calling [accept(0)](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjevents/BBjFormValidationEvent/bbjformvalidationevent_accept.htm) or [accept(1)](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjevents/BBjFormValidationEvent/bbjformvalidationevent_accept.htm) on the `BBjFormValidationEvent` object or the `BBjButton` control.


## Client-side validation

!> **Important** Client-side validation is supported in BBj `22.10` and higher through the [ClientValidation](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjinterfaces/IF_ClientValidation/Interface_ClientValidation.htm) interface.

Immediately after the users types in data to form controls, real time feedback about potential errors will be displayed under the control, either inline or as a popover, to encourages the user to take immediate action.

The whole validation process is executed in the browser before the data is sent to BBj. When the entered data passes all client side validation rules, the data is sent to BBj where you can check the validated data again.


?> **Warning** Never trust data passed to your server from the client. Even if your form is validating correctly and preventing malformed input on the client-side, a malicious user can still alter the network request.

## Different types of client-side validation

There are two different types of client-side validation that you can use:

1. **Built-in validation**: This validation doesn't require a JavaScript expression. For instance, you can mark a `BBjEditbox` as required by settings the `required` attribute.
2. **Javascript validation**:  This validation is coded using Javascript.

The following list of controls support client-side validation. All of them support Javascript validation and some of them have built-in validation:

`BBjCEdit`, `BBjCheckBox`, `BBjEditBox`, `BBjEditBoxSpinner`, `BBjInputD`, `BBjInputDSpinner`, `BBjInputE`, `BBjInputESpinner`, `BBjInputN`, `BBjInputNSpinner`, `BBjListBox`, `BBjListButton`, `BBjListEdit`, `BBjRadioButton`.

?> **Note** Built-in validation has a higher priority than Javascript validation. In other words if a control is using both built-in and javascript validation the built-in validation will always be used.

## Built-in form validation

Some controls have built-in validation rules defined. You can use these rules by setting the validation attributes on the control.
If the data entered in a form field follows all of the rules specified by the validation attributes, it is considered valid. If not, it is considered invalid.

### Controls which supports built-in validation

**BBjEditBox**

|  **Attribute**     |    **Description**   |
|  ---  |  ---  |
|  `required`     |    The control needs to be filled in before the form can be submitted.   |
|  `minlength`, `maxlength`     |  Specifies the minimum and maximum length of textual data (strings).     |
|   `min`, `max`    |    Specifies the minimum and maximum values of numerical input types.   |
|  `type`     |  Specifies whether the data needs to be a number, an email address, or some other specific preset type.     |
|  `pattern`     |    Specifies a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) that defines a pattern the entered data needs to follow.   |

**BBjInputD**

|  **Attribute**     |    **Description**   |
|  ---  |  ---  |
|  `required`     |   Specifies whether the form control needs to be filled in before the form can be submitted.   |
|  `pattern`     |    Specifies a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) that defines a pattern the entered data needs to follow.   |

?> **Note** `pattern` is applied on the masked value of the input (the value is a string not a julian number)

**BBjInputT**

|  **Attribute**  |    **Description**   |
|  ---            |  ---                 |
|  `required`     |  Specifies whether the form control needs to be filled in before the form can be submitted.   |
|  `pattern`      |  Specifies a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) that defines a pattern the entered data needs to follow.   |
|  `min`          |  Specifies the minimum value allowed for the form control. Must be a number between 0 and 24. |
|  `max`          |  Specifies the maximum value allowed for the form control. Must be a number between 0 and 24. |

?> **Note** `pattern` is applied on the masked value of the input (the value is a string not a number).

**BBjInputE**

|  **Attribute**     |    **Description**   |
|  ---  |  ---  |
|  `required`     |   Specifies whether the form control needs to be filled in before the form can be submitted.   |
|  `pattern`     |    Specifies a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) that defines a pattern the entered data needs to follow.   |

?> **Note** `pattern` is applied on the masked value of the input.

**BBjInputN**

|  **Attribute**     |    **Description**   |
|  ---  |  ---  |
|  `required`     |   Specifies whether the form control needs to be filled in before the form can be submitted.   |

**BBjRadioButton**

|  **Attribute**     |    **Description**   |
|  ---  |  ---  |
|  `required`     |  When belonging to a group, only one radio button in the same-named group can be selected at the a time.   |

**BBjCheckBox**

|  **Attribute**     |    **Description**   |
|  ---  |  ---  |
|  `required`     |   Specifies whether the form control needs to be checked before the form can be submitted.   |

**BBjCEdit**

|  **Attribute**     |    **Description**   |
|  ---  |  ---  |
|  `required`     |   Specifies whether the form control needs to be filled in before the form can be submitted.   |
|  `minlength`     |   Specifies the minimum length (number of characters) of value before the form can be submitted.   |

## Javascript validation

With this type of client-side validation, you must use Javascript to define the validation rules. 
You can set the javascript using the `setClientValidationFunction` method. The method accepts a Javascript Expression/Function.

|    **Return Value**   |   **Method**  |
|  ---  |  ---  |
|   void    |  setClientValidationFunction(String javascript)     |


**JavaScript**: An arbitrary JavaScript code/expression that applies application-defined validation rules to the current value of the control. The expression must return a boolean value to indicate whether the value is considered to be valid.

When working with expressions, keep the following points in mind: 

* If the expression has the word `return` in it, then we will assume it is a multi-line expression and will not wrap it.
* If the expression does not have the word `return` in it, then we will insert the `return` statement and the `;` for you.
* If the expression has many lines, then you will need to provide the `;` at the end of each line and also provide the `return` statement.

?> **Note** It is also possible to set the validation expression using the `validator` attribute. For instance:<br> `control!.setAttribute("validator","Expression")`

### Expression parameters

The parameters available to the client validation expression are: 

|  **Parameter**      |   **Description**    |    **Alias**   |
|  ---  |  ---  |  ---  |
|   `value`     |  Component-specific value as defined by the table below.  |    `x`   |
|   `text`     |   Text representation of the current value   |     |
|   `control`    |   The instance of the client component     |     `component`  |

### Text & value

The text & value of the control is defined according to the following rules:

| **Control**                       	| **Value**                               	| **Text**                               	|
|-----------------------------------	|-----------------------------------------	|----------------------------------------	|
| `BBjCEdit`                        	| Text                      	| Text                        	|
| `BBjCheckBox`                     	| Boolean `true` or `false` 	| `'1'` when checked , `'0'` otherwise   	|
| `BBjRadioButton`                  	| Boolean `true` or `false` 	| `'1'` when checked , `'0'` otherwise   	|
| `BBjEditbox`, `BBjEditboxSpinner` 	| Text                   	| Text                       	|
| `BBjInputD`, `BBjInputDSpinner`   	| [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      	| Date string as typed by the user 	|
| `BBjInputT`, `BBjInputTSpinner`   	| Number             	| Text                      	|
| `BBjInputE`, `BBjInputESpinner`   	| Text             	| Text                      	|
| `BBjInputN`, `BBjInputNSpinner`   	| Number                     	| Number as text                        	|
| `BBjListBox`                      	| Array of selected item(s)         	| Text of selected item(s), with `\n` between each item.         	|
| `BBjListEdit`                     	| Text                       	| Text                       	|
| `BBjListButton`                   	| Text of selected item.                   	| Text of selected item.                        	|


### Expression examples

```BBj
rem The control is valid when the value of the control is defined, invalid otherwise
control!.setClientValidationFunction("value")

rem The control is valid when the value of the control is 8 characters long, invalid otherwise
control!.setClientValidationFunction("value.length == 8")

rem The control is valid when the value of the control is array and it contains the "item-1" element
control!.setClientValidationFunction("return Array.isArray(value) && value.indexOf('item-1') > -1;")

rem The control is valid when the value of the control is a number
control!.setClientValidationFunction("/^\d+$/.test(value)")
```
## Validation customization

Each control supports a list of attributes which allows the developer to customize the validation behaviour, location, style and message. 

?> **Note**  It is also possible to set theses attributes on the closest `BBjWindow` instead of setting them per control. The attribute name in this case **must** be prefixed with `data-`

```BBj
window!.setAttribute("data-validation-style", "inline")
```

|   **Attribute**    |   **Description**    |  **Type**      |    **default**   |
|  ---  |  ---  |  ---  |  ---  |
|  `auto-validate`     |   When true,  the control will be validated with every change    |   `boolean`    |    `true`   |
|  `auto-validate-on-load`     |   When true,  the control will be validated when it is loaded for the first time    | `boolean`        |    `false`   |
|  `auto-was-validated`     | When true, the control will switch the `valid` property automatically after the control is validated and became valid      |    `boolean`   |   `false`    |
|  `invalid-message`     |   An error message to present to the user when the control is invalid      |   `string`    |    ``   |
|   `validation-icon`    |  The icon to use with the validation message<ol><li> <b>URL</b>: (ex: /path/to/image.png)<li> <b>Data URL</b>: (ex: data:image/jpeg;base64,/9j/4SDpRXhpZgAAT....)<li> <b>ICON_NAME</b>: An icon to load from the default BBj icons pool. (ex: ``x``)<li> <b>POOL_NAME:ICON_NAME</b>: An icon to load from the passed pool. (ex: ``feather:x``)</ol>       |    `string`   |   `'bbj:info'`    |
| `validation-popover-distance`      | The distance in pixels from which to offset the validation message away from the control.      |    `number`   |   6    |
|  `validation-popover-skidding`     |   The distance in pixels from which to offset the validation message along the control.    |  `number`     |    `0`   |
|  `validation-popover-placement`     |  Describes the preferred placement of the validation message.     |   ``"bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"``     | ``'bottom'``    |   `bottom`    |
|  `validation-style`     |   When `popover` , then the invalid message will be displayed as a popover, as an inline message otherwise     |   ``"inline" \| "popover"``               |  `'popover'`     |
|  `validation-stop-after-first-invalid`     |   When true, the form validation will stop at the first invalid control and set focus on it. otherwise , the whole form will be validated and focus is set on the first invalid control    |   `boolean`    |    `true`   |
|  `validation-auto-disable`     |   When true, the form's button will be disabled when one of the controls is invalid    |   `boolean`    |    `false`   |
|  `message`     |   The busy indicator message     |   `string`    |    ``   |
|  `suppress-spinner`     |   When false the spinner will be visible , hidden otherwise     |   `boolean`    |    `false`   |
|  `suppress-message`     |   When false the message will be visible , hidden otherwise     |   `boolean`    |    `true`   |
|  `spinner-clockwise`     |  When true, the spinner's animation will be played clockwise, counter clockwise otherwise     |   `boolean`    |    `true`   |
|  `spinner-expanse`     |  The spinner's expanse     |   ``"2xl" \| "2xs" \| "3xl" \| "3xs" \| "l" \| "m" \| "s" \| "xl" \| "xs"``    |    ``'default'``  |
|  `spinner-theme`     |  The spinner's theme     |  ``"danger" \| "default" \| "gray" \| "info" \| "primary" \| "success" \| "warning"``   |    ``'default'``  |


## BBjControlValidation Plugin

[BBjControlValidation](https://bbj-plugins.github.io/BBjControlValidation/#/) is plugin which provides a set of Javascript validation expressions for use with BBjControls.

### Features

* Easy to set up
* Easy to customize
* Supports wide range of validators
* Ability to extend and add new validator types

```BBj
use ::BBjControlValidation/ValidationBuilder.bbj::ValidationBuilder
use ::BBjControlValidation/Validators/NotBlank.bbj::NotBlank
use ::BBjControlValidation/Validators/MinLength.bbj::MinLength
use ::BBjControlValidation/Validators/MaxLength.bbj::MaxLength
use ::BBjControlValidation/Validators/Regex.bbj::Regex

validation! = new ValidationBuilder()
validation!.add(new NotBlank("Please provide a username"))
validation!.add(new MinLength(2))
validation!.add(new MaxLength(20))
validation!.add(new Regex("^[a-zA-Z0-9_]+$"))
...
control!.setClientValidationFunction(validation!.build())
```