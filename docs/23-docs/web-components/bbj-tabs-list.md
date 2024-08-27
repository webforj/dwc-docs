# bbj-tabs-list
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-bbj--tabs--list-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `BBjTabCtrl<bbj-tabs-list>` provides methods for manipulating a UI tab control.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<div style="overflow-x: auto;">

| Name                    | Attribute                 | Description                                                                                                                                                                                                         | Reflects | Type                                                                    | Default                 |
| ----------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: | ----------------------------------------------------------------------- | ----------------------- |
| ``activation``          | ``activation``            | When set to auto, navigating tabs with the arrow keys will instantly show the corresponding tab panel. When set to&nbsp;manual, the tab will receive focus but will not show until the user presses space or enter. | &#x2718; | ``"auto" \| "manual"``                                                  | ``'auto'``              |
| ``alignment``           | ``alignment``             | The alignments of the tabs.                                                                                                                                                                                         | &#x2714; | ``"auto" \| "center" \| "end" \| "start" \| "stretch"``                 | ``'auto'``              |
| ``borderless``          | ``borderless``            | When true then the will be no border for list                                                                                                                                                                       | &#x2714; | ``boolean``                                                             | ``false``               |
| ``disabled``            | ``disabled``              | True to disable the tabs, false to enable them                                                                                                                                                                      | &#x2714; | ``boolean``                                                             |                         |
| ``expanse``             | ``expanse``               | The component's expanse.                                                                                                                                                                                            | &#x2714; | ``"l" \| "m" \| "s" \| "xl" \| "xs"``                                   | ``'m'``                 |
| ``hideActiveIndicator`` | ``hide-active-indicator`` | When true, the active indicator is hidden, visible otherwise.                                                                                                                                                       | &#x2714; | ``boolean``                                                             | ``false``               |
| ``label``               | ``label``                 | The tab group label                                                                                                                                                                                                 | &#x2718; | ``string``                                                              | ``''``                  |
| ``nobody``              | ``nobody``                | When true, the body will be hidden. Useful when the tabs-list is used in ``bbj-toolbar``.                                                                                                                           | &#x2714; | ``boolean``                                                             | ``false``               |
| ``placement``           | ``placement``             | The placement of the tabs.                                                                                                                                                                                          | &#x2714; | ``"bottom" \| "hidden" \| "left" \| "right" \| "top"``                  | ``'top'``               |
| ``removal``             | ``removal``               | When set to auto, tabs will be removed directly when the user clicks the close button,&nbsp;otherwise, the tab is kept but the ``bbj-closed`` event bubbles so it can be handled outside the component.             | &#x2718; | ``"auto" \| "manual"``                                                  | ``'manual'``            |
| ``selected``            | ``selected``              |                                                                                                                                                                                                                     | &#x2718; | ``number``                                                              | ``0``                   |
| ``swipePreventScroll``  | ``swipe-prevent-scroll``  | Prevents page scrolling when swiping on the tabs panel.                                                                                                                                                             | &#x2718; | ``((ev: CustomEvent<any>) => boolean) \| boolean``                      | ``ev => ev.cancelable`` |
| ``swipeWithMouse``      | ``swipe-with-mouse``      | When true the swipe gesture will work with mouse.                                                                                                                                                                   | &#x2718; | ``boolean``                                                             | ``false``               |
| ``swipeWithTouch``      | ``swipe-with-touch``      | When true the swipe gesture will work with touch.                                                                                                                                                                   | &#x2718; | ``boolean``                                                             | ``true``                |
| ``swipeable``           | ``swipeable``             | When true, active tab can be changed by swiping the tab panels.                                                                                                                                                     | &#x2714; | ``boolean``                                                             | ``false``               |
| ``swiping``             | ``swiping``               | <img style="vertical-align: middle; margin-right: 5px;" src="https://img.shields.io/badge/readonly-%23006aff" />True when the user is swiping, false otherwise.                                                     | &#x2714; | ``boolean``                                                             | ``false``               |
| ``theme``               | ``theme``                 | The theme name                                                                                                                                                                                                      | &#x2714; | ``"danger" \| "default" \| "gray" \| "info" \| "success" \| "warning"`` | ``'default'``           |


</div>

## Events

