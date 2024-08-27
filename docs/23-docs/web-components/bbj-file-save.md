# bbj-file-save
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-bbj--file--save-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `<bbj-file-save>` provides methods for manipulating a UI file chooser to save file.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<div style="overflow-x: auto;">

| Name                         | Attribute                       | Description                                                                | Reflects | Type                                                                                                                                                                                           | Default         |
| ---------------------------- | ------------------------------- | -------------------------------------------------------------------------- | :------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| ``activeFilter``             | ``active-filter``               | The id of one of the provided filters.                                     | &#x2718; | ``string``                                                                                                                                                                                     | ``''``          |
| ``approveAccesskey``         | ``approve-accesskey``           | The approve button's access key.                                           | &#x2718; | ``string``                                                                                                                                                                                     |                 |
| ``approveLabel``             | ``approve-label``               | The approve button's label.                                                | &#x2718; | ``string``                                                                                                                                                                                     |                 |
| ``approveVisible``           | ``approve-visible``             | When true, the approve button will be visible; otherwise hidden            | &#x2718; | ``boolean``                                                                                                                                                                                    | ``true``        |
| ``cancelAccesskey``          | ``cancel-accesskey``            | The cancel button access key.                                              | &#x2718; | ``string``                                                                                                                                                                                     |                 |
| ``cancelLabel``              | ``cancel-label``                | The cancel button's label.                                                 | &#x2718; | ``string``                                                                                                                                                                                     |                 |
| ``cancelVisible``            | ``cancel-visible``              | When true, the cancel button will be visible; otherwise it will be hidden. | &#x2718; | ``boolean``                                                                                                                                                                                    | ``true``        |
| ``disabled``                 | ``disabled``                    | True to disable the component, false to enable it.                         | &#x2714; | ``boolean``                                                                                                                                                                                    | ``false``       |
| ``filters``                  |                                 | Array of filters to show.                                                  | &#x2718; | ``BbjUploadFilter[]``                                                                                                                                                                          |                 |
| ``i18n``                     | ``i18n``                        | The component's translation object                                         | &#x2718; | ``string \| { approve?: string; cancel?: string; noExtension?: string; filename?: string; saveAs?: string; invalidFilename?: string; filenameRequired?: string; invalidExtension?: string; }`` | ``defaultI18n`` |
| ``noExtensionFilterEnabled`` | ``no-extension-filter-enabled`` | When true, ``No Extension`` filter will be added.                          | &#x2718; | ``boolean``                                                                                                                                                                                    | ``true``        |
| ``valid``                    | ``valid``                       | True when the filename is valid, false otherwise.                          | &#x2714; | ``boolean``                                                                                                                                                                                    | ``true``        |
| ``value``                    | ``value``                       | The component's value                                                      | &#x2718; | ``string``                                                                                                                                                                                     |                 |


</div>

## Events

<div style="overflow-x: auto;">

| Event                  | Description                               | Type       |
| ---------------------- | ----------------------------------------- | ---------- |
| ``bbj-approved``       | Fired when the approve button is clicked. | ``void``   |
| ``bbj-canceled``       | Fired when the cancel button is clicked.  | ``void``   |
| ``bbj-filter-changed`` | Fired when the active filter is changed.  | ``string`` |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part               | Description                 |
| ------------------ | --------------------------- |
| ``approve-button`` | The approve button          |
| ``button``         | A control button            |
| ``buttons``        | The control buttons wrapper |
| ``cancel-button``  | The cancel button           |
| ``control``        | The control wrapper         |
| ``filename``       | The filename input          |
| ``filters``        | The filters list            |
| ``inputs``         | The control inputs wrapper  |


</div>

## Hosted Classes


Hosted Classes are CSS classes that are applied to the host element of a component. They are useful for styling the host element from outside the component's own CSS.
They can either reflect the component's state, such as "disabled" or "active," or provide options to alter the component's style based on user interaction or other conditions.
<div style="overflow-x: auto;">

| CSS Class          | Description                            |
| ------------------ | -------------------------------------- |
| ``BBjFileChooser`` | Always applied                         |
| ``bbj-file-save``  | Always applied                         |
| ``bbj-disabled``   | Applied when the component is disabled |


</div>

## Components Dependencies

- [bbj-editbox](web-components/bbj-editbox.md)
- [bbj-list-edit](web-components/bbj-list-edit.md)
- [bbj-button](web-components/bbj-button.md)

## Methods

### `approve() => Promise<void>`

Clicks the approve button.

### Returns

Type: `Promise<void>`

### `cancel() => Promise<void>`

Clicks the cancel button.

### Returns

Type: `Promise<void>`

### `removeFocus() => Promise<void>`

Removes focus from the component.

### Returns

Type: `Promise<void>`

### `setFocus() => Promise<void>`

Sets focus on the component.

### Returns

Type: `Promise<void>`



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
