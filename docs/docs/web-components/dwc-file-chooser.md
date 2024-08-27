# dwc-file-chooser
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--file--chooser-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `BBjFileChooser<bbj-file-chooser>` provides methods for manipulating a UI file chooser to select files and directories
from the server.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<div style="overflow-x: auto;">

| Name                                 | Attribute                               | Description                                                                                                                                                                                                                                                                                                 | Reflects | Type                                                                                                                                                                                                                                                                                                                                                      | Default                      |
| ------------------------------------ | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| ``activeFilter``                     | ``active-filter``                       | The name or the id of the active filter.&nbsp;The option will be ignored when the ``selectionMode`` is set to ``directories``.                                                                                                                                                                              | &#x2718; | ``string``                                                                                                                                                                                                                                                                                                                                                | ``''``                       |
| ``allFilesFilterEnabled``            | ``all-files-filter-enabled``            | When true, the ``All Files`` filter will be enabled in the filters list.&nbsp;The option will be ignored when the ``selectionMode`` is set to ``directories``.                                                                                                                                              | &#x2718; | ``boolean``                                                                                                                                                                                                                                                                                                                                               | ``true``                     |
| ``allowSelectionsAcrossDirectories`` | ``allow-selections-across-directories`` | When disabled, the current selected files and directories will&nbsp;be cleared when navigating to a new directory.                                                                                                                                                                                          | &#x2718; | ``boolean``                                                                                                                                                                                                                                                                                                                                               | ``false``                    |
| ``approveAccesskey``                 | ``approve-accesskey``                   | The approve button access key.                                                                                                                                                                                                                                                                              | &#x2718; | ``string``                                                                                                                                                                                                                                                                                                                                                |                              |
| ``buttonsVisible``                   | ``buttons-visible``                     | When true, the cancel and approve button will rendered; otherwise it will be hidden.                                                                                                                                                                                                                        | &#x2718; | ``boolean``                                                                                                                                                                                                                                                                                                                                               | ``true``                     |
| ``cacheCustomFilters``               | ``cache-custom-filters``                | When true, newly entered filters will be saved in local storage.&nbsp;In order for this to work, the component must be given an ``id`` which is&nbsp;the case when the component is created by BBj.                                                                                                         | &#x2718; | ``boolean``                                                                                                                                                                                                                                                                                                                                               | ``true``                     |
| ``cancelAccesskey``                  | ``cancel-accesskey``                    | The cancel button access key                                                                                                                                                                                                                                                                                | &#x2718; | ``string``                                                                                                                                                                                                                                                                                                                                                |                              |
| ``columns``                          | ``columns``                             | A comma separated list of columns to be displayed in the table.&nbsp;Supported columns are: ``length`` and ``modified``.                                                                                                                                                                                    | &#x2718; | ``string``                                                                                                                                                                                                                                                                                                                                                | ``'length, modified'``       |
| ``customFilters``                    | ``custom-filters``                      | When true, the user will be able to add new filters by typing the filter in the filters list.                                                                                                                                                                                                               | &#x2718; | ``boolean``                                                                                                                                                                                                                                                                                                                                               | ``true``                     |
| ``dateFormatOptions``                | ``date-format-options``                 | The date format options to use for the ``modified`` column.                                                                                                                                                                                                                                                 | &#x2718; | ``DateTimeFormatOptions \| string``                                                                                                                                                                                                                                                                                                                       | ``defaultDateFormatOptions`` |
| ``dateLocale``                       | ``date-locale``                         | The date format locale to use for the ``modified`` column.                                                                                                                                                                                                                                                  | &#x2718; | ``string``                                                                                                                                                                                                                                                                                                                                                | ``'en-US'``                  |
| ``directory``                        | ``directory``                           | The current opened directory.                                                                                                                                                                                                                                                                               | &#x2718; | ``string``                                                                                                                                                                                                                                                                                                                                                |                              |
| ``disabled``                         | ``disabled``                            | When true, the component cannot be interacted with.                                                                                                                                                                                                                                                         | &#x2714; | ``boolean``                                                                                                                                                                                                                                                                                                                                               | ``false``                    |
| ``entries``                          |                                         |                                                                                                                                                                                                                                                                                                             | &#x2718; | ``DwcFileChooserEntry[]``                                                                                                                                                                                                                                                                                                                                 | ``[]``                       |
| ``filters``                          |                                         |                                                                                                                                                                                                                                                                                                             | &#x2718; | ``DwcUploadFilter[]``                                                                                                                                                                                                                                                                                                                                     |                              |
| ``gridColumns``                      | ``grid-columns``                        | Number of columns to render when the view type is ``grid``.                                                                                                                                                                                                                                                 | &#x2718; | ``number``                                                                                                                                                                                                                                                                                                                                                | ``3``                        |
| ``i18n``                             | ``i18n``                                | The files chooser translation object.                                                                                                                                                                                                                                                                       | &#x2718; | ``string \| { back?: string; forward?: string; up?: string; refresh?: string; gridView?: string; detailView?: string; columns?: string; name?: string; length?: string; modified?: string; folderEmpty?: string; filterAll?: string; approve?: string; cancel?: string; search?: string; fileName?: string; filters?: string; invalidFilter?: string; }`` | ``defaultI18n``              |
| ``loading``                          | ``loading``                             |                                                                                                                                                                                                                                                                                                             | &#x2714; | ``boolean``                                                                                                                                                                                                                                                                                                                                               | ``false``                    |
| ``multiSelection``                   | ``multi-selection``                     | When true, multiple files, directories or both depending on the ``selectionMode`` can be selected.                                                                                                                                                                                                          | &#x2718; | ``boolean``                                                                                                                                                                                                                                                                                                                                               | ``false``                    |
| ``restrictedDirectory``              | ``restricted-directory``                | When defined then the user cannot navigate outside the given directory path.&nbsp;The path must be under the ``directory`` path.                                                                                                                                                                            | &#x2718; | ``string``                                                                                                                                                                                                                                                                                                                                                |                              |
| ``roots``                            |                                         |                                                                                                                                                                                                                                                                                                             | &#x2718; | ``string[]``                                                                                                                                                                                                                                                                                                                                              | ``[]``                       |
| ``selected``                         |                                         |                                                                                                                                                                                                                                                                                                             | &#x2718; | ``DwcFileChooserResolvedEntry[]``                                                                                                                                                                                                                                                                                                                         | ``[]``                       |
| ``selectionMode``                    | ``selection-mode``                      | The selection mode. files, directories or both directories and files.                                                                                                                                                                                                                                       | &#x2718; | ``"both" \| "directories" \| "files"``                                                                                                                                                                                                                                                                                                                    | ``'files'``                  |
| ``sort``                             | ``sort``                                | A sorting criteria. For instance (+name , -length).&nbsp;&nbsp;Supported sorting criteria are: ``name``, ``length`` and ``modified``.&nbsp;The sorting criteria can be prefixed with a ``+`` or ``-`` to indicate ascending or descending order.&nbsp;If no prefix is given then column will not be sorted. | &#x2718; | ``string``                                                                                                                                                                                                                                                                                                                                                | ``''``                       |
| ``theme``                            | ``theme``                               | The theme name.                                                                                                                                                                                                                                                                                             | &#x2714; | ``"danger" \| "default" \| "gray" \| "info" \| "primary" \| "success" \| "warning"``                                                                                                                                                                                                                                                                      | ``'primary'``                |
| ``type``                             | ``type``                                |                                                                                                                                                                                                                                                                                                             | &#x2718; | ``"open" \| "save"``                                                                                                                                                                                                                                                                                                                                      | ``'open'``                   |
| ``typeToSelect``                     | ``type-to-select``                      | Enable or disable type to select feature.&nbsp;When enabled, then the user can type into the list to filter the entries.                                                                                                                                                                                    | &#x2718; | ``boolean``                                                                                                                                                                                                                                                                                                                                               | ``true``                     |
| ``typeToSelectCaseSensitive``        | ``type-to-select-case-sensitive``       | When true, the search performed by typeToSelect feature will be case sensitive.                                                                                                                                                                                                                             | &#x2718; | ``boolean``                                                                                                                                                                                                                                                                                                                                               | ``false``                    |
| ``typeToSelectTimeout``              | ``type-to-select-timeout``              | Typing into the list accumulates keystrokes entered within a specified number of milliseconds into a typeahead&nbsp;buffer. The default time window for this feature is 1000 milliseconds (1 second)                                                                                                        | &#x2718; | ``number``                                                                                                                                                                                                                                                                                                                                                | ``1000``                     |
| ``value``                            | ``value``                               | The value of the file chooser. It is set only when the chooser type is ``save``                                                                                                                                                                                                                             | &#x2718; | ``string``                                                                                                                                                                                                                                                                                                                                                | ``''``                       |
| ``view``                             | ``view``                                | The view type.                                                                                                                                                                                                                                                                                              | &#x2714; | ``"detail" \| "grid"``                                                                                                                                                                                                                                                                                                                                    | ``'detail'``                 |


