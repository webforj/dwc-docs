# bbj-upload
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-bbj--upload-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `BBjFileChooser<bbj-upload>` provides methods for manipulating a UI file uploader control.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<div style="overflow-x: auto;">

| Name                       | Attribute                    | Description                                                                                                                                                                                                                                                            | Reflects | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Default                  |
| -------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ |
| ``activeFilter``           | ``active-filter``            | The id of one of the provided filters or a comma separated list of ids.&nbsp;If ``fs`` attribute is true and the browser support the File System Access API , then setting multiple active&nbsp;filters is not possible and only the first active filter will be used. | &#x2718; | ``string``                                                                                                                                                                                                                                                                                                                                                                                                                                             | ``''``                   |
| ``allFilesFilterEnabled``  | ``all-files-filter-enabled`` | When true, the ``All Files`` filter will be enabled in the filters list.                                                                                                                                                                                               | &#x2718; | ``boolean``                                                                                                                                                                                                                                                                                                                                                                                                                                            | ``true``                 |
| ``approveButtonAccesskey`` | ``approve-button-accesskey`` | The approve button's access key                                                                                                                                                                                                                                        | &#x2718; | ``string``                                                                                                                                                                                                                                                                                                                                                                                                                                             |                          |
| ``approveButtonLabel``     | ``approve-button-label``     | The approve button's label                                                                                                                                                                                                                                             | &#x2718; | ``string``                                                                                                                                                                                                                                                                                                                                                                                                                                             |                          |
| ``approveButtonVisible``   | ``approve-button-visible``   | When true, the approve button will be visible, hidden otherwise                                                                                                                                                                                                        | &#x2718; | ``boolean``                                                                                                                                                                                                                                                                                                                                                                                                                                            | ``true``                 |
| ``autoClear``              | ``auto-clear``               | When true and the user selects new files, current files in the list will be cleared according to the ``autoClearBehaviour`` attribute.                                                                                                                                 | &#x2718; | ``boolean``                                                                                                                                                                                                                                                                                                                                                                                                                                            | ``false``                |
| ``autoClearBehavior``      | ``auto-clear-behavior``      | Define the ``autoClear`` behaviour                                                                                                                                                                                                                                     | &#x2718; | ``"both" \| "completed" \| "in-progress"``                                                                                                                                                                                                                                                                                                                                                                                                             | ``'completed'``          |
| ``autoUpload``             | ``auto-upload``              | When true new selected files will be uploaded automatically.&nbsp;This setting does not apply to dropped files                                                                                                                                                         | &#x2718; | ``boolean``                                                                                                                                                                                                                                                                                                                                                                                                                                            | ``false``                |
| ``autoUploadOnDrop``       | ``auto-upload-on-drop``      | When true, new dropped files will be uploaded automatically.                                                                                                                                                                                                           | &#x2718; | ``boolean``                                                                                                                                                                                                                                                                                                                                                                                                                                            | ``false``                |
| ``cancelButtonAccesskey``  | ``cancel-button-accesskey``  | The cancel button access key                                                                                                                                                                                                                                           | &#x2718; | ``string``                                                                                                                                                                                                                                                                                                                                                                                                                                             |                          |
| ``cancelButtonLabel``      | ``cancel-button-label``      | The cancel button's label                                                                                                                                                                                                                                              | &#x2718; | ``string``                                                                                                                                                                                                                                                                                                                                                                                                                                             |                          |
| ``cancelButtonVisible``    | ``cancel-button-visible``    | When true, the cancel button will be visible, hidden otherwise                                                                                                                                                                                                         | &#x2718; | ``boolean``                                                                                                                                                                                                                                                                                                                                                                                                                                            | ``true``                 |
| ``capture``                | ``capture``                  | Allow the user to trigger device inputs like camera. <br><br>&nbsp;&nbsp; 1. **user:** The user-facing camera and/or microphone should be used.<br>&nbsp; 2. **environment:** The outward-facing camera and/or microphone should be used                               | &#x2718; | ``"" \| "environment" \| "user"``                                                                                                                                                                                                                                                                                                                                                                                                                      |                          |
| ``credentials``            | ``credentials``              |                                                                                                                                                                                                                                                                        | &#x2718; | ``boolean``                                                                                                                                                                                                                                                                                                                                                                                                                                            | ``false``                |
| ``directory``              | ``directory``                | When true, the user will be able to select directories instead of files                                                                                                                                                                                                | &#x2718; | ``boolean``                                                                                                                                                                                                                                                                                                                                                                                                                                            | ``false``                |
| ``directoryRecursive``     | ``directory-recursive``      | When true and the ``directory`` attribute is true, the user will be able to select directories and their suborders to upload                                                                                                                                           | &#x2718; | ``boolean``                                                                                                                                                                                                                                                                                                                                                                                                                                            |                          |
| ``disabled``               | ``disabled``                 | True to disable the component , false to enable it                                                                                                                                                                                                                     | &#x2714; | ``boolean``                                                                                                                                                                                                                                                                                                                                                                                                                                            | ``false``                |
| ``drop``                   | ``drop``                     | When true, the user will be able to drop files on the element for uploading.                                                                                                                                                                                           | &#x2718; | ``boolean``                                                                                                                                                                                                                                                                                                                                                                                                                                            | ``true``                 |
| ``dropLabel``              | ``drop-label``               | The drop label                                                                                                                                                                                                                                                         | &#x2718; | ``string``                                                                                                                                                                                                                                                                                                                                                                                                                                             |                          |
| ``files``                  |                              |                                                                                                                                                                                                                                                                        | &#x2718; | ``File[]``                                                                                                                                                                                                                                                                                                                                                                                                                                             | ``[]``                   |
| ``filters``                |                              | Array of filters to show as button dropdown or in the files picker dialog.&nbsp;&nbsp;If ``fs`` attribute is true and the browser support the File System Access API, filters&nbsp;will appear in the System Files Picker dialog.                                      | &#x2718; | ``BbjUploadFilter[]``                                                                                                                                                                                                                                                                                                                                                                                                                                  |                          |
| ``filtersVisible``         | ``filters-visible``          | When true the filters dropdown will be visible, hidden otherwise.&nbsp;&nbsp;If ``fs`` attribute is true and the browser support the File System Access API , this attribute&nbsp;will be ignored.                                                                     | &#x2718; | ``boolean``                                                                                                                                                                                                                                                                                                                                                                                                                                            | ``true``                 |
| ``formDataName``           | ``form-data-name``           |                                                                                                                                                                                                                                                                        | &#x2718; | ``string``                                                                                                                                                                                                                                                                                                                                                                                                                                             | ``'file'``               |
| ``fs``                     | ``fs``                       | When true, the component will try first to use File System Access API when available.&nbsp;If the browser does not support the File System Access API, the component will fallback to its generic implementation which will work for all supported browsers.           | &#x2718; | ``boolean``                                                                                                                                                                                                                                                                                                                                                                                                                                            | ``isFsSupported``        |
| ``headers``                | ``headers``                  |                                                                                                                                                                                                                                                                        | &#x2718; | ``string \| { [x: string]: unknown; }``                                                                                                                                                                                                                                                                                                                                                                                                                |                          |
| ``i18n``                   | ``i18n``                     | The component's translation object                                                                                                                                                                                                                                     | &#x2718; | ``string \| { approve?: string; cancel?: string; dropFile?: string; dropFiles?: string; addFile?: string; addFiles?: string; uploadFile?: string; clearFile?: string; retryFile?: string; filterAll?: string; statusMaxed?: string; statusTooBig?: string; statusNotAllowedType?: string; statusConnecting?: string; statusQueued?: string; statusCanceled?: string; errorUnavailable?: string; errorUnexpected?: string; errorForbidden?: string; }`` | ``BbjUploadDefaultI18n`` |
| ``label``                  | ``label``                    | The upload button label                                                                                                                                                                                                                                                | &#x2718; | ``string``                                                                                                                                                                                                                                                                                                                                                                                                                                             |                          |
| ``maxFiles``               | ``max-files``                | The max number of files to upload                                                                                                                                                                                                                                      | &#x2718; | ``number``                                                                                                                                                                                                                                                                                                                                                                                                                                             | ``Infinity``             |
| ``maxSize``                | ``max-size``                 | The maximum file size in bytes allowed to upload. This setting works per file.                                                                                                                                                                                         | &#x2718; | ``number``                                                                                                                                                                                                                                                                                                                                                                                                                                             | ``Infinity``             |
| ``method``                 | ``method``                   |                                                                                                                                                                                                                                                                        | &#x2718; | ``"POST" \| "PUT"``                                                                                                                                                                                                                                                                                                                                                                                                                                    | ``'POST'``               |
| ``multiFilterSelection``   | ``multi-filter-selection``   | When true, multi filter selection will be enabled. Otherwise only one filter can be selected.&nbsp;&nbsp;If ``fs`` attribute is true and the browser support the File System Access API then this attribute will be ignored.                                           | &#x2718; | ``boolean``                                                                                                                                                                                                                                                                                                                                                                                                                                            | ``false``                |
| ``theme``                  | ``theme``                    | The theme name                                                                                                                                                                                                                                                         | &#x2714; | ``"danger" \| "default" \| "gray" \| "info" \| "outlined-danger" \| "outlined-default" \| "outlined-gray" \| "outlined-info" \| "outlined-primary" \| "outlined-success" \| "outlined-warning" \| "primary" \| "success" \| "warning"``                                                                                                                                                                                                                | ``'default'``            |
| ``timeout``                | ``timeout``                  |                                                                                                                                                                                                                                                                        | &#x2718; | ``number``                                                                                                                                                                                                                                                                                                                                                                                                                                             | ``0``                    |
| ``url``                    | ``url``                      |                                                                                                                                                                                                                                                                        | &#x2718; | ``string``                                                                                                                                                                                                                                                                                                                                                                                                                                             | ``''``                   |


