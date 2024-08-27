## Font family

The font family properties are used to specify a prioritized list of font family names.

The system font stack is used by default:

- `Segoe UI` on Windows
- `Roboto` on Android and Chrome OS
- `San Francisco` on macOS and iOS
- On other systems, `Helvetica, Arial` are used as fallbacks.

You can apply or change the font family using the `--dwc-font-family` custom property.

### Example

```css
:root {
  --dwc-font-family: 'Roboto', sans-serif;
}
```

### Variables

| **Variable**              | **Default Value**                                                                                                                               |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| ` --dwc-font-family-sans` | -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol' |
| ` --dwc-font-family-mono` | Menlo, Monaco, 'Courier New', monospace                                                                                                         |
| `--dwc-font-family`       | `var(--dwc-font-family-sans)`                                                                                                                   |

## Font size

The font size properties define a set of font sizes to choose from. `S` is the standard size, and is used by most components by default. All font sizes are defined in `em`.

?> **Note:** `em` is a relative length unit. It is relative to [font size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size) of the parent, in the case of typographical properties like font-size, and font size of the element itself and in the case of other properties like [width](https://developer.mozilla.org/en-US/docs/Web/CSS/width).

### Example

```css
.title {
  font-size: var(--dwc-font-size-3xl);
}
```

### Variables

| **Variable**          | **Default Value**        |
| --------------------- | ------------------------ |
| `--dwc-font-size-2xs` | 0.75rem                  |
| `--dwc-font-size-xs`  | 0.813rem                 |
| `--dwc-font-size-s`   | 0.875rem                 |
| `--dwc-font-size-m`   | 1rem                     |
| `--dwc-font-size-l`   | 1.125rem                 |
| `--dwc-font-size-xl`  | 1.375rem                 |
| `--dwc-font-size-2xl` | 1.75rem                  |
| `--dwc-font-size-3xl` | 2.25rem                  |
| `--dwc-font-size`     | `var(--dwc-font-size-s)` |

## Font Weight

The [font-weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight) CSS property sets the weight (or boldness) of the font.

### Example

```css
p {
  font-weight: var(--dwc-font-weight-semibold);
}
```

| **Variable**                 | **Default Value**               |
| ---------------------------- | ------------------------------- |
| `--dwc-font-weight-lighter`  | 200                             |
| `--dwc-font-weight-light`    | 300                             |
| `--dwc-font-weight-normal`   | 400                             |
| `--dwc-font-weight-semibold` | 500                             |
| `--dwc-font-weight-bold`     | 700                             |
| `--dwc-font-weight-bolder`   | 800                             |
| `--dwc-font-weight-bolder`   | `var(--dwc-font-weight-normal)` |

## Line height

The line-height CSS property sets the height of a line box. It's commonly used to set the distance between lines of text.

### Example

```css
p {
  line-height: var(--dwc-font-line-height-m);
}
```

### Variables

| **Variable**                 | **Default Value**             |
| ---------------------------- | ----------------------------- |
| `--dwc-font-line-height-2xs` | 0.95                          |
| `--dwc-font-line-height-xs`  | 1.1                           |
| `--dwc-font-line-height-s`   | 1.25                          |
| `--dwc-font-line-height-m`   | 1.375                         |
| `--dwc-font-line-height-l`   | 1.5                           |
| `--dwc-font-line-height-xl`  | 1.75                          |
| `--dwc-font-line-height-2xl` | 2                             |
| `--dwc-font-line-height`     | var(--dwc-font-line-height-m) |
