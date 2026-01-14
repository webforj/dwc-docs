# dwc-table
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--table-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

A streamlined Table component designed for rendering tables with multiple rows and columns.
This table is equipped with features such as sorting, selection, and virtualization, along with
the ability to customize cell rendering. It's crafted to offer both high customization
and performance.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<div style="overflow-x: auto;">

| Name                        | Attribute                     | Description                                                                                                                                                                                                                                                                                                                                                 | Reflects | Type                                    | Default    |
| --------------------------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: | --------------------------------------- | ---------- |
| ``border``                  | ``border``                    | When true, the table will render a border around the table.                                                                                                                                                                                                                                                                                                 | &#x2714; | ``boolean``                             | ``true``   |
| ``checkboxSelection``       | ``checkbox-selection``        | When false, the table won't render the selection&nbsp;checkboxes for each row.&nbsp;&nbsp;This option works only when ``multiSelection`` is enabled                                                                                                                                                                                                         | &#x2718; | ``boolean``                             | ``true``   |
| ``clientSorting``           | ``client-sorting``            | When true, the table will automatically sort the data&nbsp;when the user clicks on a column header. The default is false.&nbsp;&nbsp;Use this in case you want to sort the data yourself. The event in&nbsp;this case will contains the sorting information.                                                                                                | &#x2718; | ``boolean``                             | ``false``  |
| ``columnDefinitions``       |                               | An array of objects that defines the columns of the table.                                                                                                                                                                                                                                                                                                  | &#x2718; | ``TableColumnDefinition[]``             | ``[]``     |
| ``columnHeaders``           | ``column-headers``            | When true, the column headers are rendered, hidden otherwise.                                                                                                                                                                                                                                                                                               | &#x2718; | ``boolean``                             | ``true``   |
| ``columnsBorder``           | ``columns-border``            | When true, the table will render borders between columns.                                                                                                                                                                                                                                                                                                   | &#x2714; | ``boolean``                             | ``false``  |
| ``data``                    |                               | An array of objects that defines the rows of the table.                                                                                                                                                                                                                                                                                                     | &#x2718; | ``any[]``                               | ``[]``     |
| ``deselection``             | ``deselection``               | Set to false to prevent rows from being deselected if you hold down Ctrl&nbsp;and click the row (i.e. once a row is selected, it remains selected&nbsp;until another row is selected in its place).&nbsp;&nbsp;By default the table allows deselection of rows.                                                                                             | &#x2718; | ``boolean``                             | ``true``   |
| ``getCellPart``             | ``get-cell-part``             | A function or an expression to set parts for each cell individually.&nbsp;expression should return either a string (part name), array of strings (array of part names) or undefined for no part.                                                                                                                                                            | &#x2718; | ``((...args: any[]) => any) \| string`` |            |
| ``getRowId``                | ``get-row-id``                | A function or an expression to generate a row id                                                                                                                                                                                                                                                                                                            | &#x2718; | ``((...args: any[]) => any) \| string`` |            |
| ``getRowPart``              | ``get-row-part``              | A function or an expression to set parts for each row individually.&nbsp;expression should return either a string (part name), array of strings (array of part names) or undefined for no part.                                                                                                                                                             | &#x2718; | ``((...args: any[]) => any) \| string`` |            |
| ``headerCheckboxSelection`` | ``header-checkbox-selection`` | If false, a ``select all`` checkbox will be added to the header.                                                                                                                                                                                                                                                                                            | &#x2718; | ``boolean``                             | ``true``   |
| ``headerHeight``            | ``header-height``             | The height of the header in pixels.                                                                                                                                                                                                                                                                                                                         | &#x2718; | ``number``                              | ``48``     |
| ``isRowSelectable``         | ``is-row-selectable``         | A function or an expression to be used to determine which rows&nbsp;are selectable.&nbsp;&nbsp;By default rows are selectable, so return false to make&nbsp;a row un-selectable.                                                                                                                                                                            | &#x2718; | ``((...args: any[]) => any) \| string`` |            |
| ``multiSelectWithClick``    | ``multi-select-with-click``   | Set to true to allow multiple rows to be selected with clicks.&nbsp;For example, if you click to select one row and then click to select&nbsp;another row, the first row will stay selected as well.&nbsp;Clicking a selected row in this mode will deselect the row.&nbsp;This is useful for touch devices where Ctrl and Shift clicking is not an option. | &#x2718; | ``boolean``                             | ``false``  |
| ``multiSorting``            | ``multi-sorting``             | Set to true to allow multiple columns to be sorted at once. By default&nbsp;only one column can be sorted at a time. Clicking on a column header&nbsp;will sort the column and remove the sorting from the other columns.                                                                                                                                   | &#x2718; | ``boolean``                             | ``false``  |
| ``overscan``                | ``overscan``                  | The number of rows to pre render beyond the visible scrolling area.&nbsp;The bigger the number the slower the performance. keep this value small                                                                                                                                                                                                            | &#x2718; | ``number``                              | ``35``     |
| ``rowHeight``               | ``row-height``                | The height of each row in pixels.                                                                                                                                                                                                                                                                                                                           | &#x2718; | ``number``                              | ``35``     |
| ``rowsBorder``              | ``rows-border``               | When true, the table will render borders between rows.                                                                                                                                                                                                                                                                                                      | &#x2714; | ``boolean``                             | ``true``   |
| ``selected``                |                               | An array of selected row ids.                                                                                                                                                                                                                                                                                                                               | &#x2718; | ``string[]``                            | ``[]``     |
| ``selectionMode``           | ``selection-mode``            | The selection mode of the table.                                                                                                                                                                                                                                                                                                                            | &#x2718; | ``"multiple" \| "none" \| "single"``    | ``'none'`` |
| ``striped``                 | ``striped``                   | When true then it produces a background color for every other row.                                                                                                                                                                                                                                                                                          | &#x2714; | ``boolean``                             | ``false``  |


