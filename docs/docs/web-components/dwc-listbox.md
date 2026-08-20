# dwc-listbox
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--listbox-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `BBjListBox<dwc-listbox>` provides methods for manipulating a UI listbox control.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<table>
<thead><tr><th style="width:28px;padding:4px"></th><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>alignment</b></code></td><td style="vertical-align:top">Sets the horizontal alignment of items in the list.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>alignment</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>"center" | "left" | "right"</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>'left'</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>Yes</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>allowDeselection</b></code></td><td style="vertical-align:top">When true, clicking on a selected item will deselect it.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>allow-deselection</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>false</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>autoValidate</b></code></td><td style="vertical-align:top">When true, the control will be validated with every change.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>auto-validate</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>true</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>autoValidateOnLoad</b></code></td><td style="vertical-align:top">When true, the control will be validated when it is loaded for the first time.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>auto-validate-on-load</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>false</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>autoWasValidated</b></code></td><td style="vertical-align:top">When true, the control will switch the <code>valid</code> property automatically after the control is validated and became valid.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>auto-was-validated</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>false</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>disabled</b></code></td><td style="vertical-align:top">Specifies that the list should be disabled.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>disabled</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>false</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>Yes</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>expanse</b></code></td><td style="vertical-align:top">The component's expanse</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>expanse</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>"l" | "m" | "s" | "xl" | "xs"</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>'m'</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>Yes</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>hasFocus</b></code></td><td style="vertical-align:top"><img style="vertical-align: middle; margin-right: 5px;" src="https://img.shields.io/badge/readonly-%23006aff" />When true, the list has focus; otherwise it is blurred.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>has-focus</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>false</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>Yes</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>helperText</b></code></td><td style="vertical-align:top">The component's helper text.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>helper-text</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>string</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>''</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>invalid</b></code></td><td style="vertical-align:top">Set to true to indicate that the user input is invalid.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>invalid</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>false</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>Yes</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>invalidMessage</b></code></td><td style="vertical-align:top">An error message to present to the user when the control is invalid.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>invalid-message</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>string</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>items</b></code></td><td style="vertical-align:top">Array of items</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Type</span> <code>DwcListboxItem[]</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>[]</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>label</b></code></td><td style="vertical-align:top">The list label</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>label</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>string</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>multiSelection</b></code></td><td style="vertical-align:top">When true, enables multi-selection, otherwise, single selection is selected.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>multi-selection</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>false</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>Yes</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>multiSelectionByClick</b></code></td><td style="vertical-align:top">When true and multi-selection is enabled, the user will be able to select and deselect items by clicking.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>multi-selection-by-click</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>false</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>nodata</b></code></td><td style="vertical-align:top">When true, a search is performed and there were no results found.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>nodata</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>false</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>Yes</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>readonly</b></code></td><td style="vertical-align:top">When true, puts the control in readonly mode</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>readonly</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>false</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>Yes</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>renderer</b></code></td><td style="vertical-align:top">A BBj expression or a function to render the list item's label.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>renderer</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>((...args: any[]) => any) | ((item: DwcListboxItem) => string) | string</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>searchInput</b></code></td><td style="vertical-align:top">When true, a search field is shown that filters the items by their label.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>search-input</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>false</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>searchNodata</b></code></td><td style="vertical-align:top">A message to display when there is no data to display after performing a search.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>search-nodata</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>string</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>'No data to display'</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>searchPlaceholder</b></code></td><td style="vertical-align:top">The search input's placeholder</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>search-placeholder</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>string</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>'Search'</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>searchTerm</b></code></td><td style="vertical-align:top">The current search term</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>search-term</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>string</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>''</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>selected</b></code></td><td style="vertical-align:top">An item's index or an array of item indexes</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Type</span> <code>number[]</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>[]</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>tabTraversable</b></code></td><td style="vertical-align:top">Indicates that the element can be focused. A negative value means that the element is not reachable via sequential keyboard navigation.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>tab-traversable</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>number</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>0</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>tickMark</b></code></td><td style="vertical-align:top">When true, the selected item will have a check icon instead of being highlighted.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>tick-mark</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>false</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>Yes</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>typeToSelect</b></code></td><td style="vertical-align:top">Enables or disables the type to select feature.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>type-to-select</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>true</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>typeToSelectCaseSensitive</b></code></td><td style="vertical-align:top">When true, the search performed by typeToSelect feature will be case sensitive.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>type-to-select-case-sensitive</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>false</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>typeToSelectTimeout</b></code></td><td style="vertical-align:top">Typing into the list accumulates keystrokes entered within a specified number of milliseconds into a typeahead buffer. This allows the user, for example, to jump directly to New York in a list of all 50 states by typing "NY". Without this typeahead buffer, the user would have to press "N" eight times to skip past the other state codes beginning with "N."<br>The default time window for this feature is 1000 milliseconds (1 second).</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>type-to-select-timeout</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>number</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>1000</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>valid</b></code></td><td style="vertical-align:top">Set to true to indicate that the user input is valid.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>valid</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>false</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>Yes</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>validationIcon</b></code></td><td style="vertical-align:top">The icon to use with the validation message<br><ol> <li> <b>URL</b>: (ex: /path/to/image.png) <li> <b>Data URL</b>: (ex: data:image/jpeg;base64,/9j/4SDpRXhpZgAAT....) <li> <b>ICON_NAME</b>: An icon to load from the default Dwc icons pool. (ex: <code>x</code>) <li> <b>POOL_NAME:ICON_NAME</b>: An icon to load from the passed pool. (ex: <code>feather:x</code>) <li> <b>An object</b> which provides all the required properties to build the icon.    For instance:    <ol>      <li> {name: 'x'}      <li> {pool: 'feather', name: 'x'}      <li> {src: 'image/path'}    </ol> </ol></td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>validation-icon</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>object | string</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>'dwc:info'</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>validationPopoverDistance</b></code></td><td style="vertical-align:top">The distance in pixels from which to offset the validation message away from the control.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>validation-popover-distance</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>number</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>6</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>validationPopoverPlacement</b></code></td><td style="vertical-align:top">Describes the preferred placement of the validation message.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>validation-popover-placement</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>"bottom" | "bottom-end" | "bottom-start" | "left" | "left-end" | "left-start" | "right" | "right-end" | "right-start" | "top" | "top-end" | "top-start"</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>'bottom'</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>validationPopoverSkidding</b></code></td><td style="vertical-align:top">The distance in pixels from which to offset the validation message along the control.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>validation-popover-skidding</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>number</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>0</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>validationStyle</b></code></td><td style="vertical-align:top">When <code>popover</code>, the invalid message will be displayed as a popover, as an inline message otherwise.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>validation-style</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>"inline" | "popover"</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>'popover'</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>Yes</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>validator</b></code></td><td style="vertical-align:top">A JavaScript expression or function to validate the control. If the expression has the 'return' keyword in it, then it is used as is; if not, then wrap it with <code>return</code> and ';' to make a function.<br>The expression has access to the following parameters: <ol>  <li><code>value</code>: The control's  <li><code>x</code>: Alias for value  <li><code>text</code>: For consistency with the legacy control and form validation APIs, same as <code>value</code>  <li><code>component</code>: The instance of the client component  <li><code>control</code>: Alias for component </ol></td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>validator</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>((...args: any[]) => any) | string</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
</tbody></table>

