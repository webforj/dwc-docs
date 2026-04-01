# Colors

Color variables help maintain consistent use of color throughout your app. DWC provides a palette system that generates a full range of shades from a single seed color, with automatic contrast-safe text colors.

Color variables can be referenced using the `--dwc-color-{name}-{n}` CSS custom property, where `{name}` is the name of the palette and `{n}` is the numeric value of the desired swatch.

?> **Note:** `{n}` is a value between `5` and `95` (in steps of 5) and refers to the lightness of the color. Step 5 is always the darkest, step 95 is always the lightest, regardless of light or dark mode.

```css
.element {
  background-color: var(--dwc-color-primary-50);
  color: var(--dwc-color-on-primary-text-50);
}
```

## The Palette

DWC configures seven palettes plus the `black/white` palette where each palette is a set of variations (shades and tints) of a semantic color.

?> Click any swatch to copy its CSS variable.

<dwc-doc-palettes></dwc-doc-palettes>

- The `default` palette is used for most component backgrounds, borders, and neutral UI elements. It picks up a subtle tint from the primary hue.
- The `primary` palette is typically based on a brand color.
- The `success`, `warning`, and `danger` palettes are used to visualize actions that correspond to their respective meanings.
- The `info` palette can be used as a complementary palette for the `primary` one.
- The `gray` palette consists of pure gray variations.
- The `black/white` palette consists of two dynamic colors that adapt to the current theme.

### Palette Seeds

Each palette is generated from two seed variables: `hue` and `saturation`. Setting these two values generates all 19 steps automatically.

| Seed Variable | Description |
| --- | --- |
| `--dwc-color-{name}-h` | The hue angle of the seed color (0-360). |
| `--dwc-color-{name}-s` | The saturation percentage. 100% is fully saturated, while 0% is completely unsaturated (gray). |

<!-- tabs:start -->

#### **Primary**

<dwc-doc-palette name="primary"></dwc-doc-palette>

| Variable | Default Value |
| --- | --- |
| `--dwc-color-primary-h` | 223 |
| `--dwc-color-primary-s` | 91% |

#### **Success**

<dwc-doc-palette name="success"></dwc-doc-palette>

| Variable | Default Value |
| --- | --- |
| `--dwc-color-success-h` | 153 |
| `--dwc-color-success-s` | 60% |

#### **Warning**

<dwc-doc-palette name="warning"></dwc-doc-palette>

| Variable | Default Value |
| --- | --- |
| `--dwc-color-warning-h` | 35 |
| `--dwc-color-warning-s` | 90% |

#### **Danger**

<dwc-doc-palette name="danger"></dwc-doc-palette>

| Variable | Default Value |
| --- | --- |
| `--dwc-color-danger-h` | 4 |
| `--dwc-color-danger-s` | 90% |

#### **Info**

<dwc-doc-palette name="info"></dwc-doc-palette>

| Variable | Default Value |
| --- | --- |
| `--dwc-color-info-h` | 262 |
| `--dwc-color-info-s` | 65% |

#### **Gray**

<dwc-doc-palette name="gray"></dwc-doc-palette>

| Variable | Default Value |
| --- | --- |
| `--dwc-color-gray-h` | 0 |
| `--dwc-color-gray-s` | 0% |

#### **Default**

<dwc-doc-palette name="default"></dwc-doc-palette>

| Variable | Default Value |
| --- | --- |
| `--dwc-color-default-h` | var(--dwc-color-primary-h) |
| `--dwc-color-default-s` | 3% |

<!-- tabs:end -->

### Direct Seed Override

Each palette also exposes a `--dwc-color-{name}-seed` variable. By default this is constructed from the hue and saturation values, but you can override it directly with any valid CSS color to bypass the hue/saturation system entirely.

```css
:root {
  /* Override with any CSS color format */
  --dwc-color-primary-seed: #6366f1;
}
```

### Hue Rotation

The palette generator applies a subtle hue rotation across steps to create more natural-looking palettes. Darker shades shift slightly warm while lighter shades shift slightly cool. This mimics how real pigments behave and prevents palettes from looking flat or synthetic.

For example, a blue palette (hue 223) will have its darkest step shifted toward purple and its lightest step shifted toward cyan. The effect is subtle but makes palettes feel richer.

| Variable | Default Value | Description |
| --- | --- | --- |
| `--dwc-color-hue-rotate` | 3 | Degrees of hue shift across the palette. Set to 0 to disable. |

Drag the slider to see how hue rotation shifts the palette. At higher values, darker steps push warm and lighter steps push cool:

<dwc-doc-hue-rotate name="primary"></dwc-doc-hue-rotate>

### Modifying Palettes

To modify a palette, change the seed variables. All steps and variations are recalculated automatically.

```css
:root {
  --dwc-color-primary-h: 225;
  --dwc-color-primary-s: 100%;
}
```

