# dwc-button
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--button-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `<dwc-button>` provides methods for manipulating a UI
button  control.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<div style="overflow-x: auto;">

| Name                    | Attribute                 | Description                                                                                                                                                                          | Reflects | Type                                                                                                                                                                                                                                    | Default       |
| ----------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| ``autofocus``           | ``autofocus``             | Automatically focuses the button when the page is loaded.                                                                                                                            | &#x2718; | ``boolean``                                                                                                                                                                                                                             | ``false``     |
| ``disabled``            | ``disabled``              | When true, the component cannot be interacted with.                                                                                                                                  | &#x2714; | ``boolean``                                                                                                                                                                                                                             | ``false``     |
| ``distance``            | ``distance``              | The distance in pixels to offset the dropdown away from the button.                                                                                                                  | &#x2718; | ``number``                                                                                                                                                                                                                              | ``4``         |
| ``dropdown``            |                           |                                                                                                                                                                                      | &#x2718; | ``HTMLDwcPopupmenuElement``                                                                                                                                                                                                             |               |
| ``dropdownButtonWidth`` | ``dropdown-button-width`` | Sets the dropdown button's width.                                                                                                                                                    | &#x2718; | ``string``                                                                                                                                                                                                                              |               |
| ``dropdownOpened``      | ``dropdown-opened``       | <img style="vertical-align: middle; margin-right: 5px;" src="https://img.shields.io/badge/readonly-%23006aff" />When true, the dropdown menu is opened, otherwise it is closed.      | &#x2714; | ``boolean``                                                                                                                                                                                                                             | ``false``     |
| ``expanse``             | ``expanse``               | The component's expanse.                                                                                                                                                             | &#x2714; | ``"l" \| "m" \| "s" \| "xl" \| "xs"``                                                                                                                                                                                                   | ``'m'``       |
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

## Events

<div style="overflow-x: auto;">

| Event           | Description                                   | Type     |
| --------------- | --------------------------------------------- | -------- |
| ``dwc-blurred`` | Emitted after the component has been blurred. | ``void`` |
| ``dwc-focused`` | Emitted after the component has been focused. | ``void`` |


</div>

## Slots

<div style="overflow-x: auto;">

| Slot           | Description             |
| -------------- | ----------------------- |
|                | The button's label      |
| ``left-edge``  | The button's left edge  |
| ``prefix``     | The button's prefix     |
| ``right-edge`` | The button's right edge |
| ``suffix``     | The button's suffix     |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part              | Description                  |
| ----------------- | ---------------------------- |
| ``control``       | The component's base wrapper |
| ``dropdown``      | The button's dropdown button |
| ``dropdown-icon`` | The button's dropdown icon   |
| ``label``         | The button's label           |
| ``label-wrapper`` |                              |
| ``left-edge``     | The button's left edge       |
| ``prefix``        | The button's prefix          |
| ``right-edge``    | The button's right edge      |
| ``suffix``        | The button's suffix          |


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

| Name                                 | Description                        |
| ------------------------------------ | ---------------------------------- |
| ``--dwc-button-background``          | The button's default background.   |
| ``--dwc-button-border-color``        | The button's default border color. |
| ``--dwc-button-color``               | The button's default color.        |
| ``--dwc-button-dropdown-background`` | The dropdown button's background.  |
| ``--dwc-button-dropdown-color``      | The dropdown button's text color.  |
| ``--dwc-button-focus-border-color``  | The button's focus border color.   |
| ``--dwc-button-focus-ring``          | The button's focus ring.           |
| ``--dwc-button-font-weight``         | The button's font weight.          |
| ``--dwc-button-hover-background``    | The button's hover background.     |
| ``--dwc-button-hover-border-color``  | The button's hover border color.   |
| ``--dwc-button-hover-color``         | The button's hover color.          |
| ``--dwc-button-selected-background`` | The button's selected background.  |
| ``--dwc-button-selected-color``      | The button's selected col or.      |


</div>

## Components Dependencies

- [dwc-icon](web-components/dwc-icon.md)


## Dependent Components

- [dwc-choicebox](web-components/dwc-choicebox.md)
- [dwc-color-chooser](web-components/dwc-color-chooser.md)
- [dwc-file-chooser](web-components/dwc-file-chooser.md)
- [dwc-file-save](web-components/dwc-file-save.md)
- [dwc-font-chooser](web-components/dwc-font-chooser.md)
- [dwc-login](web-components/dwc-login.md)
- [dwc-upload](web-components/dwc-upload.md)

## Methods

### `close() => Promise<void>`

Closes the dropdown.

### Returns

Type: `Promise<void>`

### `forceUpdate() => Promise<void>`

Forces the component update.

### Returns

Type: `Promise<void>`

### `getPart(part: string) => Promise<unknown>`

Queries one of the component supported parts.

### Returns

Type: `Promise<unknown>`

### `open() => Promise<void>`

Open the dropdown

### Returns

Type: `Promise<void>`

### `removeFocus() => Promise<void>`

Removes focus from the component.

### Returns

Type: `Promise<void>`

### `setFocus() => Promise<void>`

Sets focus on the component.

### Returns

Type: `Promise<void>`



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
