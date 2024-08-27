# bbj-popover
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-bbj--popover-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-scoped-%23006aff)

The `<bbj-popover>` provides methods for manipulating a UI popover panel that shows on a content screen
when a user clicks on a control or within a defined area.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<div style="overflow-x: auto;">

| Name              | Attribute           | Description                                                                                       | Reflects | Type                                                                                                                                                                   | Default          |
| ----------------- | ------------------- | ------------------------------------------------------------------------------------------------- | :------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| ``arrow``         | ``arrow``           | When true the popover arrow will be shown, hidden otherwise.                                      | &#x2714; | ``boolean``                                                                                                                                                            | ``true``         |
| ``disabled``      | ``disabled``        | Specifies that the control should be disabled.                                                    | &#x2714; | ``boolean``                                                                                                                                                            | ``false``        |
| ``distance``      | ``distance``        | The distance in pixels from which to offset the popover away from its trigger.                    | &#x2718; | ``number``                                                                                                                                                             | ``2``            |
| ``openHeight``    | ``open-height``     | Sets the popover max-height                                                                       | &#x2718; | ``string``                                                                                                                                                             | ``''``           |
| ``openWidth``     | ``open-width``      | Sets the popover width                                                                            | &#x2718; | ``string``                                                                                                                                                             | ``''``           |
| ``opened``        | ``opened``          | When true then the popover is opened, closed otherwise.                                           | &#x2714; | ``boolean``                                                                                                                                                            | ``false``        |
| ``placement``     | ``placement``       | Describes the preferred placement of the popover                                                  | &#x2718; | ``"bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"`` | ``'bottom-end'`` |
| ``skidding``      | ``skidding``        | The distance in pixels from which to offset the popover along its trigger.                        | &#x2718; | ``number``                                                                                                                                                             | ``0``            |
| ``togglable``     | ``togglable``       | When true, the popover cannot be closed or opened by the user, otherwise only togglable with API. | &#x2718; | ``boolean``                                                                                                                                                            | ``true``         |
| ``toggleOnArrow`` | ``toggle-on-arrow`` | When true, the popover will open when arrows keys are used.                                       | &#x2718; | ``boolean``                                                                                                                                                            | ``true``         |
| ``toggleOnClick`` | ``toggle-on-click`` | When true, the popover will be toggled when the handler is clicked.                               | &#x2718; | ``boolean``                                                                                                                                                            | ``true``         |
| ``toggleOnEnter`` | ``toggle-on-enter`` | When true, the popover will toggled when enter is pressed.                                        | &#x2718; | ``boolean``                                                                                                                                                            | ``true``         |
| ``type``          | ``type``            | Give the popover a custom type attribute.                                                         | &#x2714; | ``string``                                                                                                                                                             |                  |


</div>

## Events

<div style="overflow-x: auto;">

| Event                    | Description                          | Type     |
| ------------------------ | ------------------------------------ | -------- |
| ``bbj-popover-canceled`` | Fired after the popover is canceled. | ``void`` |
| ``bbj-popover-closed``   | Fired after the popover is closed.   | ``void`` |
| ``bbj-popover-opened``   | Fired after the popover is opened.   | ``void`` |


</div>

## Slots

<div style="overflow-x: auto;">

| Slot        | Description            |
| ----------- | ---------------------- |
|             | The popover's content. |
| ``handler`` | The popover's handler. |


</div>

## CSS Properties


CSS Properties are DWC-defined variables in CSS, denoted by `--`, followed by a name.
They enable dynamic styling, reusability, and easy customization of components.
With CSS Properties, you can change the look and feel of a component simply by changing the value of a variable.
[[Read more]](theme-engine/css-variables).
<div style="overflow-x: auto;">

| Name                             | Description                                                                          |
| -------------------------------- | ------------------------------------------------------------------------------------ |
| ``--bbj-popover-open-height``    | The height of the popover element when it is open. (applied to ``.bbj-popover``)     |
| ``--bbj-popover-open-width``     | The width of the popover element when it is open. (applied to ``.bbj-popover``)      |
| ``--bbj-popup-arrow-background`` | The background color of the popup's arrow element. (applied to ``.bbj-popup-arrow``) |
| ``--bbj-popup-arrow-size``       | The size of the popup's arrow element. (applied to ``.bbj-popup-arrow``)             |
| ``--bbj-popup-background``       | The background color of the popup element. (applied to ``.bbj-popup``)               |
| ``--bbj-popup-border``           | The border of the popup element. (applied to ``.bbj-popup``)                         |
| ``--bbj-popup-shadow``           | The shadow of the popup element. (applied to ``.bbj-popup``)                         |


</div>

## Dependent Components

- [bbj-color-chooser](web-components/bbj-color-chooser.md)
- [bbj-font-chooser](web-components/bbj-font-chooser.md)

## Methods

### `close() => Promise<void>`

Closes the popover

### Returns

Type: `Promise<void>`

### `getPositionerElement() => Promise<HTMLElement>`

Retrieves the positioner element.

### Returns

Type: `Promise<HTMLElement>`

### `open() => Promise<void>`

Opens the popover

### Returns

Type: `Promise<void>`

### `reposition() => Promise<void>`

Forces the popover re-position

### Returns

Type: `Promise<void>`

### `toggle() => Promise<void>`

Open/closes the popover

### Returns

Type: `Promise<void>`



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
