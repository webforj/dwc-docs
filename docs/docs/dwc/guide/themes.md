# Themes

A theme in DWC is a named set of CSS custom properties (design tokens) that controls how every component looks. Switching themes recalculates colors, shadows, surfaces, and borders across the whole application instantly, with no rebuild.

!> **Note:** This guide covers themes from the BBj developer's perspective. For the underlying token system, palette generator, and the full list of customizable variables, see the [Theme Engine documentation](/theme-engine/).

?> **Coming from a previous DWC version?** The v26 design system changed several token defaults, the dark-mode variable, and the way surfaces and shadows are computed. See [Upgrading to v26](/theme-engine/upgrading-to-v26) for the full list of changes.

## Built-in themes

DWC ships three application themes out of the box:

| Theme       | Background        | Tint                            |
| ----------- | ----------------- | ------------------------------- |
| `light`     | Light (default)   | Subtle primary-color tint       |
| `dark`      | Dark              | Subtle primary-color tint       |
| `dark-pure` | Dark              | None (pure neutral grays)       |

Any application can switch between them at runtime, and additional custom themes can be defined alongside the built-ins.

## Applying a theme

Use [BBjWebManager::setTheme](https://documentation.basis.cloud/BASISHelp/WebHelp/bui/BBjBuiManager/BBjWebManager_setTheme.htm) to set the active theme.

```bbj
web! = bbjapi().getWebManager()
web!.setTheme("dark")
```

The method accepts the name of any built-in or custom theme. Calling it again at any time switches the application to a different theme.

?> **DWC only.** `setTheme` is honored only by the DWC client. On BUI and WebUI the call is a no-op.

## Color scheme

The `color-scheme` CSS declaration tells the browser how to render its built-in surfaces - native scrollbars, form-control widgets, autofill highlights, and the default page background before CSS loads. The built-in `dark` and `dark-pure` themes already set `color-scheme: dark` for you, so the browser chrome blends with the dark surfaces automatically.

You only need to think about this when defining a custom dark theme of your own. In that case, include `color-scheme: dark` on the theme's selector:

```css
html[data-app-theme='brand-dark'] {
  --dwc-dark-mode: 1;
  color-scheme: dark;
}
```

If you skip it, scrollbars and autofill rectangles stay light-mode by default and look out of place over your dark surfaces. Light themes don't need the declaration - browsers default to light.

## Following the user's preference

Most operating systems let users pick a light or dark appearance system-wide. DWC can honor that preference and pick the right theme automatically.

Use [BBjWebManager::setDarkTheme](https://documentation.basis.cloud/BASISHelp/WebHelp/bui/BBjBuiManager/BBjWebManager_setDarkTheme.htm) and [BBjWebManager::setLightTheme](https://documentation.basis.cloud/BASISHelp/WebHelp/bui/BBjBuiManager/BBjWebManager_setLightTheme.htm) to register which theme to apply for each appearance state, then pass the special keyword `"system"` to `setTheme` to let DWC pick between them based on the user's OS preference.

```bbj
web! = bbjapi().getWebManager()
web!.setDarkTheme("dark")
web!.setLightTheme("light")
web!.setTheme("system")
```

`"system"` is a reserved keyword - DWC resolves it at runtime to either the registered light or dark theme and re-resolves automatically whenever the OS preference changes. Once resolved, the actual `data-app-theme` attribute on the page is `light` or `dark`, so any CSS overrides should target those names rather than `"system"`.

?> **DWC only.** `setDarkTheme` and `setLightTheme` are honored only by the DWC client. On BUI and WebUI the calls are no-ops.

Where users enable the system-wide appearance setting varies by platform:

- **Windows 10/11** - Settings > Personalization > Colors > Choose your color
- **macOS** - System Settings > Appearance
- **iOS** - Settings > Display & Brightness > Appearance
- **Android** - Settings > Display > Dark theme

## Custom themes

Most branding work is done by **overriding the existing themes** rather than creating new ones. Drop a stylesheet into the app that retunes the seed colors (or any other token) for the built-in `light`, `dark`, and `dark-pure` themes, and every component picks up the new look automatically.

Load the stylesheet from BBj using [BBjWebManager::injectStyle](https://documentation.basis.cloud/BASISHelp/WebHelp/bui/BBjBuiManager/BBjBuiManager_injectStyle.htm) (inline CSS) or [BBjWebManager::injectStyleUrl](https://documentation.basis.cloud/BASISHelp/WebHelp/bui/BBjBuiManager/BBjBuiManager_injectStyleUrl.htm) (a hosted file).

```bbj
web! = bbjapi().getWebManager()
web!.injectStyleUrl("/static/themes/brand.css")
```

### Overriding the built-in themes

The `light` theme is the default and is scoped to `:root`. Override it by setting tokens in `:root`:

```css
:root {
  --dwc-color-primary-seed: #a855f7;
}
```

Override `dark` and `dark-pure` inside their matching `data-app-theme` selectors:

```css
html[data-app-theme='dark'] {
  --dwc-color-primary-seed: #a855f7;
}

html[data-app-theme='dark-pure'] {
  --dwc-color-primary-seed: #a855f7;
}
```

Switching themes with `setTheme("dark")` activates the rebranded dark theme. No new theme name is needed.

### Adding a new theme

Create a fully new theme only when you need one that coexists with the built-ins (for example, a high-contrast variant or a customer-specific skin). Pick a unique name and define it under its own `data-app-theme` block:

```css
html[data-app-theme='brand'] {
  --dwc-color-primary-seed: #a855f7;
}
```

For a dark variant of a new theme, set `--dwc-dark-mode: 1` and `color-scheme: dark`:

```css
html[data-app-theme='brand-dark'] {
  --dwc-dark-mode: 1;
  --dwc-color-primary-seed: #a855f7;
  color-scheme: dark;
}
```

Activate a new theme by name:

```bbj
web!.setTheme("brand")
```

See [Theme Engine - Themes](/theme-engine/themes) for the full token reference and override patterns.

## Working with DWC tokens

A few habits that keep custom CSS aligned with the design system and prevent it from drifting in dark mode or future versions.

### Always reference tokens with `var(...)`

Hardcoded color literals (`#3b82f6`, `rgb(59 130 246)`, `oklch(0.6 0.18 250)`) don't adapt to dark mode and don't track palette changes. Use the token instead.

```css
/* avoid */
.my-panel {
  background: #ffffff;
  color: #1f2937;
  border: 1px solid #e5e7eb;
}

/* prefer */
.my-panel {
  background: var(--dwc-surface-3);
  color: var(--dwc-color-body-text);
  border: 1px solid var(--dwc-border-color);
}
```

### Prefer variation tokens over raw step numbers

Variation tokens (`--dwc-color-primary`, `-dark`, `-light`, `-text`, `-alt`) resolve to a different step in light vs. dark mode automatically. Raw step numbers (`--dwc-color-primary-50`) do not.

```css
/* avoid - frozen at step 50 in both modes */
.badge {
  background: var(--dwc-color-primary-50);
}

/* prefer - shifts step in dark mode */
.badge {
  background: var(--dwc-color-primary);
}
```

### Use the suffix that matches the role

| Suffix | Role |
| --- | --- |
| `--dwc-color-{name}` | Solid fill at full strength (buttons, badges, banners) |
| `--dwc-color-{name}-dark` | Active / pressed state |
| `--dwc-color-{name}-light` | Hover / focus background |
| `--dwc-color-{name}-alt` | Subtle tinted background for callouts and alt rows |
| `--dwc-color-{name}-text` | Colored text on a neutral surface |
| `--dwc-color-on-{name}-text` | Text placed **on** the colored shade as background (auto-contrast) |
| `--dwc-border-color-{name}` | Borders and dividers |

### Reserve surfaces and borders for their roles

Surfaces (`--dwc-surface-1` / `-2` / `-3`) build the page hierarchy. Borders (`--dwc-border-color`, `--dwc-border-color-*`) draw separators. Reusing palette steps for these roles works visually but loses the automatic mode adaptation that the dedicated tokens carry.

### Override at the seed level in custom themes

When building a custom theme, set the seed (`--dwc-color-{name}-h`, `-s`, or `-seed`) rather than overriding individual steps. The generator rebuilds the full 19-step palette around the seed, keeping the whole tonal range consistent. Overriding individual steps leaves the rest of the palette drifting against your brand color.

```css
/* avoid - leaves other steps inconsistent */
html[data-app-theme='brand'] {
  --dwc-color-primary-50: #6366f1;
}

/* prefer - regenerates the whole palette */
html[data-app-theme='brand'] {
  --dwc-color-primary-seed: #6366f1;
}
```

### Apply the same pattern to spacing, sizing, radius, and transitions

The same rule extends across the rest of the design system - reference tokens, never magic numbers.

```css
/* avoid */
.my-panel {
  padding: 16px;
  border-radius: 8px;
  transition: background-color 250ms;
}

/* prefer */
.my-panel {
  padding: var(--dwc-space-m);
  border-radius: var(--dwc-border-radius);
  transition: background-color var(--dwc-transition);
}
```

Hardcoded values bypass the user-preference font-size scaling, lock you into a fixed shape language, and skip the design system's eased timing curves.

### Use `::part(...)` to reach into components

DWC components are Shadow DOM. Their internal markup is hidden from outside selectors, so `.dwc-button-label { ... }` will not match anything. To style internal pieces, target the exposed parts:

```css
/* style the label inside every primary button */
dwc-button[theme='primary']::part(label) {
  letter-spacing: 0.02em;
}
```

See [Theme Engine - CSS Shadow Parts](/theme-engine/css-shadow-parts) for the full mechanic, and each component's **Shadow Parts** section in the component reference for the parts it exposes.

### Scope token overrides with a wrapper selector

CSS custom properties cascade. Setting a token on a wrapper element retunes everything inside it without affecting the rest of the app.

```css
.danger-section {
  --dwc-color-primary-seed: #ef4444;
}
```

Every component inside `.danger-section` (buttons, links, focus rings) now uses the danger-red hue, while the global theme stays unchanged.

### Test in both light and dark mode

Before shipping any custom CSS, switch the theme to `dark` and `dark-pure` and walk through the screen. The most common regression is hardcoded color values that looked fine in one mode and read as illegible or out-of-palette in the other.

### Don't reach for `!important`

It escapes the cascade and makes every future override harder. If a rule isn't winning, the cause is almost always a specificity mismatch with a cleaner fix - target the same selector the framework uses, or add a parent qualifier. Reserve `!important` for genuinely third-party styling that you have no other way to defeat.

## Component themes

Beyond the application-wide theme, individual components accept a `theme` attribute that picks from the semantic palette set: `default`, `primary`, `success`, `warning`, `danger`, `info`, `gray`. This is independent of the active application theme.

```bbj
button! = window!.addButton(1,10,10,130,30,"Submit",$$)
button!.setAttribute("theme", "primary")
```

See [Component Themes](/theme-engine/colors?id=component-themes) for the per-component palette options.

## Component expanse

Most BBj controls support an `expanse` attribute that unifies their size across the design system. Setting expanse forces a consistent control height and font size, so a row of `BBjButton`, `BBjEditBox`, and `BBjComboBox` controls with the same expanse line up exactly. The standard scale runs `xs`, `s`, `m`, `l`, `xl`, and a few controls extend it (icon buttons go down to `2xs` and up to `3xl`).

!> **Note:** By default a BBj control is created with **no** expanse. The BBj developer sizes the control from the BBj side using the standard width and height arguments on `addButton`, `addEditBox`, and similar methods.

```bbj
button! = window!.addButton(1,10,10,130,30,"Submit",$$)
button!.setAttribute("expanse", "l")
```

?> **Pay attention.** When building a responsive layout or omitting explicit sizing on the BBj side (for example by relying on the flow layout flag to let the layout drive width and height), set an expanse so the control still has a predictable size. Without expanse and without explicit BBj sizing, controls can render at inconsistent dimensions across the page.

## Reduced motion

DWC respects the user's "reduce motion" accessibility preference. When enabled at the OS level, DWC disables non-essential animations across all components automatically. No BBj code is required.

Where users enable the preference:

- **Windows 10/11** - Settings > Ease of Access > Display > Show animations in Windows
- **macOS** - System Settings > Accessibility > Display > Reduce motion
- **iOS** - Settings > Accessibility > Motion > Reduce Motion
- **Android** - Settings > Accessibility > Remove animations
