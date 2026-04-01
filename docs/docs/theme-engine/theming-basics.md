# Theming Basics

DWC is easily customizable and modifiable to fit a brand. The entire look and feel is controlled through CSS variables, so you can restyle your application without touching component code.

## How It Works

The design system is fully dynamic. All colors, surfaces, shadows, and text styles are generated from a small set of seed variables. Changing one variable (like your brand's primary hue) instantly updates every component that uses it. No build step is needed.

Dark mode works automatically. When you switch themes, all mode-aware properties (surfaces, shadows, text colors, etc.) adapt together.

## CSS Variables

[CSS Variables](/theme-engine/css-variables) are the foundation of the DWC theme engine. They are defined by the theme engine and used by all components to apply consistent styling. You can override any variable to customize the look and feel of your application.

## CSS Shadow Parts

A part attribute can be assigned to any element in a [shadow tree](https://developer.mozilla.org/en-US/docs/Glossary/Shadow_tree). This is used to expose an element outside of the shadow tree. DWC employs [Shadow parts](/theme-engine/css-shadow-parts) to give developers more control over component customizations.

## Branding

DWC includes a [color palette](/theme-engine/colors?id=the-palette) that can be used to customize an application to match a brand or color scheme. The default theme has a light background but everything is fully customizable. See [Themes](/theme-engine/themes) for more information on branding.
