# bbj-dialog
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-bbj--dialog-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `<bbj-dialog>` creates a  dialog box.





## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<div style="overflow-x: auto;">

| Name                     | Attribute                   | Description                                                                                                                                                                                                                                                                                         | Reflects | Type                                                                                 | Default                      |
| ------------------------ | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: | ------------------------------------------------------------------------------------ | ---------------------------- |
| ``alignment``            | ``alignment``               | The dialog alignment.                                                                                                                                                                                                                                                                               | &#x2714; | ``"bottom" \| "center" \| "top"``                                                    | ``'center'``                 |
| ``autofocus``            | ``autofocus``               | When true, automatically focuses the first focusable element in the dialog.                                                                                                                                                                                                                         | &#x2718; | ``boolean``                                                                          | ``false``                    |
| ``backdrop``             | ``backdrop``                | When true, shows the dialog backdrop; otherwise it is hidden.                                                                                                                                                                                                                                       | &#x2714; | ``boolean``                                                                          | ``true``                     |
| ``blurred``              | ``blurred``                 | When true, the backdrop will be blurred.                                                                                                                                                                                                                                                            | &#x2714; | ``boolean``                                                                          | ``false``                    |
| ``breakpoint``           | ``breakpoint``              | A media query to control when the dialog will automatically flip to the full screen mode.&nbsp;&nbsp;When the media query matches, the dialog will be full-screen, otherwise it will be positioned.&nbsp;When the auto full screen is enabled, the dialog cannot be moved or positioned.            | &#x2718; | ``string``                                                                           | ``''``                       |
| ``cancelOnEscKey``       | ``cancel-on-esc-key``       | Set to false to disable canceling the overlay with the ESC key.<br><br>&nbsp;&nbsp;**Note** If you are setting this attribute from BBj, function type ``2`` (Abort, Retry, Ignore) or ``4`` (Yes, No),&nbsp;  will always resolve to ``false`` because the user must click one of the buttons.      | &#x2718; | ``boolean``                                                                          | ``true``                     |
| ``cancelOnOutsideClick`` | ``cancel-on-outside-click`` | Set to false to disable canceling the overlay by clicking outside it.<br><br>&nbsp;&nbsp;**Note** If you are setting this attribute from BBj, function type ``2`` (Abort, Retry, Ignore) or ``4`` (Yes, No)&nbsp;  will always resolve to ``false`` because the user must click one of the buttons. | &#x2714; | ``boolean``                                                                          | ``true``                     |
| ``container``            |                             | The dialog container.                                                                                                                                                                                                                                                                               | &#x2718; | ``HTMLElement``                                                                      | ``document.documentElement`` |
| ``fullscreen``           | ``fullscreen``              | When true, the dialog will fill the available screen space.                                                                                                                                                                                                                                         | &#x2714; | ``boolean``                                                                          | ``false``                    |
| ``hoist``                | ``hoist``                   | When true, the dialog will be positioned using ``fixed``; otherwise, it will be positioned using ``absolute``.                                                                                                                                                                                      | &#x2714; | ``boolean``                                                                          | ``true``                     |
| ``maxHeight``            | ``max-height``              | Specifies the dialog's max height.                                                                                                                                                                                                                                                                  | &#x2718; | ``string``                                                                           | ``''``                       |
| ``maxWidth``             | ``max-width``               | Specifies the dialog's max width.                                                                                                                                                                                                                                                                   | &#x2718; | ``string``                                                                           | ``''``                       |
| ``moveable``             | ``moveable``                | When true, the dialog can be moved by clicking and dragging.                                                                                                                                                                                                                                        | &#x2714; | ``boolean``                                                                          | ``true``                     |
| ``opened``               | ``opened``                  | Indicates whether or not the dialog is open.                                                                                                                                                                                                                                                        | &#x2714; | ``boolean``                                                                          | ``false``                    |
| ``posx``                 | ``posx``                    | Specifies the X position for the dialog.                                                                                                                                                                                                                                                            | &#x2718; | ``string``                                                                           | ``''``                       |
| ``posy``                 | ``posy``                    | Specifies the Y position for the dialog.                                                                                                                                                                                                                                                            | &#x2718; | ``string``                                                                           | ``''``                       |
| ``snapThreshold``        | ``snap-threshold``          | The number of pixels to take into count before the dialog is considered outside the viewport.                                                                                                                                                                                                       | &#x2718; | ``number``                                                                           | ``0``                        |
| ``snapToEdge``           | ``snap-to-edge``            | When true, the dialog cannot be dragged outside the viewport.                                                                                                                                                                                                                                       | &#x2714; | ``boolean``                                                                          | ``true``                     |
| ``theme``                | ``theme``                   | The theme name.                                                                                                                                                                                                                                                                                     | &#x2714; | ``"danger" \| "default" \| "gray" \| "info" \| "primary" \| "success" \| "warning"`` | ``'default'``                |


