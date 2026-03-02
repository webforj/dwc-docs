# dwc-format-text
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--format--text-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `dwc-format-text` component displays a formatted string using a BBj string mask.
This is a display-only component — it renders the masked value as text.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<div style="overflow-x: auto;">

| Name      | Attribute | Description                                         | Reflects | Type       | Default |
| --------- | --------- | --------------------------------------------------- | :------: | ---------- | ------- |
| ``mask``  | ``mask``  | The BBj string mask pattern (e.g. ``XX-XXX-XXXX``). | &#x2718; | ``string`` | ``''``  |
| ``value`` | ``value`` | The string value to format.                         | &#x2718; | ``string`` | ``''``  |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part      | Description                  |
| --------- | ---------------------------- |
| ``value`` | The formatted value element. |


</div>

----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2026.*
