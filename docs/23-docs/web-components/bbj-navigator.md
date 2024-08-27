# bbj-navigator
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-bbj--navigator-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `BBjNavigator/<bbj-navigator>` provides methods for manipulating a UI navigator control.

## Text Expressions

All text properties `textFirst` , `textFirst` , `textLast` , `textNumbered` , ... are evaluated as Javascript expressions.
The text expression is evaluated with the following parameters:

- `component`: The current component instance.
- `control`: Alias for `component`.
- `current`: The current page number.
- `x`: Alias for `current`.
-  `startIndex`: The start index of the current page.
- `endIndex`: The end index of the current page.
- `startPage`: The index of the first page
- `endPage`: The index of the last page
- `totalPages`: The total number of pages.
- `totalItems`:The total number of items.

For instance

```javascript
component.textPreview = `Showing ${startIndex}-${endIndex} of ${totalItems}`
```


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<div style="overflow-x: auto;">

| Name                 | Attribute             | Description                                                                                                                                                                                                                                                                                                                   | Reflects | Type                                                  | Default                  |
| -------------------- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: | ----------------------------------------------------- | ------------------------ |
| ``autoDisable``      | ``auto-disable``      | When true, the ``first`` , ``previous`` , ``next`` and ``last`` buttons will be auto disabled based on the total items and the current page.                                                                                                                                                                                  | &#x2718; | ``boolean``                                           | ``true``                 |
| ``current``          | ``current``           | The current active page.                                                                                                                                                                                                                                                                                                      | &#x2714; | ``number``                                            | ``1``                    |
| ``disabled``         | ``disabled``          | When true, the component will be disabled; otherwise it is disabled.                                                                                                                                                                                                                                                          | &#x2714; | ``boolean``                                           | ``false``                |
| ``endIndex``         | ``end-index``         | <img style="vertical-align: middle; margin-right: 5px;" src="https://img.shields.io/badge/readonly-%23006aff" />The last index of the current page.                                                                                                                                                                           | &#x2718; | ``number``                                            |                          |
| ``endPage``          | ``end-page``          | <img style="vertical-align: middle; margin-right: 5px;" src="https://img.shields.io/badge/readonly-%23006aff" />The index of the last page                                                                                                                                                                                    | &#x2718; | ``number``                                            |                          |
| ``expanse``          | ``expanse``           | The component's expanse                                                                                                                                                                                                                                                                                                       | &#x2714; | ``"l" \| "m" \| "s" \| "xl" \| "xs"``                 | ``'m'``                  |
| ``label``            | ``label``             | The label of the component                                                                                                                                                                                                                                                                                                    | &#x2718; | ``string``                                            | ``'navigation'``         |
| ``labelFirst``       | ``label-first``       | The label of the ``first`` button                                                                                                                                                                                                                                                                                             | &#x2718; | ``string``                                            | ``'Goto first page'``    |
| ``labelLast``        | ``label-last``        | The label of the ``last`` button                                                                                                                                                                                                                                                                                              | &#x2718; | ``string``                                            | ``'Goto last page'``     |
| ``labelNext``        | ``label-next``        | The label of the ``next`` button                                                                                                                                                                                                                                                                                              | &#x2718; | ``string``                                            | ``'Goto next page'``     |
| ``labelPage``        | ``label-page``        | The label of the numbered button. The page number will be appended to this string                                                                                                                                                                                                                                             | &#x2718; | ``string``                                            | ``'Goto page'``          |
| ``labelPrevious``    | ``label-previous``    | The label of the ``previous`` button                                                                                                                                                                                                                                                                                          | &#x2718; | ``string``                                            | ``'Goto previous page'`` |
| ``layout``           | ``layout``            | The layout of the middle area of the Navigator. <br><br>&nbsp;&nbsp;1. preview: Only the current page and the number of pages will be rendered.<br>&nbsp;2. numbered: The numbered buttons will be rendered.<br>&nbsp;3. quick-jump: The quick jump input will be rendered.<br>&nbsp;4. none: no layout will be rendered.<br> | &#x2718; | ``"none" \| "numbered" \| "preview" \| "quick-jump"`` | ``'numbered'``           |
| ``max``              | ``max``               | the maximum number of page navigation buttons to display                                                                                                                                                                                                                                                                      | &#x2718; | ``number``                                            | ``5``                    |
| ``readonly``         | ``readonly``          | Alias for ``disabled`` When true, the component will be disabled , enabled otherwise                                                                                                                                                                                                                                          | &#x2714; | ``boolean``                                           | ``false``                |
| ``size``             | ``size``              | The total number of items per page.                                                                                                                                                                                                                                                                                           | &#x2718; | ``number``                                            | ``10``                   |
| ``startIndex``       | ``start-index``       | <img style="vertical-align: middle; margin-right: 5px;" src="https://img.shields.io/badge/readonly-%23006aff" />The start index of the current page.                                                                                                                                                                          | &#x2718; | ``number``                                            |                          |
| ``startPage``        | ``start-page``        | <img style="vertical-align: middle; margin-right: 5px;" src="https://img.shields.io/badge/readonly-%23006aff" />The index of the first page                                                                                                                                                                                   | &#x2718; | ``number``                                            |                          |
| ``suppressFirst``    | ``suppress-first``    | When true, the first button will be hidden, visible otherwise.                                                                                                                                                                                                                                                                | &#x2718; | ``boolean``                                           | ``false``                |
| ``suppressLast``     | ``suppress-last``     | When true, the last button will be hidden, visible otherwise.                                                                                                                                                                                                                                                                 | &#x2718; | ``boolean``                                           | ``false``                |
| ``suppressNext``     | ``suppress-next``     | When true, the next button will be hidden, visible otherwise.                                                                                                                                                                                                                                                                 | &#x2718; | ``boolean``                                           | ``false``                |
| ``suppressPrevious`` | ``suppress-previous`` | When true, the previous button will be hidden, visible otherwise.                                                                                                                                                                                                                                                             | &#x2718; | ``boolean``                                           | ``false``                |
| ``textFirst``        | ``text-first``        | The text of the first button as string or expression.                                                                                                                                                                                                                                                                         | &#x2718; | ``string``                                            |                          |
| ``textLast``         | ``text-last``         | The text of the last button as string or expression.                                                                                                                                                                                                                                                                          | &#x2718; | ``string``                                            |                          |
| ``textNext``         | ``text-next``         | The text of the next button as string or expression.                                                                                                                                                                                                                                                                          | &#x2718; | ``string``                                            |                          |
| ``textNumbered``     | ``text-numbered``     | The text of the numbered buttons as string or expression.                                                                                                                                                                                                                                                                     | &#x2718; | ``string``                                            |                          |
| ``textPreview``      | ``text-preview``      | The text of the preview area                                                                                                                                                                                                                                                                                                  | &#x2718; | ``string``                                            |                          |
| ``textPrevious``     | ``text-previous``     | The text of the previous button as string or expression.                                                                                                                                                                                                                                                                      | &#x2718; | ``string``                                            |                          |
| ``textSeparator``    | ``text-separator``    | The text of the separator as string or expression.                                                                                                                                                                                                                                                                            | &#x2718; | ``string``                                            |                          |
| ``totalItems``       | ``total-items``       | The total number of items                                                                                                                                                                                                                                                                                                     | &#x2718; | ``number``                                            | ``0``                    |
| ``totalPages``       | ``total-pages``       | <img style="vertical-align: middle; margin-right: 5px;" src="https://img.shields.io/badge/readonly-%23006aff" />The number of total pages to display                                                                                                                                                                          | &#x2718; | ``number``                                            |                          |


