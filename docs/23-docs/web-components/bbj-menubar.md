# bbj-menubar
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-bbj--menubar-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `BBjMenuBar<bbj-menubar>` provides methods for manipulating a UI menu bar control.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<div style="overflow-x: auto;">

| Name                | Attribute             | Description                                                                                                                                                     | Reflects | Type                                       | Default      |
| ------------------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: | ------------------------------------------ | ------------ |
| ``disabled``        | ``disabled``          | Specifies that the control should be disabled.                                                                                                                  | &#x2714; | ``boolean``                                |              |
| ``distance``        | ``distance``          | The distance in pixels from which to offset the dropdown items away from the menubar.&nbsp;Setting this property will affect the top-level dropdown items only. | &#x2718; | ``number``                                 | ``4``        |
| ``hasFocus``        | ``has-focus``         | When true, the control has focus, blurred otherwise. The component will automatically update this property.                                                     | &#x2714; | ``boolean``                                | ``false``    |
| ``hideChevronIcon`` | ``hide-chevron-icon`` | When true then the chevron icon in the menubar items will be hidden.&nbsp;Setting this property will affect the top-level dropdown items only.                  | &#x2718; | ``boolean``                                | ``true``     |
| ``hideHotkeyLabel`` | ``hide-hotkey-label`` | When true then the hotkey's label will be hidden, visible otherwise.&nbsp;Setting this property will affect the top-level dropdown items only.                  | &#x2718; | ``boolean``                                | ``true``     |
| ``label``           | ``label``             | Specifies a short label for the control.                                                                                                                        | &#x2718; | ``string``                                 | ``''``       |
| ``placement``       | ``placement``         | Describes the dropdown items placement.&nbsp;Setting this property will affect the top-level dropdown items only.                                               | &#x2718; | ``"bottom" \| "left" \| "right" \| "top"`` | ``'bottom'`` |
| ``scrollValue``     | ``scroll-value``      | The value to add to the current scroll position when the right or the left advancer is clicked.                                                                 | &#x2718; | ``number``                                 | ``150``      |
| ``skidding``        | ``skidding``          | The distance in pixels from which to offset the dropdown items along the menubar.&nbsp;Setting this property will affect the top-level dropdown items only.     | &#x2718; | ``number``                                 | ``0``        |


</div>

## Slots

<div style="overflow-x: auto;">

| Slot  | Description                                      |
| ----- | ------------------------------------------------ |
|       | The place where bbj-menuitem(s) should be placed |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part               | Description                                                   |
| ------------------ | ------------------------------------------------------------- |
| ``advancer``       | The button which scrolls left or right                        |
| ``advancer-left``  | The button which scrolls left                                 |
| ``advancer-right`` | The button which scrolls right                                |
| ``control``        | The component's base wrapper                                  |
| ``items``          | The items container                                           |
| ``items-wrapper``  | A wrapper around the real items container. Used for scrolling |


</div>

## Hosted Classes


Hosted Classes are CSS classes that are applied to the host element of a component. They are useful for styling the host element from outside the component's own CSS.
They can either reflect the component's state, such as "disabled" or "active," or provide options to alter the component's style based on user interaction or other conditions.
<div style="overflow-x: auto;">

| CSS Class        | Description                            |
| ---------------- | -------------------------------------- |
| ``BBjControl``   | Always applied                         |
| ``BBjMenu``      | Always applied                         |
| ``bbj-disabled`` | Applied when the component is disabled |


</div>

## CSS Properties


CSS Properties are DWC-defined variables in CSS, denoted by `--`, followed by a name.
They enable dynamic styling, reusability, and easy customization of components.
With CSS Properties, you can change the look and feel of a component simply by changing the value of a variable.
[[Read more]](theme-engine/css-variables).
<div style="overflow-x: auto;">

| Name                                                         | Description                       |
| ------------------------------------------------------------ | --------------------------------- |
| ``--bbj-menubar-advancer-colorL The color of the advancers`` |                                   |
| ``--bbj-menubar-left-advancer-background``                   | The background of the left arrow  |
| ``--bbj-menubar-right-advancer-background``                  | The background of the right arrow |


</div>

## Components Dependencies

- [bbj-icon-button](web-components/bbj-icon-button.md)

## Methods

### `close() => Promise<void>`

Closes all dropdown in this menu.

### Returns

Type: `Promise<void>`

### `removeFocus() => Promise<void>`

Removes focus from the control.

### Returns

Type: `Promise<void>`

### `setFocus() => Promise<void>`

Sets focus on the control.

### Returns

Type: `Promise<void>`



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