### Generated Variables Per Step

Each palette generates 19 steps (5 through 95). For each step, the following variables are produced:

| Variable Pattern | Description |
| --- | --- |
| `--dwc-color-{name}-{step}` | The palette shade at that step |
| `--dwc-color-{name}-text-{step}` | A surface-safe text color derived from that step (WCAG AA compliant) |
| `--dwc-color-on-{name}-text-{step}` | Text color for use ON the shade as a background (auto-flips light/dark) |

?> **Accessibility:** All generated text colors meet WCAG AA contrast requirements automatically. You don't need to calculate contrast ratios yourself.

The top row shows the shade with its `on-text` color (for text placed directly on that shade). The bottom row shows the `text` color on a surface background:

<dwc-doc-step-vars name="primary"></dwc-doc-step-vars>

### Additional Generated Variables

| Variable Pattern | Description |
| --- | --- |
| `--dwc-color-{name}-tint` | The seed color at 12% opacity, for subtle highlight backgrounds |
| `--dwc-border-color-{name}` | Mode-aware border color |
| `--dwc-border-color-{name}-emphasis` | Stronger mode-aware border color |
| `--dwc-focus-ring-{name}` | Focus ring shadow for the palette |

## Global Colors

These are mode-aware colors that adapt automatically to light and dark themes.

| Variable | Description |
| --- | --- |
| `--dwc-color-black` | Near-black in light mode, near-white in dark mode |
| `--dwc-color-white` | Near-white in light mode, near-black in dark mode |
| `--dwc-color-body-text` | Default body text color (uses `--dwc-color-black`) |

# Component Themes

DWC abstracts the usage of the available palettes with a higher-level set of semantic variation variables. Components use these variations rather than raw step numbers, because variations adapt automatically to light and dark modes.

The variations are divided into three groups: `normal`, `dark`, and `light`.

1. `normal` variables are the base color, used for backgrounds and primary UI elements.
2. `dark` variables are used mainly for `active/pressed` states.
3. `light` variables are used mainly for `hover/focus` states.

<!-- tabs:start -->

#### **Primary**

<dwc-doc-variations name="primary"></dwc-doc-variations>

```css
--dwc-color-primary-dark: var(--dwc-color-primary-45)
--dwc-color-primary: var(--dwc-color-primary-50)
--dwc-color-primary-light: var(--dwc-color-primary-55)
--dwc-color-primary-alt: var(--dwc-color-primary-tint)

--dwc-color-primary-text-dark: var(--dwc-color-primary-text-40)
--dwc-color-primary-text: var(--dwc-color-primary-text-45)
--dwc-color-primary-text-light: var(--dwc-color-primary-text-50)

--dwc-color-on-primary-text-dark: var(--dwc-color-on-primary-text-45)
--dwc-color-on-primary-text: var(--dwc-color-on-primary-text-50)
--dwc-color-on-primary-text-light: var(--dwc-color-on-primary-text-55)
--dwc-color-on-primary-text-alt: var(--dwc-color-primary-text)
```

#### **Success**

<dwc-doc-variations name="success"></dwc-doc-variations>

```css
--dwc-color-success-dark: var(--dwc-color-success-45)
--dwc-color-success: var(--dwc-color-success-50)
--dwc-color-success-light: var(--dwc-color-success-55)
--dwc-color-success-alt: var(--dwc-color-success-tint)

--dwc-color-success-text-dark: var(--dwc-color-success-text-40)
--dwc-color-success-text: var(--dwc-color-success-text-45)
--dwc-color-success-text-light: var(--dwc-color-success-text-50)

--dwc-color-on-success-text-dark: var(--dwc-color-on-success-text-45)
--dwc-color-on-success-text: var(--dwc-color-on-success-text-50)
--dwc-color-on-success-text-light: var(--dwc-color-on-success-text-55)
--dwc-color-on-success-text-alt: var(--dwc-color-success-text)
```

#### **Warning**

<dwc-doc-variations name="warning"></dwc-doc-variations>

```css
--dwc-color-warning-dark: var(--dwc-color-warning-45)
--dwc-color-warning: var(--dwc-color-warning-50)
--dwc-color-warning-light: var(--dwc-color-warning-55)
--dwc-color-warning-alt: var(--dwc-color-warning-tint)

--dwc-color-warning-text-dark: var(--dwc-color-warning-text-40)
--dwc-color-warning-text: var(--dwc-color-warning-text-45)
--dwc-color-warning-text-light: var(--dwc-color-warning-text-50)

--dwc-color-on-warning-text-dark: var(--dwc-color-on-warning-text-45)
--dwc-color-on-warning-text: var(--dwc-color-on-warning-text-50)
--dwc-color-on-warning-text-light: var(--dwc-color-on-warning-text-55)
--dwc-color-on-warning-text-alt: var(--dwc-color-warning-text)
```