## Events

<div style="overflow-x: auto;">

| Event                  | Description                                                                                 | Type                                         |
| ---------------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------- |
| ``dwc-blurred``        | Emitted after the control is blurred.                                                       | ``void``                                     |
| ``dwc-focused``        | Emitted after the control is focused.                                                       | ``void``                                     |
| ``dwc-item-clicked``   | Fired when one of the items is clicked.                                                     | ``{ index: number; item: DwcListboxItem; }`` |
| ``dwc-item-dbclicked`` | Fired when one of the items is double clicked.                                              | ``{ index: number; item: DwcListboxItem; }`` |
| ``dwc-searched``       | Emitted when a search is performed through the search field. The detail is the search term. | ``string``                                   |
| ``dwc-selected``       | Fired when a menu item is selected.                                                         | ``DwcListboxEventPayload[]``                 |
| ``dwc-validated``      | Emitted when the control is validated.                                                      | ``boolean``                                  |


</div>

## Slots

<div style="overflow-x: auto;">

| Slot            | Description                                      |
| --------------- | ------------------------------------------------ |
| ``helper-text`` | The slot where the helper text should be placed. |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part                | Description                                                           |
| ------------------- | --------------------------------------------------------------------- |
| ``alert``           | The alert component (validation)                                      |
| ``alert-popover``   | The alert-popover component (validation)                              |
| ``container``       | The control and label container                                       |
| ``control``         | The component's base wrapper                                          |
| ``control-wrapper`` | Top wrapper for the whole control                                     |
| ``helper-text``     | The helper text part                                                  |
| ``icon-check``      |                                                                       |
| ``input``           | The input element (search box).                                       |
| ``item``            | a list item                                                           |
| ``item-active``     | the virtually highlighted item while navigating from the search field |
| ``item-disabled``   | a disabled item                                                       |
| ``item-label``      | an item label                                                         |
| ``item-prefix``     | an item prefix                                                        |
| ``item-selected``   | a selected item                                                       |
| ``item-suffix``     | an item suffix                                                        |
| ``label``           | The list's label                                                      |
| ``list``            | The items wrapper                                                     |
| ``nodata``          | The message shown when a search returns no results.                   |
| ``search-status``   | The visually hidden live region announcing search results             |
| ``tick-mark``       |                                                                       |


</div>

