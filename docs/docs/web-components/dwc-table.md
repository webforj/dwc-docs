# dwc-table
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--table-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

A streamlined Table component designed for rendering tables with multiple rows and columns.
This table is equipped with features such as sorting, selection, and virtualization, along with
the ability to customize cell rendering. It's crafted to offer both high customization
and performance.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<table>
<thead><tr><th style="width:28px;padding:4px"></th><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>border</b></code></td><td style="vertical-align:top">When true, the table will render a border around the table.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>border</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>true</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>Yes</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>checkboxSelection</b></code></td><td style="vertical-align:top">When false, the table won't render the selection checkboxes for each row.<br>This option works only when <code>multiSelection</code> is enabled</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>checkbox-selection</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>true</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>clientSorting</b></code></td><td style="vertical-align:top">When true, the table will automatically sort the data when the user clicks on a column header. The default is false.<br>Use this in case you want to sort the data yourself. The event in this case will contains the sorting information.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>client-sorting</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>false</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>columnDefinitions</b></code></td><td style="vertical-align:top">An array of objects that defines the columns of the table.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Type</span> <code>TableColumnDefinition[]</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>[]</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>columnGroups</b></code></td><td style="vertical-align:top">An array of column group definitions for multi-row header grouping. When set, columns are ordered according to the group tree and a multi-row header is rendered with colspan/rowspan.<br>When empty (default), behavior is identical to the standard single-row header.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Type</span> <code>TableColumnGroupDefinition[]</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>[]</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>columnHeaders</b></code></td><td style="vertical-align:top">When true, the column headers are rendered, hidden otherwise.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>column-headers</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>true</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>columnsBorder</b></code></td><td style="vertical-align:top">When true, the table will render borders between columns.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>columns-border</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>false</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>Yes</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>data</b></code></td><td style="vertical-align:top">An array of objects that defines the rows of the table.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Type</span> <code>any[]</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>[]</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>deselection</b></code></td><td style="vertical-align:top">Set to false to prevent rows from being deselected if you hold down Ctrl and click the row (i.e. once a row is selected, it remains selected until another row is selected in its place).<br>By default the table allows deselection of rows.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>deselection</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>true</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>getCellPart</b></code></td><td style="vertical-align:top">A function or an expression to set parts for each cell individually. expression should return either a string (part name), array of strings (array of part names) or undefined for no part.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>get-cell-part</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>((...args: any[]) => any) | string</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>getRowId</b></code></td><td style="vertical-align:top">A function or an expression to generate a row id</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>get-row-id</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>((...args: any[]) => any) | string</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>getRowPart</b></code></td><td style="vertical-align:top">A function or an expression to set parts for each row individually. expression should return either a string (part name), array of strings (array of part names) or undefined for no part.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>get-row-part</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>((...args: any[]) => any) | string</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>groupHeaderHeight</b></code></td><td style="vertical-align:top">The height of group header rows in pixels. When not set, defaults to headerHeight.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>group-header-height</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>number</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>headerCheckboxSelection</b></code></td><td style="vertical-align:top">If false, a <code>select all</code> checkbox will be added to the header.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>header-checkbox-selection</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>true</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>headerHeight</b></code></td><td style="vertical-align:top">The height of the header in pixels.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>header-height</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>number</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>48</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>isRowSelectable</b></code></td><td style="vertical-align:top">A function or an expression to be used to determine which rows are selectable.<br>By default rows are selectable, so return false to make a row un-selectable.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>is-row-selectable</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>((...args: any[]) => any) | string</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>multiSelectWithClick</b></code></td><td style="vertical-align:top">Set to true to allow multiple rows to be selected with clicks. For example, if you click to select one row and then click to select another row, the first row will stay selected as well. Clicking a selected row in this mode will deselect the row. This is useful for touch devices where Ctrl and Shift clicking is not an option.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>multi-select-with-click</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>false</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>multiSorting</b></code></td><td style="vertical-align:top">Set to true to allow multiple columns to be sorted at once. By default only one column can be sorted at a time. Clicking on a column header will sort the column and remove the sorting from the other columns.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>multi-sorting</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>false</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>overscan</b></code></td><td style="vertical-align:top">The number of rows to pre render beyond the visible scrolling area. The bigger the number the slower the performance. keep this value small</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>overscan</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>number</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>10</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>rowHeight</b></code></td><td style="vertical-align:top">The height of each row in pixels.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>row-height</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>number</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>35</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>rowsBorder</b></code></td><td style="vertical-align:top">When true, the table will render borders between rows.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>rows-border</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>true</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>Yes</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>selected</b></code></td><td style="vertical-align:top">An array of selected row ids.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Type</span> <code>string[]</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>[]</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>selectionMode</b></code></td><td style="vertical-align:top">The selection mode of the table.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>selection-mode</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>"multiple" | "none" | "single"</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>'none'</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>striped</b></code></td><td style="vertical-align:top">When true then it produces a background color for every other row.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>striped</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>false</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>Yes</span></div></div></td></tr>
</tbody></table>