</div>

## Events

<div style="overflow-x: auto;">

| Event                     | Description                           | Type                                                                                                                                                                                      |
| ------------------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ``dwc-cell-clicked``      | Emitted when a cell is clicked        | ``{ column: TableColumn; first: boolean; id: string; key: string; index: number; last: boolean; navigable: boolean; renderedValue: string; row: TableRow; item: TableRow; value: any; }`` |
| ``dwc-cell-dbclicked``    | Emitted when a cell is double clicked | ``{ column: TableColumn; first: boolean; id: string; key: string; index: number; last: boolean; navigable: boolean; renderedValue: string; row: TableRow; item: TableRow; value: any; }`` |
| ``dwc-column-moved``      | Emitted when a column is moved        | ``ColumnEventDetailBase & { oldIndex: number; newIndex: number; }``                                                                                                                       |
| ``dwc-column-resized``    | Emitted when a column is resized      | ``ColumnEventDetailBase & { newWidth: number; oldWidth: number; }``                                                                                                                       |
| ``dwc-row-clicked``       | Emitted when a row is clicked         | ``TableRow``                                                                                                                                                                              |
| ``dwc-row-dbclicked``     | Emitted when a row is double clicked  | ``TableRow``                                                                                                                                                                              |
| ``dwc-row-deselected``    | Emitted when a row is deselected      | ``TableRow``                                                                                                                                                                              |
| ``dwc-row-selected``      | Emitted when a row is selected        | ``TableRow``                                                                                                                                                                              |
| ``dwc-selection-changed`` | Emitted when row selection changes    | ``void``                                                                                                                                                                                  |
| ``dwc-sort-changed``      | Emitted when the sort changes         | ``ColumnSortState[]``                                                                                                                                                                     |
| ``dwc-state-changed``     | Emitted when state changes            | ``{ columns: ColumnState[]; source: StateChangeSource; }``                                                                                                                                |


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
| ``cell-checkbox``               | Cells that contain checkboxes for row selection.                                                             |
| ``cell-checkbox-body``          | A specific type of cell that combines a checkbox with body content, used for selecting rows.                 |
| ``cell-checkbox-header``        | A special header cell that contains a checkbox for selecting all rows.                                       |
| ``cell-checkbox-indeterminate`` | A state for checkboxes where the selection is partial (not all items are selected).                          |
| ``cell-content``                | The main content area within cells.                                                                          |
| ``cell-content-checkbox``       | Cells that combine content with a checkbox, used for selection.                                              |
| ``cell-content-header``         | The main content or data within header cells.                                                                |
| ``cell-even``                   | Even-numbered cells.                                                                                         |
| ``cell-first``                  | The first cell in a row.                                                                                     |
| ``cell-header``                 | Individual cells located in the header row, typically containing labels or titles for the columns.           |
| ``cell-label``                  | Text label areas within cells.                                                                               |
| ``cell-label-header``           | Header cells that are specifically used for displaying text labels for columns.                              |
| ``cell-last``                   | The last cell in a row.                                                                                      |
| ``cell-non-navigable``          | Cells that cannot be navigated to with keyboard, like checkboxes and spacers.                                |
| ``cell-odd``                    | Odd-numbered cells.                                                                                          |
| ``cell-pinned-left``            | Cells that are pinned or fixed to the left side of the table, remaining visible during horizontal scrolling. |
| ``cell-pinned-right``           | Cells that are pinned or fixed to the right side of the table.                                               |
| ``cell-resizable``              | Header cells that can be resized by dragging the resize handle.                                              |
| ``cell-resizing``               | Cells in a column that is currently being resized.                                                           |
| ``cell-selected``               | Cells that are currently selected, indicating an active state.                                               |
| ``cell-sort-icons``             | Icons within header cells that indicate sorting capabilities.                                                |
| ``cell-sort-icons-active``      | Icons within header cells that show the current sorting state (ascending or descending).                     |
| ``cell-sort-index``             | A visual indicator of the sort index for the column, often displayed as a number.                            |
| ``cell-sortable``               | Header cells that can be clicked to sort the column.                                                         |
| ``cell-spacer``                 | Spacer cells that absorb remaining space when all columns have fixed widths.                                 |
| ``checkbox``                    | A generic checkbox part used within various cells for selection purposes.                                    |
| ``checkbox-header``             | A specific checkbox located in the header for selecting or deselecting all rows.                             |
| ``column``                      | Individual column elements in the colgroup.                                                                  |
| ``header``                      | The thead element containing column headers.                                                                 |
| ``resize-handle``               | The draggable handle for resizing columns.                                                                   |
| ``row``                         | Individual rows within the table body, used for organizing cells horizontally.                               |
| ``row-even``                    | Even-numbered rows.                                                                                          |
| ``row-first``                   | The first row in the table.                                                                                  |
| ``row-header``                  | The row within the header that contains cell headers.                                                        |
| ``row-last``                    | The last row in the table.                                                                                   |
| ``row-odd``                     | Odd-numbered rows.                                                                                           |
| ``row-selected``                | Rows that are currently selected.                                                                            |
| ``table``                       | The primary table element, housing all content including headers, rows, and cells.                           |
| ``table-wrapper``               | The entire container that wraps the table and its elements.                                                  |