#### **Danger**

<dwc-doc-variations name="danger"></dwc-doc-variations>

```css
--dwc-color-danger-dark: var(--dwc-color-danger-45)
--dwc-color-danger: var(--dwc-color-danger-50)
--dwc-color-danger-light: var(--dwc-color-danger-55)
--dwc-color-danger-alt: var(--dwc-color-danger-tint)

--dwc-color-danger-text-dark: var(--dwc-color-danger-text-40)
--dwc-color-danger-text: var(--dwc-color-danger-text-45)
--dwc-color-danger-text-light: var(--dwc-color-danger-text-50)

--dwc-color-on-danger-text-dark: var(--dwc-color-on-danger-text-45)
--dwc-color-on-danger-text: var(--dwc-color-on-danger-text-50)
--dwc-color-on-danger-text-light: var(--dwc-color-on-danger-text-55)
--dwc-color-on-danger-text-alt: var(--dwc-color-danger-text)
```

#### **Info**

<dwc-doc-variations name="info"></dwc-doc-variations>

```css
--dwc-color-info-dark: var(--dwc-color-info-45)
--dwc-color-info: var(--dwc-color-info-50)
--dwc-color-info-light: var(--dwc-color-info-55)
--dwc-color-info-alt: var(--dwc-color-info-tint)

--dwc-color-info-text-dark: var(--dwc-color-info-text-40)
--dwc-color-info-text: var(--dwc-color-info-text-45)
--dwc-color-info-text-light: var(--dwc-color-info-text-50)

--dwc-color-on-info-text-dark: var(--dwc-color-on-info-text-45)
--dwc-color-on-info-text: var(--dwc-color-on-info-text-50)
--dwc-color-on-info-text-light: var(--dwc-color-on-info-text-55)
--dwc-color-on-info-text-alt: var(--dwc-color-info-text)
```

#### **Default**

The default variation is used for neutral UI elements like component backgrounds and borders. It inherits its hue from the primary palette with very low saturation.

<dwc-doc-variations name="default"></dwc-doc-variations>

```css
--dwc-color-default-dark
--dwc-color-default
--dwc-color-default-light
--dwc-color-default-alt: var(--dwc-color-primary-alt)

--dwc-color-default-text-dark: var(--dwc-color-default-text-40)
--dwc-color-default-text: var(--dwc-color-default-text-45)
--dwc-color-default-text-light: var(--dwc-color-default-text-50)

--dwc-color-on-default-text-dark
--dwc-color-on-default-text
--dwc-color-on-default-text-light
--dwc-color-on-default-text-alt: var(--dwc-color-primary-text)

--dwc-focus-ring-default: var(--dwc-focus-ring-primary)
```

#### **Gray**

The gray variation uses pure gray shades and is mode-aware, picking from dark steps in light mode and light steps in dark mode.

<dwc-doc-variations name="gray"></dwc-doc-variations>

```css
--dwc-color-gray-dark
--dwc-color-gray
--dwc-color-gray-light
--dwc-color-gray-alt: var(--dwc-color-gray-tint)

--dwc-color-gray-text-dark: var(--dwc-color-gray-text-40)
--dwc-color-gray-text: var(--dwc-color-gray-text-45)
--dwc-color-gray-text-light: var(--dwc-color-gray-text-50)

--dwc-color-on-gray-text-dark
--dwc-color-on-gray-text
--dwc-color-on-gray-text-light
--dwc-color-on-gray-text-alt: var(--dwc-color-gray-text)
```

<!-- tabs:end -->

### Variation Reference

| Variable | Description |
| --- | --- |
| `--dwc-color-{name}` | The base color. Used for backgrounds, fills, and borders. |
| `--dwc-color-{name}-dark` | A darker version. Used for active/pressed states. |
| `--dwc-color-{name}-light` | A lighter version. Used for hover/focus states. |
| `--dwc-color-{name}-alt` | The seed at 12% opacity. Used for subtle highlight states. |
| `--dwc-color-{name}-text` | Text color safe on app surfaces (WCAG AA). |
| `--dwc-color-{name}-text-dark` | Darker text variation. |
| `--dwc-color-{name}-text-light` | Lighter text variation. |
| `--dwc-color-on-{name}-text` | Text color for use ON `--dwc-color-{name}` as background. |
| `--dwc-color-on-{name}-text-dark` | Text color for use ON `--dwc-color-{name}-dark`. |
| `--dwc-color-on-{name}-text-light` | Text color for use ON `--dwc-color-{name}-light`. |
| `--dwc-color-on-{name}-text-alt` | Text color for use ON `--dwc-color-{name}-alt`. |
| `--dwc-border-color-{name}` | Mode-aware border color. |
| `--dwc-border-color-{name}-emphasis` | Stronger mode-aware border color. |
| `--dwc-focus-ring-{name}` | Focus ring shadow. |
