# bbj-menuitem
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-bbj--menuitem-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `<bbj-menuitem>` provides methods for manipulating a UI menu item control.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<div style="overflow-x: auto;">

| Name                | Attribute             | Description                                                                                                                                            | Reflects | Type                                                                                 | Default        |
| ------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | :------: | ------------------------------------------------------------------------------------ | -------------- |
| ``checkable``       | ``checkable``         | When true, the item's checked status can be changed by the user, false otherwise.                                                                      | &#x2714; | ``boolean``                                                                          | ``false``      |
| ``checked``         | ``checked``           | When true, the item is checked, unchecked otherwise.                                                                                                   | &#x2714; | ``boolean``                                                                          | ``false``      |
| ``disabled``        | ``disabled``          | Specifies that the control should be disabled.                                                                                                         | &#x2714; | ``boolean``                                                                          | ``false``      |
| ``distance``        | ``distance``          | If dropdown item then the distance in pixels to offset the menu away from its item.                                                                    | &#x2718; | ``number``                                                                           | ``0``          |
| ``dropdown``        | ``dropdown``          | When true, the item is a dropdown menu , normal item otherwise. The component will automatically update this property when the menu slot is available. | &#x2714; | ``boolean``                                                                          | ``false``      |
| ``expanse``         | ``expanse``           | The component's expanse.&nbsp;Setting the item's expanse will NOT update its menu expanse if it is a dropdown item.                                    | &#x2714; | ``"l" \| "m" \| "s" \| "xl" \| "xs"``                                                |                |
| ``hasFocus``        | ``has-focus``         | When true, the control has focus , blurred otherwise. The component will automatically update this value                                               | &#x2714; | ``boolean``                                                                          | ``false``      |
| ``hideChevronIcon`` | ``hide-chevron-icon`` | When true then the chevron icon which marks dropdowns will be hidden.                                                                                  | &#x2718; | ``boolean``                                                                          | ``false``      |
| ``hideHotkeyLabel`` | ``hide-hotkey-label`` | When true then the hotkey's label will be hidden, visible otherwise.                                                                                   | &#x2718; | ``boolean``                                                                          | ``false``      |
| ``hotkey``          | ``hotkey``            | The actual item's hotkey.                                                                                                                              | &#x2718; | ``string``                                                                           | ``''``         |
| ``hotkeyLabel``     | ``hotkey-label``      | Sets the hotkey label for the item.                                                                                                                    | &#x2718; | ``string``                                                                           | ``''``         |
| ``hotkeySplitKey``  | ``hotkey-split-key``  | The separator between key combination, (default is +).                                                                                                 | &#x2718; | ``string``                                                                           | ``'+'``        |
| ``hotkeyTarget``    | ``hotkey-target``     | Assigns the hotkey to a specific target element.                                                                                                       | &#x2718; | ``HTMLElement \| string``                                                            | ``'document'`` |
| ``label``           | ``label``             | Specifies a short label for the control.                                                                                                               | &#x2718; | ``string``                                                                           | ``''``         |
| ``opened``          | ``opened``            | If dropdown item and opened then true, false otherwise.                                                                                                | &#x2714; | ``boolean``                                                                          | ``false``      |
| ``placement``       | ``placement``         | Describes the dropdown menu position. Setting this property won't affect the item's menus' dropdown items.                                             | &#x2714; | ``"bottom" \| "left" \| "right" \| "top"``                                           | ``'right'``    |
| ``skidding``        | ``skidding``          | If dropdown item then the distance in pixels to offset the menu along its item.                                                                        | &#x2718; | ``number``                                                                           | ``0``          |
| ``tabTraversable``  | ``tab-traversable``   | Indicates that the element can be focused. A negative value means that the element is not reachable via sequential keyboard navigation.                | &#x2718; | ``number``                                                                           | ``0``          |
| ``theme``           | ``theme``             | The theme name. Setting this property will NOT update the item's menu's theme if the item is a dropdown item                                           | &#x2714; | ``"danger" \| "default" \| "gray" \| "info" \| "primary" \| "success" \| "warning"`` | ``'default'``  |


</div>

## Events

<div style="overflow-x: auto;">

| Event            | Description                                                                                                                              | Type                                                                                                                                   |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| ``bbj-blurred``  | Emitted after the control is blurred.                                                                                                    | ``void``                                                                                                                               |
| ``bbj-changed``  | Emitted after the item is checked or unchecked. This event is fired only for checkable items                                             | ``{ checked: boolean; item: HTMLBbjMenuitemElement; isCtrl: boolean; isShift: boolean; originalEvent: KeyboardEvent \| MouseEvent; }`` |
| ``bbj-clicked``  | Emitted after the item is clicked. This event is fired for checkable and uncheckable items.                                              | ``{ checked: boolean; item: HTMLBbjMenuitemElement; isCtrl: boolean; isShift: boolean; originalEvent: KeyboardEvent \| MouseEvent; }`` |
| ``bbj-closed``   | Emitted after the dropdown is closed.                                                                                                    | ``void``                                                                                                                               |
| ``bbj-entered``  | Emitted when the mouse enters the control                                                                                                | ``{ originalEvent: MouseEvent; }``                                                                                                     |
| ``bbj-focused``  | Emitted after the control is focused.                                                                                                    | ``void``                                                                                                                               |
| ``bbj-left``     | Emitted when the mouse leaves the control                                                                                                | ``{ originalEvent: MouseEvent; }``                                                                                                     |
| ``bbj-opened``   | Emitted after the dropdown is opened.                                                                                                    | ``void``                                                                                                                               |
| ``bbj-selected`` | Emitted after the item clicked. unlike the ``bbj-clicked`` event , this event won't be fired if dropdown item and the menu is not empty. | ``{ checked: boolean; item: HTMLBbjMenuitemElement; isCtrl: boolean; isShift: boolean; originalEvent: KeyboardEvent \| MouseEvent; }`` |


