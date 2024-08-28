# BBjTree
![Documentation Type](https://img.shields.io/badge/Documentation-dwc-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--tree-%23006aff) <a href="https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/BBjTree/BBjTree.htm" title="The BBj Control Name">
      <img src="https://img.shields.io/badge/Control-BBjTree &#8599;-%23006aff" alt="BBj v20.11" />
    </a> ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `BBjTree<dwc-tree>` provides methods for manipulating a UI tree control.

?> **Note:** The `dwc-tree` component is used to build the [BBjFileChooser(tree) version](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjfilechooser/bbjfilechooser.htm).


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.

!> **Tip:** From BBj you can set and get the attributes using the [BBjControl::setAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setAttribute.htm)
and [BBjControl::getAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getAttribute.htm) methods respectively.
And to set properties you can use the [BBjControl::setProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setProperty.htm) and [BBjControl::getProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getProperty.htm) methods respectively.
<div style="overflow-x: auto;">

| Name                        | Attribute                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Reflects | Type                                  | Default                  |
| --------------------------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: | ------------------------------------- | ------------------------ |
| ``allowDeselectionByClick`` | ``allow-deselection-by-click`` | When true, the if you click a selected node, it will be deselected.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | &#x2718; | ``boolean``                           | ``false``                |
| ``connect``                 | ``connect``                    | When true, the nodes will be connected with lines to clarify the tree structure.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | &#x2718; | ``boolean``                           | ``true``                 |
| ``contiguousSelection``     | ``contiguous-selection``       | When true and multi-selecting is enabled. then multiple contiguous tree nodes can be selected.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | &#x2718; | ``boolean``                           | ``false``                |
| ``disabled``                | ``disabled``                   | True to disable the tree, false to enable it.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | &#x2714; | ``boolean``                           | ``false``                |
| ``editable``                | ``editable``                   | Tree nodes are not editable by default. If this property is used to set tree nodes to be editable generally, then node descriptions can be changed by using a triple-click or a click-hold-click on editable nodes to go into edit mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | &#x2718; | ``boolean``                           | ``false``                |
| ``expanse``                 | ``expanse``                    | The component's expanse                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | &#x2714; | ``"l" \| "m" \| "s" \| "xl" \| "xs"`` | ``null``                 |
| ``iconCollapsed``           | ``icon-collapsed``             | The node collapsed icon.<br>&nbsp;&nbsp;The icons properties can be set in any of the following formats:&nbsp;<ol>&nbsp;<li> <b>URL</b>: (ex: /path/to/image.png)&nbsp;<li> <b>Data URL</b>: (ex: data:image/jpeg;base64,/9j/4SDpRXhpZgAAT....)&nbsp;<li> <b>ICON_NAME</b>: An icon to load from the default Dwc icons pool. (ex: ``folder``)&nbsp;<li> <b>POOL_NAME:ICON_NAME</b>: An icon to load from the passed pool. (ex: ``feather:folder``)&nbsp;<li> <b>An object</b> which provides all the required properties to build the icon.&nbsp;   for instance:&nbsp;   <ol>&nbsp;     <li> {name: 'folder}&nbsp;     <li> {pool: 'feather' name: 'folder}&nbsp;     <li> {src: 'image/path'}&nbsp;     <li> {src: 'image/path' , x: 'x attribute' , y: 'y attribute'  , ...}&nbsp;   </ol>&nbsp;</ol> | &#x2718; | ``object \| string``                  | ``''``                   |
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
| ``searchInput``             | ``search-input``               | When true, an field will be shown above the tree to filter items on the client side.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | &#x2718; | ``boolean``                           | ``false``                |
| ``searchNodata``            | ``search-nodata``              | A message to display when there is no data to display after performing a search.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | &#x2718; | ``string``                            | ``'No data to display'`` |
| ``searchPlaceholder``       | ``search-placeholder``         | The search input's placeholder                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | &#x2718; | ``string``                            | ``'Search'``             |
| ``searchTerm``              | ``search-term``                | When provided, items will be filtered based on the content of this property. Regular expressions are supported                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | &#x2718; | ``string``                            | ``''``                   |
| ``suppressExpandAll``       | ``suppress-expand-all``        | When true, the user won't be able to expand all nodes by pressing ``*`` on the keyboard.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | &#x2718; | ``boolean``                           | ``true``                 |


</div>

## Slots

<div style="overflow-x: auto;">

| Slot  | Description                                             |
| ----- | ------------------------------------------------------- |
|       | The place where ``dwc-tree-node' elements are inserted. |


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


## Messages

Messages are the BBj instructions that are sent to the browser form the server to create and configure the BBj control.<!-- tabs:start -->

#### **Async component message**

| Message                            | Description                                                                                                | Returns  |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------- | -------- |
| AddTreeItemMessage                 | Implements BBjTree::insertNode and BBjTree::insertExpandableNode.                                          | ``Void`` |
| ClearTreeMessage                   | Implements internal BBjTree setRoot(null).                                                                 | ``Void`` |
| ClearTreeSelectionMessage          | Implements BBjTree::deselectAll.                                                                           | ``Void`` |
| EditTreeItemMessage                | Implements BBjTree::editNode and BBjTree::endEdit.                                                         | ``Void`` |
| RemoveTreeItemMessage              | Implements BBjTree::removeDescendants  and BBjTree::removeNode.                                            | ``Void`` |
| ScrollTreeItemToVisibleMessage     | Implements BBjTree::setNodeVisible.                                                                        | ``Void`` |
| SetBackgroundSelectionColorMessage | Implements BBjTree::setSelectedBackColor.                                                                  | ``Void`` |
| SetTextSelectionColorMessage       | Implements BBjTree::setSelectedForeColor.                                                                  | ``Void`` |
| SetTreeCollapsedIconMessage        | Implements BBjTree::setCollapsedIcon and BBjTree::setCollapsedImage.                                       | ``Void`` |
| SetTreeEditableMessage             | Implements BBjTree::setTreeEditable.                                                                       | ``Void`` |
| SetTreeExpandedIconMessage         | Implements BBjTree::setExpandedIcon and BBjTree::setExpandedImage.                                         | ``Void`` |
| SetTreeImageSizeMessage            | Implements BBjTree::setImageSize.                                                                          | ``Void`` |
| SetTreeItemEditableMessage         | Implements BBjTree::setNodeEditable.                                                                       | ``Void`` |
| SetTreeItemInfoMessage             | Called internally to update BBjTree node information when a node text, icon, or selected icon changes.     | ``Void`` |
| SetTreeItemSelectedMessage         | Implements BBjTree::selectNode, BBjTree::selectChildren, BBjTree::deselectNode, BBjTree::deselectChildren. | ``Void`` |
| SetTreeItemStateMessage            | Implements BBjTree::expandNode and BBjTree::collapseNode.                                                  | ``Void`` |
| SetTreeLeafIconMessage             | Implements BBjTree::setLeafIcon and BBjTree::setLeafImage.                                                 | ``Void`` |
| SetTreeRootMessage                 | Implements BBjTree::setRoot.                                                                               | ``Void`` |
| SetTreeRootVisibleMessage          | Implements BBjTree::setRootVisible.                                                                        | ``Void`` |
| SetTreeSelectedIconMessage         | Implements BBjTree::setSelectedIcon and BBjTree::setSelectedImage.                                         | ``Void`` |
| SetTreeSelectionModeMessage        | Implements BBjTree::setSelectionMode.                                                                      | ``Void`` |


#### **Async create component**

| Message              | Description           | Returns  |
| -------------------- | --------------------- | -------- |
| BuildTreeItemMessage | Build a BBjTree node. | ``Void`` |
| BuildTreeMessage     | Build a BBjTree.      | ``Void`` |


#### **Synchronous component message**

| Message                            | Description                               | Returns                                                        |
| ---------------------------------- | ----------------------------------------- | -------------------------------------------------------------- |
| GetBackgroundSelectionColorMessage | Implements BBjTree::getSelectedBackColor. | ``String [HTML color]``                                        |
| GetExpandedTreeItemsMessage        | Implements BBjTree::getExpandedNodes.     | ``[intarray] => ArrayList<Integer> (resultType IntegerArray)`` |
| GetLastCollapsedTreeItemMessage    | Implements BBjTree::getCollapsedNode.     | ``Integer``                                                    |
| GetLastExpandedTreeItemMessage     | Implements BBjTree::getExpandedNode.      | ``Integer``                                                    |
| GetLastSelectedTreeItemMessage     | Implements BBjTree::getSelectedNode.      | ``Integer``                                                    |
| GetSelectedTreeItemsMessage        | Implements BBjTree::getSelectedNodes.     | ``ArrayList<Integer> (resultType IntegerArray)``               |
| GetTextSelectionColorMessage       | Implements BBjTree::getSelectedForeColor. | ``String``                                                     |
| GetTreeItemStateMessage            | Implements BBjTree::isNodeExpanded.       | ``Boolean``                                                    |
| GetTreeItemTextMessage             | Implements BBjTree::getNodeText.          | ``String``                                                     |
| IsTreeItemSelectedMessage          | Implements BBjTree::isNodeSelected.       | ``Boolean``                                                    |


#### **Async event callback message**

| Message                                  | Description                                                 | Returns  |
| ---------------------------------------- | ----------------------------------------------------------- | -------- |
| TreeMouseDoubleClickEventCallbackMessage | Implements event callback for BBjTreeMouseDoubleClickEvent. | ``Void`` |
| TreeMouseDownEventCallbackMessage        | Implements event callback for BBjTreeMouseDownEvent.        | ``Void`` |
| TreeMouseUpEventCallbackMessage          | Implements event callback for BBjTreeMouseUpEvent.          | ``Void`` |
| TreeNodeCollapsedEventCallbackMessage    | Implements event callback for BBjTreeNodeCollapsedEvent.    | ``Void`` |
| TreeNodeDeselectedEventCallbackMessage   | Implements event callback for BBjTreeNodeDeselectedEvent.   | ``Void`` |
| TreeNodeEditStoppedEventCallbackMessage  | Implements event callback for BBjTreeNodeEditStoppedEvent.  | ``Void`` |
| TreeNodeExpandedEventCallbackMessage     | Implements event callback for BBjTreeNodeExpandedEvent.     | ``Void`` |
| TreeNodeSelectedEventCallbackMessage     | Implements event callback for BBjTreeNodeSelectedEvent.     | ``Void`` |
| TreeRightMouseDownEventCallbackMessage   | Implements event callback for BBjTreeRightMouseDownEvent.   | ``Void`` |
| TreeRightMouseUpEventCallbackMessage     | Implements event callback for BBjTreeRightMouseUpEvent.     | ``Void`` |


<!-- tabs:end -->



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