</div>

## Events

<div style="overflow-x: auto;">

| Event                 | Description                                  | Type                                  |
| --------------------- | -------------------------------------------- | ------------------------------------- |
| ``bbj-dialog-closed`` | Emitted after the component has been closed. | ``{ reason: BbjDialogCloseReason; }`` |
| ``bbj-dialog-opened`` | Emitted after the component has been opened. | ``any``                               |


</div>

## Slots

<div style="overflow-x: auto;">

| Slot        | Description          |
| ----------- | -------------------- |
| ``content`` | The dialog's content |
| ``footer``  | The dialog's footer  |
| ``header``  | The dialog's header  |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part       | Description                          |
| ---------- | ------------------------------------ |
| ``dialog`` | The dialog's wrapper                 |
| ``modal``  | The backdrop modal behind the dialog |


</div>

## Hosted Classes


Hosted Classes are CSS classes that are applied to the host element of a component. They are useful for styling the host element from outside the component's own CSS.
They can either reflect the component's state, such as "disabled" or "active," or provide options to alter the component's style based on user interaction or other conditions.
<div style="overflow-x: auto;">

| CSS Class                | Description                                              |
| ------------------------ | -------------------------------------------------------- |
| ``bbj-opened``           | When the dialog is opened                                |
| ``bbj-scrollable``       | When the dialog content is scrollable                    |
| ``bbj-scrolledFromTop``  | When the dialog content is scrolled away from the header |
| ``bbj-scrolledToBottom`` | When the dialog content is scrolled to the bottom        |


</div>

## CSS Properties


CSS Properties are DWC-defined variables in CSS, denoted by `--`, followed by a name.
They enable dynamic styling, reusability, and easy customization of components.
With CSS Properties, you can change the look and feel of a component simply by changing the value of a variable.
[[Read more]](theme-engine/css-variables).
<div style="overflow-x: auto;">

| Name                                  | Description                                                              |
| ------------------------------------- | ------------------------------------------------------------------------ |
| ``--bbj-dialog-background``           | The dialog's background                                                  |
| ``--bbj-dialog-border``               | The dialog's border                                                      |
| ``--bbj-dialog-border-radius``        | The dialog's border radius                                               |
| ``--bbj-dialog-color``                | The dialog's color                                                       |
| ``--bbj-dialog-header-background``    | The dialog's header background                                           |
| ``--bbj-dialog-header-color``         | The dialog's header color                                                |
| ``--bbj-dialog-height``               | The dialog's height                                                      |
| ``--bbj-dialog-max-height``           | The dialog's max height                                                  |
| ``--bbj-dialog-max-width``            | The dialog's max width                                                   |
| ``--bbj-dialog-modal-background``     | The modal's background                                                   |
| ``--bbj-dialog-modal-blur``           | The modal's blur value                                                   |
| ``--bbj-dialog-modal-padding``        | The modal's padding                                                      |
| ``--bbj-dialog-posx``                 | The dialog's x position                                                  |
| ``--bbj-dialog-posy``                 | The dialog's y position                                                  |
| ``--bbj-dialog-scroll-bottom-shadow`` | The content box shadow when the content is scrolled to the bottom        |
| ``--bbj-dialog-scroll-top-shadow``    | The content box shadow when the content is scrolled away from the header |
| ``--bbj-dialog-shadow``               | The dialog's box shadow                                                  |
| ``--bbj-dialog-width``                | The dialog's width                                                       |
| ``--bbj-dialog-zindex``               | The dialog z-index                                                       |


</div>

## Dependent Components

- [bbj-login](web-components/bbj-login.md)

## Methods

### `close() => Promise<void>`

Closes the dialog.

### Returns

Type: `Promise<void>`

### `open() => Promise<void>`

Opens the dialog.

### Returns

Type: `Promise<void>`



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
