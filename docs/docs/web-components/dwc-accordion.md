# dwc-accordion
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--accordion-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `<dwc-accordion>` groups `<dwc-accordion-panel>` elements and coordinates
their expand/collapse behavior. When `multiple` is false (default), opening
one panel automatically closes the others.

Panels can also be used standalone without this wrapper.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<div style="overflow-x: auto;">

| Name         | Attribute    | Description                                              | Reflects | Type        | Default   |
| ------------ | ------------ | -------------------------------------------------------- | :------: | ----------- | --------- |
| ``multiple`` | ``multiple`` | When true, multiple panels can be open at the same time. | &#x2718; | ``boolean`` | ``false`` |


</div>

## Slots

<div style="overflow-x: auto;">

| Slot  | Description                                                  |
| ----- | ------------------------------------------------------------ |
|       | The place where ``dwc-accordion-panel`` elements are placed. |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part        | Description        |
| ----------- | ------------------ |
| ``control`` | The outer wrapper. |


</div>
## Methods

### `closeAll() => Promise<void>`

Closes all panels.

### Returns

Type: `Promise<void>`

### `openAll() => Promise<void>`

Opens all panels (only effective when `multiple` is true).

### Returns

Type: `Promise<void>`



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2026.*
