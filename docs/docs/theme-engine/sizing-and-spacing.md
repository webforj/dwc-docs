# Sizing and spacing

DWC defines a set of CSS variables you can use to apply consistent sizing and spacing across your application.
All sizing and spacing properties are defined in `rem`.

?> **Note:** `rem` is a relative length unit. It is relative to the font size of the [root element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html), which defaults to 16px in most browsers.

## Sizing

Use these properties to adjust the sizing of the component (Width, Height). `M` is the standard size for almost all components.

?> **Note:** When choosing a size, always make sure to keep it large enough for touch targets.

### Example

```css
.element {
  width: var(--dwc-size-m);
  height: var(--dwc-size-m);
}
```

### Variables

| Variable | Default Value | Computed (at 16px root) |
| --- | --- | --- |
| `--dwc-size-3xs` | 1.125rem | 18px |
| `--dwc-size-2xs` | 1.375rem | 22px |
| `--dwc-size-xs` | 1.625rem | 26px |
| `--dwc-size-s` | 1.875rem | 30px |
| `--dwc-size-m` | 2.25rem | 36px |
| `--dwc-size-l` | 2.75rem | 44px |
| `--dwc-size-xl` | 3.25rem | 52px |
| `--dwc-size-2xl` | 4rem | 64px |
| `--dwc-size-3xl` | 4.25rem | 68px |
| `--dwc-size` | `var(--dwc-size-m)` | 36px |

<dwc-doc-sizes></dwc-doc-sizes>

## Spacing

Use these properties to adjust the inter-component spacings (Margin, Padding).

### Example

```css
.element {
  padding: var(--dwc-space-m);
}
```

### Variables

| Variable | Default Value | Computed (at 16px root) |
| --- | --- | --- |
| `--dwc-space-3xs` | 0.0625rem | 1px |
| `--dwc-space-2xs` | 0.125rem | 2px |
| `--dwc-space-xs` | 0.25rem | 4px |
| `--dwc-space-s` | 0.5rem | 8px |
| `--dwc-space-m` | 1rem | 16px |
| `--dwc-space-l` | 1.25rem | 20px |
| `--dwc-space-xl` | 1.5rem | 24px |
| `--dwc-space-2xl` | 1.75rem | 28px |
| `--dwc-space-3xl` | 2rem | 32px |
| `--dwc-space` | `var(--dwc-space-s)` | 8px |

<dwc-doc-spaces></dwc-doc-spaces>
