# bbj-menu
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-bbj--menu-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)




## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<div style="overflow-x: auto;">

| Name            | Attribute         | Description                                                                                                            | Reflects | Type                                       | Default   |
| --------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------- | :------: | ------------------------------------------ | --------- |
| ``disabled``    | ``disabled``      | Specifies that the control should be disabled                                                                          | &#x2714; | ``boolean``                                |           |
| ``hasFocus``    | ``has-focus``     | When true, the control has focus , blurred otherwise. The component will automatically update this property.           | &#x2714; | ``boolean``                                | ``false`` |
| ``label``       | ``label``         | Specifies a short label for the control.                                                                               | &#x2718; | ``string``                                 | ``''``    |
| ``maxRowCount`` | ``max-row-count`` | Sets the maximum number of rows that the menu will display.                                                            | &#x2718; | ``number``                                 |           |
| ``placement``   | ``placement``     | Describes the menu placement. Setting this property updates the placement of all top-level dropdown items in the menu. | &#x2718; | ``"bottom" \| "left" \| "right" \| "top"`` |           |
| ``type``        | ``type``          | Gives the menu a custom type attribute.                                                                                | &#x2714; | ``string``                                 | ``''``    |


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

| Part        | Description                   |
| ----------- | ----------------------------- |
| ``control`` | The component's base wrapper. |


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

| Name                            | Description                 |
| ------------------------------- | --------------------------- |
| ``--bbj-menu-background-color`` | The menu's background color |
| ``--bbj-menu-border-color``     | The menu's border color     |
| ``--bbj-menu-shadow``           | The menu's box shadow       |


</div>

## Dependent Components

- [bbj-file-chooser](web-components/bbj-file-chooser.md)
- [bbj-upload](web-components/bbj-upload.md)

## Methods

### `close() => Promise<void>`

Closes all dropdowns in the menu.

### Returns

Type: `Promise<void>`

### `hasItem(item: HTMLBbjMenuitemElement) => Promise<boolean>`

Checks if given item is in this menu. Returns true when it exists, false otherwise.

### Returns

Type: `Promise<boolean>`

### `length() => Promise<number>`

Gets the menu length.

### Returns

Type: `Promise<number>`

### `removeFocus() => Promise<void>`

Removes focus from the control.

### Returns

Type: `Promise<void>`

### `reposition() => Promise<void>`

Forces the repositioning of all items' dropdowns in the menu.

### Returns

Type: `Promise<void>`

### `setFocus() => Promise<void>`

Sets focus on the control.

### Returns

Type: `Promise<void>`



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