</div>

## Events

<div style="overflow-x: auto;">

| Event                     | Description                                       | Type                                                   |
| ------------------------- | ------------------------------------------------- | ------------------------------------------------------ |
| ``dwc-approved``          | Emitted when the approve button has been clicked. | ``void``                                               |
| ``dwc-canceled``          | Emitted when the cancel button has been clicked.  | ``void``                                               |
| ``dwc-deselected``        | Emitted when an entry has been deselected         | ``DwcFileChooserEntry & { path: string; }``            |
| ``dwc-filter-changed``    | Emitted when the active filter has been changed.  | ``string``                                             |
| ``dwc-navigate``          | Emitted when the directory has been changed       | ``{ path: string; history?: DwcFileChooserHistory; }`` |
| ``dwc-selected``          | Emitted when an entry has been selected           | ``DwcFileChooserEntry & { path: string; }``            |
| ``dwc-selection-changed`` | Emitted when the selection has been changed       | ``DwcFileChooserResolvedEntry[]``                      |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part                                | Description                        |
| ----------------------------------- | ---------------------------------- |
| ``content``                         | The content wrapper                |
| ``content-busy``                    | The busy content wrapper           |
| ``content-nodata``                  | The no data content wrapper        |
| ``control``                         | The control wrapper                |
| ``control--detail``                 | The control wrapper in detail view |
| ``control--grid``                   | The control wrapper in grid view   |
| ``footer``                          | The footer wrapper                 |
| ``footer-buttons``                  | The footer buttons wrapper         |
| ``footer-buttons-button``           | A footer button                    |
| ``footer-buttons-button-approve``   | The approve button                 |
| ``footer-buttons-button-cancel``    | The cancel button                  |
| ``footer-filter-input``             | The filter input                   |
| ``footer-inputs``                   |                                    |
| ``footer-save-input``               |                                    |
| ``header``                          | The header wrapper                 |
| ``header-inputs``                   | The header inputs wrapper          |
| ``header-layouts``                  |                                    |
| ``header-pathlist``                 | The path list                      |
| ``header-pathlist-button``          | A path list button                 |
| ``header-pathlist-button-refresh``  | The refresh button                 |
| ``header-pathlist-icon``            | The path list icon                 |
| ``header-pathlist-icon-hard-drive`` | The hard drive icon                |
| ``header-prefix``                   | The header suffix wrapper          |
| ``header-prefix-button``            | A header suffix button             |
| ``header-prefix-button-back``       | The back button                    |
| ``header-prefix-button-forward``    | The forward button                 |
| ``header-prefix-button-up``         | The up button                      |
| ``header-suffix``                   | The header prefix wrapper          |
| ``header-suffix-button``            | A header prefix button             |
| ``header-suffix-button-detail``     | The detail button                  |
| ``header-suffix-button-grid``       | The grid button                    |
| ``table``                           | The table                          |
| ``table-cell``                      | A table cell                       |
| ``table-cell-header``               | A table cell header                |
| ``table-cell-label``                | A table cell label                 |
| ``table-cell-sort``                 | A table cell sort icons wrapper    |
| ``table-cell-wrapper``              | A table cell wrapper               |
| ``table-row``                       | A table row                        |
| ``table-row-even``                  | An even table row                  |
| ``table-row-header``                | A table row header                 |
| ``table-row-odd``                   | An odd table row                   |
| ``table-row-selected``              | A selected table row               |
| ``table-wrapper``                   | The table wrapper                  |


