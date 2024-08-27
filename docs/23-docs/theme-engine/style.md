# Style

BBj defines a collection of CSS Variables that you can use to apply consistent visual styles across all of your application.

## Borders

The border properties are used to control the component border style and width. See [available border styles](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style)

### Example

```css
.element {
  border: var(--bbj-border-width) var(--bbj-border-style) red;
}
```

### Variables

| **Variable**         | **Default Value** |
| -------------------- | ----------------- |
| `--bbj-border-width` | 1px               |
| `--bbj-border-style` | solid             |

## Border Radius

The border properties are used to rounds the corners of an element's outer border edge.
All border radius values are defined in `em` by default, so they scale with the font size.

?> **Note:** `em` is a relative length unit. It is relative to [font size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size) of the parent, in the case of typographical properties like font-size, and font size of the element itself, in the case of other properties like [width](https://developer.mozilla.org/en-US/docs/Web/CSS/width).

### Example

```css
.element {
  border-radius: var(--bbj-border-radius-m);
}
```

### Variables

| **Variable**                | **Default Value**          |
| --------------------------- | -------------------------- |
| `--bbj-border-radius-2xs`   | 0.071em                    |
| `--bbj-border-radius-xs`    | 0.125em                    |
| `--bbj-border-radius-s`     | 0.25em                     |
| `--bbj-border-radius-m`     | 0.375em                    |
| `--bbj-border-radius-l`     | 0.5em                      |
| `--bbj-border-radius-xl`    | 0.75em                     |
| `--bbj-border-radius-2xl`   | 1em                        |
| `--bbj-border-radius-round` | 50%                        |
| `--bbj-border-radius-pill`  | 9999px                     |
| `--bbj-border-radius`       | var(--bbj-border-radius-s) |

## Shadow

The shadow properties are used to add shadow effects around an element's frame. You can set multiple effects separated by commas. In most cases, shadows are utilized to signify items that are layered on top of each other in the user interface.

### Example

```css
.element {
  box-shadow: var(--bbj-shadow-xl);
}
```

### Variables

| **Variable**       | **Default Value**     |
| ------------------ | --------------------- |
| `--bbj-shadow-xs`  | -                     |
| `--bbj-shadow-s`   | -                     |
| `--bbj-shadow-m`   | -                     |
| `--bbj-shadow-l`   | -                     |
| `--bbj-shadow-xl`  | -                     |
| `--bbj-shadow-2xl` | -                     |
| `--bbj-shadow`     | `var(--bbj-shadow-m)` |

?> **Note:** You control the shadow color by setting the `--bbj-shadow-color` variable. By default the shadow color is gray tinted with primary color.

## Cursors

The cursor properties are used to set the type of mouse cursor, if any, to show when the mouse pointer is over an element. See [available cursors](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor).

### Example

```css
.element {
  --bbj-cursor-click: var(--bbj-cursor-grab);
}
```

You can also use an image as a custom cursor. For instance:

```css
:root {
  --bbj-cursor-click: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/happy.png'), auto;
}
```

### Variables

| **Variable**            | **Default Value** |
| ----------------------- | ----------------- |
| `--bbj-cursor-click`    | pointer           |
| `--bbj-cursor-text`     | text              |
| `--bbj-cursor-disabled` | not-allowed       |
| `--bbj-cursor-grab`     | grab              |
| `--bbj-cursor-move`     | move              |

## Surfaces

BBj define three levels of surfaces which are used to organize the UI hierarchy combined
with [bbj-shadows](theme-engine/style?id=shadow). All [palettes colors](theme-engine/colors?id=the-palette) are tested to have enough contrast with these surfaces.

### Example

```css
.element {
  background: var(--bbj-surface-2);
}
```

### Variables

| **Variable**      | **Usage**                                                               |
| ----------------- | ----------------------------------------------------------------------- |
| `--bbj-surface-1` | It is the darkest surface. Used for body background.                    |
| `--bbj-surface-2` | Used for components (for instance a card)                               |
| `--bbj-surface-3` | The lightest and the highest surface. Used for menus , popovers , dialogs ... |

## Disabled State

The disabled state properties are used to make an element looks visually disabled or not mutable.

### Example

```css
input:disabled {
  opacity: var(--bbj-disabled-opacity);
  cursor: var(--bbj-disabled-cursor);
}
```

### Variables

| **Variable**             | **Default Value**          |
| ------------------------ | -------------------------- |
| `--bbj-disabled-opacity` | .7                         |
| `--bbj-disabled-cursor`  | var(--bbj-cursor-disabled) |

## Focus State

When an element gets focused, a focus ring will be shown around the element to indicate the current focus position.
You can control the focus ring's appearance by settings the following variables: [@see color palette](/theme-engine/colors?id=component-themes)

| **Variable**                 | **Default Value** |
| ---------------------------- | ----------------- |
| `--bbj-focus-ring-l` | 45%               |
| `--bbj-focus-ring-a`     | .4                |
| `--bbj-focus-ring-width`     | 3px               |
