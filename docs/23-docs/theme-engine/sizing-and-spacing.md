# Sizing and spacing

BBj defines a set of CSS variables you can use to apply consistent sizing and spacing across your application.
All sizing and spacing properties are defined in `rem`.

?> **Note:** `rem` is a relative length unit. It is relative to the font size of the [root element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html).

## Sizing

Use these properties to adjust the sizing of the component (Width , Height). `M` is the standard size for almost all components.

?> **Note:** When choosing a size, always make sure to keep it large enough for touch targets.

### Example

```css
.element {
  width: var(--bbj-size-m);
  height: var(--bbj-size-m);
}
```

### Variables

| **Variable**      | **Default Value**   |
| ----------------- | ------------------- |
| `--bbj-size-3xs`  | 1.125rem            |
| `--bbj-size-2xs`  | 1.375rem            |
| `--bbj-size-xs`   | 1.625rem            |
| `--bbj-size-s`    | 1.875rem            |
| `--bbj-size-m`    | 2.25rem             |
| `--bbj-size-l`    | 2.75rem             |
| `--bbj-size-xl`   | 3.5rem              |
| `--bbj-size-2xl`  | 4rem                |
| `--bbj-size-32xl` | 4.25rem             |
| `--bbj-size`      | `var(--bbj-size-m)` |

## Spacing

Use these properties to adjust the inter-component spacings (Margin, Padding).

### Example

```css
.element {
  padding: var(--bbj-space-m);
}
```

### Variables

| **Variable**      | **Default Value**     |
| ----------------- | --------------------- |
| `--bbj-space-3xs` | 0.075rem              |
| `--bbj-space-2xs` | 0.15rem               |
| `--bbj-space-xs`  | 0.25rem               |
| `--bbj-space-s`   | 0.5rem                |
| `--bbj-space-m`   | 1rem                  |
| `--bbj-space-l`   | 1.25rem               |
| `--bbj-space-xl`  | 1.5rem                |
| `--bbj-space-2xl` | 1.75rem               |
| `--bbj-space-3xl` | 2rem                  |
| `--bbj-space`     | `var( --bbj-space-s)` |