<div style="overflow-x: auto;">

| Event                  | Description                      | Type                                           |
| ---------------------- | -------------------------------- | ---------------------------------------------- |
| ``bbj-tab-deselected`` | Emitted When a tab is deselected | ``{ index: number; tab: HTMLBbjTabElement; }`` |
| ``bbj-tab-selected``   | Emitted When a tab is selected   | ``{ index: number; tab: HTMLBbjTabElement; }`` |


</div>

## Slots

<div style="overflow-x: auto;">

| Slot    | Description                                          |
| ------- | ---------------------------------------------------- |
|         | The place where ``bbj-tab-panel`` should be inserted |
| ``nav`` | The place where ``bbj-tab`` should be inserted       |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part                     | Description                                                 |
| ------------------------ | ----------------------------------------------------------- |
| ``active-tab-indicator`` | The active tab indicator                                    |
| ``advancer``             | The advancer button                                         |
| ``advancer-bottom``      | The advancer bottom button                                  |
| ``advancer-bottom-icon`` | The advancer bottom icon                                    |
| ``advancer-left``        | The advancer left button                                    |
| ``advancer-left-icon``   | The advancer left icon                                      |
| ``advancer-right``       | The advancer right button                                   |
| ``advancer-right-icon``  | The advancer right icon                                     |
| ``advancer-top``         | The advancer top button                                     |
| ``advancer-top-icon``    | The advancer top icon                                       |
| ``body``                 | The ``bbj-tab-panel(s)`` wrapper                            |
| ``control``              | The component's base wrapper.                               |
| ``nav``                  | The place where tabs and active-tabs-indicator are inserted |
| ``nav-container``        | The place where tabs and advancers are inserted             |
| ``tabs``                 | The ``bbj-tab(s)`` wrapper                                  |


</div>

## Hosted Classes


Hosted Classes are CSS classes that are applied to the host element of a component. They are useful for styling the host element from outside the component's own CSS.
They can either reflect the component's state, such as "disabled" or "active," or provide options to alter the component's style based on user interaction or other conditions.
<div style="overflow-x: auto;">

| CSS Class        | Description                            |
| ---------------- | -------------------------------------- |
| ``BBjControl``   | Always applied                         |
| ``BBjTabCtrl``   | Always applied                         |
| ``bbj-disabled`` | Applied when the component is disabled |


</div>

## CSS Properties


CSS Properties are DWC-defined variables in CSS, denoted by `--`, followed by a name.
They enable dynamic styling, reusability, and easy customization of components.
With CSS Properties, you can change the look and feel of a component simply by changing the value of a variable.
[[Read more]](theme-engine/css-variables).
<div style="overflow-x: auto;">

| Name                                           | Description                                                               |
| ---------------------------------------------- | ------------------------------------------------------------------------- |
| ``--bbj-tabs-list-advancer-color``             | The advancer color                                                        |
| ``--bbj-tabs-list-border``                     | The tabs border. (The one which separates the tabs from the panels)       |
| ``--bbj-tabs-list-border-color``               | The tabs border color. (The one which separates the tabs from the panels) |
| ``--bbj-tabs-list-bottom-advancer-background`` | Bottom advancer background                                                |
| ``--bbj-tabs-list-indicator-border``           | The border of the indicator.                                              |
| ``--bbj-tabs-list-indicator-border-color``     | The border color of the active tab indicator.                             |
| ``--bbj-tabs-list-indicator-height``           | The height of the active tab indicator. (border width)                    |
| ``--bbj-tabs-list-left-advancer-background``   | Left advancer background                                                  |
| ``--bbj-tabs-list-right-advancer-background``  | Right advancer background                                                 |
| ``--bbj-tabs-list-top-advancer-background``    | Top advancer background                                                   |


</div>

## Components Dependencies

- [bbj-icon-button](web-components/bbj-icon-button.md)

## Methods

### `removeTab(tab: HTMLBbjTabElement | string | number, removePanel?: boolean) => Promise<void>`

Deletes a specific tab by name, index or instance.

### Returns

Type: `Promise<void>`

### `select(tab: HTMLBbjTabElement | string | number) => Promise<void>`

Selects a specific tab by name , index or instance.

### Returns

Type: `Promise<void>`



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
