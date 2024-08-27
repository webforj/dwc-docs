# dwc-tree-node
![Documentation Type](https://img.shields.io/badge/Documentation-dwc-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--tree--node-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `<dwc-tree-node>` provides methods for manipulating a UI tree node.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.

!> **Tip:** From BBj you can set and get the attributes using the [BBjControl::setAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setAttribute.htm)
and [BBjControl::getAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getAttribute.htm) methods respectively.
And to set properties you can use the [BBjControl::setProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setProperty.htm) and [BBjControl::getProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getProperty.htm) methods respectively.
<div style="overflow-x: auto;">

| Name               | Attribute           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Reflects | Type                 | Default   |
| ------------------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------: | -------------------- | --------- |
| ``editable``       | ``editable``        | Items are editable by default when the ``dwc-tree`` is editable. This property can then be used to set specific items to not be editable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | &#x2718; | ``boolean``          | ``true``  |
| ``expanded``       | ``expanded``        | True when the node is expanded, false if collapsed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | &#x2714; | ``boolean``          | ``false`` |
| ``first``          | ``first``           | <img style="vertical-align: middle; margin-right: 5px;" src="https://img.shields.io/badge/readonly-%23006aff" />When true then the node is node is the first item in its parent                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | &#x2714; | ``boolean``          | ``false`` |
| ``flat``           | ``flat``            | <img style="vertical-align: middle; margin-right: 5px;" src="https://img.shields.io/badge/readonly-%23006aff" />When true, the node label will not be visible and the node will not have any margin                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | &#x2714; | ``boolean``          | ``false`` |
| ``group``          | ``group``           | <img style="vertical-align: middle; margin-right: 5px;" src="https://img.shields.io/badge/readonly-%23006aff" />True when the node is group for other nodes, false otherwise                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | &#x2714; | ``boolean``          | ``false`` |
| ``hasFocus``       | ``has-focus``       | When true, the node is focused, blurred otherwise                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | &#x2714; | ``boolean``          | ``false`` |
| ``icon``           | ``icon``            | The node icon. When this property is used, it will override all other icons.<br>&nbsp;&nbsp;The icons properties can be set in any of the following formats:&nbsp;<ol>&nbsp;<li> <b>URL</b>: (ex: /path/to/image.png)&nbsp;<li> <b>Data URL</b>: (ex: data:image/jpeg;base64,/9j/4SDpRXhpZgAAT....)&nbsp;<li> <b>ICON_NAME</b>: An icon to load from the default Dwc icons pool. (ex: ``folder``)&nbsp;<li> <b>POOL_NAME:ICON_NAME</b>: An icon to load from the passed pool. (ex: ``feather:folder``)&nbsp;<li> <b>An object</b> which provides all the required properties to build the icon.&nbsp;   for instance:&nbsp;   <ol>&nbsp;     <li> {name: 'folder}&nbsp;     <li> {pool: 'feather' name: 'folder}&nbsp;     <li> {src: 'image/path'}&nbsp;     <li> {src: 'image/path' , x: 'x attribute' , y: 'y attribute'  , ...}&nbsp;   </ol>&nbsp;</ol> | &#x2718; | ``object \| string`` | ``''``    |
| ``iconSelected``   | ``icon-selected``   | The node selected icon. See ``icon`` to learn about accepted icon formats.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | &#x2718; | ``object \| string`` | ``''``    |
| ``label``          | ``label``           | The node's label                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | &#x2718; | ``string``           |           |
| ``last``           | ``last``            | <img style="vertical-align: middle; margin-right: 5px;" src="https://img.shields.io/badge/readonly-%23006aff" />When true, the node is the last item in its parent                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | &#x2714; | ``boolean``          | ``false`` |
| ``leaf``           | ``leaf``            | <img style="vertical-align: middle; margin-right: 5px;" src="https://img.shields.io/badge/readonly-%23006aff" />True when the item is a leaf, false otherwise                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | &#x2714; | ``boolean``          | ``true``  |
| ``selected``       | ``selected``        | When true the node is selected, de-selected otherwise                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | &#x2714; | ``boolean``          | ``false`` |
| ``tabTraversable`` | ``tab-traversable`` | Indicates that the element can be focused. A negative value means that the element is not reachable via sequential keyboard navigation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | &#x2718; | ``number``           | ``-1``    |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part              | Description                                                      |
| ----------------- | ---------------------------------------------------------------- |
| ``control``       | The component's base wrapper.                                    |
| ``icon``          | The node's icon.                                                 |
| ``icon-toggle``   | The toggle icon.                                                 |
| ``icon-type``     | The node type icon (group , leaf).                               |
| ``icons``         | The icons container.                                             |
| ``input``         | The node's input which is used when the node is in editing mode. |
| ``label``         | The node's label.                                                |
| ``label-wrapper`` | The icons , label & input container.                             |
| ``list``          | The wrapper of child nodes.                                      |


</div>

## Hosted Classes


Hosted Classes are CSS classes that are applied to the host element of a component. They are useful for styling the host element from outside the component's own CSS.
They can either reflect the component's state, such as "disabled" or "active," or provide options to alter the component's style based on user interaction or other conditions.
<div style="overflow-x: auto;">

| CSS Class        | Description                                            |
| ---------------- | ------------------------------------------------------ |
| ``BBjTree-node`` | Always applied                                         |
| ``bbj-leaf``     | Applied when the node is a leaf node.                  |
| ``bbj-group``    | Applied when the node is a group node.                 |
| ``bbj-expanded`` | Applied when the node is expanded.                     |
| ``bbj-selected`` | Applied when the node is selected.                     |
| ``bbj-first``    | Applied when the node is the first node in its parent. |
| ``bbj-last``     | Applied when the node is the last node in its parent.  |
| ``bbj-editing``  | Applied when the node is in editing mode.              |
| ``bbj-flat``     | Applied when the node is flattened.                    |


</div>

## CSS Properties


CSS Properties are DWC-defined variables in CSS, denoted by `--`, followed by a name.
They enable dynamic styling, reusability, and easy customization of components.
With CSS Properties, you can change the look and feel of a component simply by changing the value of a variable.
[[Read more]](theme-engine/css-variables).
<div style="overflow-x: auto;">

| Name                              | Description                       |
| --------------------------------- | --------------------------------- |
| ``--dwc-tree-icon-background``    | The icons background color        |
| ``--dwc-tree-icon-color``         | The icon color                    |
| ``--dwc-tree-icon-fill``          | The icon fill color               |
| ``--dwc-tree-node-border-color``  | The node connectors border color  |
| ``--dwc-tree-node-border-radius`` | The node connectors border radius |
| ``--dwc-tree-node-border-style``  | The node connectors border style  |
| ``--dwc-tree-node-border-width``  | The node connectors border width  |
| ``--dwc-tree-node-margin``        | The nodes margin                  |


</div>

## Components Dependencies

- [dwc-icon](web-components/dwc-icon.md)


----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
