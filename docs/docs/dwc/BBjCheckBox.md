# BBjCheckBox
![Documentation Type](https://img.shields.io/badge/Documentation-dwc-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--checkbox-%23006aff) <a href="https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/BBjCheckBox/BBjCheckBox.htm?Highlight=BBjCheckBox" title="The BBj Control Name">
      <img src="https://img.shields.io/badge/Control-BBjCheckBox &#8599;-%23006aff" alt="BBj v20.11" />
    </a> ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `BBjCheckBox<dwc-checkbox>` provides methods for manipulating a UI checkbox control.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.

!> **Tip:** From BBj you can set and get the attributes using the [BBjControl::setAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setAttribute.htm)
and [BBjControl::getAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getAttribute.htm) methods respectively.
And to set properties you can use the [BBjControl::setProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setProperty.htm) and [BBjControl::getProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getProperty.htm) methods respectively.
<div style="overflow-x: auto;">

| Name                           | Attribute                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Reflects | Type                                                                                                                                                                   | Default        |
| ------------------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| ``autoValidate``               | ``auto-validate``                | When true, the component will be validated with every change.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | &#x2718; | ``boolean``                                                                                                                                                            | ``true``       |
| ``autoValidateOnLoad``         | ``auto-validate-on-load``        | When true, the component will be validated when it is loaded for the first time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | &#x2718; | ``boolean``                                                                                                                                                            | ``false``      |
| ``autoWasValidated``           | ``auto-was-validated``           | When true, the component will switch the ``valid`` property automatically after the component is validated and became valid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | &#x2718; | ``boolean``                                                                                                                                                            | ``false``      |
| ``checked``                    | ``checked``                      | When true, the checkbox is checked; otherwise, it is unchecked.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | &#x2714; | ``boolean``                                                                                                                                                            | ``false``      |
| ``disabled``                   | ``disabled``                     | When true, the component cannot be interacted with.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | &#x2714; | ``boolean``                                                                                                                                                            | ``false``      |
| ``expanse``                    | ``expanse``                      | The component's expanse.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | &#x2714; | ``"l" \| "m" \| "s" \| "xl" \| "xs"``                                                                                                                                  | ``null``       |
| ``hasFocus``                   | ``has-focus``                    | When true, the input has focus; otherwise it does not.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | &#x2714; | ``boolean``                                                                                                                                                            | ``false``      |
| ``helperText``                 | ``helper-text``                  | The component's helper text.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | &#x2718; | ``string``                                                                                                                                                             |                |
| ``indeterminate``              | ``indeterminate``                | When true, the checkbox's value is neither true nor false, but is instead indeterminate, meaning that its state cannot be determined or stated in pure binary terms.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | &#x2714; | ``boolean``                                                                                                                                                            | ``false``      |
| ``invalid``                    | ``invalid``                      | Set to true to indicate that the user input is invalid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | &#x2714; | ``boolean``                                                                                                                                                            | ``false``      |
| ``invalidMessage``             | ``invalid-message``              | An error message to display to the user when the component is invalid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | &#x2718; | ``string``                                                                                                                                                             |                |
| ``label``                      | ``label``                        | The component label.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | &#x2718; | ``string``                                                                                                                                                             |                |
| ``name``                       | ``name``                         | The component name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | &#x2714; | ``string``                                                                                                                                                             |                |
| ``readonly``                   | ``readonly``                     | When true, the input will be in readonly mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | &#x2714; | ``boolean``                                                                                                                                                            | ``false``      |
| ``required``                   | ``required``                     | If true, a value is required, or in other words the component must be checked, for the form to be submittable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | &#x2714; | ``boolean``                                                                                                                                                            | ``false``      |
| ``tabTraversable``             | ``tab-traversable``              | Indicates that the component can receive focus. A negative value indicates that the component is not reachable via sequential keyboard navigation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | &#x2718; | ``number``                                                                                                                                                             | ``0``          |
| ``valid``                      | ``valid``                        | Set to true to indicate that the user input is valid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | &#x2714; | ``boolean``                                                                                                                                                            | ``false``      |
| ``validationIcon``             | ``validation-icon``              | The icon to use with the validation message.&nbsp;&nbsp;<ol>&nbsp;<li> <b>URL</b>: (ex: /path/to/image.png)&nbsp;<li> <b>Data URL</b>: (ex: data:image/jpeg;base64,/9j/4SDpRXhpZgAAT....)&nbsp;<li> <b>ICON_NAME</b>: An icon to load from the default Dwc icons pool. (ex: ``x``)&nbsp;<li> <b>POOL_NAME:ICON_NAME</b>: An icon to load from the passed pool. (ex: ``feather:x``)&nbsp;<li> <b>An object</b> which provides all the required properties to build the icon.&nbsp;   for instance:&nbsp;   <ol>&nbsp;     <li> {name: 'x'}&nbsp;     <li> {pool: 'feather', name: 'x'}&nbsp;     <li> {src: 'image/path'}&nbsp;   </ol>&nbsp;</ol> | &#x2718; | ``object \| string``                                                                                                                                                   | ``'dwc:info'`` |
| ``validationPopoverDistance``  | ``validation-popover-distance``  | The distance in pixels to offset the validation message away from the component.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | &#x2718; | ``number``                                                                                                                                                             | ``6``          |
| ``validationPopoverPlacement`` | ``validation-popover-placement`` | The preferred placement of the validation message.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | &#x2718; | ``"bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"`` | ``'bottom'``   |
| ``validationPopoverSkidding``  | ``validation-popover-skidding``  | The distance in pixels to offset the validation message along the component.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | &#x2718; | ``number``                                                                                                                                                             | ``0``          |
| ``validationStyle``            | ``validation-style``             | When ``popover``, the invalid message will be displayed as a popover; otherwise it is displayed as an inline message.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | &#x2714; | ``"inline" \| "popover"``                                                                                                                                              | ``'popover'``  |
| ``validator``                  | ``validator``                    | A Javascript expression or function to validate the component.&nbsp;&nbsp;If the expression has the ``return`` keyword in it, then it is used as is;&nbsp;if not, then wrap it with ``return`` and ``;`` to make a function&nbsp;&nbsp;The expression has access to the following parameters:&nbsp;<ol>&nbsp; <li>``value``: The control's value&nbsp; <li>``x``: Alias for value&nbsp; <li>``text``: For consistency with the legacy control and form validation APIs, same as ``value``&nbsp; <li>``component``: The instance of the client component&nbsp; <li>``control``: Alias for component&nbsp;</ol>                                     | &#x2718; | ``((...args: any[]) => any) \| string``                                                                                                                                |                |
| ``value``                      | ``value``                        | The component's value attribute.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | &#x2718; | ``string``                                                                                                                                                             |                |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part                          | Description                             |
| ----------------------------- | --------------------------------------- |
| ``alert``                     | The alert component(validation)         |
| ``alert-popover``             | The alert-popover component(validation) |
| ``checked-icon``              | The checked icon wrapper                |
| ``checked-icon-svg``          | The checked svg                         |
| ``checked-indeterminate-svg`` | The indeterminate svg                   |
| ``control``                   | The component's base wrapper            |
| ``helper-text``               | The helper text part                    |
| ``indeterminate-icon``        | The indeterminate icon wrapper          |
| ``input``                     | The actual input                        |
| ``input-wrapper``             | The input's wrapper                     |
| ``label``                     | The input's label                       |


</div>

## Hosted Classes


Hosted Classes are CSS classes that are applied to the host element of a component. They are useful for styling the host element from outside the component's own CSS.
They can either reflect the component's state, such as "disabled" or "active," or provide options to alter the component's style based on user interaction or other conditions.
<div style="overflow-x: auto;">

| CSS Class                 | Description                                     |
| ------------------------- | ----------------------------------------------- |
| ``BBjControl``            | Always applied                                  |
| ``BBjCheckBox``           | Always applied                                  |
| ``bbj-disabled``          | Applied when the component is disabled          |
| ``bbj-focused``           | Applied when the component is focused           |
| ``bbj-readonly``          | Applied when the component is readonly          |
| ``bbj-checked``           | Applied when the checkbox is checked            |
| ``bbj-unchecked``         | Applied when the checkbox is unchecked          |
| ``bbj-indeterminate``     | Applied when the checkbox is indeterminate      |
| ``bbj-valid``             | Applied when the checkbox is valid              |
| ``bbj-invalid``           | Applied when the checkbox is invalid            |
| ``bbj-required``          | Applied when the checkbox is required           |
| ``bbj-whitespace-wrap``   | Wrap the label in whitespace                    |
| ``bbj-whitespace-nowrap`` | Don't wrap the label in whitespace              |
| ``bbj-reverse-order``     | Reverse the order of the label and the checkbox |


</div>

## CSS Properties


CSS Properties are DWC-defined variables in CSS, denoted by `--`, followed by a name.
They enable dynamic styling, reusability, and easy customization of components.
With CSS Properties, you can change the look and feel of a component simply by changing the value of a variable.
[[Read more]](theme-engine/css-variables).
<div style="overflow-x: auto;">

| Name                                          | Description                                                                               |
| --------------------------------------------- | ----------------------------------------------------------------------------------------- |
| ``--dwc-checkbox-background``                 | The checkbox default background when unchecked                                            |
| ``--dwc-checkbox-checked-background``         | The checkbox background when checked                                                      |
| ``--dwc-checkbox-checked-color``              | The checkbox color when checked                                                           |
| ``--dwc-checkbox-focus-ring``                 | The checkbox focus ring                                                                   |
| ``--dwc-checkbox-hover-background``           | The checkbox hover background when unchecked                                              |
| ``--dwc-checkbox-hover-border-color``         | The checkbox hover border color when unchecked                                            |
| ``--dwc-checkbox-hover-checked-background``   | The checkbox background when checked and hovered                                          |
| ``--dwc-checkbox-hover-checked-border-color`` | The checkbox border color when checked and hovered                                        |
| ``--dwc-checkbox-hover-checked-color``        | The checkbox color when checked and hovered                                               |
| ``--dwc-checkbox-label-color``                | The checkbox label's color                                                                |
| ``--dwc-checkbox-padding``                    | The checkbox padding (should be equal to or higher than the ``--dwc-focus-ring-width``)   |
| ``--dwc-checkbox-size``                       | The checkbox default size (This variable is overridden when the expanse attribute is set) |


</div>

## Components Dependencies

- [dwc-alert](web-components/dwc-alert.md)
- [dwc-alert-popover](web-components/dwc-alert-popover.md)


## Dependent Components

- [dwc-login](web-components/dwc-login.md)
- [dwc-table](web-components/dwc-table.md)


## Messages

Messages are the BBj instructions that are sent to the browser form the server to create and configure the BBj control.<!-- tabs:start -->

#### **Async create component**

| Message              | Description          | Returns  |
| -------------------- | -------------------- | -------- |
| BuildCheckBoxMessage | Build a BBjCheckBox. | ``Void`` |


#### **Async component message**

| Message                | Description                                                                                                                                                        | Returns  |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| SetTextMessage         | Used to set plain text content on any component. See also SetHtmlMessage.                                                                                          | ``Void`` |
| SetFocusMessage        | Implements BBjControl::focus.                                                                                                                                      | ``Void`` |
| SetBooleanValueMessage | Implements BBjRadioButton::setSelected, BBjCheckBox::setSelected, BBjCheckableMenuItem::setSelected, and (maybe not las ogically) BBjMenuButton::setBorderPainted. | ``Void`` |
| SetTextLeftMessage     | Implements BBjCheckBox and BBjRadioButton creation flag $0002$ (place title text to left of control).                                                              | ``Void`` |


#### **Synchronous component message**

| Message                | Description                                                                                                                  | Returns     |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ----------- |
| GetBooleanValueMessage | Implements BBjCheckBox::isSelected, BBjRadioButton::isSelected, BBjToolButton::isSelected, BBjCheckableMenuItem::isSelected. | ``Boolean`` |


#### **Async event callback message**

| Message                      | Description                                     | Returns  |
| ---------------------------- | ----------------------------------------------- | -------- |
| CheckOffEventCallbackMessage | Implements event callback for BBjCheckOffEvent. | ``Void`` |
| CheckOnEventCallbackMessage  | Implements event callback for BBjCheckOnEvent.  | ``Void`` |


<!-- tabs:end -->



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
