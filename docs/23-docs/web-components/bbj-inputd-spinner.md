# bbj-inputd-spinner
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-bbj--inputd--spinner-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `BBjInputDSpinner<bbj-inputd-spinner>` provides a spinner on a `BBjInputD`.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<div style="overflow-x: auto;">

| Name                      | Attribute                    | Description                                                                                              | Reflects | Type                                     | Default   |
| ------------------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------- | :------: | ---------------------------------------- | --------- |
| ``disabled``              | ``disabled``                 | Enable/disable the input                                                                                 | &#x2714; | ``boolean``                              | ``false`` |
| ``expanse``               | ``expanse``                  | The component's expanse.                                                                                 | &#x2714; | ``"l" \| "m" \| "s" \| "xl" \| "xs"``    | ``'m'``   |
| ``field``                 | ``field``                    | Specifies whether the spinner will spin by days, weeks, months, or years. The default spin field is DAY. | &#x2718; | ``"DAY" \| "MONTH" \| "WEEK" \| "YEAR"`` | ``'DAY'`` |
| ``label``                 | ``label``                    | The input's label                                                                                        | &#x2718; | ``string``                               |           |
| ``max``                   | ``max``                      | The maximum Julian date to which the spinner will spin.                                                  | &#x2718; | ``number``                               | ``-1``    |
| ``min``                   | ``min``                      | The minimum Julian date to which the spinner will spin.                                                  | &#x2718; | ``number``                               | ``-1``    |
| ``readonly``              | ``readonly``                 | When true, put the input in readonly mode                                                                | &#x2714; | ``boolean``                              | ``false`` |
| ``showSpinners``          | ``show-spinners``            | When true,  up/down buttons will be shown, hidden otherwise.                                             | &#x2718; | ``boolean``                              | ``true``  |
| ``toggleCalendarOnEnter`` | ``toggle-calendar-on-enter`` | When true, pressing enter will toggle the calendar.                                                      | &#x2718; | ``boolean``                              | ``false`` |
| ``visibleCalendarIcon``   | ``visible-calendar-icon``    | When true,  the input will show an icon to toggle the calender.                                          | &#x2718; | ``boolean``                              | ``false`` |


</div>

## Events

<div style="overflow-x: auto;">

| Event            | Description                                  | Type       |
| ---------------- | -------------------------------------------- | ---------- |
| ``bbj-modified`` | Emitted after the input is changed.          | ``string`` |
| ``bbj-spun``     | Emitted after the input has spun up or down. | ``number`` |


</div>

## Slots

<div style="overflow-x: auto;">

| Slot  | Description                                                 |
| ----- | ----------------------------------------------------------- |
|       | The main slot where a bbj-inputd component must be inserted |


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
