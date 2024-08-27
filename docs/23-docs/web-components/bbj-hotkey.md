# bbj-hotkey
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-bbj--hotkey-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)




## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<div style="overflow-x: auto;">

| Name         | Attribute     | Description                                                                           | Reflects | Type                      | Default        |
| ------------ | ------------- | ------------------------------------------------------------------------------------- | :------: | ------------------------- | -------------- |
| ``debug``    | ``debug``     | When true, the component will output debug information for hotkey processing process. | &#x2714; | ``boolean``               | ``false``      |
| ``disabled`` | ``disabled``  | Specifies that hotkey is disabled.                                                    | &#x2714; | ``boolean``               | ``false``      |
| ``keyName``  | ``key-name``  | The hotkey name (for instance, Ctrl+k ).                                              | &#x2718; | ``string``                |                |
| ``splitKey`` | ``split-key`` | The separator between key combination, (default is +).                                | &#x2718; | ``string``                | ``'+'``        |
| ``target``   | ``target``    | Assigns the hotkey to a specific target element.                                      | &#x2718; | ``HTMLElement \| string`` | ``'document'`` |


</div>

## Events

<div style="overflow-x: auto;">

| Event          | Description                                          | Type                                                                                        |
| -------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| ``bbj-hotkey`` | Emitted after the hotkey is triggered on the target. | ``{ keyboardEvent: KeyboardEvent; hotkeysEvent: HotkeysEvent; el: HTMLBbjHotkeyElement; }`` |


</div>

## Dependent Components

- [bbj-menuitem](web-components/bbj-menuitem.md)


----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
