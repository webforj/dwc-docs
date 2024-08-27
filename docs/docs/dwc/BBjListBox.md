# BBjListBox
![Documentation Type](https://img.shields.io/badge/Documentation-dwc-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--listbox-%23006aff) <a href="https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjlistbox/BBjListBox.htm?Highlight=BBjListBox" title="The BBj Control Name">
      <img src="https://img.shields.io/badge/Control-BBjListBox &#8599;-%23006aff" alt="BBj v20.11" />
    </a> ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `BBjListBox<dwc-listbox>` provides methods for manipulating a UI listbox control.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.

!> **Tip:** From BBj you can set and get the attributes using the [BBjControl::setAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setAttribute.htm)
and [BBjControl::getAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getAttribute.htm) methods respectively.
And to set properties you can use the [BBjControl::setProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setProperty.htm) and [BBjControl::getProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getProperty.htm) methods respectively.
<div style="overflow-x: auto;">

| Name                           | Attribute                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Reflects | Type                                                                                                                                                                   | Default        |
| ------------------------------ | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| ``allowDeselection``           | ``allow-deselection``             | When true, clicking on a selected item will deselect it.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | &#x2718; | ``boolean``                                                                                                                                                            | ``false``      |
| ``autoValidate``               | ``auto-validate``                 | When true, the control will be validated with every change.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | &#x2718; | ``boolean``                                                                                                                                                            | ``true``       |
| ``autoValidateOnLoad``         | ``auto-validate-on-load``         | When true, the control will be validated when it is loaded for the first time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | &#x2718; | ``boolean``                                                                                                                                                            | ``false``      |
| ``autoWasValidated``           | ``auto-was-validated``            | When true, the control will switch the ``valid`` property automatically after the control is validated and became valid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | &#x2718; | ``boolean``                                                                                                                                                            | ``false``      |
| ``disabled``                   | ``disabled``                      | Specifies that the list should be disabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | &#x2714; | ``boolean``                                                                                                                                                            | ``false``      |
| ``expanse``                    | ``expanse``                       | The component's expanse                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | &#x2714; | ``"l" \| "m" \| "s" \| "xl" \| "xs"``                                                                                                                                  | ``null``       |
| ``hasFocus``                   | ``has-focus``                     | <img style="vertical-align: middle; margin-right: 5px;" src="https://img.shields.io/badge/readonly-%23006aff" />When true, the list has focus; otherwise it is blurred.                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | &#x2714; | ``boolean``                                                                                                                                                            | ``false``      |
| ``helperText``                 | ``helper-text``                   | The component's helper text.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | &#x2718; | ``string``                                                                                                                                                             |                |
| ``invalid``                    | ``invalid``                       | Set to true to indicate that the user input is invalid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | &#x2714; | ``boolean``                                                                                                                                                            | ``false``      |
| ``invalidMessage``             | ``invalid-message``               | An error message to present to the user when the control is invalid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | &#x2718; | ``string``                                                                                                                                                             |                |
| ``items``                      |                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |          | ``DwcListboxItem[]``                                                                                                                                                   | ``[]``         |
| ``label``                      | ``label``                         | The list label                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | &#x2718; | ``string``                                                                                                                                                             |                |
| ``multiSelection``             | ``multi-selection``               | When true, enables multi-selection, otherwise, single selection is selected.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | &#x2714; | ``boolean``                                                                                                                                                            | ``false``      |
| ``multiSelectionByClick``      | ``multi-selection-by-click``      | When true and multi-selection is enabled, the user will be able to select and deselect items by clicking.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | &#x2718; | ``boolean``                                                                                                                                                            | ``false``      |
| ``readonly``                   | ``readonly``                      | When true, puts the control in readonly mode                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | &#x2714; | ``boolean``                                                                                                                                                            | ``false``      |
| ``renderer``                   | ``renderer``                      | A BBj expression or a function to render the list item's label.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | &#x2718; | ``((...args: any[]) => any) \| ((item: DwcListboxItem) => string) \| string``                                                                                          |                |
| ``selected``                   |                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |          | ``number[]``                                                                                                                                                           | ``[]``         |
| ``tabTraversable``             | ``tab-traversable``               | Indicates that the element can be focused. A negative value means that the element is not reachable via sequential keyboard navigation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | &#x2718; | ``number``                                                                                                                                                             | ``0``          |
| ``tickMark``                   | ``tick-mark``                     | When true, the selected item will have a check icon instead of being highlighted.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | &#x2714; | ``boolean``                                                                                                                                                            | ``false``      |
| ``typeToSelect``               | ``type-to-select``                | Enables or disables the type to select feature.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | &#x2718; | ``boolean``                                                                                                                                                            | ``true``       |
| ``typeToSelectCaseSensitive``  | ``type-to-select-case-sensitive`` | When true, the search performed by typeToSelect feature will be case sensitive.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | &#x2718; | ``boolean``                                                                                                                                                            | ``false``      |
| ``typeToSelectTimeout``        | ``type-to-select-timeout``        | Typing into the list accumulates keystrokes entered within a specified number of milliseconds into a typeahead&nbsp;buffer. This allows the user, for example, to jump directly to New York in a list of all 50 states&nbsp;by typing "NY". Without this typeahead buffer, the user would have to press "N" eight times to skip&nbsp;past the other state codes beginning with "N."&nbsp;&nbsp;The default time window for this feature is 1000 milliseconds (1 second).                                                                                                                                                                         | &#x2718; | ``number``                                                                                                                                                             | ``1000``       |
| ``valid``                      | ``valid``                         | Set to true to indicate that the user input is valid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | &#x2714; | ``boolean``                                                                                                                                                            | ``false``      |
| ``validationIcon``             | ``validation-icon``               | The icon to use with the validation message&nbsp;&nbsp;<ol>&nbsp;<li> <b>URL</b>: (ex: /path/to/image.png)&nbsp;<li> <b>Data URL</b>: (ex: data:image/jpeg;base64,/9j/4SDpRXhpZgAAT....)&nbsp;<li> <b>ICON_NAME</b>: An icon to load from the default Dwc icons pool. (ex: ``x``)&nbsp;<li> <b>POOL_NAME:ICON_NAME</b>: An icon to load from the passed pool. (ex: ``feather:x``)&nbsp;<li> <b>An object</b> which provides all the required properties to build the icon.&nbsp;   for instance:&nbsp;   <ol>&nbsp;     <li> {name: 'x'}&nbsp;     <li> {pool: 'feather', name: 'x'}&nbsp;     <li> {src: 'image/path'}&nbsp;   </ol>&nbsp;</ol> | &#x2718; | ``object \| string``                                                                                                                                                   | ``'dwc:info'`` |
| ``validationPopoverDistance``  | ``validation-popover-distance``   | The distance in pixels from which to offset the validation message away from the control.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | &#x2718; | ``number``                                                                                                                                                             | ``6``          |
| ``validationPopoverPlacement`` | ``validation-popover-placement``  | Describes the preferred placement of the validation message.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | &#x2718; | ``"bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"`` | ``'bottom'``   |
| ``validationPopoverSkidding``  | ``validation-popover-skidding``   | The distance in pixels from which to offset the validation message along the control.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | &#x2718; | ``number``                                                                                                                                                             | ``0``          |
| ``validationStyle``            | ``validation-style``              | When ``popover``, the invalid message will be displayed as a popover, as an inline message otherwise.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | &#x2714; | ``"inline" \| "popover"``                                                                                                                                              | ``'popover'``  |
| ``validator``                  | ``validator``                     | A Javascript expression or function to validate the control.&nbsp;If the expression has the 'return' keyword in it, then it is used as is;&nbsp;if not, then wrap it with ``return`` and ';' to make a function.&nbsp;&nbsp;The expression has access to the following parameters:&nbsp;<ol>&nbsp; <li>``value``: The control's&nbsp; <li>``x``: Alias for value&nbsp; <li>``text``: For consistency with the legacy control and form validation APIs, same as ``value``&nbsp; <li>``component``: The instance of the client component&nbsp; <li>``control``: Alias for component&nbsp;</ol>                                                     | &#x2718; | ``((...args: any[]) => any) \| string``                                                                                                                                |                |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part                | Description                             |
| ------------------- | --------------------------------------- |
| ``alert``           | The alert component(validation)         |
| ``alert-popover``   | The alert-popover component(validation) |
| ``container``       | The control and label container         |
| ``control``         | The component's base wrapper            |
| ``control-wrapper`` | Top wrapper for the whole control       |
| ``helper-text``     | The helper text part                    |
| ``icon-check``      |                                         |
| ``item``            | a list item                             |
| ``item-disabled``   | a disabled item                         |
| ``item-label``      | an item label                           |
| ``item-prefix``     | an item prefix                          |
| ``item-selected``   | a selected item                         |
| ``item-suffix``     | an item suffix                          |
| ``label``           | The list's label                        |
| ``list``            | The items wrapper                       |
| ``tick-mark``       |                                         |


</div>

## Hosted Classes


Hosted Classes are CSS classes that are applied to the host element of a component. They are useful for styling the host element from outside the component's own CSS.
They can either reflect the component's state, such as "disabled" or "active," or provide options to alter the component's style based on user interaction or other conditions.
<div style="overflow-x: auto;">

| CSS Class        | Description                                   |
| ---------------- | --------------------------------------------- |
| ``BBjControl``   | Always applied                                |
| ``BBjListBox``   | Always applied                                |
| ``bbj-disabled`` | Applied when the component is disabled        |
| ``bbj-focused``  | Applied when the component is focused         |
| ``bbj-readonly`` | Applied when the component is readonly        |
| ``bbj-valid``    | Applied when the control is marked as valid   |
| ``bbj-invalid``  | Applied when the control is marked as invalid |


</div>

## CSS Properties


CSS Properties are DWC-defined variables in CSS, denoted by `--`, followed by a name.
They enable dynamic styling, reusability, and easy customization of components.
With CSS Properties, you can change the look and feel of a component simply by changing the value of a variable.
[[Read more]](theme-engine/css-variables).
<div style="overflow-x: auto;">

| Name                                     | Description                                      |
| ---------------------------------------- | ------------------------------------------------ |
| ``--dwc-listbox-background``             | The list's background color                      |
| ``--dwc-listbox-border-color``           | The list's border color                          |
| ``--dwc-listbox-color``                  | The list's color                                 |
| ``--dwc-listbox-focus-border-color``     | The list's border color when hovered             |
| ``--dwc-listbox-focus-ring``             | The focus ring of the list                       |
| ``--dwc-listbox-highlighted-background`` | The background of the highlighted (focused) item |
| ``--dwc-listbox-highlighted-color``      | The color of the highlighted(focused) item       |
| ``--dwc-listbox-label-color``            | The color of the label                           |
| ``--dwc-listbox-label-font-weight``      | The font weight of the label                     |
| ``--dwc-listbox-label-hover-color``      | The color of the label when hovered              |
| ``--dwc-listbox-padding``                | The list items padding                           |
| ``--dwc-listbox-selected-background``    | The background of the selected item              |
| ``--dwc-listbox-selected-color``         | The color of the selected item                   |


</div>

## Components Dependencies

- [dwc-icon](web-components/dwc-icon.md)
- [dwc-alert](web-components/dwc-alert.md)
- [dwc-alert-popover](web-components/dwc-alert-popover.md)


## Dependent Components

- [dwc-dropdown](web-components/dwc-dropdown.md)
- [dwc-font-chooser](web-components/dwc-font-chooser.md)


## Messages

Messages are the BBj instructions that are sent to the browser form the server to create and configure the BBj control.<!-- tabs:start -->

#### **Async create component**

| Message                | Description            | Returns  |
| ---------------------- | ---------------------- | -------- |
| BuildListButtonMessage | Build a BBjListButton. | ``Void`` |


#### **Async component message**

| Message                      | Description                                                                                                        | Returns  |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------ | -------- |
| ClearListBoxMessage          | Implements BBjListBox::removeAllItems.                                                                             | ``Void`` |
| ClearListBoxSelectionMessage | Deselect the specified indices in a BBjListBox (Implements BBjListBox::deselectIndex and BBjListBox::deselectAll). | ``Void`` |
| InsertListBoxItemMessage     | Implements BBjListBox addItem and insertItemAt methods.                                                            | ``Void`` |
| InsertListBoxItemsMessage    | Implements BBjListBox::insertItems. Also used to initialize the listbox from the addListBox string argument.       | ``Void`` |
| RemoveListBoxItemMessage     | Implements BBjListBox::removeItemAt.                                                                               | ``Void`` |
| SetImageAtIndexMessage       | Implements BBjListBox::setImageAt, BBjListButton::setImageAt, BBjListEdit::setImageAt, BBjTabCtrl::setImageAt.     | ``Void`` |
| SetTextAtIndexMessage        | Implements BBjListButton::setTextAt.                                                                               | ``Void`` |
| SetIndexVisibleMessage       | Used by BBjListBox::selectIndex.                                                                                   | ``Void`` |
| SetListBoxIndexMessage       | Implements BBjListBox::selectIndex.                                                                                | ``Void`` |
| SetListBoxIndicesMessage     | Implements BBjListBox::setSelectedIndices.                                                                         | ``Void`` |
| SetMultipleSelectMessage     | Implements BBjListBox::setMultipleSelection.                                                                       | ``Void`` |


#### **Synchronous component message**

| Message                   | Description                                                        | Returns                                                        |
| ------------------------- | ------------------------------------------------------------------ | -------------------------------------------------------------- |
| GetSelectedIndicesMessage | Implements BBjListBox getSelectedIndex() and getSelectedIndices(). | ``JSON array => ArrayList<Integer> (resultType IntegerArray)`` |


#### **Async event callback message**

| Message                       | Description                                      | Returns  |
| ----------------------------- | ------------------------------------------------ | -------- |
| ListClickEventCallbackMessage | Implements event callback for BBjListClickEvent. | ``Void`` |


<!-- tabs:end -->



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
