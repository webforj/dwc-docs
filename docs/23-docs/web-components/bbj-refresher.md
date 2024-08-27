# bbj-refresher
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-bbj--refresher-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

`BBjPullToRefresh<bbj-refresher>` lets a user pull down on a container using
touch in order to refresh or retrieve more data.

Pull-to-refresh is widely used on devices with a touch screen.
You can use the APIs shown here to implement pull-to-refresh in your app.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<div style="overflow-x: auto;">

| Name             | Attribute         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Reflects | Type                                                                    | Default                    |
| ---------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: | ----------------------------------------------------------------------- | -------------------------- |
| ``disabled``     | ``disabled``      | When true,  the refresher will be disabled, enabled otherwise                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | &#x2714; | ``boolean``                                                             | ``false``                  |
| ``iconArrow``    | ``icon-arrow``    | The arrow icon to use when the ``stage`` is ``pull`` or ``release``.&nbsp;The icon can be in any of the following formats:&nbsp;&nbsp;<ol>&nbsp;<li> <b>URL</b>: (ex: /path/to/image.png)&nbsp;<li> <b>Data URL</b>: (ex: data:image/jpeg;base64,/9j/4SDpRXhpZgAAT....)&nbsp;<li> <b>ICON_NAME</b>: An icon to load from the default BBj icons pool. (ex: ``folder``)&nbsp;<li> <b>POOL_NAME:ICON_NAME</b>: An icon to load from the passed pool. (ex: ``feather:folder``)&nbsp;<li> <b>An object</b> which provides all the required properties to build the icon.&nbsp;   for instance:&nbsp;   <ol>&nbsp;     <li> {name: 'arrow'}&nbsp;     <li> {pool: 'feather' name: 'arrow}&nbsp;     <li> {src: 'image/path'}&nbsp;   </ol>&nbsp;</ol> | &#x2718; | ``string``                                                              | ``'bbj:arrow-down'``       |
| ``iconRefresh``  | ``icon-refresh``  | The refresh icon to use when the ``stage`` is ``refresh``.&nbsp;The icon can be in any of the following formats:&nbsp;&nbsp;<ol>&nbsp;<li> <b>URL</b>: (ex: /path/to/image.png)&nbsp;<li> <b>Data URL</b>: (ex: data:image/jpeg;base64,/9j/4SDpRXhpZgAAT....)&nbsp;<li> <b>ICON_NAME</b>: An icon to load from the default BBj icons pool. (ex: ``folder``)&nbsp;<li> <b>POOL_NAME:ICON_NAME</b>: An icon to load from the passed pool. (ex: ``feather:folder``)&nbsp;<li> <b>An object</b> which provides all the required properties to build the icon.&nbsp;   for instance:&nbsp;   <ol>&nbsp;     <li> {name: 'spinner'}&nbsp;     <li> {pool: 'feather' name: 'spinner}&nbsp;     <li> {src: 'image/path'}&nbsp;   </ol>&nbsp;</ol>       | &#x2718; | ``string``                                                              | ``'bbj:animated-spinner'`` |
| ``stage``        | ``stage``         | The current refresher stage.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | &#x2714; | ``"initial" \| "pull" \| "refresh" \| "release"``                       | ``'initial'``              |
| ``textPull``     | ``text-pull``     | The initial instructions string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | &#x2718; | ``string``                                                              | ``'Pull down to refresh'`` |
| ``textRefresh``  | ``text-refresh``  | The refresh instructions text.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | &#x2718; | ``string``                                                              | ``'Refreshing'``           |
| ``textRelease``  | ``text-release``  | The release instructions text.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | &#x2718; | ``string``                                                              | ``'Release to refresh'``   |
| ``theme``        | ``theme``         | The theme name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | &#x2714; | ``"danger" \| "gray" \| "info" \| "primary" \| "success" \| "warning"`` | ``'primary'``              |
| ``threshold``    | ``threshold``     | The minimum distance of the pull until the refresher will go into the release state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | &#x2718; | ``number``                                                              | ``80``                     |
| ``thresholdMax`` | ``threshold-max`` | The maximum distance of the pull.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | &#x2718; | ``number``                                                              | ``Infinity``               |


</div>

## Events

<div style="overflow-x: auto;">

| Event           | Description                                                                                                                                                                                           | Type       |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| ``bbj-pull``    | Fired when the target is being is pulled. The event payload contains the height of the refresher                                                                                                      | ``number`` |
| ``bbj-refresh`` | Fired when the refresh is requested.&nbsp;&nbsp;This event must be handled and when the refresh is done , the ``finish`` method&nbsp;must be called to return the refresher to the ``initial`` state. | ``void``   |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part        | Description                   |
| ----------- | ----------------------------- |
| ``content`` | The refresher content wrapper |
| ``control`` | The component's base wrapper. |
| ``icon``    | The refresher icon            |
| ``text``    | The refresher text            |


</div>

## Hosted Classes


Hosted Classes are CSS classes that are applied to the host element of a component. They are useful for styling the host element from outside the component's own CSS.
They can either reflect the component's state, such as "disabled" or "active," or provide options to alter the component's style based on user interaction or other conditions.
<div style="overflow-x: auto;">

| CSS Class        | Description                |
| ---------------- | -------------------------- |
| ``bbj-disabled`` | When component is disabled |
| ``bbj-initial``  | When stage is initial      |
| ``bbj-pull``     | When stage is pull         |
| ``bbj-release``  | When stage is release      |
| ``bbj-refresh``  | When stage is refresh      |


</div>

## Components Dependencies

- [bbj-icon](web-components/bbj-icon.md)

## Methods

### `finish() => Promise<void>`

Put the refresh in the `initial` stage

### Returns

Type: `Promise<void>`



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
