# dwc-app-nav
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--app--nav-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

A side navigation menu with support for hierarchical and flat menus.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<table>
<thead><tr><th style="width:28px;padding:4px"></th><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>autoOpen</b></code></td><td style="vertical-align:top">Whether the nav should open automatically the selected item</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>auto-open</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>true</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>iconPinned</b></code></td><td style="vertical-align:top">The icon shown on items that are pinned. Accepts 'name', 'pool:name', or an icon object.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>icon-pinned</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>object | string</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>'dwc:pinned-off'</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>iconUnpinned</b></code></td><td style="vertical-align:top">The icon shown on items that are not pinned. Accepts 'name', 'pool:name', or an icon object.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>icon-unpinned</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>object | string</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>'dwc:pin'</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>nodata</b></code></td><td style="vertical-align:top">When true, a search is performed and there were no results found.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>nodata</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>false</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>Yes</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>pinAutosave</b></code></td><td style="vertical-align:top">When true, the set of pinned items is persisted to local storage and restored on reload. Off by default. Requires an id or name on the host.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>pin-autosave</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>false</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>pinTouchVisible</b></code></td><td style="vertical-align:top">When true, the pin toggle stays visible on touch devices. Off by default, since touch has no hover.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>pin-touch-visible</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>false</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>pinnable</b></code></td><td style="vertical-align:top">When true, a pin toggle is shown on navigable leaf items and pinned items are moved to a group at the top.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>pinnable</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>false</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>pinnedTitle</b></code></td><td style="vertical-align:top">The title of the pinned group</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>pinned-title</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>string</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>'Pinned'</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>searchInput</b></code></td><td style="vertical-align:top">When true, a search field is shown that filters the items by their label.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>search-input</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>false</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>searchNodata</b></code></td><td style="vertical-align:top">A message to display when there is no data to display after performing a search.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>search-nodata</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>string</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>'No data to display'</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>searchPlaceholder</b></code></td><td style="vertical-align:top">The search input's placeholder</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>search-placeholder</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>string</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>'Search'</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>searchTerm</b></code></td><td style="vertical-align:top">The current search term</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>search-term</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>string</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>''</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
</tbody></table>

## Events

<div style="overflow-x: auto;">

| Event               | Description                                                                                 | Type                                                  |
| ------------------- | ------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| ``dwc-pin-changed`` | Emitted when an item's pinned state changes.                                                | ``{ key: string; pinned: boolean; keys: string[]; }`` |
| ``dwc-searched``    | Emitted when a search is performed through the search field. The detail is the search term. | ``string``                                            |


</div>

## Slots

<div style="overflow-x: auto;">

| Slot       | Description                                                         |
| ---------- | ------------------------------------------------------------------- |
|            | The default slot where the nav items and section labels are placed. |
| ``pinned`` | The slot where pinned items are moved.                              |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part                     | Description                                                 |
| ------------------------ | ----------------------------------------------------------- |
| ``input``                | The input element (search box).                             |
| ``nodata``               | The message shown when a search returns no results.         |
| ``pinned``               | The container of the pinned group.                          |
| ``pinned-title``         | The title of the pinned group, a dwc-app-nav-label element. |
| ``pinned-title-control`` | The base wrapper of the pinned group title.                 |
| ``pinned-title-label``   | The text container of the pinned group title.               |
| ``pinned-title-suffix``  | The suffix container of the pinned group title.             |


</div>

## Components Dependencies

- [dwc-field](web-components/dwc-field.md)
- [dwc-icon](web-components/dwc-icon.md)
- [dwc-app-nav-label](web-components/dwc-app-nav-label.md)


----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2026.*