</div>

## Hosted Classes


Hosted Classes are CSS classes that are applied to the host element of a component. They are useful for styling the host element from outside the component's own CSS.
They can either reflect the component's state, such as "disabled" or "active," or provide options to alter the component's style based on user interaction or other conditions.
<div style="overflow-x: auto;">

| CSS Class          | Description                                 |
| ------------------ | ------------------------------------------- |
| ``BBjFileChooser`` | Always applied                              |
| ``bbj-server``     | Always applied                              |
| ``bbj-file-open``  | Applied when the component type is ``open`` |
| ``bbj-file-save``  | Applied when the component type is ``save`` |
| ``bbj-file-load``  | Applied when the component is loading       |
| ``bbj-disabled``   | Applied when the component is disabled      |


</div>

## CSS Properties


CSS Properties are DWC-defined variables in CSS, denoted by `--`, followed by a name.
They enable dynamic styling, reusability, and easy customization of components.
With CSS Properties, you can change the look and feel of a component simply by changing the value of a variable.
[[Read more]](theme-engine/css-variables).
<div style="overflow-x: auto;">

| Name                                             | Description                                            |
| ------------------------------------------------ | ------------------------------------------------------ |
| ``--dwc-file-chooser-border``                    | The border of the file chooser                         |
| ``--dwc-file-chooser-border-color``              | The border color of the file chooser                   |
| ``--dwc-file-chooser-hover-background``          | The background color of the file chooser when hovering |
| ``--dwc-file-chooser-hover-border-color``        | The border color of the file chooser when hovering     |
| ``--dwc-file-chooser-hover-color``               | The color of the file chooser when hovering            |
| ``--dwc-file-chooser-icon-color``                | The color of the file chooser icon                     |
| ``--dwc-file-chooser-icon-fill``                 | The fill color of the file chooser icon                |
| ``--dwc-file-chooser-padding``                   | The padding of the file chooser                        |
| ``--dwc-file-chooser-selected-background-color`` | The background color of the file chooser when selected |
| ``--dwc-file-chooser-selected-color``            | The color of the file chooser when selected            |


