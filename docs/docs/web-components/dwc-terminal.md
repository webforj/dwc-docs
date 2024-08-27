# dwc-terminal
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--terminal-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `dwc-terminal` provides a terminal emulator.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<div style="overflow-x: auto;">

| Name        | Attribute    | Description                                                | Reflects | Type                 | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----------- | ------------ | ---------------------------------------------------------- | :------: | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ``autoFit`` | ``auto-fit`` | Whether to automatically fit the terminal to its container | &#x2718; | ``boolean``          | ``false``                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ``cols``    | ``cols``     | The number of columns in the terminal                      | &#x2718; | ``number``           | ``80``                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ``options`` |              | The terminal options                                       | &#x2718; | ``ITerminalOptions`` | ``DEFAULT_OPTIONS``                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ``rows``    | ``rows``     | The number of rows in the terminal                         | &#x2718; | ``number``           | ``24``                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ``theme``   |              | The terminal theme                                         | &#x2718; | ``ITheme``           | ``{&nbsp;    // "name": "Dark+",&nbsp;    "black": "#000000",&nbsp;    "red": "#cd3131",&nbsp;    "green": "#0dbc79",&nbsp;    "yellow": "#e5e510",&nbsp;    "blue": "#2472c8",&nbsp;    "cyan": "#11a8cd",&nbsp;    "white": "#e5e5e5",&nbsp;    "brightBlack": "#666666",&nbsp;    "brightRed": "#f14c4c",&nbsp;    "brightGreen": "#23d18b",&nbsp;    "brightYellow": "#f5f543",&nbsp;    "brightBlue": "#3b8eea",&nbsp;    "brightCyan": "#29b8db",&nbsp;    "brightWhite": "#e5e5e5",&nbsp;    "background": "#1e1e1e",&nbsp;    "foreground": "#cccccc",&nbsp;    "selectionBackground": "#3a3d41",&nbsp;    "cursor": "#ffffff"&nbsp;  }`` |


</div>

## Events

<div style="overflow-x: auto;">

| Event        | Description                                                                                                                                           | Type                                         |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| ``dwc-data`` | Fired when the terminal data event fires.&nbsp;In a typical setup, this should be passed on to the backing pty.                                       | ``string``                                   |
| ``dwc-key``  | Fired when a key is pressed.&nbsp;The event value contains the string that will be sent in the data event as well as the DOM event that triggered it. | ``{ value: string; event: KeyboardEvent; }`` |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part        | Description                  |
| ----------- | ---------------------------- |
| ``control`` | The component's base wrapper |


</div>
## Methods

### `clear() => Promise<void>`

Clear the entire buffer, making the prompt line the new first line.

### Returns

Type: `Promise<void>`

### `clearSelection() => Promise<void>`

Clear the current terminal selection.

### Returns

Type: `Promise<void>`

### `fit() => Promise<void>`

Resize the terminal to fill its container.

If `autoFit` is true, this method is called automatically when the terminal's container resizes.

### Returns

Type: `Promise<void>`

### `getSelection() => Promise<string>`

Get the terminal selection.

### Returns

Type: `Promise<string>`

### `getSelectionPosition() => Promise<IBufferRange>`

Gets the selection position or undefined if there is no selection.

### Returns

Type: `Promise<IBufferRange>`

### `removeFocus() => Promise<void>`

Removes focus from the terminal.

### Returns

Type: `Promise<void>`

### `reset() => Promise<void>`

Perform a full reset (RIS, aka ‘\x1bc’).

### Returns

Type: `Promise<void>`

### `scrollLines(amount: number) => Promise<void>`

Scroll the terminal down a number of lines.

### Returns

Type: `Promise<void>`

### `scrollToBottom() => Promise<void>`

Scroll the terminal to the bottom.

### Returns

Type: `Promise<void>`

### `scrollToLine(line: number) => Promise<void>`

Scrolls to a line within the buffer.

### Returns

Type: `Promise<void>`

### `scrollToTop() => Promise<void>`

Scroll the terminal to the top.

### Returns

Type: `Promise<void>`

### `select(column: number, row: number, length: number) => Promise<void>`

Select text within the terminal.

### Returns

Type: `Promise<void>`

### `selectAll() => Promise<void>`

Selects all text within the terminal.

### Returns

Type: `Promise<void>`

### `selectLines(start: number, end: number) => Promise<void>`

Select lines within the terminal.

### Returns

Type: `Promise<void>`

### `setFocus() => Promise<void>`

Sets focus on the terminal.

### Returns

Type: `Promise<void>`

### `write(data: string) => Promise<void>`

Write data to the terminal.

### Returns

Type: `Promise<void>`

### `writeln(data: string) => Promise<void>`

Write data to the terminal, followed by a newline character.

### Returns

Type: `Promise<void>`



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
