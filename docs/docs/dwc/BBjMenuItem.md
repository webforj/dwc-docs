# BBjMenuItem
![Documentation Type](https://img.shields.io/badge/Documentation-dwc-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--menuitem-%23006aff) <a href="https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjmenuitem/BBjMenuItem.htm" title="The BBj Control Name">
      <img src="https://img.shields.io/badge/Control-BBjMenuItem &#8599;-%23006aff" alt="BBj v20.11" />
    </a> ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `BBjMenuItem<dwc-menuitem>` provides methods for manipulating a UI menu item control.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.

!> **Tip:** From BBj you can set and get the attributes using the [BBjControl::setAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setAttribute.htm)
and [BBjControl::getAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getAttribute.htm) methods respectively.
And to set properties you can use the [BBjControl::setProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setProperty.htm) and [BBjControl::getProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getProperty.htm) methods respectively.
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

## Slots

<div style="overflow-x: auto;">

| Slot       | Description                                                                   |
| ---------- | ----------------------------------------------------------------------------- |
|            | The place where dwc-menu should be placed in case the item is a dropdown menu |
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

| Name                                        | Description                                        |
| ------------------------------------------- | -------------------------------------------------- |
| ``--dwc-menuitem-highlighted-background``   | The item background when highlighted (focused)     |
| ``--dwc-menuitem-highlighted-color``        | The item color when highlighted (focused)          |
| ``--dwc-menuitem-highlighted-hotkey-color`` | The item hotkey's color when highlighted (focused) |
| ``--dwc-menuitem-hotkey-color``             | The item's hotkey color                            |
| ``--dwc-menuitem-icon-check-color``         | The item check icon color                          |
| ``--dwc-menuitem-selected-background``      | The item background when selected                  |
| ``--dwc-menuitem-selected-color``           | The item color when selected                       |
| ``--dwc-menuitem-selected-hotkey-color``    | The item's hotkey color when selected              |
| ``--dwc-popover-open-height``               | The height of the popover element when it is open. |
| ``--dwc-popover-open-width``                | The width of the popover element when it is open.  |
| ``--dwc-popup-arrow-background``            | The background color of the popup's arrow element. |
| ``--dwc-popup-arrow-size``                  | The size of the popup's arrow element.             |
| ``--dwc-popup-background``                  | The background color of the popup element.         |
| ``--dwc-popup-border``                      | The border of the popup element.                   |
| ``--dwc-popup-shadow``                      | The shadow of the popup element.                   |


</div>

## Components Dependencies

- [dwc-hotkey](web-components/dwc-hotkey.md)
- [dwc-icon](web-components/dwc-icon.md)


## Dependent Components

- [dwc-file-chooser](web-components/dwc-file-chooser.md)
- [dwc-upload](web-components/dwc-upload.md)


## Messages

Messages are the BBj instructions that are sent to the browser form the server to create and configure the BBj control.<!-- tabs:start -->

#### **Async create component**

| Message              | Description          | Returns  |
| -------------------- | -------------------- | -------- |
| BuildMenuItemMessage | Build a BBjMenuItem. | ``Void`` |


#### **Async component message**

| Message               | Description                                                                                                                                                                                                                                                                                                                               | Returns  |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| SetTextMessage        | Used to set plain text content on any component. See also SetHtmlMessage.                                                                                                                                                                                                                                                                 | ``Void`` |
| SetAcceleratorMessage | Implements BBjMenuItem::setAccelerator.                                                                                                                                                                                                                                                                                                   | ``Void`` |
| SetImageInfoMessage   | Implements BBjMenuItem::setImage, BBjWindow::setIcon.                                                                                                                                                                                                                                                                                     | ``Void`` |
| SetImageSizeMessage   | Implements BBjMenuItem::setImageSize. For BBjButton::setImageSize, refer to AbstractButtonBridge::setImageSize.                                                                                                                                                                                                                           | ``Void`` |
| InsertMenuItemMessage | Implements BBjMenu::addMenuItem, BBjMenu::insertMenuItem, BBjMenu::insertCheckableMenuItem, BBjPopupMenu::insertMenuItem, BBjPopupMenu::insertCheckableMenuItem; used by SETMENU.                                                                                                                                                         | ``Void`` |
| RemoveMenuItemMessage | Implements BBjMenuBar::removeMenu, BBjMenuBar::removeMenuAt, BBjMenu::removeMenu, BBjMenu::removeMenuAt, BBjMenu::removeMenuItem, BBjMenu::removeMenuItemAt, BBjMenu::removeSeparator, BBjPopupMenu::removeMenu, BBjPopupMenu::removeMenuAt, BBjPopupMenu::removeMenuItem, BBjPopupMenu::removeMenuItemAt, BBjPopupMenu::removeSeparator. | ``Void`` |
| SetCustomFontMessage  | Used internally by BBjMenuItem::setFont.                                                                                                                                                                                                                                                                                                  | ``Void`` |


#### **Async event callback message**

| Message                            | Description                                           | Returns  |
| ---------------------------------- | ----------------------------------------------------- | -------- |
| MenuItemSelectEventCallbackMessage | Implements event callback for BBjMenuItemSelectEvent. | ``Void`` |


<!-- tabs:end -->



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