</div>

## Events

<div style="overflow-x: auto;">

| Event                  | Description                                                                                                                                 | Type                                                                              |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| ``bbj-aborted``        | Fired when the file is aborted                                                                                                              | ``{ request: XMLHttpRequest; file: File; }``                                      |
| ``bbj-approved``       | Fired when the approve button is clicked , approve ``method`` is invoked or when ``autoUpload`` is enabled and the file upload is complete. | ``File[]``                                                                        |
| ``bbj-canceled``       | Fired when the cancel button is clicked or when the ``cancel`` method is invoked.                                                           | ``File[]``                                                                        |
| ``bbj-failed``         | Emitted when a file is upload is failed                                                                                                     | ``BbjUploadPayload & { error: string; }``                                         |
| ``bbj-filter-changed`` | Fired when the active filter is changed                                                                                                     | ``string``                                                                        |
| ``bbj-list-changed``   | Emitted when the selected files are changed                                                                                                 | ``File[]``                                                                        |
| ``bbj-progress``       | Emitted when a file is being uploaded                                                                                                       | ``BbjUploadPayload & { request: XMLHttpRequest; file: File; progress: number; }`` |
| ``bbj-rejected``       | Emitted when a file cannot be added                                                                                                         | ``string``                                                                        |
| ``bbj-request``        | Fired when the upload request is being sent                                                                                                 | ``BbjUploadPayload & { form: FormData; }``                                        |
| ``bbj-responded``      | Fired when the actual server response is ready.                                                                                             | ``{ request: XMLHttpRequest; file: File; }``                                      |
| ``bbj-started``        | Fired when the upload is stated                                                                                                             | ``{ request: XMLHttpRequest; file: File; }``                                      |
| ``bbj-uploaded``       | Emitted when a file is upload is complete                                                                                                   | ``{ request: XMLHttpRequest; file: File; }``                                      |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part               | Description                                        |
| ------------------ | -------------------------------------------------- |
| ``add-files``      | The wrapper around the label and the upload button |
| ``button-approve`` | The approve button                                 |
| ``button-cancel``  | The cancel button                                  |
| ``button-upload``  | The upload button                                  |
| ``buttons``        | The buttons wrapper                                |
| ``control``        | The component's base wrapper.                      |
| ``file``           | The file                                           |
| ``file-body``      | The file's body                                    |
| ``file-name``      | The name of the file                               |
| ``file-prefix``    | The file's prefix                                  |
| ``file-status``    | The status of the file                             |
| ``file-suffix``    | The file's suffix                                  |
| ``icon-clear``     | The clear icon                                     |
| ``icon-failed``    | The failed icon                                    |
| ``icon-file``      | The file icon                                      |
| ``icon-retry``     | The retry icon                                     |
| ``icon-start``     | The start icon (start upload)                      |
| ``icon-succeeded`` | The succeed icon                                   |
| ``icon-upload``    | The upload icon                                    |
| ``label``          | The label                                          |
| ``label-wrapper``  | The wrapper around the upload icon and the label   |
| ``list``           | The list of files                                  |
| ``list-wrapper``   | The wrapper around the files list                  |


