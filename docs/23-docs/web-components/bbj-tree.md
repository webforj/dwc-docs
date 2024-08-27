# bbj-tree
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-bbj--tree-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `BBjTree<bbj-tree>` provides methods for manipulating a UI tree control.

?> **Note:** The `bbj-tree` component is used to build the [BBjFileChooser(tree) version](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjfilechooser/bbjfilechooser.htm).


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<div style="overflow-x: auto;">

| Name                        | Attribute                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Reflects | Type                                  | Default                  |
| --------------------------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: | ------------------------------------- | ------------------------ |
| ``allowDeselectionByClick`` | ``allow-deselection-by-click`` | When true, the if you click a selected node, it will be deselected.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | &#x2718; | ``boolean``                           | ``false``                |
| ``connect``                 | ``connect``                    | When true, the nodes will be connected with lines to clarify the tree structure.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | &#x2718; | ``boolean``                           | ``true``                 |
| ``contiguousSelection``     | ``contiguous-selection``       | When true and multi-selecting is enabled. then multiple contiguous tree nodes can be selected.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | &#x2718; | ``boolean``                           | ``false``                |
| ``disabled``                | ``disabled``                   | True to disable the tree, false to enable it.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | &#x2714; | ``boolean``                           | ``false``                |
| ``editable``                | ``editable``                   | Tree nodes are not editable by default. If this property is used to set tree nodes to be editable generally, then node descriptions can be changed by using a triple-click or a click-hold-click on editable nodes to go into edit mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | &#x2718; | ``boolean``                           | ``false``                |
| ``expanse``                 | ``expanse``                    | The component's expanse                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | &#x2714; | ``"l" \| "m" \| "s" \| "xl" \| "xs"`` | ``'m'``                  |
| ``iconCollapsed``           | ``icon-collapsed``             | The node collapsed icon.<br>&nbsp;&nbsp;The icons properties can be set in any of the following formats:&nbsp;<ol>&nbsp;<li> <b>URL</b>: (ex: /path/to/image.png)&nbsp;<li> <b>Data URL</b>: (ex: data:image/jpeg;base64,/9j/4SDpRXhpZgAAT....)&nbsp;<li> <b>ICON_NAME</b>: An icon to load from the default BBj icons pool. (ex: ``folder``)&nbsp;<li> <b>POOL_NAME:ICON_NAME</b>: An icon to load from the passed pool. (ex: ``feather:folder``)&nbsp;<li> <b>An object</b> which provides all the required properties to build the icon.&nbsp;   for instance:&nbsp;   <ol>&nbsp;     <li> {name: 'folder}&nbsp;     <li> {pool: 'feather' name: 'folder}&nbsp;     <li> {src: 'image/path'}&nbsp;     <li> {src: 'image/path' , x: 'x attribute' , y: 'y attribute'  , ...}&nbsp;   </ol>&nbsp;</ol> | &#x2718; | ``object \| string``                  | ``''``                   |
| ``iconExpanded``            | ``icon-expanded``              | The node icon when it is expanded. See ``iconCollapsed`` to learn about accepted icon formats                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | &#x2718; | ``object \| string``                  | ``''``                   |
| ``iconLeaf``                | ``icon-leaf``                  | The node icon when it is leaf. See ``iconCollapsed`` to learn about accepted icon formats                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | &#x2718; | ``object \| string``                  | ``''``                   |
| ``iconLeafSelected``        | ``icon-leaf-selected``         | The node icon when it is leaf and selected. See ``iconCollapsed`` to learn about accepted icon formats                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | &#x2718; | ``object \| string``                  | ``''``                   |
| ``label``                   | ``label``                      | The tree's label                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | &#x2718; | ``string``                            |                          |
| ``multiSelection``          | ``multi-selection``            | When true then multi selection will be allowed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | &#x2718; | ``boolean``                           | ``true``                 |
| ``multiSelectionByClick``   | ``multi-selection-by-click``   | When true and multi selection is enabled, the user will be able to select and deselect nodes by clicking.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | &#x2718; | ``boolean``                           | ``false``                |
| ``noGroupIcons``            | ``no-group-icons``             | When true, node group icons will be removed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | &#x2718; | ``boolean``                           | ``false``                |
| ``noLeafIcons``             | ``no-leaf-icons``              | When true, node leaf icon will be removed                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | &#x2718; | ``boolean``                           | ``false``                |
| ``nodata``                  | ``nodata``                     | When true, a search is preformed and there were no results found.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | &#x2714; | ``boolean``                           | ``false``                |
| ``readonly``                | ``readonly``                   | True to put the tree in readonly mode                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | &#x2714; | ``boolean``                           | ``false``                |
| ``searchCaseSensitive``     | ``search-case-sensitive``      | When true, the search will be case sensitive, case insensitive otherwise.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | &#x2718; | ``boolean``                           | ``false``                |
| ``searchInput``             | ``search-input``               | When true, an editbox will be shown above the tree to filter items on the client side.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | &#x2718; | ``boolean``                           | ``false``                |
| ``searchNodata``            | ``search-nodata``              | A message to display when there is no data to display after performing a search.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | &#x2718; | ``string``                            | ``'No data to display'`` |
| ``searchPlaceholder``       | ``search-placeholder``         | The search input's placeholder                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | &#x2718; | ``string``                            | ``'Search'``             |
| ``searchTerm``              | ``search-term``                | When provided, items will be filtered based on the content of this property. Regular expressions are supported                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | &#x2718; | ``string``                            | ``''``                   |
| ``suppressExpandAll``       | ``suppress-expand-all``        | When true, the user won't be able to expand all nodes by pressing ``*`` on the keyboard.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | &#x2718; | ``boolean``                           | ``true``                 |