## Events

<div style="overflow-x: auto;">

| Event                     | Description                           | Type                                                                                                                                                                                      |
| ------------------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ``dwc-cell-clicked``      | Emitted when a cell is clicked        | ``{ column: TableColumn; first: boolean; id: string; key: string; index: number; last: boolean; navigable: boolean; renderedValue: string; row: TableRow; item: TableRow; value: any; }`` |
| ``dwc-cell-dbclicked``    | Emitted when a cell is double clicked | ``{ column: TableColumn; first: boolean; id: string; key: string; index: number; last: boolean; navigable: boolean; renderedValue: string; row: TableRow; item: TableRow; value: any; }`` |
| ``dwc-column-moved``      | Emitted when a column is moved        | ``ColumnEventDetailBase & { oldIndex: number; newIndex: number; }``                                                                                                                       |
| ``dwc-column-resized``    | Emitted when a column is resized      | ``ColumnEventDetailBase & { newWidth: number; oldWidth: number; }``                                                                                                                       |
| ``dwc-row-clicked``       | Emitted when a row is clicked         | ``TableRow``                                                                                                                                                                              |
| ``dwc-row-dbclicked``     | Emitted when a row is double clicked  | ``TableRow``                                                                                                                                                                              |
| ``dwc-row-deselected``    | Emitted when a row is deselected      | ``TableRow``                                                                                                                                                                              |
| ``dwc-row-selected``      | Emitted when a row is selected        | ``TableRow``                                                                                                                                                                              |
| ``dwc-selection-changed`` | Emitted when row selection changes    | ``void``                                                                                                                                                                                  |
| ``dwc-sort-changed``      | Emitted when the sort changes         | ``ColumnSortState[]``                                                                                                                                                                     |
| ``dwc-state-changed``     | Emitted when state changes            | ``{ columns: ColumnState[]; source: StateChangeSource; columnGroups?: TableColumnGroupDefinition[]; }``                                                                                   |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part                            | Description                                                                                                  |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| ``body``                        | The main body of the table, containing all the rows and cells with data.                                     |
| ``cell``                        | The basic unit within the table for displaying data or content.                                              |
| ``cell-align-center``           | Cells with centered content, used for balancing visual alignment.                                            |
| ``cell-align-left``             | Cells aligned to the left, typically for text content.                                                       |
| ``cell-align-right``            | Cells aligned to the right, commonly used for numerical data.                                                |
| ``cell-body``                   | Individual cells located within the body, containing data or content.                                        |
| ``cell-checkbox``               | Cells that contain checkboxes for row selection.                                                             |
| ``cell-checkbox-body``          | A specific type of cell that combines a checkbox with body content, used for selecting rows.                 |
| ``cell-checkbox-header``        | A special header cell that contains a checkbox for selecting all rows.                                       |
| ``cell-checkbox-indeterminate`` | A state for checkboxes where the selection is partial (not all items are selected).                          |
| ``cell-column-ID``              | Cells (header and body) for a specific column ID (e.g. cell-column-name).                                    |
| ``cell-content``                | The main content area within cells.                                                                          |
| ``cell-content-checkbox``       | Cells that combine content with a checkbox, used for selection.                                              |
| ``cell-content-group``          | Content wrapper within group header cells.                                                                   |
| ``cell-content-group-ID``       | Content wrapper within group header cells with the given group ID.                                           |
| ``cell-content-group-depth-N``  | Content wrapper within group header cells at nesting depth N.                                                |
| ``cell-content-header``         | The main content or data within header cells.                                                                |
| ``cell-dragging``               | Cells in a column that is currently being dragged.                                                           |
| ``cell-even``                   | Even-numbered cells.                                                                                         |
| ``cell-first``                  | The first cell in a row.                                                                                     |
| ``cell-group``                  | Group header cells in multi-row grouped headers.                                                             |
| ``cell-group-ID``               | Group header cells with the given group ID (e.g. cell-group-my-group).                                       |
| ``cell-group-depth-N``          | Group header cells at nesting depth N (0 = top-level, 1 = second-level, etc.).                               |
| ``cell-header``                 | Individual cells located in the header row, typically containing labels or titles for the columns.           |
| ``cell-label``                  | Text label areas within cells.                                                                               |
| ``cell-label-group``            | Label within group header cells.                                                                             |
| ``cell-label-group-ID``         | Label within group header cells with the given group ID.                                                     |
| ``cell-label-group-depth-N``    | Label within group header cells at nesting depth N.                                                          |
| ``cell-label-header``           | Header cells that are specifically used for displaying text labels for columns.                              |
| ``cell-last``                   | The last cell in a row.                                                                                      |
| ``cell-movable``                | Header cells that can be reordered by dragging.                                                              |
| ``cell-non-navigable``          | Cells that cannot be navigated to with keyboard, like checkboxes and spacers.                                |
| ``cell-odd``                    | Odd-numbered cells.                                                                                          |
| ``cell-pinned-left``            | Cells that are pinned or fixed to the left side of the table, remaining visible during horizontal scrolling. |
| ``cell-pinned-right``           | Cells that are pinned or fixed to the right side of the table.                                               |
| ``cell-resizable``              | Header cells that can be resized by dragging the resize handle.                                              |
| ``cell-resizing``               | Cells in a column that is currently being resized.                                                           |
| ``cell-selected``               | Cells that are currently selected, indicating an active state.                                               |
| ``cell-sort-icons``             | Icons within header cells that indicate sorting capabilities.                                                |
| ``cell-sort-icons-active``      | Icons within header cells that show the current sorting state (ascending or descending).                     |
| ``cell-sort-index``             | A visual indicator of the sort index for the column, often displayed as a number.                            |
| ``cell-sortable``               | Header cells that can be clicked to sort the column.                                                         |
| ``cell-spacer``                 | Spacer cells that absorb remaining space when all columns have fixed widths.                                 |
| ``checkbox``                    | A generic checkbox part used within various cells for selection purposes.                                    |
| ``checkbox-header``             | A specific checkbox located in the header for selecting or deselecting all rows.                             |
| ``column``                      | Individual column elements in the colgroup.                                                                  |
| ``header``                      | The thead element containing column headers.                                                                 |
| ``resize-handle``               | The draggable handle for resizing columns.                                                                   |
| ``resize-handle-right-pinned``  | The resize handle for right-pinned columns.                                                                  |
| ``row``                         | Individual rows within the table body, used for organizing cells horizontally.                               |
| ``row-even``                    | Even-numbered rows.                                                                                          |
| ``row-first``                   | The first row in the table.                                                                                  |
| ``row-header``                  | The row within the header that contains cell headers.                                                        |
| ``row-header-group``            | Header rows that contain group cells (not the leaf column row).                                              |
| ``row-last``                    | The last row in the table.                                                                                   |
| ``row-odd``                     | Odd-numbered rows.                                                                                           |
| ``row-selected``                | Rows that are currently selected.                                                                            |
| ``table``                       | The primary table element, housing all content including headers, rows, and cells.                           |
| ``table-wrapper``               | The entire container that wraps the table and its elements.                                                  |


