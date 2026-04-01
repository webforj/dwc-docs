# dwc-columns-layout
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--columns--layout-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `dwc-columns-layout` component provides a flexible layout with dynamic columns based on the width of the layout.
It adjusts the number of columns automatically according to the specified breakpoints.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<table>
<thead><tr><th style="width:28px;padding:4px"></th><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>breakpoints</b></code></td><td style="vertical-align:top">Breakpoints for the number of columns depending on the layout width.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Type</span> <code>DwcColumnsLayoutBreakpoint[]</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>[
    { minWidth: 0, columns: 1, name: 'default' },
    { minWidth: '20em', columns: 1, name: 'small' },
    { minWidth: '40em', columns: 2, name: 'medium' },
  ]</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
</tbody></table>

## Slots

<div style="overflow-x: auto;">

| Slot  | Description                                                       |
| ----- | ----------------------------------------------------------------- |
|       | This is where the content of the columns layout should be placed. |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part        | Description                         |
| ----------- | ----------------------------------- |
| ``control`` | The base wrapper for the component. |


</div>

## CSS Properties


CSS Properties are DWC-defined variables in CSS, denoted by `--`, followed by a name.
They enable dynamic styling, reusability, and easy customization of components.
With CSS Properties, you can change the look and feel of a component simply by changing the value of a variable.
[[Read more]](theme-engine/css-variables).
<div style="overflow-x: auto;">

| Name                                          | Description                                |
| --------------------------------------------- | ------------------------------------------ |
| ``--dwc-columns-layout-horizontal-alignment`` | The horizontal alignment of the columns    |
| ``--dwc-columns-layout-horizontal-spacing``   | The horizontal spacing between the columns |
| ``--dwc-columns-layout-vertical-alignment``   | The vertical alignment of the columns      |
| ``--dwc-columns-layout-vertical-spacing``     | The vertical spacing between the columns   |


</div>

----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2026.*
