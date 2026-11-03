# DWC Design Kit

The official Figma kit for DWC, the Dynamic Web Client behind webforJ and the BBj DWC client. It gives designers the same semantic, accessible components applications ship with, drawn once and kept in step with the platform, so what you design is what your team can build.

**[Open the kit on Figma Community](https://www.figma.com/community/file/1682060886525639971/dwc-design-kit)**

## What is inside

- **Components.** Every DWC component as a resizable master with variants for state, size and theme.
- **Tokens as variables.** Colour, surfaces, spacing, radii and typography as Figma variables, with light and dark as modes.
- **Styles.** Text styles for the type scale, effect styles for shadows and focus rings, named the way the theme engine names them.
- **Themes and sizes.** Seven themes and five sizes on every component, applied through modes.
- **Example applications.** Real screens built only from the kit, in light and dark.
- **Documentation.** A page per component with anatomy, sizes, themes, states and do and don't examples.

## Preview

<a href="https://www.figma.com/community/file/1682060886525639971/dwc-design-kit" target="_blank" rel="noopener noreferrer">
  <img
    src="https://cdn.webforj.com/webforj-documentation/figma/dwc-design-kit-cover.jpg"
    alt="DWC Design Kit on Figma Community"
    style="border: 1px solid var(--dwc-border-color); border-radius: var(--dwc-border-radius-m); width: 100%;"
    loading="lazy">
</a>

## Versions

The kit tracks the platform. Use it with webforJ 26 or later and BBj 26 or later. For webforJ and BBj 25 and older, use the [legacy DWC Design Kit](https://www.figma.com/community/file/1144573845612007198/dwc-design-kit-legacy).

## Tokens in the kit and in CSS

Every variable in the kit maps to a CSS variable of the [theme engine](theme-engine/css-variables). Colour steps follow the [colour palette](theme-engine/colors), sizes follow [sizing and spacing](theme-engine/sizing-and-spacing), and shadows and focus rings follow [style](theme-engine/style). Switching the kit's mode from light to dark mirrors the [dark theme](theme-engine/themes) in CSS.
