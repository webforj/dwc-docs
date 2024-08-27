# dwc-terminal
![Documentation Type](https://img.shields.io/badge/Documentation-dwc-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--terminal-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `dwc-terminal` provides a terminal emulator.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.

!> **Tip:** From BBj you can set and get the attributes using the [BBjControl::setAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setAttribute.htm)
and [BBjControl::getAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getAttribute.htm) methods respectively.
And to set properties you can use the [BBjControl::setProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setProperty.htm) and [BBjControl::getProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getProperty.htm) methods respectively.
<div style="overflow-x: auto;">

| Name        | Attribute    | Description                                                | Reflects | Type                 | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----------- | ------------ | ---------------------------------------------------------- | :------: | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ``autoFit`` | ``auto-fit`` | Whether to automatically fit the terminal to its container | &#x2718; | ``boolean``          | ``false``                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ``cols``    | ``cols``     | The number of columns in the terminal                      | &#x2718; | ``number``           | ``80``                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ``options`` |              | The terminal options                                       | &#x2718; | ``ITerminalOptions`` | ``DEFAULT_OPTIONS``                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ``rows``    | ``rows``     | The number of rows in the terminal                         | &#x2718; | ``number``           | ``24``                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ``theme``   |              | The terminal theme                                         | &#x2718; | ``ITheme``           | ``{&nbsp;    // "name": "Dark+",&nbsp;    "black": "#000000",&nbsp;    "red": "#cd3131",&nbsp;    "green": "#0dbc79",&nbsp;    "yellow": "#e5e510",&nbsp;    "blue": "#2472c8",&nbsp;    "cyan": "#11a8cd",&nbsp;    "white": "#e5e5e5",&nbsp;    "brightBlack": "#666666",&nbsp;    "brightRed": "#f14c4c",&nbsp;    "brightGreen": "#23d18b",&nbsp;    "brightYellow": "#f5f543",&nbsp;    "brightBlue": "#3b8eea",&nbsp;    "brightCyan": "#29b8db",&nbsp;    "brightWhite": "#e5e5e5",&nbsp;    "background": "#1e1e1e",&nbsp;    "foreground": "#cccccc",&nbsp;    "selectionBackground": "#3a3d41",&nbsp;    "cursor": "#ffffff"&nbsp;  }`` |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part        | Description                  |
| ----------- | ---------------------------- |
| ``control`` | The component's base wrapper |


</div>

----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
