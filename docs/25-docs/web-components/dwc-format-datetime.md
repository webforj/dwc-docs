# dwc-format-datetime
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--format--datetime-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-none-%23006aff)

The `dwc-format-datetime` component displays a formatted date, time, or datetime
using a BBj mask. This is a display-only component — it renders the masked value
as text.

The `value` accepts an ISO 8601 string (date: `2024-03-15`, time: `14:30:00`,
or datetime: `2024-03-15T14:30:00`) or a JavaScript `Date` object set via the property.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<div style="overflow-x: auto;">

| Name       | Attribute  | Description                                                                                    | Reflects | Type               | Default           |
| ---------- | ---------- | ---------------------------------------------------------------------------------------------- | :------: | ------------------ | ----------------- |
| ``locale`` | ``locale`` | The locale to use for formatting (e.g. ``en-US``). Defaults to the browser locale.             | &#x2718; | ``string``         | ``''``            |
| ``mask``   | ``mask``   | The BBj date mask pattern (e.g. ``%Mz/%Dz/%Yz``).                                              | &#x2718; | ``string``         | ``'%Mz/%Dz/%Yz'`` |
| ``value``  | ``value``  | The value to format. Accepts an ISO 8601 date, time, or datetime string, or a ``Date`` object. | &#x2718; | ``Date \| string`` | ``''``            |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part      | Description                                            |
| --------- | ------------------------------------------------------ |
| ``value`` | The ``<time>`` element containing the formatted value. |


</div>

----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2026.*
