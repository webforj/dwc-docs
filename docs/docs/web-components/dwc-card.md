# dwc-card
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--card-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `dwc-card` is a grouping surface for related content and actions.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<table>
<thead><tr><th style="width:28px;padding:4px"></th><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>borderless</b></code></td><td style="vertical-align:top">When true, the card is drawn without its frame ring.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>borderless</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>false</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>Yes</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>divided</b></code></td><td style="vertical-align:top">When true, draws a divider after the header and before the footer.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>divided</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>false</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>Yes</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>expanse</b></code></td><td style="vertical-align:top">The card's size. Drives the padding, the gaps between the regions, and the title and caption sizes.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>expanse</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>"l" | "m" | "s" | "xl" | "xs"</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>'m'</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>Yes</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>orientation</b></code></td><td style="vertical-align:top">The card's orientation. When horizontal, the figure is placed beside the remaining regions.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>orientation</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>"horizontal" | "vertical"</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>'vertical'</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>Yes</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>shadow</b></code></td><td style="vertical-align:top">The card's elevation, taken from the DWC shadow scale.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>shadow</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>"2xl" | "l" | "m" | "none" | "s" | "xl" | "xs"</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>'xs'</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>Yes</span></div></div></td></tr>
</tbody></table>

## Slots

<div style="overflow-x: auto;">

| Slot               | Description                                                |
| ------------------ | ---------------------------------------------------------- |
|                    | The card's body content                                    |
| ``caption``        | A short secondary line under the title                     |
| ``figure``         | The card's illustration (image, video, chart, icon)        |
| ``footer``         | The card's footer                                          |
| ``header-actions`` | Actions at the end of the header row                       |
| ``icon``           | A leading visual in the header (icon, avatar, any element) |
| ``title``          | The card's title                                           |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part               | Description                                                     |
| ------------------ | --------------------------------------------------------------- |
| ``body``           | The body region                                                 |
| ``caption``        | The caption wrapper                                             |
| ``control``        | The component's base wrapper                                    |
| ``figure``         | The figure region                                               |
| ``footer``         | The footer region                                               |
| ``frame``          | The border layer, painted as a ring above all regions           |
| ``header``         | The header region                                               |
| ``header-actions`` | The header's actions wrapper                                    |
| ``icon``           | The header's leading visual wrapper                             |
| ``main``           | The wrapper which stacks header, body, and footer               |
| ``overlay``        | The wash layer above surface and figure, below the text regions |
| ``surface``        | The background layer behind all regions                         |
| ``title``          | The title wrapper                                               |
| ``title-wrapper``  | The wrapper of title and caption                                |


</div>

## CSS Properties


CSS Properties are DWC-defined variables in CSS, denoted by `--`, followed by a name.
They enable dynamic styling, reusability, and easy customization of components.
With CSS Properties, you can change the look and feel of a component simply by changing the value of a variable.
[[Read more]](theme-engine/css-variables).
<div style="overflow-x: auto;">

| Name                             | Description                                                                                   |
| -------------------------------- | --------------------------------------------------------------------------------------------- |
| ``--dwc-card-background``        | The paint of the surface layer. Accepts colors, gradients, and images                         |
| ``--dwc-card-border-radius``     | The card's border radius                                                                      |
| ``--dwc-card-border-width``      | The thickness of the frame ring                                                               |
| ``--dwc-card-color``             | The card's text color                                                                         |
| ``--dwc-card-frame``             | The paint of the frame ring. Accepts colors and gradients                                     |
| ``--dwc-card-gap``               | The gap between the card's regions. Defaults to the padding                                   |
| ``--dwc-card-padding``           | The card's padding. Owns the whole spacing rhythm                                             |
| ``--dwc-card-shadow``            | The card's shadow. Accepts any number of layered shadows                                      |
| ``--dwc-card-title-font-size``   | The title's font size                                                                         |
| ``--dwc-card-title-line-height`` | The title's line height. Also the height of the line the icon and the header actions align to |


</div>

----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2026.*