</div>

## Components Dependencies

- [dwc-popupmenu](web-components/dwc-popupmenu.md)
- [dwc-menu](web-components/dwc-menu.md)
- [dwc-menuitem](web-components/dwc-menuitem.md)
- [dwc-icon](web-components/dwc-icon.md)
- [dwc-icon-button](web-components/dwc-icon-button.md)
- [dwc-combobox](web-components/dwc-combobox.md)
- [dwc-loading](web-components/dwc-loading.md)
- [dwc-field](web-components/dwc-field.md)
- [dwc-button](web-components/dwc-button.md)

## Methods

### `approve() => Promise<void>`

Click the approve button

### Returns

Type: `Promise<void>`

### `back() => Promise<void>`

Navigate to the previous directory

### Returns

Type: `Promise<void>`

### `canBack() => Promise<boolean>`

Check if navigating back is permitted

### Returns

Type: `Promise<boolean>`

### `canForward() => Promise<boolean>`

Check if navigating forward is permitted

### Returns

Type: `Promise<boolean>`

### `canUp() => Promise<boolean>`

Check if navigating up is permitted

### Returns

Type: `Promise<boolean>`

### `cancel() => Promise<void>`

Click the cancel button

### Returns

Type: `Promise<void>`

### `forward() => Promise<void>`

Navigate to the next directory

### Returns

Type: `Promise<void>`

### `refresh() => Promise<void>`

Reload the current directory by firing the `navigate` event again

### Returns

Type: `Promise<void>`

### `up() => Promise<void>`

Navigate one level up

### Returns

Type: `Promise<void>`



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
