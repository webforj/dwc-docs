# bbj-table
![Documentation Type](https://img.shields.io/badge/Documentation-dwc-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-bbj--table-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

A streamlined Table component designed for rendering tables with multiple rows and columns.
This table is equipped with features such as sorting, selection, and virtualization, along with
the ability to customize cell rendering. It's crafted to offer both high customization
and performance.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.

!> **Tip:** From BBj you can set and get the attributes using the [BBjControl::setAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setAttribute.htm)
and [BBjControl::getAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getAttribute.htm) methods respectively.
And to set properties you can use the [BBjControl::setProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setProperty.htm) and [BBjControl::getProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getProperty.htm) methods respectively.
<div style="overflow-x: auto;">

| Name                        | Attribute                     | Description                                                                                                                                                                                                                                                                                                                                                 | Reflects | Type                                    | Default    |
| --------------------------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: | --------------------------------------- | ---------- |
| ``checkboxSelection``       | ``checkbox-selection``        | When false, the table won't render the selection&nbsp;checkboxes for each row.&nbsp;&nbsp;This option works only when ``multiSelection`` is enabled                                                                                                                                                                                                         | &#x2718; | ``boolean``                             | ``true``   |
| ``clientSorting``           | ``client-sorting``            | When true, the table will automatically sort the data&nbsp;when the user clicks on a column header. The default is false.&nbsp;&nbsp;Use this in case you want to sort the data yourself. The event in&nbsp;this case will contains the sorting information.                                                                                                | &#x2718; | ``boolean``                             | ``false``  |
| ``columnDefinitions``       |                               | An array of objects that defines the columns of the table.                                                                                                                                                                                                                                                                                                  | &#x2718; | ``TableColumnDefinition[]``             | ``[]``     |
| ``columnHeaders``           | ``column-headers``            | When true, the column headers are rendered, hidden otherwise.                                                                                                                                                                                                                                                                                               | &#x2718; | ``boolean``                             | ``true``   |
| ``data``                    |                               | An array of objects that defines the rows of the table.                                                                                                                                                                                                                                                                                                     | &#x2718; | ``any[]``                               | ``[]``     |
| ``deselection``             | ``deselection``               | Set to false to prevent rows from being deselected if you hold down Ctrl&nbsp;and click the row (i.e. once a row is selected, it remains selected&nbsp;until another row is selected in its place).&nbsp;&nbsp;By default the table allows deselection of rows.                                                                                             | &#x2718; | ``boolean``                             | ``true``   |
| ``getRowId``                | ``get-row-id``                | A function or an expression to generate a row id                                                                                                                                                                                                                                                                                                            | &#x2718; | ``((...args: any[]) => any) \| string`` |            |
| ``headerCheckboxSelection`` | ``header-checkbox-selection`` | If false, a ``select all`` checkbox will be added to the header.                                                                                                                                                                                                                                                                                            | &#x2718; | ``boolean``                             | ``true``   |
| ``headerHeight``            | ``header-height``             | The height of the header in pixels.                                                                                                                                                                                                                                                                                                                         | &#x2718; | ``number``                              | ``48``     |
| ``isRowSelectable``         | ``is-row-selectable``         | A function or an expression to be used to determine which rows&nbsp;are selectable.&nbsp;&nbsp;By default rows are selectable, so return false to make&nbsp;a row un-selectable.                                                                                                                                                                            | &#x2718; | ``((...args: any[]) => any) \| string`` |            |
| ``multiSelectWithClick``    | ``multi-select-with-click``   | Set to true to allow multiple rows to be selected with clicks.&nbsp;For example, if you click to select one row and then click to select&nbsp;another row, the first row will stay selected as well.&nbsp;Clicking a selected row in this mode will deselect the row.&nbsp;This is useful for touch devices where Ctrl and Shift clicking is not an option. | &#x2718; | ``boolean``                             | ``false``  |
| ``overscan``                | ``overscan``                  | The number of rows to pre render beyond the visible scrolling area.&nbsp;The bigger the number the slower the performance. keep this value small                                                                                                                                                                                                            | &#x2718; | ``number``                              | ``35``     |
| ``rowHeight``               | ``row-height``                | The height of each row in pixels.                                                                                                                                                                                                                                                                                                                           | &#x2718; | ``number``                              | ``35``     |
| ``selected``                |                               | An array of selected row ids.                                                                                                                                                                                                                                                                                                                               | &#x2718; | ``string[]``                            | ``[]``     |
| ``selectionMode``           | ``selection-mode``            | The selection mode of the table.                                                                                                                                                                                                                                                                                                                            | &#x2718; | ``"multiple" \| "none" \| "single"``    | ``'none'`` |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part                            | Description                                                                                                  |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| ``body``                        | The main body of the table, containing all the rows and cells with data.                                     |
| ``cell``                        | The basic unit within the table for displaying data or content.                                              |
| ``cell-align-center``           | Cells with centered content, used for balancing visual alignment.                                            |
| ``cell-align-left``             | Cells aligned to the left, typically for text content.                                                       |
| ``cell-align-right``            | Cells aligned to the right, commonly used for numerical data.                                                |
| ``cell-body``                   | Individual cells located within the body, containing data or content.                                        |
| ``cell-checkbox``               | Cells in the body that contain checkboxes for row selection.                                                 |
| ``cell-checkbox-body``          | A specific type of cell that combines a checkbox with body content, used for selecting rows.                 |
| ``cell-checkbox-header``        | A special header cell that contains a checkbox for selecting all rows.                                       |
| ``cell-checkbox-indeterminate`` | A state for checkboxes where the selection is partial (not all items are selected).                          |
| ``cell-content``                | Cells containing the main content or data.                                                                   |
| ``cell-content-checkbox``       | A cell in the header that combines content with a checkbox, often used for bulk actions.                     |
| ``cell-content-header``         | The main content or data within header cells.                                                                |
| ``cell-header``                 | Individual cells located in the header row, typically containing labels or titles for the columns.           |
| ``cell-label``                  | Cells specifically used for displaying text labels within rows.                                              |
| ``cell-label-header``           | Header cells that are specifically used for displaying text labels for columns.                              |
| ``cell-pinned-left``            | Cells that are pinned or fixed to the left side of the table, remaining visible during horizontal scrolling. |
| ``cell-pinned-right``           | Cells that are pinned or fixed to the right side of the table.                                               |
| ``cell-selected``               | Cells that are currently selected, indicating an active state.                                               |
| ``cell-sort-icons``             | Icons within header cells that indicate sorting capabilities.                                                |
| ``cell-sort-icons-active``      | Icons within header cells that show the current sorting state (ascending or descending).                     |
| ``checkbox``                    | A generic checkbox part used within various cells for selection purposes.                                    |
| ``checkbox-header``             | A specific checkbox located in the header for selecting or deselecting all rows.                             |
| ``header``                      | The top part of the table that contains column headers and controls like sorting icons and checkboxes.       |
| ``row``                         | Individual rows within the table body, used for organizing cells horizontally.                               |
| ``row-header``                  | The row within the header that contains cell headers.                                                        |
| ``table``                       | The primary table element, housing all content including headers, rows, and cells.                           |
| ``table-wrapper``               | The entire container that wraps the table and its elements.                                                  |


</div>

## Components Dependencies

- [bbj-checkbox](web-components/bbj-checkbox.md)
- [bbj-icon](web-components/bbj-icon.md)


----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
