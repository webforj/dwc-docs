# Style

DWC defines a collection of CSS Variables that you can use to apply consistent visual styles across all of your application.

## Borders

The border properties are used to control the component border style and width. See [available border styles](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style)

### Example

```css
.element {
  border: var(--dwc-border-width) var(--dwc-border-style) var(--dwc-border-color);
}
```

### Variables

| Variable | Default Value |
| --- | --- |
| `--dwc-border-width` | 1px |
| `--dwc-border-style` | solid |
| `--dwc-border-color` | var(--dwc-border-color-default) |
| `--dwc-border-color-emphasis` | var(--dwc-border-color-default-emphasis) |

### Per-Palette Border Colors

Each color palette also generates its own border color variables:

| Variable Pattern | Description |
| --- | --- |
| `--dwc-border-color-{name}` | Mode-aware border color tinted with the palette hue |
| `--dwc-border-color-{name}-emphasis` | Stronger variant for hover, focus, and active states |

Where `{name}` is one of: `primary`, `success`, `warning`, `danger`, `info`, `gray`, `default`.

## Border Radius

The border radius properties are used to round the corners of an element's outer border edge.

All sizes scale from a single seed value (`--dwc-border-radius-seed`). Changing the seed rescales the entire radius system proportionally.

### Example

```css
.element {
  border-radius: var(--dwc-border-radius-m);
}
```

### Variables

| Variable | Default Value | Computed (at seed=8px) |
| --- | --- | --- |
| `--dwc-border-radius-seed` | 0.5rem | 8px |
| `--dwc-border-radius-2xs` | 0.0625rem | 1px (fixed) |
| `--dwc-border-radius-xs` | 0.125rem | 2px (fixed) |
| `--dwc-border-radius-s` | calc(seed * 0.5) | 4px |
| `--dwc-border-radius-m` | calc(seed * 0.75) | 6px |
| `--dwc-border-radius-l` | var(--dwc-border-radius-seed) | 8px |
| `--dwc-border-radius-xl` | calc(seed * 1.5) | 12px |
| `--dwc-border-radius-2xl` | calc(seed * 2) | 16px |
| `--dwc-border-radius-3xl` | calc(seed * 3) | 24px |
| `--dwc-border-radius-4xl` | calc(seed * 4) | 32px |
| `--dwc-border-radius-round` | 50% | |
| `--dwc-border-radius-pill` | calc(var(--dwc-size-m) / 2) | |
| `--dwc-border-radius` | var(--dwc-border-radius-seed) | 8px |

<dwc-doc-radii></dwc-doc-radii>

### Usage Guidelines

- Items inside containers: use `s` (0.5x seed)
- Structural borders (between item and container): use `m` (0.75x seed)
- Containers and surfaces: use `l` (1x seed)
- Large overlays: use `xl` (1.5x seed)

## Shadow

The shadow properties add shadow effects around an element's frame. Shadows signify items that are layered on top of each other in the user interface.

Shadows adapt automatically to both light and dark modes, appearing stronger in dark mode for better visibility.

### Example

```css
.element {
  box-shadow: var(--dwc-shadow-xl);
}
```

### Variables

| Variable | Description |
| --- | --- |
| `--dwc-shadow-xs` | Extra small shadow (1 layer) |
| `--dwc-shadow-s` | Small shadow (2 layers) |
| `--dwc-shadow-m` | Medium shadow (3 layers, default) |
| `--dwc-shadow-l` | Large shadow (4 layers) |
| `--dwc-shadow-xl` | Extra large shadow (5 layers) |
| `--dwc-shadow-2xl` | Double extra large shadow (6 layers) |
| `--dwc-shadow` | `var(--dwc-shadow-m)` |

<dwc-doc-shadows></dwc-doc-shadows>

## Cursors

The cursor properties are used to set the type of mouse cursor, if any, to show when the mouse pointer is over an element. See [available cursors](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor).

### Example

```css
.element {
  cursor: var(--dwc-cursor-click);
}
```

You can also use an image as a custom cursor:

```css
:root {
  --dwc-cursor-click: url('https://example.com/cursor.png'), auto;
}
```

### Variables

| Variable | Default Value |
| --- | --- |
| `--dwc-cursor-click` | default |
| `--dwc-cursor-text` | text |
| `--dwc-cursor-disabled` | not-allowed |
| `--dwc-cursor-grab` | grab |
| `--dwc-cursor-grabbing` | grabbing |
| `--dwc-cursor-move` | move |
| `--dwc-cursor-resize-row` | ew-resize |
| `--dwc-cursor-resize-column` | ns-resize |
| `--dwc-cursor-progress` | progress |
| `--dwc-cursor-wait` | wait |

## Surfaces

DWC defines three levels of surfaces which are used to organize the UI hierarchy combined with [shadows](theme-engine/style?id=shadow). All [palette colors](theme-engine/colors?id=the-palette) are tested to have enough contrast with these surfaces.

Surfaces pick up a subtle tint from the primary hue and adapt automatically to light and dark modes.

### Example

```css
.element {
  background: var(--dwc-surface-2);
}
```

### Variables

| Variable | Usage |
| --- | --- |
| `--dwc-surface-1` | Page and body background |
| `--dwc-surface-2` | Toolbars, menubars, cards |
| `--dwc-surface-3` | Windows, menus, popovers, dialogs |

<dwc-doc-surfaces></dwc-doc-surfaces>

## Disabled State

The disabled state properties are used to make an element look visually disabled or not mutable.

The opacity adapts to the current theme for optimal visibility in both light and dark modes.

### Example

```css
input:disabled {
  opacity: var(--dwc-disabled-opacity);
  cursor: var(--dwc-disabled-cursor);
}
```

### Variables

| Variable | Description |
| --- | --- |
| `--dwc-disabled-opacity` | Reduced opacity for disabled elements (adapts to light/dark mode) |
| `--dwc-disabled-cursor` | var(--dwc-cursor-disabled) |

## Focus State

When an element gets focused, a focus ring is shown around the element to indicate the current focus position.

| Variable | Default Value |
| --- | --- |
| `--dwc-focus-ring-a` | 0.75 |
| `--dwc-focus-ring-width` | 2px |
| `--dwc-focus-ring-gap` | 2px |

<dwc-doc-focus-rings></dwc-doc-focus-rings>

Each color palette generates its own focus ring variable:

| Variable Pattern | Description |
| --- | --- |
| `--dwc-focus-ring-{name}` | Focus ring shadow tinted with the palette color |

Where `{name}` is one of: `primary`, `success`, `warning`, `danger`, `info`, `gray`, `default`. See [Component Themes](/theme-engine/colors?id=component-themes) for details.

## Scales

Scale transforms are used for press/click feedback animations on interactive elements.

| Variable | Default Value | Description |
| --- | --- | --- |
| `--dwc-scale-press` | 0.97 | Standard press scale (3% shrink) |
| `--dwc-scale-press-deep` | 0.93 | Deep press scale (7% shrink) |

<dwc-doc-scales></dwc-doc-scales>