## Hosted Classes


Hosted Classes are CSS classes that are applied to the host element of a component. They are useful for styling the host element from outside the component's own CSS.
They can either reflect the component's state, such as "disabled" or "active," or provide options to alter the component's style based on user interaction or other conditions.
<div style="overflow-x: auto;">

| CSS Class        | Description                                   |
| ---------------- | --------------------------------------------- |
| ``BBjControl``   | Always applied                                |
| ``BBjListBox``   | Always applied                                |
| ``bbj-disabled`` | Applied when the component is disabled        |
| ``bbj-focused``  | Applied when the component is focused         |
| ``bbj-readonly`` | Applied when the component is readonly        |
| ``bbj-valid``    | Applied when the control is marked as valid   |
| ``bbj-invalid``  | Applied when the control is marked as invalid |


</div>

## CSS Properties


CSS Properties are DWC-defined variables in CSS, denoted by `--`, followed by a name.
They enable dynamic styling, reusability, and easy customization of components.
With CSS Properties, you can change the look and feel of a component simply by changing the value of a variable.
[[Read more]](theme-engine/css-variables).
<div style="overflow-x: auto;">

| Name                                     | Description                                      |
| ---------------------------------------- | ------------------------------------------------ |
| ``--dwc-listbox-background``             | The list's background color                      |
| ``--dwc-listbox-border-color``           | The list's border color                          |
| ``--dwc-listbox-color``                  | The list's color                                 |
| ``--dwc-listbox-focus-border-color``     | The list's border color when hovered             |
| ``--dwc-listbox-focus-ring``             | The focus ring of the list                       |
| ``--dwc-listbox-highlighted-background`` | The background of the highlighted (focused) item |
| ``--dwc-listbox-highlighted-color``      | The color of the highlighted (focused) item      |
| ``--dwc-listbox-label-color``            | The color of the label                           |
| ``--dwc-listbox-label-font-weight``      | The font weight of the label                     |
| ``--dwc-listbox-label-hover-color``      | The color of the label when hovered              |
| ``--dwc-listbox-padding``                | The list items padding                           |
| ``--dwc-listbox-selected-background``    | The background of the selected item              |
| ``--dwc-listbox-selected-color``         | The color of the selected item                   |


</div>

## Components Dependencies

- [dwc-field](web-components/dwc-field.md)
- [dwc-icon](web-components/dwc-icon.md)
- [dwc-alert](web-components/dwc-alert.md)
- [dwc-alert-popover](web-components/dwc-alert-popover.md)


## Dependent Components

- [dwc-dropdown](web-components/dwc-dropdown.md)
- [dwc-font-chooser](web-components/dwc-font-chooser.md)

## Methods

### `activateItem(item: HTMLElement | number, visible?: boolean) => Promise<void>`

Updates tabIndexes and focus the given item.

### Returns

Type: `Promise<void>`

### `focusSearchInput() => Promise<void>`

Sets focus on the search field when the search input is enabled.

### Returns

Type: `Promise<void>`

### `getActiveItem() => Promise<HTMLElement>`

Gets the current active item in the list.
If there are no active items, then the first no disabled item in the `selected` array.

### Returns

Type: `Promise<HTMLElement>`

### `getItem(item: HTMLElement | number) => Promise<HTMLElement>`

Gets item by reference or by index.

### Returns

Type: `Promise<HTMLElement>`

### `getNextItem() => Promise<HTMLElement>`

Gets the next item for the current activated item in the list.

### Returns

Type: `Promise<HTMLElement>`

### `getPart(part: string) => Promise<HTMLElement>`

Queries one of the component supported parts.

### Returns

Type: `Promise<HTMLElement>`

### `getPreviousItem() => Promise<HTMLElement>`

Gets the previous item for the current activated item in the list.

### Returns

Type: `Promise<HTMLElement>`

### `removeFocus() => Promise<void>`

Removes focus from the component.

### Returns

Type: `Promise<void>`

### `scrollToIndex(index: number) => Promise<void>`

Scrolls to the given index.

### Returns

Type: `Promise<void>`

### `search(needle: string, caseSensitive?: boolean, multiple?: boolean, scroll?: boolean) => Promise<number>`

Searches the list using the given needle and select the first found result.

### Returns

Type: `Promise<number>`

### `selectItem(item: HTMLElement | number) => Promise<void>`

Selects the given item.

### Returns

Type: `Promise<void>`

### `selectNextItem() => Promise<void>`

Selects the next item in the list.

### Returns

Type: `Promise<void>`

### `selectPreviousItem() => Promise<void>`

Selects the previous item in the list.

### Returns

Type: `Promise<void>`

### `setFocus() => Promise<void>`

Sets focus on the component.

### Returns

Type: `Promise<void>`

### `validate() => Promise<boolean>`

Validates the control.

### Returns

Type: `Promise<boolean>`



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2026.*
