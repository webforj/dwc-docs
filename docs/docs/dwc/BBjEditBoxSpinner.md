# BBjEditBoxSpinner
![Documentation Type](https://img.shields.io/badge/Documentation-dwc-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--field--spinner-%23006aff) <a href="https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjeditboxspinner.htm?Highlight=BBjEditbox" title="The BBj Control Name">
      <img src="https://img.shields.io/badge/Control-BBjEditBoxSpinner &#8599;-%23006aff" alt="BBj v20.11" />
    </a> ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `BBjEditBoxSpinner<dwc-field-spinner>` adds spinner functionality to the `BBjEditBox`.

?> **Note:** In BBj. The `BBjEditBoxSpinner<dwc-field-spinner>` accepts all the [BBjEditBox\<dwc-datefield\>](dwc/dwc-field) supported attributes and properties.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.

!> **Tip:** From BBj you can set and get the attributes using the [BBjControl::setAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setAttribute.htm)
and [BBjControl::getAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getAttribute.htm) methods respectively.
And to set properties you can use the [BBjControl::setProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setProperty.htm) and [BBjControl::getProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getProperty.htm) methods respectively.
<div style="overflow-x: auto;">

| Name          | Attribute      | Description                                                                       | Reflects | Type         | Default  |
| ------------- | -------------- | --------------------------------------------------------------------------------- | :------: | ------------ | -------- |
| ``list``      |                | The list of values to display when spinning.                                      | &#x2718; | ``string[]`` | ``[]``   |
| ``listIndex`` | ``list-index`` | Sets the currently displayed value to the one at the specified index in the list. | &#x2718; | ``number``   | ``0``    |
| ``wrap``      | ``wrap``       | When true, the user will abe able to loop through the list of available options.  | &#x2718; | ``boolean``  | ``true`` |


</div>

## Slots

<div style="overflow-x: auto;">

| Slot  | Description                                                |
| ----- | ---------------------------------------------------------- |
|       | The main slot where a dwc-field component must be inserted |


</div>

## Hosted Classes


Hosted Classes are CSS classes that are applied to the host element of a component. They are useful for styling the host element from outside the component's own CSS.
They can either reflect the component's state, such as "disabled" or "active," or provide options to alter the component's style based on user interaction or other conditions.
<div style="overflow-x: auto;">

| CSS Class                | Description                               |
| ------------------------ | ----------------------------------------- |
| ``BBjControl``           | Always applied                            |
| ``BBjSpinner``           | Always applied                            |
| ``BBjEditBoxSpinner``    | Always applied                            |
| ``bbj-disabled``         | Applied when the component is disabled    |
| ``bbj-readonly``         | Applied when the component is readonly    |
| ``BBjSpinner-arrows``    | Applied on the arrow buttons on container |
| ``BBjSpinner-upArrow``   | Applied on the arrow up button            |
| ``BBjSpinner-downArrow`` | Applied on the arrow down button          |


</div>

## Dependent Components

- [dwc-color-chooser](web-components/dwc-color-chooser.md)


## Messages

Messages are the BBj instructions that are sent to the browser form the server to create and configure the BBj control.<!-- tabs:start -->

#### **Async create component**

| Message                 | Description             | Returns  |
| ----------------------- | ----------------------- | -------- |
| BuildListSpinnerMessage | Build a BBjListSpinner. | ``Void`` |


#### **Async component message**

| Message                    | Description                              | Returns  |
| -------------------------- | ---------------------------------------- | -------- |
| SpinSpinnerMessage         | Implements BBjSpinner::spin.             | ``Void`` |
| SetSpinnerListIndexMessage | Implements BBjListSpinner::setListIndex. | ``Void`` |
| SetSpinnerListMessage      | Implements BBjListSpinner::setSpinList.  | ``Void`` |


#### **Synchronous component message**

| Message                    | Description                                                                         | Returns     |
| -------------------------- | ----------------------------------------------------------------------------------- | ----------- |
| GetSpinnerListIndexMessage | Implements BBjListSpinner::getListIndex for BBjEditBoxSpinner and BBjInputESpinner. | ``Integer`` |


#### **Async event callback message**

| Message                          | Description                                         | Returns  |
| -------------------------------- | --------------------------------------------------- | -------- |
| SpinEventCallbackMessage         | Implements event callback for BBjSpinEvent.         | ``Void`` |
| EditModifyEventCallbackMessage   | Implements event callback for BBjEditModifyEvent.   | ``Void`` |
| EditKeypressEventCallbackMessage | Implements event callback for BBjEditKeypressEvent. | ``Void`` |


<!-- tabs:end -->



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
