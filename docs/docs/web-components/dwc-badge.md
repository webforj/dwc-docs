# dwc-badge
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--badge-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `dwc-badge` component displays a small label or indicator.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<table>
<thead><tr><th style="width:28px;padding:4px"></th><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>expanse</b></code></td><td style="vertical-align:top">The component's expanse.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>expanse</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>"2xl" | "2xs" | "3xl" | "3xs" | "l" | "m" | "s" | "xl" | "xs"</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>'s'</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>Yes</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>label</b></code></td><td style="vertical-align:top">The badge's label text. Rendered alongside slotted content and used as the accessible name.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>label</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>string</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>''</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>theme</b></code></td><td style="vertical-align:top">The DWC theme.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>theme</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>"danger" | "default" | "gray" | "info" | "outlined-danger" | "outlined-default" | "outlined-gray" | "outlined-info" | "outlined-primary" | "outlined-success" | "outlined-warning" | "primary" | "success" | "warning"</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>'default'</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>Yes</span></div></div></td></tr>
</tbody></table>

## Slots

<div style="overflow-x: auto;">

| Slot  | Description                                                      |
| ----- | ---------------------------------------------------------------- |
|       | The badge's content (e.g., icons). Rendered alongside the label. |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part        | Description             |
| ----------- | ----------------------- |
| ``control`` | The badge element.      |
| ``label``   | The label text element. |


</div>

## CSS Properties


CSS Properties are DWC-defined variables in CSS, denoted by `--`, followed by a name.
They enable dynamic styling, reusability, and easy customization of components.
With CSS Properties, you can change the look and feel of a component simply by changing the value of a variable.
[[Read more]](theme-engine/css-variables).
<div style="overflow-x: auto;">

| Name                          | Description                                                                  |
| ----------------------------- | ---------------------------------------------------------------------------- |
| ``--dwc-badge-background``    | Overrides the computed background.                                           |
| ``--dwc-badge-border-color``  | Overrides the computed border color.                                         |
| ``--dwc-badge-border-radius`` | The badge's border radius.                                                   |
| ``--dwc-badge-color``         | Overrides the computed text color.                                           |
| ``--dwc-badge-font-size``     | The badge's font size.                                                       |
| ``--dwc-badge-font-weight``   | The badge's font weight.                                                     |
| ``--dwc-badge-min-height``    | The badge's minimum height.                                                  |
| ``--dwc-badge-padding``       | The badge's inline padding.                                                  |
| ``--dwc-badge-seed``          | A single color seed. Background, text and border are computed automatically. |


</div>

----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2026.*
