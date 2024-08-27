# BBjMenuButton
![Documentation Type](https://img.shields.io/badge/Documentation-dwc-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-bbj--button-%23006aff) <a href="https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjmenubutton/bbjmenubutton.htm?Highlight=BBjMenuButton" title="The BBj Control Name">
      <img src="https://img.shields.io/badge/Control-BBjMenuButton &#8599;-%23006aff" alt="BBj v20.11" />
    </a> ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `BBjMenuButton<bbj-button>` provides methods for manipulating a UI
 [BBjMenuButton](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjmenubutton/bbjmenubutton.htm?Highlight&#x3D;BBjMenuButton)  control.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.

!> **Tip:** From BBj you can set and get the attributes using the [BBjControl::setAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setAttribute.htm)
and [BBjControl::getAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getAttribute.htm) methods respectively.
And to set properties you can use the [BBjControl::setProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setProperty.htm) and [BBjControl::getProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getProperty.htm) methods respectively.
<div style="overflow-x: auto;">

| Name                    | Attribute                 | Description                                                                                                                                                                          | Reflects | Type                                                                                                                                                                                                                                    | Default       |
| ----------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| ``autofocus``           | ``autofocus``             | Automatically focuses the button when the page is loaded.                                                                                                                            | &#x2718; | ``boolean``                                                                                                                                                                                                                             | ``false``     |
| ``disabled``            | ``disabled``              | When true, the component cannot be interacted with.                                                                                                                                  | &#x2714; | ``boolean``                                                                                                                                                                                                                             | ``false``     |
| ``distance``            | ``distance``              | The distance in pixels to offset the dropdown away from the button.                                                                                                                  | &#x2718; | ``number``                                                                                                                                                                                                                              | ``4``         |
| ``dropdown``            |                           |                                                                                                                                                                                      |          | ``HTMLBbjPopupmenuElement``                                                                                                                                                                                                             |               |
| ``dropdownButtonWidth`` | ``dropdown-button-width`` | Sets the dropdown button's width.                                                                                                                                                    | &#x2718; | ``string``                                                                                                                                                                                                                              |               |
| ``dropdownOpened``      | ``dropdown-opened``       | <img style="vertical-align: middle; margin-right: 5px;" src="https://img.shields.io/badge/readonly-%23006aff" />When true, the dropdown menu is opened, otherwise it is closed.      | &#x2714; | ``boolean``                                                                                                                                                                                                                             | ``false``     |
| ``expanse``             | ``expanse``               | The component's expanse.                                                                                                                                                             | &#x2714; | ``"l" \| "m" \| "s" \| "xl" \| "xs"``                                                                                                                                                                                                   | ``null``      |
| ``hasDropdown``         | ``has-dropdown``          | <img style="vertical-align: middle; margin-right: 5px;" src="https://img.shields.io/badge/readonly-%23006aff" />When true, the button is has a dropdown menu, otherwise it does not. | &#x2714; | ``boolean``                                                                                                                                                                                                                             | ``false``     |
| ``hasFocus``            | ``has-focus``             | <img style="vertical-align: middle; margin-right: 5px;" src="https://img.shields.io/badge/readonly-%23006aff" />When true, the button is focused, otherwise it is not.               | &#x2714; | ``boolean``                                                                                                                                                                                                                             | ``false``     |
| ``label``               | ``label``                 | The button's label.                                                                                                                                                                  | &#x2718; | ``string``                                                                                                                                                                                                                              |               |
| ``name``                | ``name``                  | The button's name.                                                                                                                                                                   | &#x2714; | ``string``                                                                                                                                                                                                                              |               |
| ``selected``            | ``selected``              | When true then the button will look like it is hovered/selected.                                                                                                                     | &#x2714; | ``boolean``                                                                                                                                                                                                                             |               |
| ``skidding``            | ``skidding``              | The distance in pixels to offset the dropdown along the button.                                                                                                                      | &#x2718; | ``number``                                                                                                                                                                                                                              | ``0``         |
| ``tabTraversable``      | ``tab-traversable``       | Indicates that the component can receive focus. A negative value indicates that the component is not reachable via sequential keyboard navigation.                                   | &#x2718; | ``number``                                                                                                                                                                                                                              | ``0``         |
| ``theme``               | ``theme``                 | The theme name.                                                                                                                                                                      | &#x2714; | ``"danger" \| "default" \| "gray" \| "info" \| "outlined-danger" \| "outlined-default" \| "outlined-gray" \| "outlined-info" \| "outlined-primary" \| "outlined-success" \| "outlined-warning" \| "primary" \| "success" \| "warning"`` | ``'default'`` |
| ``toggleable``          | ``toggleable``            | By default, the tool button is not toggleable. If set to toggleable, the tool button will appear "pushed in" when selected.                                                          | &#x2714; | ``boolean``                                                                                                                                                                                                                             | ``false``     |
| ``value``               | ``value``                 | The button's value. Useful when it is being used inside a form.                                                                                                                      | &#x2718; | ``string``                                                                                                                                                                                                                              | ``''``        |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part                   | Description                                                                     |
| ---------------------- | ------------------------------------------------------------------------------- |
| ``control``            | The component's base wrapper                                                    |
| ``dropdown``           | The button's dropdown button                                                    |
| ``dropdown-icon``      | The button's dropdown icon                                                      |
| ``dropdown-separator`` | The button's dropdown separator which separates the icon from the actual button |
| ``label``              | The button's label                                                              |
| ``prefix``             | The button's prefix                                                             |
| ``suffix``             | The button's suffix                                                             |


</div>

## Hosted Classes


Hosted Classes are CSS classes that are applied to the host element of a component. They are useful for styling the host element from outside the component's own CSS.
They can either reflect the component's state, such as "disabled" or "active," or provide options to alter the component's style based on user interaction or other conditions.
<div style="overflow-x: auto;">

| CSS Class           | Description                                                                                           |
| ------------------- | ----------------------------------------------------------------------------------------------------- |
| ``BBjControl``      | Always applied                                                                                        |
| ``BBjButton``       | Applied when the component is used as a normal button                                                 |
| ``BBjToolButton``   | Applied when the component is a toggleable button                                                     |
| ``BBjMenuButton``   | Applied when the component has a dropdown menu                                                        |
| ``bbj-disabled``    | Applied when the component is disabled                                                                |
| ``bbj-focused``     | Applied when the component is focused                                                                 |
| ``bbj-selected``    | Applied when the button is toggleable and selected                                                    |
| ``bbj-transparent`` | ``[optional]`` can be added manually to remove the component background                               |
| ``bbj-noborder``    | ``[optional]`` can be added manually to remove the component border                                   |
| ``bbj-nopadding``   | ``[optional]`` can be added to remove the button's label padding. Useful if the label is only an icon |


</div>

## CSS Properties


CSS Properties are DWC-defined variables in CSS, denoted by `--`, followed by a name.
They enable dynamic styling, reusability, and easy customization of components.
With CSS Properties, you can change the look and feel of a component simply by changing the value of a variable.
[[Read more]](theme-engine/css-variables).
<div style="overflow-x: auto;">

| Name                                 | Description                                           |
| ------------------------------------ | ----------------------------------------------------- |
| ``--bbj-button-background``          | The button's default background                       |
| ``--bbj-button-border-color``        | The button's default border color                     |
| ``--bbj-button-color``               | The button's default color                            |
| ``--bbj-button-focus-border-color``  | The button's focus border color                       |
| ``--bbj-button-focus-ring``          | The button's focus ring                               |
| ``--bbj-button-hover-background``    | The button's hover background                         |
| ``--bbj-button-hover-border-color``  | The button's hover border color                       |
| ``--bbj-button-hover-color``         | The button's hover color                              |
| ``--bbj-button-selected-background`` | The button's selected background                      |
| ``--bbj-button-selected-color``      | The button's selected color                           |
| ``--bbj-button-separator-color``     | The button's separator color (When a dropdown button) |


</div>

## Components Dependencies

- [bbj-icon](web-components/bbj-icon.md)


## Dependent Components

- [bbj-color-chooser](web-components/bbj-color-chooser.md)
- [bbj-file-chooser](web-components/bbj-file-chooser.md)
- [bbj-file-save](web-components/bbj-file-save.md)
- [bbj-font-chooser](web-components/bbj-font-chooser.md)
- [bbj-list-button](web-components/bbj-list-button.md)
- [bbj-login](web-components/bbj-login.md)
- [bbj-upload](web-components/bbj-upload.md)


## Messages

Messages are the BBj instructions that are sent to the browser form the server to create and configure the BBj control.<!-- tabs:start -->

#### **Async create component**

| Message                | Description            | Returns  |
| ---------------------- | ---------------------- | -------- |
| BuildMenuButtonMessage | Build a BBjMenuButton. | ``Void`` |


#### **Async component message**

| Message                       | Description                                                                                                     | Returns  |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------- | -------- |
| SetDropdownButtonWidthMessage | Implements BBjMenuButton::setDropdownButtonWidth.                                                               | ``Void`` |
| SetDropdownMenuVisibleMessage | Implements BBjMenuButton::setDropdownMenuVisible.                                                               | ``Void`` |
| RemoveDropdownMenuMessage     | Implements BBjMenuButton::removeDropdownMenu, used by BBjMenuButton::setDropdownMenu.                           | ``Void`` |
| SetDropdownMenuMessage        | Implements BBjMenuButton::setDropdownButtonWidth.                                                               | ``Void`` |
| SetFocusMessage               | Implements BBjControl::focus.                                                                                   | ``Void`` |
| SetStyleMessage               | Used extensively on multiple controls to set a BBjControl CSS style name (e.g. background) to a specific value. | ``Void`` |


#### **Synchronous component message**

| Message                       | Description                                                                          | Returns     |
| ----------------------------- | ------------------------------------------------------------------------------------ | ----------- |
| GetDropdownButtonWidthMessage | Implements BBjMenuButton::getDropdownButtonWidth.                                    | ``Integer`` |
| IsDropdownMenuVisibleMessage  | Implements BBjMenuButton::isDropdownMenuVisible.                                     | ``Boolean`` |
| GetStyleMessage               | Implements BBjControl::getStyle, and used internally to return various style values. | ``String``  |


<!-- tabs:end -->



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