</div>

## Hosted Classes


Hosted Classes are CSS classes that are applied to the host element of a component. They are useful for styling the host element from outside the component's own CSS.
They can either reflect the component's state, such as "disabled" or "active," or provide options to alter the component's style based on user interaction or other conditions.
<div style="overflow-x: auto;">

| CSS Class          | Description                            |
| ------------------ | -------------------------------------- |
| ``BBjFileChooser`` | Always applied                         |
| ``bbj-client``     | Always applied                         |
| ``bbj-disabled``   | Applied when the component is disabled |


</div>

## Components Dependencies

- [bbj-popupmenu](web-components/bbj-popupmenu.md)
- [bbj-menu](web-components/bbj-menu.md)
- [bbj-menuitem](web-components/bbj-menuitem.md)
- [bbj-button](web-components/bbj-button.md)
- [bbj-icon](web-components/bbj-icon.md)
- [bbj-icon-button](web-components/bbj-icon-button.md)

## Methods

### `abortFile(file: File) => Promise<void>`

Aborts uploading the given file.

### Returns

Type: `Promise<void>`

### `abortFiles(files?: Array<File>) => Promise<void>`

Abort uploading the given list of files.

### Returns

Type: `Promise<void>`

### `addFile(file: File) => Promise<BbjUploadPayload | BbjUploadFailedPayload>`