</div>

## Components Dependencies

- [dwc-checkbox](web-components/dwc-checkbox.md)
- [dwc-icon](web-components/dwc-icon.md)

## Methods

### `autoFit() => Promise<void>`

Auto-fits all columns to fit the container width.
Sets all columns to use flex layout.

### Returns

Type: `Promise<void>`

### `autoSize() => Promise<void>`

Auto-sizes all columns to their estimated width based on content.
This resets column widths to their natural size.

### Returns

Type: `Promise<void>`

### `autoSizeColumn(columnId: string) => Promise<void>`

Auto-sizes a specific column to its estimated width based on content.

### Returns

Type: `Promise<void>`

### `deselect(rowId: string | string[]) => Promise<void>`

Deselects a row

### Returns

Type: `Promise<void>`

### `deselectAll() => Promise<void>`

Deselects all rows

### Returns

Type: `Promise<void>`

### `focusCell(rowId: string, columnId: string, scroll?: boolean) => Promise<void>`

Scrolls to a cell

### Returns

Type: `Promise<void>`

### `moveColumn(columnId: string, newIndex: number) => Promise<void>`

Moves a column to a new position in the table.

### Returns

Type: `Promise<void>`

### `scrollToRow(rowId: string) => Promise<void>`

Scrolls to a row

### Returns

Type: `Promise<void>`

### `select(rowId: string | string[]) => Promise<void>`

Selects a row

### Returns

Type: `Promise<void>`

### `selectAll() => Promise<void>`

Selects all rows

### Returns

Type: `Promise<void>`

### `updateRow(rowId: string, data: any) => Promise<TableRow>`

Updates a row

### Returns

Type: `Promise<TableRow>`



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2026.*
