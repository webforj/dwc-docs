# dwc-format-number
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--format--number-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-none-%23006aff)

The `dwc-format-number` component displays a formatted number using a BBj number mask.
This is a display-only component — it renders the masked value as text.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<div style="overflow-x: auto;">

| Name                   | Attribute                | Description                                                      | Reflects | Type        | Default   |
| ---------------------- | ------------------------ | ---------------------------------------------------------------- | :------: | ----------- | --------- |
| ``decimalSeparator``   | ``decimal-separator``    | The character used as the decimal separator.                     | &#x2718; | ``string``  | ``'.'``   |
| ``forceTrailingZeros`` | ``force-trailing-zeros`` | When true, trailing zeros are preserved after the decimal point. | &#x2718; | ``boolean`` | ``false`` |
| ``groupSeparator``     | ``group-separator``      | The character used as the grouping (thousands) separator.        | &#x2718; | ``string``  | ``','``   |
| ``mask``               | ``mask``                 | The BBj number mask pattern (e.g. ``###,##0.00``).               | &#x2718; | ``string``  | ``''``    |
| ``value``              | ``value``                | The numeric value to format.                                     | &#x2718; | ``number``  | ``0``     |


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
