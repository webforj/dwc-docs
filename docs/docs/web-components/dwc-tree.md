# dwc-tree
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--tree-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `BBjTree<dwc-tree>` provides methods for manipulating a UI tree control.

?> **Note:** The `dwc-tree` component is used to build the [BBjFileChooser(tree) version](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjfilechooser/bbjfilechooser.htm).


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<table>
<thead><tr><th style="width:28px;padding:4px"></th><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>allowDeselectionByClick</b></code></td><td style="vertical-align:top">When true, the if you click a selected node, it will be deselected.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>allow-deselection-by-click</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>false</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>connect</b></code></td><td style="vertical-align:top">When true, the nodes will be connected with lines to clarify the tree structure.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>connect</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>true</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>contiguousSelection</b></code></td><td style="vertical-align:top">When true and multi-selecting is enabled, then multiple contiguous tree nodes can be selected.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>contiguous-selection</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>false</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>disabled</b></code></td><td style="vertical-align:top">True to disable the tree, false to enable it.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>disabled</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>false</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>Yes</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>editable</b></code></td><td style="vertical-align:top">Tree nodes are not editable by default. If this property is used to set tree nodes to be editable generally, then node descriptions can be changed by using a triple-click or a click-hold-click on editable nodes to go into edit mode.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>editable</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>false</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>expanse</b></code></td><td style="vertical-align:top">The component's expanse</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>expanse</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>"l" | "m" | "s" | "xl" | "xs"</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>'m'</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>Yes</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>iconCollapsed</b></code></td><td style="vertical-align:top">The node collapsed icon.<br>The icons properties can be set in any of the following formats: <ol> <li> <b>URL</b>: (ex: /path/to/image.png) <li> <b>Data URL</b>: (ex: data:image/jpeg;base64,/9j/4SDpRXhpZgAAT....) <li> <b>ICON_NAME</b>: An icon to load from the default Dwc icons pool. (ex: <code>folder</code>) <li> <b>POOL_NAME:ICON_NAME</b>: An icon to load from the passed pool. (ex: <code>feather:folder</code>) <li> <b>An object</b> which provides all the required properties to build the icon.    For instance:    <ol>      <li> {name: 'folder}      <li> {pool: 'feather' name: 'folder}      <li> {src: 'image/path'}      <li> {src: 'image/path' , x: 'x attribute' , y: 'y attribute'  , ...}    </ol> </ol></td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>icon-collapsed</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>object | string</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>''</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>iconExpanded</b></code></td><td style="vertical-align:top">The node icon when it is expanded. See <code>iconCollapsed</code> to learn about accepted icon formats</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>icon-expanded</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>object | string</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>''</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>iconLeaf</b></code></td><td style="vertical-align:top">The node icon when it is leaf. See <code>iconCollapsed</code> to learn about accepted icon formats</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>icon-leaf</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>object | string</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>''</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>iconLeafSelected</b></code></td><td style="vertical-align:top">The node icon when it is leaf and selected. See <code>iconCollapsed</code> to learn about accepted icon formats</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>icon-leaf-selected</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>object | string</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>''</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>label</b></code></td><td style="vertical-align:top">The tree's label</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>label</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>string</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>multiSelection</b></code></td><td style="vertical-align:top">When true then multi selection will be allowed.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>multi-selection</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>true</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>multiSelectionByClick</b></code></td><td style="vertical-align:top">When true and multi selection is enabled, the user will be able to select and deselect nodes by clicking.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>multi-selection-by-click</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>false</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>noGroupIcons</b></code></td><td style="vertical-align:top">When true, node group icons will be removed.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>no-group-icons</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>false</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>noLeafIcons</b></code></td><td style="vertical-align:top">When true, node leaf icon will be removed</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>no-leaf-icons</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>false</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>nodata</b></code></td><td style="vertical-align:top">When true, a search is preformed and there were no results found.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>nodata</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>false</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>Yes</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>readonly</b></code></td><td style="vertical-align:top">True to put the tree in readonly mode</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>readonly</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>false</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>Yes</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>searchCaseSensitive</b></code></td><td style="vertical-align:top">When true, the search will be case sensitive, case insensitive otherwise.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>search-case-sensitive</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>false</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>searchInput</b></code></td><td style="vertical-align:top">When true, an field will be shown above the tree to filter items on the client side.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>search-input</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>false</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>searchNodata</b></code></td><td style="vertical-align:top">A message to display when there is no data to display after performing a search.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>search-nodata</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>string</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>'No data to display'</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>searchPlaceholder</b></code></td><td style="vertical-align:top">The search input's placeholder</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>search-placeholder</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>string</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>'Search'</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>searchTerm</b></code></td><td style="vertical-align:top">When provided, items will be filtered based on the content of this property. Regular expressions are supported</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>search-term</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>string</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>''</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>suppressExpandAll</b></code></td><td style="vertical-align:top">When true, the user won't be able to expand all nodes by pressing <code>*</code> on the keyboard.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>suppress-expand-all</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>true</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
</tbody></table>

## Events

<div style="overflow-x: auto;">

| Event              | Description                                                                                      | Type                                    |
| ------------------ | ------------------------------------------------------------------------------------------------ | --------------------------------------- |
| ``dwc-changed``    | Emitted when selection is changed                                                                | ``void``                                |
| ``dwc-deselected`` | Emitted When an item is deselected.                                                              | ``HTMLDwcTreeNodeElement``              |
| ``dwc-searched``   | Emitted When a search is performed. The event can be prevented to implement a new search routine | ``{ term: string; done: () => void; }`` |
| ``dwc-selected``   | Emitted When an item is selected.                                                                | ``HTMLDwcTreeNodeElement``              |


</div>

## Slots

<div style="overflow-x: auto;">

| Slot  | Description                                              |
| ----- | -------------------------------------------------------- |
|       | The place where ``dwc-tree-node`` elements are inserted. |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part             | Description                       |
| ---------------- | --------------------------------- |
| ``control``      | The component's base wrapper.     |
| ``input``        | The input element (search box).   |
| ``tree``         | The tree element.                 |
| ``tree-wrapper`` | The wrapper element for the tree. |


</div>

## Hosted Classes


Hosted Classes are CSS classes that are applied to the host element of a component. They are useful for styling the host element from outside the component's own CSS.
They can either reflect the component's state, such as "disabled" or "active," or provide options to alter the component's style based on user interaction or other conditions.
<div style="overflow-x: auto;">

| CSS Class        | Description                             |
| ---------------- | --------------------------------------- |
| ``BBjControl``   | Always applied                          |
| ``BBjTree``      | Always applied.                         |
| ``bbj-disabled`` | Applied when the component is disabled. |
| ``bbj-readonly`` | Applied when the component is readonly. |


</div>

## Components Dependencies

- [dwc-field](web-components/dwc-field.md)
- [dwc-icon](web-components/dwc-icon.md)

## Methods

### `clearSelections() => Promise<void>`

Clears all tree selections

### Returns

Type: `Promise<void>`

### `collapse(from?: HTMLDwcTreeNodeElement | string, deep?: boolean) => Promise<void>`

Collapse all groups starting at the given tree item.

### Returns

Type: `Promise<void>`

### `ensureVisible(node: HTMLDwcTreeNodeElement | string) => Promise<void>`

Ensures the given node is visible.

The method will make sure all parent are expanded so the node can be visible.

### Returns

Type: `Promise<void>`

### `expand(from?: HTMLDwcTreeNodeElement | string, deep?: boolean) => Promise<void>`

Expand all groups starting at the given tree node.

### Returns

Type: `Promise<void>`

### `getCollapsedNode() => Promise<HTMLDwcTreeNodeElement>`

Gets the node which was most recently collapsed.

### Returns

Type: `Promise<HTMLDwcTreeNodeElement>`

### `getExpandedNode() => Promise<HTMLDwcTreeNodeElement>`

Gets the node which was most recently expanded.

### Returns

Type: `Promise<HTMLDwcTreeNodeElement>`

### `getExpandedNodes() => Promise<NodeListOf<HTMLDwcTreeNodeElement>>`

Gets the list of expanded nodes

### Returns

Type: `Promise<NodeListOf<HTMLDwcTreeNodeElement>>`

### `getFirstNode() => Promise<HTMLDwcTreeNodeElement>`

Gets the first node of the tree

### Returns

Type: `Promise<HTMLDwcTreeNodeElement>`

### `getFirstSelectedNode() => Promise<HTMLDwcTreeNodeElement>`

Gets the first selected node

### Returns

Type: `Promise<HTMLDwcTreeNodeElement>`

### `getLastNode() => Promise<HTMLDwcTreeNodeElement>`

Gets the last node of the tree

### Returns

Type: `Promise<HTMLDwcTreeNodeElement>`

### `getLastSelectedNode() => Promise<HTMLDwcTreeNodeElement>`

Gets the last selected node

### Returns

Type: `Promise<HTMLDwcTreeNodeElement>`

### `getNextNode(node: HTMLDwcTreeNodeElement | string) => Promise<HTMLDwcTreeNodeElement>`

Gets the next node of the passed node

### Returns

Type: `Promise<HTMLDwcTreeNodeElement>`

### `getPart(part: string) => Promise<HTMLElement>`

Queries one of the component supported parts

### Returns

Type: `Promise<HTMLElement>`

### `getPreviousNode(node: HTMLDwcTreeNodeElement | string) => Promise<HTMLDwcTreeNodeElement>`

Gets the previous node of the passed node

### Returns

Type: `Promise<HTMLDwcTreeNodeElement>`

### `getSelectedNodes() => Promise<NodeListOf<HTMLDwcTreeNodeElement>>`

Gets the list of selected nodes

### Returns

Type: `Promise<NodeListOf<HTMLDwcTreeNodeElement>>`

### `scrollToNode(node: HTMLDwcTreeNodeElement | string) => Promise<void>`

Scrolls into the given node

### Returns

Type: `Promise<void>`



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2026.*