</div>

## Events

<div style="overflow-x: auto;">

| Event              | Description                                                                                      | Type                                    |
| ------------------ | ------------------------------------------------------------------------------------------------ | --------------------------------------- |
| ``bbj-changed``    | Emitted when selection is changed                                                                | ``void``                                |
| ``bbj-deselected`` | Emitted When an item is deselected.                                                              | ``HTMLBbjTreeNodeElement``              |
| ``bbj-searched``   | Emitted When a search is performed. The event can be prevented to implement a new search routine | ``{ term: string; done: () => void; }`` |
| ``bbj-selected``   | Emitted When an item is selected.                                                                | ``HTMLBbjTreeNodeElement``              |


</div>

## Slots

<div style="overflow-x: auto;">

| Slot  | Description                                             |
| ----- | ------------------------------------------------------- |
|       | The place where ``bbj-tree-node' elements are inserted. |


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

- [bbj-editbox](web-components/bbj-editbox.md)
- [bbj-icon](web-components/bbj-icon.md)

## Methods

### `clearSelections() => Promise<void>`

Clears all tree selections

### Returns

Type: `Promise<void>`

### `collapse(from?: HTMLBbjTreeNodeElement | string, deep?: boolean) => Promise<void>`

Collapse all groups starting at the given tree item.

### Returns

Type: `Promise<void>`

### `ensureVisible(node: HTMLBbjTreeNodeElement | string) => Promise<void>`

Ensures the given node is visible.

The method will make sure all parent are expanded so the node can be visible.

### Returns

Type: `Promise<void>`

### `expand(from?: HTMLBbjTreeNodeElement | string, deep?: boolean) => Promise<void>`

Expand all groups starting at the given tree node.

### Returns

Type: `Promise<void>`

### `getCollapsedNode() => Promise<HTMLBbjTreeNodeElement>`

Gets the node which was most recently collapsed.

### Returns

Type: `Promise<HTMLBbjTreeNodeElement>`

### `getExpandedNode() => Promise<HTMLBbjTreeNodeElement>`

Gets the node which was most recently expanded.

### Returns

Type: `Promise<HTMLBbjTreeNodeElement>`

### `getExpandedNodes() => Promise<NodeListOf<HTMLBbjTreeNodeElement>>`

Gets the list of expanded nodes

### Returns

Type: `Promise<NodeListOf<HTMLBbjTreeNodeElement>>`

### `getFirstNode() => Promise<HTMLBbjTreeNodeElement>`

Gets the first node of the tree

### Returns

Type: `Promise<HTMLBbjTreeNodeElement>`

### `getFirstSelectedNode() => Promise<HTMLBbjTreeNodeElement>`

Gets the first selected node

### Returns

Type: `Promise<HTMLBbjTreeNodeElement>`

### `getLastNode() => Promise<HTMLBbjTreeNodeElement>`

Gets the last node of the tree

### Returns

Type: `Promise<HTMLBbjTreeNodeElement>`

### `getLastSelectedNode() => Promise<HTMLBbjTreeNodeElement>`

Gets the last selected node

### Returns

Type: `Promise<HTMLBbjTreeNodeElement>`

### `getNextNode(node: HTMLBbjTreeNodeElement | string) => Promise<HTMLBbjTreeNodeElement>`

Gets the next node of the passed node

### Returns

Type: `Promise<HTMLBbjTreeNodeElement>`

### `getPart(part: string) => Promise<HTMLElement>`

Queries one of the component supported parts

### Returns

Type: `Promise<HTMLElement>`

### `getPreviousNode(node: HTMLBbjTreeNodeElement | string) => Promise<HTMLBbjTreeNodeElement>`

Gets the previous node of the passed node

### Returns

Type: `Promise<HTMLBbjTreeNodeElement>`

### `getSelectedNodes() => Promise<NodeListOf<HTMLBbjTreeNodeElement>>`

Gets the list of selected nodes

### Returns

Type: `Promise<NodeListOf<HTMLBbjTreeNodeElement>>`

### `scrollToNode(node: HTMLBbjTreeNodeElement | string) => Promise<void>`

Scrolls into the given node

### Returns

Type: `Promise<void>`



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