</div>

## Events

<div style="overflow-x: auto;">

| Event            | Description                              | Type                         |
| ---------------- | ---------------------------------------- | ---------------------------- |
| ``bbj-changed``  | Emitted when the page is changed         | ``BbjNavigatorEventPayload`` |
| ``bbj-first``    | Emitted when moved to the first page     | ``BbjNavigatorEventPayload`` |
| ``bbj-last``     | Emitted when moved to the last page      | ``BbjNavigatorEventPayload`` |
| ``bbj-next``     | Emitted when moved to the next page.     | ``BbjNavigatorEventPayload`` |
| ``bbj-previous`` | Emitted when moved to the previous page. | ``BbjNavigatorEventPayload`` |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part                         | Description                                                                  |
| ---------------------------- | ---------------------------------------------------------------------------- |
| ``area``                     | The left, middle and right areas of the control.                             |
| ``area-left``                | The left area of the control where the first and previous buttons are placed |
| ``area-middle``              | The middle area where the layouts are placed                                 |
| ``area-right``               | The right area of the control where the next and last buttons are placed     |
| ``button``                   | Any of the buttons                                                           |
| ``button-first``             | The first button                                                             |
| ``button-last``              | The last button                                                              |
| ``button-next``              | The next button                                                              |
| ``button-previous``          | The previous button                                                          |
| ``button-separator``         | The separator button                                                         |
| ``button-separator-left``    | The left separator button                                                    |
| ``button-separator-right``   | The right separator button                                                   |
| ``control``                  | The component's base wrapper.                                                |
| ``input``                    | The quick jump input                                                         |
| ``layout``                   | Any of the layouts                                                           |
| ``layout-numbered``          | The wrapper of the numbered buttons                                          |
| ``layout-preview``           | The preview container where the ``text-preview`` text is placed              |
| ``layout-quick-jump``        | The quick jump container where the input is placed                           |
| ``numbered-button``          | One of the numbered buttons                                                  |
| ``numbered-button-selected`` | The current selected button                                                  |


