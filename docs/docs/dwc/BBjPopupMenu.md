# BBjPopupMenu
![Documentation Type](https://img.shields.io/badge/Documentation-dwc-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--popupmenu-%23006aff) <a href="https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjpopupmenu/bbjpopupmenu.htm?Highlight=BBjPopupmenu" title="The BBj Control Name">
      <img src="https://img.shields.io/badge/Control-BBjPopupMenu &#8599;-%23006aff" alt="BBj v20.11" />
    </a> ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `BBjPopupMenu<dwc-popupmenu>` provides methods for manipulating a UI popup menu associated with a control.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.

!> **Tip:** From BBj you can set and get the attributes using the [BBjControl::setAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setAttribute.htm)
and [BBjControl::getAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getAttribute.htm) methods respectively.
And to set properties you can use the [BBjControl::setProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setProperty.htm) and [BBjControl::getProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getProperty.htm) methods respectively.
<table>
<thead><tr><th style="width:28px;padding:4px"></th><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>contextElement</b></code></td><td style="vertical-align:top"></td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Type</span> <code>HTMLElement</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>disabled</b></code></td><td style="vertical-align:top">Specifies that the control should be disabled.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>disabled</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>Yes</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>distance</b></code></td><td style="vertical-align:top">The distance in pixels to offset the popup away from its target.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>distance</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>number</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>0</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>label</b></code></td><td style="vertical-align:top">Specifies a short label for the control.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>label</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>string</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>''</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>maxRowCount</b></code></td><td style="vertical-align:top">Sets the maximum number of rows that the popup will display.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>max-row-count</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>number</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>opened</b></code></td><td style="vertical-align:top">When true, the popup is opened; otherwise it is closed.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>opened</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>false</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>Yes</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>placement</b></code></td><td style="vertical-align:top">Describes the popup's menu placement.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>placement</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>"bottom" | "left" | "right" | "top"</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>skidding</b></code></td><td style="vertical-align:top">The distance in pixels to offset the popup along its target.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>skidding</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>number</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>0</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>type</b></code></td><td style="vertical-align:top">Gives the popup's menu a custom type attribute.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>type</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>string</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>''</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>Yes</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>x</b></code></td><td style="vertical-align:top">The popup X position</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>x</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>number</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>0</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>y</b></code></td><td style="vertical-align:top">The popup Y position</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>y</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>number</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>0</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
</tbody></table>

## Slots

<div style="overflow-x: auto;">

| Slot  | Description      |
| ----- | ---------------- |
|       | The default slot |


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

| Name                             | Description                                        |
| -------------------------------- | -------------------------------------------------- |
| ``--dwc-popover-open-height``    | The height of the popover element when it is open. |
| ``--dwc-popover-open-width``     | The width of the popover element when it is open.  |
| ``--dwc-popup-arrow-background`` | The background color of the popup's arrow element. |
| ``--dwc-popup-arrow-size``       | The size of the popup's arrow element.             |
| ``--dwc-popup-background``       | The background color of the popup element.         |
| ``--dwc-popup-border``           | The border of the popup element.                   |
| ``--dwc-popup-shadow``           | The shadow of the popup element.                   |


</div>

## Dependent Components

- [dwc-file-chooser](web-components/dwc-file-chooser.md)
- [dwc-upload](web-components/dwc-upload.md)


## Messages

Messages are the BBj instructions that are sent to the browser form the server to create and configure the BBj control.<!-- tabs:start -->

#### **Create**

| Message               | Description           | Returns  |
| --------------------- | --------------------- | -------- |
| BuildPopupMenuMessage | Build a BBjPopupMenu. | ``Void`` |


#### **Async**

| Message                | Description                                                                                                                                                                                                                                                                                                                               | Returns  |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| SetEnabledMessage      | Implements BBjControl::setEnabled.                                                                                                                                                                                                                                                                                                        | ``Void`` |
| HidePopupMenuMessage   | Implements BBjPopupMenu::hide.                                                                                                                                                                                                                                                                                                            | ``Void`` |
| SetPopupTargetMessage  | Used by BBjPopupMenu::show to associate the popup menu with a specific control.                                                                                                                                                                                                                                                           | ``Void`` |
| SetPopupMenuMessage    | Implements BBjControl::addPopupMenu, BBjControl::setPopupMenu.                                                                                                                                                                                                                                                                            | ``Void`` |
| ShowPopupMenuMessage   | Show a BBjPopupMenu.                                                                                                                                                                                                                                                                                                                      | ``Void`` |
| InsertMenuItemMessage  | Implements BBjMenu::addMenuItem, BBjMenu::insertMenuItem, BBjMenu::insertCheckableMenuItem, BBjPopupMenu::insertMenuItem, BBjPopupMenu::insertCheckableMenuItem; used by SETMENU.                                                                                                                                                         | ``Void`` |
| InsertSeparatorMessage | Implements BBjMenu::insertSeparator and BBjPopupMenu::insertSeparator.                                                                                                                                                                                                                                                                    | ``Void`` |
| RemoveMenuItemMessage  | Implements BBjMenuBar::removeMenu, BBjMenuBar::removeMenuAt, BBjMenu::removeMenu, BBjMenu::removeMenuAt, BBjMenu::removeMenuItem, BBjMenu::removeMenuItemAt, BBjMenu::removeSeparator, BBjPopupMenu::removeMenu, BBjPopupMenu::removeMenuAt, BBjPopupMenu::removeMenuItem, BBjPopupMenu::removeMenuItemAt, BBjPopupMenu::removeSeparator. | ``Void`` |


#### **Sync**

| Message                   | Description                         | Returns     |
| ------------------------- | ----------------------------------- | ----------- |
| IsPopupMenuVisibleMessage | Implements BBjPopupMenu::isVisible. | ``Boolean`` |


#### **Callbacks**

| Message                                 | Description                                        | Returns  |
| --------------------------------------- | -------------------------------------------------- | -------- |
| PopupMenuItemSelectEventCallbackMessage | Implements event callback for BBjPopupSelectEvent. | ``Void`` |


<!-- tabs:end -->



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2026.*
