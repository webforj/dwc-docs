# MSGBOX
![Documentation Type](https://img.shields.io/badge/Documentation-dwc-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--dialog-%23006aff) <a href="https://documentation.basis.cloud/BASISHelp/WebHelp/commands/bbj-commands/msgbox_function_bbj.htm" title="The BBj Control Name">
      <img src="https://img.shields.io/badge/Control-MSGBOX &#8599;-%23006aff" alt="BBj v20.11" />
    </a> ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `MSGBOX<dwc-dialog>` creates a [MSGBOX](https://documentation.basis.cloud/BASISHelp/WebHelp/commands/bbj-commands/msgbox_function_bbj.htm) dialog box.

 **Syntax:** `MSGBOX(str1{,expr{,str2{,button1{,button2{,button3}}}}}{,MODE="options"}{,TIM=int}{,ERR=lineref})`

 ```bbj
   selected = msgbox("This is the message", 0, "MessageBox", mode="blurred=true,button-0-theme=gray")
 ```

Each attribute listed in the table below can be passed to the `MSGBOX` dialog using the `MODE` option.
For example, `mode="blurred=true"` will set the dialog to be blurred.

The `MSGBOX` dialog uses `BBjButton<dwc-button>` to render the buttons. Any supported [`BBjButton<dwc-button>`](dwc/BBjButton.md) attributes can
also be passed to the `MSGBOX` function using the `MODE` option. In this case, the attribute must be prefixed with `button-` followed by the button
index (starting from 0). For example, `button-0-theme=gray` will set the first button theme to `gray`.





## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.

!> **Tip:** From BBj you can set and get the attributes using the [BBjControl::setAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setAttribute.htm)
and [BBjControl::getAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getAttribute.htm) methods respectively.
And to set properties you can use the [BBjControl::setProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setProperty.htm) and [BBjControl::getProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getProperty.htm) methods respectively.
<div style="overflow-x: auto;">

| Name                     | Attribute                   | Description                                                                                                                                                                                                                                                                              | Reflects | Type                                                                                 | Default                      |
| ------------------------ | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: | ------------------------------------------------------------------------------------ | ---------------------------- |
| ``alignment``            | ``alignment``               | The dialog alignment.                                                                                                                                                                                                                                                                    | &#x2714; | ``"bottom" \| "center" \| "top"``                                                    | ``'center'``                 |
| ``autofocus``            | ``autofocus``               | When true, automatically focuses the first focusable element in the dialog.                                                                                                                                                                                                              | &#x2718; | ``boolean``                                                                          | ``false``                    |
| ``backdrop``             | ``backdrop``                | When true, shows the dialog backdrop; otherwise it is hidden.                                                                                                                                                                                                                            | &#x2714; | ``boolean``                                                                          | ``true``                     |
| ``blurred``              | ``blurred``                 | When true, the backdrop will be blurred.                                                                                                                                                                                                                                                 | &#x2714; | ``boolean``                                                                          | ``false``                    |
| ``breakpoint``           | ``breakpoint``              | A media query to control when the dialog will automatically flip to the full screen mode.&nbsp;&nbsp;When the media query matches, the dialog will be full-screen, otherwise it will be positioned.&nbsp;When the auto full screen is enabled, the dialog cannot be moved or positioned. | &#x2718; | ``string``                                                                           | ``''``                       |
| ``cancelOnEscKey``       | ``cancel-on-esc-key``       | Set to false to disable canceling the overlay with the ESC key.                                                                                                                                                                                                                          | &#x2718; | ``boolean``                                                                          | ``true``                     |
| ``cancelOnOutsideClick`` | ``cancel-on-outside-click`` | Set to false to disable canceling the overlay by clicking outside it.                                                                                                                                                                                                                    | &#x2714; | ``boolean``                                                                          | ``false``                    |
| ``container``            |                             | The dialog container.                                                                                                                                                                                                                                                                    | &#x2718; | ``HTMLElement``                                                                      | ``document.documentElement`` |
| ``fullscreen``           | ``fullscreen``              | When true, the dialog will fill the available screen space.                                                                                                                                                                                                                              | &#x2714; | ``boolean``                                                                          | ``false``                    |
| ``hoist``                | ``hoist``                   | When true, the dialog will be positioned using ``fixed``; otherwise, it will be positioned using ``absolute``.                                                                                                                                                                           | &#x2714; | ``boolean``                                                                          | ``true``                     |
| ``maxHeight``            | ``max-height``              | Specifies the dialog's max height.                                                                                                                                                                                                                                                       | &#x2718; | ``string``                                                                           | ``''``                       |
| ``maxWidth``             | ``max-width``               | Specifies the dialog's max width.                                                                                                                                                                                                                                                        | &#x2718; | ``string``                                                                           | ``''``                       |
| ``moveable``             | ``moveable``                | When true, the dialog can be moved by clicking and dragging.                                                                                                                                                                                                                             | &#x2714; | ``boolean``                                                                          | ``true``                     |
| ``opened``               | ``opened``                  | Indicates whether or not the dialog is open.                                                                                                                                                                                                                                             | &#x2714; | ``boolean``                                                                          | ``false``                    |
| ``posx``                 | ``posx``                    | Specifies the X position for the dialog.                                                                                                                                                                                                                                                 | &#x2718; | ``string``                                                                           | ``''``                       |
| ``posy``                 | ``posy``                    | Specifies the Y position for the dialog.                                                                                                                                                                                                                                                 | &#x2718; | ``string``                                                                           | ``''``                       |
| ``snapThreshold``        | ``snap-threshold``          | The number of pixels to take into count before the dialog is considered outside the viewport.                                                                                                                                                                                            | &#x2718; | ``number``                                                                           | ``0``                        |
| ``snapToEdge``           | ``snap-to-edge``            | When true, the dialog cannot be dragged outside the viewport.                                                                                                                                                                                                                            | &#x2714; | ``boolean``                                                                          | ``true``                     |
| ``theme``                | ``theme``                   | The theme name.                                                                                                                                                                                                                                                                          | &#x2714; | ``"danger" \| "default" \| "gray" \| "info" \| "primary" \| "success" \| "warning"`` | ``'default'``                |


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
| ``--dwc-dialog-background``           | The dialog's background                                                  |
| ``--dwc-dialog-border``               | The dialog's border                                                      |
| ``--dwc-dialog-border-radius``        | The dialog's border radius                                               |
| ``--dwc-dialog-color``                | The dialog's color                                                       |
| ``--dwc-dialog-header-background``    | The dialog's header background                                           |
| ``--dwc-dialog-header-color``         | The dialog's header color                                                |
| ``--dwc-dialog-height``               | The dialog's height                                                      |
| ``--dwc-dialog-max-height``           | The dialog's max height                                                  |
| ``--dwc-dialog-max-width``            | The dialog's max width                                                   |
| ``--dwc-dialog-modal-background``     | The modal's background                                                   |
| ``--dwc-dialog-modal-blur``           | The modal's blur value                                                   |
| ``--dwc-dialog-modal-padding``        | The modal's padding                                                      |
| ``--dwc-dialog-posx``                 | The dialog's x position                                                  |
| ``--dwc-dialog-posy``                 | The dialog's y position                                                  |
| ``--dwc-dialog-scroll-bottom-shadow`` | The content box shadow when the content is scrolled to the bottom        |
| ``--dwc-dialog-scroll-top-shadow``    | The content box shadow when the content is scrolled away from the header |
| ``--dwc-dialog-shadow``               | The dialog's box shadow                                                  |
| ``--dwc-dialog-width``                | The dialog's width                                                       |
| ``--dwc-dialog-zindex``               | The dialog z-index                                                       |


</div>

## Dependent Components

- [dwc-login](web-components/dwc-login.md)


## Messages

Messages are the BBj instructions that are sent to the browser form the server to create and configure the BBj control.<!-- tabs:start -->

#### **Sync server message**

| Message           | Description                                                                                                                                              | Returns     |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| ShowMsgBoxMessage | This implements the msgbox() function. It shows the msgbox() dialogue(), waits for user action, the destroys the dialogue and returns an integer result. | ``Integer`` |


<!-- tabs:end -->



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
