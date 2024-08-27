# BBjFileChooser (FileSave)
![Documentation Type](https://img.shields.io/badge/Documentation-dwc-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-bbj--file--save-%23006aff) <a href="https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjfilechooser/bbjfilechooser.htm" title="The BBj Control Name">
      <img src="https://img.shields.io/badge/Control-BBjFileChooser (FileSave) &#8599;-%23006aff" alt="BBj v20.11" />
    </a> ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `BBjFileChooser<bbj-file-save>` provides methods for manipulating a UI file chooser to save file.

?> **Note:** The `bbj-file-save` component is also used by the [FILESAVE](https://documentation.basis.cloud/BASISHelp/WebHelp/commands/filesave_function_create_a_file_save_dialog.htm) function.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost event property has a corresponding attribute. Attributes are useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.

!> **Tip:** From BBj you can set and get the attributes using the [BBjControl::setAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setAttribute.htm)
and [BBjControl::getAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getAttribute.htm) methods respectively.
And to set properties you can use the [BBjControl::putClientProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_putClientProperty.htm) and [BBjControl::getClientProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getClientProperty.htm) methods respectively.
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


## Messages

Messages are the BBj instructions that are sent to the browser form the server to create and configure the BBj control.<!-- tabs:start -->

#### **Async component message**

| Message                                                      | Description                               | Returns  |
| ------------------------------------------------------------ | ----------------------------------------- | -------- |
| [AddFileFilterMessage](dwc/messages/AddFileFilterMessage.md) | Implements BBjFileChooser::addFileFilter. | ``Void`` |


<!-- tabs:end -->



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2023.*