</div>

## Slots

<div style="overflow-x: auto;">

| Slot       | Description                                                                   |
| ---------- | ----------------------------------------------------------------------------- |
|            | The place where bbj-menu should be placed in case the item is a dropdown menu |
| ``prefix`` | The Item's label                                                              |
| ``prefix`` | The Item's prefix                                                             |
| ``suffix`` | The Item's suffix                                                             |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part                     | Description                      |
| ------------------------ | -------------------------------- |
| ``control``              | The component's base wrapper     |
| ``hotkey``               | The Item's hotkey.               |
| ``icon-check``           | The Item' check icon             |
| ``icon-check-wrapper``   | The Item' check icon container   |
| ``icon-chevron``         | The Item' chevron icon           |
| ``icon-chevron-wrapper`` | The Item' chevron icon container |
| ``icon-wrapper``         | The Item's icon container        |
| ``icon-wrapper-check``   |                                  |
| ``icon-wrapper-chevron`` |                                  |
| ``label``                | The Item's label container       |
| ``prefix``               | The item's prefix container      |
| ``suffix``               | The item's suffix container      |


</div>

## Hosted Classes


Hosted Classes are CSS classes that are applied to the host element of a component. They are useful for styling the host element from outside the component's own CSS.
They can either reflect the component's state, such as "disabled" or "active," or provide options to alter the component's style based on user interaction or other conditions.
<div style="overflow-x: auto;">

| CSS Class        | Description                            |
| ---------------- | -------------------------------------- |
| ``BBjControl``   | Always applied                         |
| ``BBjMenuItem``  | Always applied                         |
| ``bbj-disabled`` | Applied when the component is disabled |
| ``bbj-checked``  | Applied when the item is checked       |
| ``bbj-selected`` | Applied when the item is selected      |
| ``bbj-focused``  | Applied when the component is focused  |


</div>

## CSS Properties


CSS Properties are DWC-defined variables in CSS, denoted by `--`, followed by a name.
They enable dynamic styling, reusability, and easy customization of components.
With CSS Properties, you can change the look and feel of a component simply by changing the value of a variable.
[[Read more]](theme-engine/css-variables).
<div style="overflow-x: auto;">

| Name                                        | Description                                                                          |
| ------------------------------------------- | ------------------------------------------------------------------------------------ |
| ``--bbj-menuitem-highlighted-background``   | The item background when highlighted (focused)                                       |
| ``--bbj-menuitem-highlighted-color``        | The item color when highlighted (focused)                                            |
| ``--bbj-menuitem-highlighted-hotkey-color`` | The item hotkey's color when highlighted (focused)                                   |
| ``--bbj-menuitem-hotkey-color``             | The item's hotkey color                                                              |
| ``--bbj-menuitem-icon-check-color``         | The item check icon color                                                            |
| ``--bbj-menuitem-selected-background``      | The item background when selected                                                    |
| ``--bbj-menuitem-selected-color``           | The item color when selected                                                         |
| ``--bbj-menuitem-selected-hotkey-color``    | The item's hotkey color when selected                                                |
| ``--bbj-popover-open-height``               | The height of the popover element when it is open. (applied to ``.bbj-popover``)     |
| ``--bbj-popover-open-width``                | The width of the popover element when it is open. (applied to ``.bbj-popover``)      |
| ``--bbj-popup-arrow-background``            | The background color of the popup's arrow element. (applied to ``.bbj-popup-arrow``) |
| ``--bbj-popup-arrow-size``                  | The size of the popup's arrow element. (applied to ``.bbj-popup-arrow``)             |
| ``--bbj-popup-background``                  | The background color of the popup element. (applied to ``.bbj-popup``)               |
| ``--bbj-popup-border``                      | The border of the popup element. (applied to ``.bbj-popup``)                         |
| ``--bbj-popup-shadow``                      | The shadow of the popup element. (applied to ``.bbj-popup``)                         |


</div>

## Components Dependencies

- [bbj-hotkey](web-components/bbj-hotkey.md)
- [bbj-icon](web-components/bbj-icon.md)


## Dependent Components

- [bbj-file-chooser](web-components/bbj-file-chooser.md)
- [bbj-upload](web-components/bbj-upload.md)

## Methods

### `close() => Promise<void>`

If dropdown item, this method will close the dropdown.

### Returns

Type: `Promise<void>`

### `focusMenu() => Promise<void>`

It dropdown item, the menu will be focused.

### Returns

Type: `Promise<void>`

### `getMenu() => Promise<HTMLBbjMenuElement>`

If dropdown item, returns the dropdown menu instance.

### Returns

Type: `Promise<HTMLBbjMenuElement>`

### `hasItem(item: HTMLBbjMenuitemElement) => Promise<boolean>`

Check if given item is in this dropdown item. Returns true when it exists, false otherwise.

### Returns

Type: `Promise<boolean>`

### `open() => Promise<void>`

If dropdown item, this method will open the dropdown.

### Returns

Type: `Promise<void>`

### `removeFocus() => Promise<void>`

Removes focus from the control

### Returns

Type: `Promise<void>`

### `reposition() => Promise<void>`

If dropdown item, repositions the dropdown menu.

### Returns

Type: `Promise<void>`

### `setFocus() => Promise<void>`

Sets focus on the control

### Returns

Type: `Promise<void>`

### `toggle() => Promise<void>`

If dropdown item, the method will toggle the dropdown.

### Returns

Type: `Promise<void>`



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