</div>

## Components Dependencies

- [dwc-checkbox](web-components/dwc-checkbox.md)
- [dwc-icon](web-components/dwc-icon.md)

## Methods

### `autoFit() => Promise<void>`

Auto-fits all columns to fit the container width.
Sets all columns to use flex layout.

### Returns

Type: `Promise<void>`

### `autoSize() => Promise<void>`

Auto-sizes all columns to their estimated width based on content.
This resets column widths to their natural size.

### Returns

Type: `Promise<void>`

### `autoSizeColumn(columnId: string) => Promise<void>`

Auto-sizes a specific column to its estimated width based on content.

### Returns

Type: `Promise<void>`

### `deselect(rowId: string | string[]) => Promise<void>`

Deselects a row

### Returns

Type: `Promise<void>`

### `deselectAll() => Promise<void>`

Deselects all rows

### Returns

Type: `Promise<void>`

### `focusCell(rowId: string, columnId: string, scroll?: boolean) => Promise<void>`

Scrolls to a cell

### Returns

Type: `Promise<void>`

### `moveColumn(columnId: string, newIndex: number) => Promise<ColumnState[]>`

Moves a column to a new position in the table.

### Returns

Type: `Promise<ColumnState[]>`

### `scrollToRow(rowId: string) => Promise<void>`

Scrolls to a row

### Returns

Type: `Promise<void>`

### `select(rowId: string | string[]) => Promise<void>`

Selects a row

### Returns

Type: `Promise<void>`

### `selectAll() => Promise<void>`

Selects all rows

### Returns

Type: `Promise<void>`

### `updateRow(rowId: string, data: any) => Promise<TableRow>`

Updates a row

### Returns

Type: `Promise<TableRow>`



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2026.*
