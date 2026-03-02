# dwc-format-time
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--format--time-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `dwc-format-time` component displays a formatted time using a BBj time mask.
This is a display-only component — it renders the masked value as text.

The `value` should be an ISO 8601 time string (e.g. `14:30:00`).


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<div style="overflow-x: auto;">

| Name       | Attribute  | Description                                                                        | Reflects | Type       | Default          |
| ---------- | ---------- | ---------------------------------------------------------------------------------- | :------: | ---------- | ---------------- |
| ``locale`` | ``locale`` | The locale to use for formatting (e.g. ``en-US``). Defaults to the browser locale. | &#x2718; | ``string`` | ``''``           |
| ``mask``   | ``mask``   | The BBj time mask pattern (e.g. ``%hz:%mz %p``).                                   | &#x2718; | ``string`` | ``'%hz:%mz %p'`` |
| ``value``  | ``value``  | The time value to format. Accepts an ISO 8601 time string (e.g. ``14:30:00``).     | &#x2718; | ``string`` | ``''``           |


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
