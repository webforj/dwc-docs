# dwc-toast
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--toast-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

A Toast is a subtle notification commonly used in modern applications.
It can be used to provide feedback about an operation or to display a system message.

A toast can contain buttons by adding `a` and `button` elements to the message's body. If
any of these elements has the `data-action="close"` attribute then it will behave as a dismiss button.

```html
<dwc-toast message="The application has new update available" opened>
  <button>Update</button>
  <button data-action="close">Later</button>
</dwc-toast>
```


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<table>
<thead><tr><th style="width:28px;padding:4px"></th><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>duration</b></code></td><td style="vertical-align:top">The duration in milliseconds to show the toast. After that this time is elapsed , the toast will be hidden automatically. If the duration number is negative the toast will never close automatically</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>duration</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>number</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>3000</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>message</b></code></td><td style="vertical-align:top">The toast's message.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>message</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>string</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>''</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>opened</b></code></td><td style="vertical-align:top">When true, the toast will be shown , hidden otherwise</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>opened</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>false</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>Yes</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>placement</b></code></td><td style="vertical-align:top">The placement of the toast</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>placement</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>"bottom" | "bottom-left" | "bottom-right" | "center" | "top" | "top-left" | "top-right"</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>'bottom'</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>Yes</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>theme</b></code></td><td style="vertical-align:top">The theme name</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>theme</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>"danger" | "default" | "gray" | "info" | "primary" | "success" | "warning"</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>'default'</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>Yes</span></div></div></td></tr>
</tbody></table>

## Events

<div style="overflow-x: auto;">

| Event          | Description                        | Type     |
| -------------- | ---------------------------------- | -------- |
| ``dwc-closed`` | Emitted after the toast is closed. | ``void`` |
| ``dwc-opened`` | Emitted after the toast is opened. | ``void`` |


</div>

## Slots

<div style="overflow-x: auto;">

| Slot     | Description                                             |
| -------- | ------------------------------------------------------- |
|          | The place where the message or buttons can be inserted. |
| ``icon`` | The place where a custom status icon can be inserted.   |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part                | Description                  |
| ------------------- | ---------------------------- |
| ``buttons``         | The button's container       |
| ``control``         | The component's base wrapper |
| ``icon``            | The status icon wrapper      |
| ``message``         | The message's container      |
| ``message-wrapper`` | The message's wrapper        |


</div>

## Hosted Classes


Hosted Classes are CSS classes that are applied to the host element of a component. They are useful for styling the host element from outside the component's own CSS.
They can either reflect the component's state, such as "disabled" or "active," or provide options to alter the component's style based on user interaction or other conditions.
<div style="overflow-x: auto;">

| CSS Class      | Description                      |
| -------------- | -------------------------------- |
| ``bbj-opened`` | Applied when the toast is opened |


</div>

## CSS Properties


CSS Properties are DWC-defined variables in CSS, denoted by `--`, followed by a name.
They enable dynamic styling, reusability, and easy customization of components.
With CSS Properties, you can change the look and feel of a component simply by changing the value of a variable.
[[Read more]](theme-engine/css-variables).
<div style="overflow-x: auto;">

| Name                               | Description                  |
| ---------------------------------- | ---------------------------- |
| ``--dwc-toast-background``         | The toast background         |
| ``--dwc-toast-border-color``       | The toast border-color       |
| ``--dwc-toast-border-radius``      | The toast border-radius      |
| ``--dwc-toast-border-style``       | The toast border-style       |
| ``--dwc-toast-border-width``       | The toast border-width       |
| ``--dwc-toast-button-color``       | The toast button colors      |
| ``--dwc-toast-button-font-weight`` | The toast button font-weight |
| ``--dwc-toast-color``              | The toast color              |
| ``--dwc-toast-icon-color``         | The status icon color        |
| ``--dwc-toast-maxWidth``           | The toast max width          |
| ``--dwc-toast-minWidth``           | The toast min width          |
| ``--dwc-toast-shadow``             | The toast box shadow         |
| ``--dwc-toast-width``              | The toast width              |


</div>

## Components Dependencies

- [dwc-toast-group](web-components/dwc-toast-group.md)
- [dwc-icon](web-components/dwc-icon.md)

## Methods

### `close() => Promise<void>`

Closes the toast

### Returns

Type: `Promise<void>`

### `open() => Promise<void>`

Opens the toast

### Returns

Type: `Promise<void>`

### `pauseTimer() => Promise<void>`

Pauses the auto-close timer

### Returns

Type: `Promise<void>`

### `resumeTimer() => Promise<void>`

Resumes the auto-close timer

### Returns

Type: `Promise<void>`



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2026.*