Queues a file for upload.

If auto upload is enabled , then the file upload process will start automatically

### Returns

Type: `Promise<BbjUploadPayload | BbjUploadFailedPayload>`

### `addFiles(files: Array<File>) => Promise<(BbjUploadPayload | BbjUploadFailedPayload)[]>`

Queues a list of files for upload.

If auto upload is enabled , then the file upload process will start automatically

### Returns

Type: `Promise<(BbjUploadPayload | BbjUploadFailedPayload)[]>`

### `approve() => Promise<void>`

Clicks the approve button

### Returns

Type: `Promise<void>`

### `cancel() => Promise<void>`

Clicks the cancel button

### Returns

Type: `Promise<void>`

### `clearFile(file: File) => Promise<void>`

Removes file from the upload queue.

If a file is being uploaded, then the upload will be aborted.

### Returns

Type: `Promise<void>`

### `clearFiles(files?: Array<File>) => Promise<void>`

Removes the list of the given files from the upload queue.

If a file is being uploaded, then the upload will be aborted.

### Returns

Type: `Promise<void>`

### `uploadFile(file: File) => Promise<BbjUploadPayload | BbjUploadFailedPayload>`

Uploads the given file.

If the file is already uploaded or it is being uploaded , then calling
this method will have not affect

### Returns

Type: `Promise<BbjUploadPayload | BbjUploadFailedPayload>`

### `uploadFiles(files?: Array<File>) => Promise<void>`

Uploads the given list of files.

If the files parameter is omitted , then the method will try to upload all files
which already in the queue.

### Returns

Type: `Promise<void>`



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
