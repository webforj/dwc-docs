# dwc-infinite-scroll
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--infinite--scroll-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

`BBjInfiniteScroll<dwc-infinite-scroll>` Loads content continuously as the user scrolls down, eliminating the need for pagination.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<div style="overflow-x: auto;">

| Name          | Attribute     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Reflects | Type                      | Default                    |
| ------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------: | ------------------------- | -------------------------- |
| ``completed`` | ``completed`` | When true, the component will not ask to load any more items.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | &#x2714; | ``boolean``               | ``false``                  |
| ``icon``      | ``icon``      | The refresh icon to use when loading more data.&nbsp;The icon can be in any of the following formats:&nbsp;&nbsp;<ol>&nbsp;<li> <b>URL</b>: (ex: /path/to/image.png)&nbsp;<li> <b>Data URL</b>: (ex: data:image/jpeg;base64,/9j/4SDpRXhpZgAAT....)&nbsp;<li> <b>ICON_NAME</b>: An icon to load from the default Dwc icons pool. (ex: ``folder``)&nbsp;<li> <b>POOL_NAME:ICON_NAME</b>: An icon to load from the passed pool. (ex: ``feather:folder``)&nbsp;<li> <b>An object</b> which provides all the required properties to build the icon.&nbsp;   for instance:&nbsp;   <ol>&nbsp;     <li> {name: 'spinner'}&nbsp;     <li> {pool: 'feather' name: 'spinner}&nbsp;     <li> {src: 'image/path'}&nbsp;   </ol>&nbsp;</ol> | &#x2718; | ``string``                | ``'dwc:animated-spinner'`` |
| ``loading``   | ``loading``   | When true, the component is loading.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | &#x2714; | ``boolean``               | ``false``                  |
| ``root``      | ``root``      | The element that is used as the viewport. Must be the ancestor of the ``dwc-infinite-scroll`` or null.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | &#x2718; | ``"self" \| HTMLElement`` | ``"self"``                 |
| ``text``      | ``text``      | The instructions string                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | &#x2718; | ``string``                | ``'Loading data'``         |


</div>

## Events

<div style="overflow-x: auto;">

| Event            | Description                                          | Type     |
| ---------------- | ---------------------------------------------------- | -------- |
| ``dwc-infinite`` | Event emitted when the infinite scroll is triggered. | ``void`` |


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

- [dwc-icon](web-components/dwc-icon.md)

## Methods

### `update() => Promise<void>`

Updates the component; this method should be called after updating
the content of the component.

### Returns

Type: `Promise<void>`



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
