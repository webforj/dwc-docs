# Style

BBj defines a collection of CSS Variables that you can use to apply consistent visual styles across all of your application.

## Borders

The border properties are used to control the component border style and width. See [available border styles](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style)

### Example

```css
.element {
  border: var(--dwc-border-width) var(--dwc-border-style) red;
}
```

### Variables

| **Variable**         | **Default Value** |
| -------------------- | ----------------- |
| `--dwc-border-width` | 1px               |
| `--dwc-border-style` | solid             |

## Border Radius

The border properties are used to rounds the corners of an element's outer border edge.
All border radius values are defined in `em` by default, so they scale with the font size.

?> **Note:** `em` is a relative length unit. It is relative to [font size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size) of the parent, in the case of typographical properties like font-size, and font size of the element itself, in the case of other properties like [width](https://developer.mozilla.org/en-US/docs/Web/CSS/width).

### Example

```css
.element {
  border-radius: var(--dwc-border-radius-m);
}
```

### Variables

| **Variable**                | **Default Value**          |
| --------------------------- | -------------------------- |
| `--dwc-border-radius-2xs`   | 0.071em                    |
| `--dwc-border-radius-xs`    | 0.125em                    |
| `--dwc-border-radius-s`     | 0.25em                     |
| `--dwc-border-radius-m`     | 0.375em                    |
| `--dwc-border-radius-l`     | 0.5em                      |
| `--dwc-border-radius-xl`    | 0.75em                     |
| `--dwc-border-radius-2xl`   | 1em                        |
| `--dwc-border-radius-round` | 50%                        |
| `--dwc-border-radius-pill`  | 9999px                     |
| `--dwc-border-radius`       | var(--dwc-border-radius-s) |

## Shadow

The shadow properties are used to add shadow effects around an element's frame. You can set multiple effects separated by commas. In most cases, shadows are utilized to signify items that are layered on top of each other in the user interface.

### Example

```css
.element {
  box-shadow: var(--dwc-shadow-xl);
}
```

### Variables

| **Variable**       | **Default Value**     |
| ------------------ | --------------------- |
| `--dwc-shadow-xs`  | -                     |
| `--dwc-shadow-s`   | -                     |
| `--dwc-shadow-m`   | -                     |
| `--dwc-shadow-l`   | -                     |
| `--dwc-shadow-xl`  | -                     |
| `--dwc-shadow-2xl` | -                     |
| `--dwc-shadow`     | `var(--dwc-shadow-m)` |

?> **Note:** You control the shadow color by setting the `--dwc-shadow-color` variable. By default the shadow color is gray tinted with primary color.

## Cursors

The cursor properties are used to set the type of mouse cursor, if any, to show when the mouse pointer is over an element. See [available cursors](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor).

### Example

```css
.element {
  --dwc-cursor-click: var(--dwc-cursor-grab);
}
```

You can also use an image as a custom cursor. For instance:

```css
:root {
  --dwc-cursor-click: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/happy.png'), auto;
}
```

### Variables

| **Variable**            | **Default Value** |
| ----------------------- | ----------------- |
| `--dwc-cursor-click`    | pointer           |
| `--dwc-cursor-text`     | text              |
| `--dwc-cursor-disabled` | not-allowed       |
| `--dwc-cursor-grab`     | grab              |
| `--dwc-cursor-move`     | move              |

## Surfaces

BBj define three levels of surfaces which are used to organize the UI hierarchy combined
with [dwc-shadows](theme-engine/style?id=shadow). All [palettes colors](theme-engine/colors?id=the-palette) are tested to have enough contrast with these surfaces.

### Example

```css
.element {
  background: var(--dwc-surface-2);
}
```

### Variables

| **Variable**      | **Usage**                                                               |
| ----------------- | ----------------------------------------------------------------------- |
| `--dwc-surface-1` | It is the darkest surface. Used for body background.                    |
| `--dwc-surface-2` | Used for components (for instance a card)                               |
| `--dwc-surface-3` | The lightest and the highest surface. Used for menus , popovers , dialogs ... |

## Disabled State

The disabled state properties are used to make an element looks visually disabled or not mutable.

### Example

```css
input:disabled {
  opacity: var(--dwc-disabled-opacity);
  cursor: var(--dwc-disabled-cursor);
}
```

### Variables

| **Variable**             | **Default Value**          |
| ------------------------ | -------------------------- |
| `--dwc-disabled-opacity` | .7                         |
| `--dwc-disabled-cursor`  | var(--dwc-cursor-disabled) |

## Focus State

When an element gets focused, a focus ring will be shown around the element to indicate the current focus position.
You can control the focus ring's appearance by settings the following variables: [@see color palette](/theme-engine/colors?id=component-themes)

| **Variable**                 | **Default Value** |
| ---------------------------- | ----------------- |
| `--dwc-focus-ring-l` | 45%               |
| `--dwc-focus-ring-a`     | .4                |
| `--dwc-focus-ring-width`     | 3px               |
