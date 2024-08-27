# bbj-popupmenu
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-bbj--popupmenu-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `BBjPopupMenu<bbj-popupmenu>` provides methods for manipulating a UI popup menu associated with a control.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<div style="overflow-x: auto;">

| Name               | Attribute         | Description                                                      | Reflects | Type                                       | Default   |
| ------------------ | ----------------- | ---------------------------------------------------------------- | :------: | ------------------------------------------ | --------- |
| ``contextElement`` |                   |                                                                  | &#x2718; | ``HTMLElement``                            |           |
| ``disabled``       | ``disabled``      | Specifies that the control should be disabled.                   | &#x2714; | ``boolean``                                |           |
| ``distance``       | ``distance``      | The distance in pixels to offset the popup away from its target. | &#x2718; | ``number``                                 | ``0``     |
| ``label``          | ``label``         | Specifies a short label for the control.                         | &#x2718; | ``string``                                 | ``''``    |
| ``maxRowCount``    | ``max-row-count`` | Sets the maximum number of rows that the popup will display.     | &#x2718; | ``number``                                 |           |
| ``opened``         | ``opened``        | When true, the popup is opened; otherwise it is closed.          | &#x2714; | ``boolean``                                | ``false`` |
| ``placement``      | ``placement``     | Describes the popup's menu placement.                            | &#x2718; | ``"bottom" \| "left" \| "right" \| "top"`` |           |
| ``skidding``       | ``skidding``      | The distance in pixels to offset the popup along its target.     | &#x2718; | ``number``                                 | ``0``     |
| ``type``           | ``type``          | Gives the popup's menu a custom type attribute.                  | &#x2714; | ``string``                                 | ``''``    |
| ``x``              | ``x``             | The popup X position                                             | &#x2718; | ``number``                                 | ``0``     |
| ``y``              | ``y``             | The popup Y position                                             | &#x2718; | ``number``                                 | ``0``     |


</div>

## Events

<div style="overflow-x: auto;">

| Event           | Description                                                                                  | Type                                                                                                                                   |
| --------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| ``bbj-changed`` | Emitted after the item is checked or unchecked. This event is fired only for checkable items | ``{ checked: boolean; item: HTMLBbjMenuitemElement; isCtrl: boolean; isShift: boolean; originalEvent: KeyboardEvent \| MouseEvent; }`` |
| ``bbj-clicked`` | Emitted after the item is clicked. This event is fired for checkable and uncheckable items   | ``{ checked: boolean; item: HTMLBbjMenuitemElement; isCtrl: boolean; isShift: boolean; originalEvent: KeyboardEvent \| MouseEvent; }`` |
| ``bbj-closed``  | Emitted after the popup is closed.                                                           | ``void``                                                                                                                               |
| ``bbj-opened``  | Emitted after the popup is opened.                                                           | ``void``                                                                                                                               |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part        | Description                   |
| ----------- | ----------------------------- |
| ``control`` | The component's base wrapper. |


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

- [bbj-file-chooser](web-components/bbj-file-chooser.md)
- [bbj-upload](web-components/bbj-upload.md)

## Methods

### `close() => Promise<void>`

Close the popup menu

### Returns

Type: `Promise<void>`

### `hasItem(item: HTMLBbjMenuitemElement) => Promise<boolean>`

Check if given item is in this popup. Returns true when it exists , false otherwise

### Returns

Type: `Promise<boolean>`

### `open() => Promise<void>`

Opens the popup menu

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

### `toggle() => Promise<void>`

Toggle the popup menu

### Returns

Type: `Promise<void>`



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
