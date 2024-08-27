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
  width: var(--dwc-size-m);
  height: var(--dwc-size-m);
}
```

### Variables

| **Variable**      | **Default Value**   |
| ----------------- | ------------------- |
| `--dwc-size-3xs`  | 1.125rem            |
| `--dwc-size-2xs`  | 1.375rem            |
| `--dwc-size-xs`   | 1.625rem            |
| `--dwc-size-s`    | 1.875rem            |
| `--dwc-size-m`    | 2.25rem             |
| `--dwc-size-l`    | 2.75rem             |
| `--dwc-size-xl`   | 3.5rem              |
| `--dwc-size-2xl`  | 4rem                |
| `--dwc-size-32xl` | 4.25rem             |
| `--dwc-size`      | `var(--dwc-size-m)` |

## Spacing

Use these properties to adjust the inter-component spacings (Margin, Padding).

### Example

```css
.element {
  padding: var(--dwc-space-m);
}
```

### Variables

| **Variable**      | **Default Value**     |
| ----------------- | --------------------- |
| `--dwc-space-3xs` | 0.075rem              |
| `--dwc-space-2xs` | 0.15rem               |
| `--dwc-space-xs`  | 0.25rem               |
| `--dwc-space-s`   | 0.5rem                |
| `--dwc-space-m`   | 1rem                  |
| `--dwc-space-l`   | 1.25rem               |
| `--dwc-space-xl`  | 1.5rem                |
| `--dwc-space-2xl` | 1.75rem               |
| `--dwc-space-3xl` | 2rem                  |
| `--dwc-space`     | `var( --dwc-space-s)` |