</div>

## Hosted Classes


Hosted Classes are CSS classes that are applied to the host element of a component. They are useful for styling the host element from outside the component's own CSS.
They can either reflect the component's state, such as "disabled" or "active," or provide options to alter the component's style based on user interaction or other conditions.
<div style="overflow-x: auto;">

| CSS Class        | Description                            |
| ---------------- | -------------------------------------- |
| ``BBjControl``   | Always applied                         |
| ``BBjNavigator`` | Always applied                         |
| ``bbj-disabled`` | Applied when the component is disabled |
| ``bbj-readonly`` | Applied when the component is readonly |


</div>

## CSS Properties


CSS Properties are DWC-defined variables in CSS, denoted by `--`, followed by a name.
They enable dynamic styling, reusability, and easy customization of components.
With CSS Properties, you can change the look and feel of a component simply by changing the value of a variable.
[[Read more]](theme-engine/css-variables).
<div style="overflow-x: auto;">

| Name                                                    | Description                                                                           |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| ``--bbj-navigator-border-color``                        | The border color of different parts.                                                  |
| ``--bbj-navigator-button-active-background``            | The active background of the ``first``, ``previous`` , ``next`` and ``last`` buttons. |
| ``--bbj-navigator-button-active-color``                 | The active color of the ``first``, ``previous`` , ``next`` and ``last`` buttons.      |
| ``--bbj-navigator-button-background``                   | The background of the ``first``, ``previous`` , ``next`` and ``last`` buttons.        |
| ``--bbj-navigator-button-color``                        | The color of the ``first``, ``previous`` , ``next`` and ``last`` buttons.             |
| ``--bbj-navigator-button-focus-border``                 | The focus border of all buttons.                                                      |
| ``--bbj-navigator-button-focus-ring``                   | The focus ring of the ``first``, ``previous`` , ``next`` and ``last`` buttons.        |
| ``--bbj-navigator-button-hover-background``             | The hover background of the ``first``, ``previous`` , ``next`` and ``last`` buttons.  |
| ``--bbj-navigator-button-hover-color``                  | The hover color of the ``first``, ``previous`` , ``next`` and ``last`` buttons.       |
| ``--bbj-navigator-button-width``                        | The width of the ``first``, ``previous`` , ``next`` and ``last`` buttons.             |
| ``--bbj-navigator-numbered-button-background``          | The background of the numbered buttons.                                               |
| ``--bbj-navigator-numbered-button-color``               | The color of the numbered buttons.                                                    |
| ``--bbj-navigator-numbered-button-focus-ring``          | The focus ring of the numbered buttons                                                |
| ``--bbj-navigator-numbered-button-hover-background``    | The hover background of the numbered buttons.                                         |
| ``--bbj-navigator-numbered-button-hover-color``         | The hover color of the numbered buttons.                                              |
| ``--bbj-navigator-numbered-button-selected-background`` | The selected background of the numbered buttons.                                      |
| ``--bbj-navigator-numbered-button-selected-color``      | The selected color of the numbered buttons.                                           |


</div>

## Components Dependencies

- [bbj-editbox](web-components/bbj-editbox.md)


----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
