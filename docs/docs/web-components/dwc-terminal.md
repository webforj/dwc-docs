# dwc-terminal
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--terminal-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

The `dwc-terminal` provides a terminal emulator.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<table>
<thead><tr><th style="width:28px;padding:4px"></th><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>autoFit</b></code></td><td style="vertical-align:top">Whether to automatically fit the terminal to its container</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>auto-fit</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>boolean</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>false</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>cols</b></code></td><td style="vertical-align:top">The number of columns in the terminal</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>cols</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>number</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>80</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>options</b></code></td><td style="vertical-align:top">The terminal options</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Type</span> <code>ITerminalOptions</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>{
  "cursorBlink": true,
  "cursorStyle": "block",
  "cursorWidth": 1,
  "cursorInactiveStyle": "outline",
  "fastScrollModifier": "alt",
  "fastScrollSensitivity": 5,
  "fontFamily": '"Cascadia Code", Menlo, monospace',
  "fontSize": 14,
  "fontWeight": "normal",
  "fontWeightBold": "bold",
  "ignoreBracketedPasteMode": false,
  "lineHeight": 1,
  "letterSpacing": 0,
  "linkHandler": null,
  "scrollback": 1000,
  "scrollOnUserInput": true,
  "scrollSensitivity": 1,
  "screenReaderMode": false,
  "smoothScrollDuration": 0,
  "macOptionIsMeta": false,
  "macOptionClickForcesSelection": false,
  "minimumContrastRatio": 1,
  "tabStopWidth": 8,
  "rightClickSelectsWord": true,
  "altClickMovesCursor": true,
  "convertEol": true
}</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>rows</b></code></td><td style="vertical-align:top">The number of rows in the terminal</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>rows</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>number</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>24</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>theme</b></code></td><td style="vertical-align:top">The terminal theme</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Type</span> <code>ITheme</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>{
    // "name": "Dark+",
    "black": "#000000",
    "red": "#cd3131",
    "green": "#0dbc79",
    "yellow": "#e5e510",
    "blue": "#2472c8",
    "cyan": "#11a8cd",
    "white": "#e5e5e5",
    "brightBlack": "#666666",
    "brightRed": "#f14c4c",
    "brightGreen": "#23d18b",
    "brightYellow": "#f5f543",
    "brightBlue": "#3b8eea",
    "brightCyan": "#29b8db",
    "brightWhite": "#e5e5e5",
    "background": "#1e1e1e",
    "foreground": "#cccccc",
    "selectionBackground": "#3a3d41",
    "cursor": "#ffffff"
  }</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
</tbody></table>

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
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2026.*
