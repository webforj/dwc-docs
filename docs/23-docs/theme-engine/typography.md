## Font family

The font family properties are used to specify a prioritized list of font family names.

The system font stack is used by default:

- `Segoe UI` on Windows
- `Roboto` on Android and Chrome OS
- `San Francisco` on macOS and iOS
- On other systems, `Helvetica, Arial` are used as fallbacks.

You can apply or change the font family using the `--bbj-font-family` custom property.

### Example

```css
:root {
  --bbj-font-family: 'Roboto', sans-serif;
}
```

### Variables

| **Variable**              | **Default Value**                                                                                                                               |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| ` --bbj-font-family-sans` | -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol' |
| ` --bbj-font-family-mono` | Menlo, Monaco, 'Courier New', monospace                                                                                                         |
| `--bbj-font-family`       | `var(--bbj-font-family-sans)`                                                                                                                   |

## Font size

The font size properties define a set of font sizes to choose from. `S` is the standard size, and is used by most components by default. All font sizes are defined in `em`.

?> **Note:** `em` is a relative length unit. It is relative to [font size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size) of the parent, in the case of typographical properties like font-size, and font size of the element itself and in the case of other properties like [width](https://developer.mozilla.org/en-US/docs/Web/CSS/width).

### Example

```css
.title {
  font-size: var(--bbj-font-size-3xl);
}
```

### Variables

| **Variable**          | **Default Value**        |
| --------------------- | ------------------------ |
| `--bbj-font-size-2xs` | 0.75rem                  |
| `--bbj-font-size-xs`  | 0.813rem                 |
| `--bbj-font-size-s`   | 0.875rem                 |
| `--bbj-font-size-m`   | 1rem                     |
| `--bbj-font-size-l`   | 1.125rem                 |
| `--bbj-font-size-xl`  | 1.375rem                 |
| `--bbj-font-size-2xl` | 1.75rem                  |
| `--bbj-font-size-3xl` | 2.25rem                  |
| `--bbj-font-size`     | `var(--bbj-font-size-s)` |

## Font Weight

The [font-weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight) CSS property sets the weight (or boldness) of the font.

### Example

```css
p {
  font-weight: var(--bbj-font-weight-semibold);
}
```

| **Variable**                 | **Default Value**               |
| ---------------------------- | ------------------------------- |
| `--bbj-font-weight-lighter`  | 200                             |
| `--bbj-font-weight-light`    | 300                             |
| `--bbj-font-weight-normal`   | 400                             |
| `--bbj-font-weight-semibold` | 500                             |
| `--bbj-font-weight-bold`     | 700                             |
| `--bbj-font-weight-bolder`   | 800                             |
| `--bbj-font-weight-bolder`   | `var(--bbj-font-weight-normal)` |

## Line height

The line-height CSS property sets the height of a line box. It's commonly used to set the distance between lines of text.

### Example

```css
p {
  line-height: var(--bbj-font-line-height-m);
}
```

### Variables

| **Variable**                 | **Default Value**             |
| ---------------------------- | ----------------------------- |
| `--bbj-font-line-height-2xs` | 0.95                          |
| `--bbj-font-line-height-xs`  | 1.1                           |
| `--bbj-font-line-height-s`   | 1.25                          |
| `--bbj-font-line-height-m`   | 1.375                         |
| `--bbj-font-line-height-l`   | 1.5                           |
| `--bbj-font-line-height-xl`  | 1.75                          |
| `--bbj-font-line-height-2xl` | 2                             |
| `--bbj-font-line-height`     | var(--bbj-font-line-height-m) |
