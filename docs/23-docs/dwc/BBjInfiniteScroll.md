# BBjInfiniteScroll
![Documentation Type](https://img.shields.io/badge/Documentation-dwc-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-bbj--infinite--scroll-%23006aff) <a href="https://bbj-plugins.github.io/BBjInfiniteScroll/#/" title="The BBj Widget Name">
      <img src="https://img.shields.io/badge/Widget-BBjInfiniteScroll &#8599;-%23006aff" alt="BBj v20.11" />
    </a> ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

`BBjInfiniteScroll<bbj-infinite-scroll>` Loads content continuously as the user scrolls down, eliminating the need for pagination.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.

!> **Tip:** From BBj you can set and get the attributes using the [BBjControl::setAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setAttribute.htm)
and [BBjControl::getAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getAttribute.htm) methods respectively.
And to set properties you can use the [BBjControl::setProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setProperty.htm) and [BBjControl::getProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getProperty.htm) methods respectively.
<div style="overflow-x: auto;">

| Name          | Attribute     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Reflects | Type                      | Default                    |
| ------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------: | ------------------------- | -------------------------- |
| ``completed`` | ``completed`` | When true, the component will not ask to load any more items.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | &#x2714; | ``boolean``               | ``false``                  |
| ``icon``      | ``icon``      | The refresh icon to use when loading more data.&nbsp;The icon can be in any of the following formats:&nbsp;&nbsp;<ol>&nbsp;<li> <b>URL</b>: (ex: /path/to/image.png)&nbsp;<li> <b>Data URL</b>: (ex: data:image/jpeg;base64,/9j/4SDpRXhpZgAAT....)&nbsp;<li> <b>ICON_NAME</b>: An icon to load from the default BBj icons pool. (ex: ``folder``)&nbsp;<li> <b>POOL_NAME:ICON_NAME</b>: An icon to load from the passed pool. (ex: ``feather:folder``)&nbsp;<li> <b>An object</b> which provides all the required properties to build the icon.&nbsp;   for instance:&nbsp;   <ol>&nbsp;     <li> {name: 'spinner'}&nbsp;     <li> {pool: 'feather' name: 'spinner}&nbsp;     <li> {src: 'image/path'}&nbsp;   </ol>&nbsp;</ol> | &#x2718; | ``string``                | ``'bbj:animated-spinner'`` |
| ``loading``   | ``loading``   | When true, the component is loading.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | &#x2714; | ``boolean``               | ``false``                  |
| ``root``      | ``root``      | The element that is used as the viewport. Must be the ancestor of the ``bbj-infinite-scroll`` or null.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | &#x2718; | ``"self" \| HTMLElement`` | ``"self"``                 |
| ``text``      | ``text``      | The instructions string                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | &#x2718; | ``string``                | ``'Loading data'``         |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part         | Description                                                          |
| ------------ | -------------------------------------------------------------------- |
| ``content``  | The component content (can be used to create custom loading message) |
| ``icon``     | The loading icon                                                     |
| ``sentinel`` | The sentinel container                                               |
| ``text``     | The loading text                                                     |


</div>

## Components Dependencies

- [bbj-icon](web-components/bbj-icon.md)


----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
