# dwc-datefield-spinner
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--datefield--spinner-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `BBjInputDSpinner<dwc-datefield-spinner>` provides a spinner on a `BBjInputD`.

?> **Note:** In BBj. The `BBjInputDSpinner<dwc-datefield-spinner>` accepts all the [BBjInputD\<dwc-datefield\>](dwc/dwc-datefield) supported attributes and properties.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<div style="overflow-x: auto;">

| Name      | Attribute | Description                                                                                              | Reflects | Type                                     | Default   |
| --------- | --------- | -------------------------------------------------------------------------------------------------------- | :------: | ---------------------------------------- | --------- |
| ``field`` | ``field`` | Specifies whether the spinner will spin by days, weeks, months, or years. The default spin field is DAY. | &#x2718; | ``"DAY" \| "MONTH" \| "WEEK" \| "YEAR"`` | ``'DAY'`` |


</div>

## Events

<div style="overflow-x: auto;">

| Event            | Description                                  | Type       |
| ---------------- | -------------------------------------------- | ---------- |
| ``dwc-modified`` | Emitted after the input is changed.          | ``string`` |
| ``dwc-spun``     | Emitted after the input has spun up or down. | ``number`` |


</div>

## Slots

<div style="overflow-x: auto;">

| Slot  | Description                                                    |
| ----- | -------------------------------------------------------------- |
|       | The main slot where a dwc-datefield component must be inserted |


</div>

## Hosted Classes


Hosted Classes are CSS classes that are applied to the host element of a component. They are useful for styling the host element from outside the component's own CSS.
They can either reflect the component's state, such as "disabled" or "active," or provide options to alter the component's style based on user interaction or other conditions.
<div style="overflow-x: auto;">

| CSS Class                | Description                               |
| ------------------------ | ----------------------------------------- |
| ``BBjControl``           | Always applied                            |
| ``BBjSpinner``           | Always applied                            |
| ``BBjInputDSpinner``     | Always applied                            |
| ``bbj-disabled``         | Applied when the component is disabled    |
| ``bbj-focused``          | Applied when the component is focused     |
| ``bbj-readonly``         | Applied when the component is readonly    |
| ``BBjSpinner-arrows``    | Applied on the arrow buttons on container |
| ``BBjSpinner-upArrow``   | Applied on the arrow up button            |
| ``BBjSpinner-downArrow`` | Applied on the arrow down button          |


</div>
## Methods

### `getNextDate() => Promise<number>`

Returns the date that the spinner would return, as a Julian date, if pressing the spin up button.

### Returns

Type: `Promise<number>`

### `getPreviousDate() => Promise<number>`

Returns the date that the spinner would return, as a Julian date, if pressing the spin down button.

### Returns

Type: `Promise<number>`

### `removeFocus() => Promise<void>`

Remove focus from the control

### Returns

Type: `Promise<void>`

### `setFocus() => Promise<void>`

Set focus on the control

### Returns

Type: `Promise<void>`

### `spin(upDirection: boolean) => Promise<void>`

causes the spinner to spin in the specified direction.

### Returns

Type: `Promise<void>`



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
