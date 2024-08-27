# bbj-icon-button
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-bbj--icon--button-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `<bbj-icon-button>` provides methods for displaying a UI icon button.

An icon button is an selectable SVG image that represents a capability, or some other concept or
specific entity with meaning for the user.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<div style="overflow-x: auto;">

| Name               | Attribute           | Description                                                                                                                             | Reflects | Type                                                                                 | Default       |
| ------------------ | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | :------: | ------------------------------------------------------------------------------------ | ------------- |
| ``disabled``       | ``disabled``        | True to disable the button, false to enable it.                                                                                         | &#x2714; | ``boolean``                                                                          | ``false``     |
| ``expanse``        | ``expanse``         | The button's expanse                                                                                                                    | &#x2714; | ``"2xl" \| "2xs" \| "3xl" \| "l" \| "m" \| "s" \| "xl" \| "xs"``                     | ``'xs'``      |
| ``focusVisible``   | ``focus-visible``   | When true, The button will show the focus ring when it is focused by keyboard.                                                          | &#x2718; | ``boolean``                                                                          | ``true``      |
| ``label``          | ``label``           | The button's label                                                                                                                      | &#x2718; | ``string``                                                                           |               |
| ``name``           | ``name``            | The button's name                                                                                                                       | &#x2714; | ``string``                                                                           |               |
| ``pool``           | ``pool``            | The button's pool name                                                                                                                  | &#x2718; | ``string``                                                                           | ``'tabler'``  |
| ``src``            | ``src``             | The button's src                                                                                                                        | &#x2718; | ``string``                                                                           |               |
| ``tabTraversable`` | ``tab-traversable`` | Indicates that the element can be focused. A negative value means that the element is not reachable via sequential keyboard navigation. | &#x2718; | ``number``                                                                           | ``0``         |
| ``theme``          | ``theme``           | The theme name                                                                                                                          | &#x2714; | ``"danger" \| "default" \| "gray" \| "info" \| "primary" \| "success" \| "warning"`` | ``'default'`` |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part        | Description                  |
| ----------- | ---------------------------- |
| ``control`` | The component's base wrapper |
| ``icon``    | The bbj-icon component       |


</div>

## CSS Properties


CSS Properties are DWC-defined variables in CSS, denoted by `--`, followed by a name.
They enable dynamic styling, reusability, and easy customization of components.
With CSS Properties, you can change the look and feel of a component simply by changing the value of a variable.
[[Read more]](theme-engine/css-variables).
<div style="overflow-x: auto;">

| Name                                       | Description                     |
| ------------------------------------------ | ------------------------------- |
| ``--bbj-icon-active-color``                | The button's active color       |
| ``--bbj-icon-button-color``                | The button's color              |
| ``--bbj-icon-button-focus-ring``           | The button's focus ring         |
| ``--bbj-icon-button-focused-border-color`` | The button's focus border color |
| ``--bbj-icon-button-hover-color``          | The button's hover color        |


</div>

## Components Dependencies

- [bbj-icon](web-components/bbj-icon.md)


## Dependent Components

- [bbj-alert](web-components/bbj-alert.md)
- [bbj-color-chooser](web-components/bbj-color-chooser.md)
- [bbj-drawer](web-components/bbj-drawer.md)
- [bbj-editbox](web-components/bbj-editbox.md)
- [bbj-file-chooser](web-components/bbj-file-chooser.md)
- [bbj-inputd](web-components/bbj-inputd.md)
- [bbj-inpute](web-components/bbj-inpute.md)
- [bbj-inputn](web-components/bbj-inputn.md)
- [bbj-inputt](web-components/bbj-inputt.md)
- [bbj-menubar](web-components/bbj-menubar.md)
- [bbj-tab](web-components/bbj-tab.md)
- [bbj-tabs-list](web-components/bbj-tabs-list.md)
- [bbj-upload](web-components/bbj-upload.md)

## Methods

### `removeFocus() => Promise<void>`

Remove focus on the button

### Returns

Type: `Promise<void>`

### `setFocus() => Promise<void>`

Set focus on the button

### Returns

Type: `Promise<void>`



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
