---
version: alpha
name: DWC
description: "DWC design system, Dark theme (the Light theme is documented at /design.md)."
colors:
  # Primary
  primary: "oklch(0.49 0.228191 263.526)"  # --dwc-color-primary
  primary-dark: "oklch(0.42 0.205372 263.826)"  # --dwc-color-primary-dark
  primary-light: "oklch(0.53 0.240868 263.226)"  # --dwc-color-primary-light
  primary-alt: "oklch(0.510166 0.253545 263.526 / 0.12)"  # --dwc-color-primary-alt
  primary-text: "oklch(0.75 0.253545 263.526)"  # --dwc-color-primary-text
  on-primary-text: "oklch(0.99 0.0114095 263.526)"  # --dwc-color-on-primary-text
  primary-seed: "hsl( 223, 91%, 50% )"  # --dwc-color-primary-seed
  border-color-primary: "oklch(0.32 0.0304254 263.526)"  # --dwc-border-color-primary
  border-color-primary-emphasis: "oklch(0.556 0.0760636 263.526)"  # --dwc-border-color-primary-emphasis
  # Success
  success: "oklch(0.49 0.144037 158.404)"  # --dwc-color-success
  success-dark: "oklch(0.42 0.129634 158.704)"  # --dwc-color-success-dark
  success-light: "oklch(0.53 0.152039 158.104)"  # --dwc-color-success-light
  success-alt: "oklch(0.751001 0.160042 158.404 / 0.12)"  # --dwc-color-success-alt
  success-text: "oklch(0.75 0.160042 158.404)"  # --dwc-color-success-text
  on-success-text: "oklch(0.99 0.00720187 158.404)"  # --dwc-color-on-success-text
  success-seed: "hsl( 153, 60%, 50% )"  # --dwc-color-success-seed
  border-color-success: "oklch(0.32 0.019205 158.404)"  # --dwc-border-color-success
  border-color-success-emphasis: "oklch(0.556 0.0480125 158.404)"  # --dwc-border-color-success-emphasis
  # Warning
  warning: "oklch(0.49 0.148705 64.8007)"  # --dwc-color-warning
  warning-dark: "oklch(0.42 0.133834 65.1007)"  # --dwc-color-warning-dark
  warning-light: "oklch(0.53 0.156966 64.5007)"  # --dwc-color-warning-light
  warning-alt: "oklch(0.745407 0.165227 64.8007 / 0.12)"  # --dwc-color-warning-alt
  warning-text: "oklch(0.75 0.165227 64.8007)"  # --dwc-color-warning-text
  on-warning-text: "oklch(0.99 0.00743523 64.8007)"  # --dwc-color-on-warning-text
  warning-seed: "hsl( 35, 90%, 50% )"  # --dwc-color-warning-seed
  border-color-warning: "oklch(0.32 0.0198273 64.8007)"  # --dwc-border-color-warning
  border-color-warning-emphasis: "oklch(0.556 0.0495682 64.8007)"  # --dwc-border-color-warning-emphasis
  # Danger
  danger: "oklch(0.49 0.216577 29.7575)"  # --dwc-color-danger
  danger-dark: "oklch(0.42 0.194919 30.0575)"  # --dwc-color-danger-dark
  danger-light: "oklch(0.53 0.228609 29.4575)"  # --dwc-color-danger-light
  danger-alt: "oklch(0.611497 0.240641 29.7575 / 0.12)"  # --dwc-color-danger-alt
  danger-text: "oklch(0.75 0.240641 29.7575)"  # --dwc-color-danger-text
  on-danger-text: "oklch(0.99 0.0108288 29.7575)"  # --dwc-color-on-danger-text
  danger-seed: "hsl( 4, 90%, 50% )"  # --dwc-color-danger-seed
  border-color-danger: "oklch(0.32 0.0288769 29.7575)"  # --dwc-border-color-danger
  border-color-danger-emphasis: "oklch(0.556 0.0721923 29.7575)"  # --dwc-border-color-danger-emphasis
  # Info
  info: "oklch(0.49 0.20754 292.014)"  # --dwc-color-info
  info-dark: "oklch(0.42 0.186786 292.314)"  # --dwc-color-info-dark
  info-light: "oklch(0.53 0.21907 291.714)"  # --dwc-color-info-light
  info-alt: "oklch(0.484915 0.2306 292.014 / 0.12)"  # --dwc-color-info-alt
  info-text: "oklch(0.75 0.2306 292.014)"  # --dwc-color-info-text
  on-info-text: "oklch(0.99 0.010377 292.014)"  # --dwc-color-on-info-text
  info-seed: "hsl( 262, 65%, 50% )"  # --dwc-color-info-seed
  border-color-info: "oklch(0.32 0.027672 292.014)"  # --dwc-border-color-info
  border-color-info-emphasis: "oklch(0.556 0.0691799 292.014)"  # --dwc-border-color-info-emphasis
  # Gray
  gray: "oklch(0.88 0.0000170017 21.5195)"  # --dwc-color-gray
  gray-dark: "oklch(0.95 0.00000864997 21.2195)"  # --dwc-color-gray-dark
  gray-light: "oklch(0.8 0.0000199844 21.8195)"  # --dwc-color-gray-light
  gray-alt: "oklch(0.598177 0.0000298275 23.6195 / 0.12)"  # --dwc-color-gray-alt
  gray-text: "oklch(0.75 0.0000298275 23.6195)"  # --dwc-color-gray-text
  on-gray-text: "oklch(0.13 0.00000595059 21.5195)"  # --dwc-color-on-gray-text
  gray-seed: "hsl( 0, 0%, 50% )"  # --dwc-color-gray-seed
  border-color-gray: "oklch(0.32 0.0000035793 23.6195)"  # --dwc-border-color-gray
  border-color-gray-emphasis: "oklch(0.556 0.00000894825 23.6195)"  # --dwc-border-color-gray-emphasis
  # Default
  default: "oklch(0.32 0.008 268.858)"  # --dwc-color-default
  default-dark: "oklch(0.28 0.008 268.858)"  # --dwc-color-default-dark
  default-light: "oklch(0.36 0.008 268.858)"  # --dwc-color-default-light
  default-alt: "oklch(0.510166 0.253545 263.526 / 0.12)"  # --dwc-color-default-alt
  default-text: "oklch(0.75 0.00867959 268.858)"  # --dwc-color-default-text
  on-default-text: "oklch(0.99 0.0004 268.858)"  # --dwc-color-on-default-text
  default-seed: "hsl( 223, 3%, 50% )"  # --dwc-color-default-seed
  border-color-default: "oklch(0.32 0.00104155 268.858)"  # --dwc-border-color-default
  border-color-default-emphasis: "oklch(0.556 0.00260388 268.858)"  # --dwc-border-color-default-emphasis
  # Surfaces
  surface-1: "oklch(0.15 0.004 268.858)"  # --dwc-surface-1
  surface-2: "oklch(0.195 0.004 268.858)"  # --dwc-surface-2
  surface-3: "oklch(0.24 0.004 268.858)"  # --dwc-surface-3
  # Globals
  black: "oklch(0.98 0.0130194 268.858)"  # --dwc-color-black
  white: "oklch(0.12 0.0130194 268.858)"  # --dwc-color-white
  body-text: "oklch(0.98 0.0130194 268.858)"  # --dwc-color-body-text
  # Borders
  border-color: "oklch(0.32 0.00104155 268.858)"  # --dwc-border-color
  border-color-emphasis: "oklch(0.556 0.00260388 268.858)"  # --dwc-border-color-emphasis
  # Overlay
  overlay-background: "oklch(0 0 0 / 0.23)"  # --dwc-overlay-background
typography:
  h1:
    fontFamily: "system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"  # --dwc-font-family-sans
    fontSize: 34px  # --dwc-font-size-3xl
    fontWeight: 700  # --dwc-font-weight-bold
    lineHeight: 1.25  # --dwc-font-line-height
  h2:
    fontFamily: "system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"  # --dwc-font-family-sans
    fontSize: 26px  # --dwc-font-size-2xl
    fontWeight: 700  # --dwc-font-weight-bold
    lineHeight: 1.25  # --dwc-font-line-height
  h3:
    fontFamily: "system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"  # --dwc-font-family-sans
    fontSize: 20px  # --dwc-font-size-xl
    fontWeight: 700  # --dwc-font-weight-bold
    lineHeight: 1.25  # --dwc-font-line-height
  h4:
    fontFamily: "system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"  # --dwc-font-family-sans
    fontSize: 16px  # --dwc-font-size-l
    fontWeight: 700  # --dwc-font-weight-bold
    lineHeight: 1.25  # --dwc-font-line-height
  h5:
    fontFamily: "system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"  # --dwc-font-family-sans
    fontSize: 14px  # --dwc-font-size-m
    fontWeight: 700  # --dwc-font-weight-bold
    lineHeight: 1.25  # --dwc-font-line-height
  h6:
    fontFamily: "system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"  # --dwc-font-family-sans
    fontSize: 13px  # --dwc-font-size-s
    fontWeight: 700  # --dwc-font-weight-bold
    lineHeight: 1.25  # --dwc-font-line-height
    letterSpacing: 0.03em
  body:
    fontFamily: "system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"  # --dwc-font-family-sans
    fontSize: 14px  # --dwc-font-size-m
    fontWeight: 400  # --dwc-font-weight-normal
    lineHeight: 1.25  # --dwc-font-line-height
  p:
    fontFamily: "system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"  # --dwc-font-family-sans
    fontSize: 14px  # --dwc-font-size-m
    fontWeight: 400  # --dwc-font-weight-normal
    lineHeight: 1.5  # --dwc-font-line-height-m
  control:
    fontFamily: "system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"  # --dwc-font-family-sans
    fontSize: 14px  # --dwc-font-size-m
    fontWeight: 600  # --dwc-font-weight-semibold
    lineHeight: 1.25  # --dwc-font-line-height
  font-size-3xs:
    fontFamily: "system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"  # --dwc-font-family-sans
    fontSize: 10px  # --dwc-font-size-3xs
  font-size-2xs:
    fontFamily: "system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"  # --dwc-font-family-sans
    fontSize: 11px  # --dwc-font-size-2xs
  font-size-xs:
    fontFamily: "system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"  # --dwc-font-family-sans
    fontSize: 12px  # --dwc-font-size-xs
  font-size-s:
    fontFamily: "system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"  # --dwc-font-family-sans
    fontSize: 13px  # --dwc-font-size-s
  font-size-m:
    fontFamily: "system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"  # --dwc-font-family-sans
    fontSize: 14px  # --dwc-font-size-m
  font-size-l:
    fontFamily: "system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"  # --dwc-font-family-sans
    fontSize: 16px  # --dwc-font-size-l
  font-size-xl:
    fontFamily: "system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"  # --dwc-font-family-sans
    fontSize: 20px  # --dwc-font-size-xl
  font-size-2xl:
    fontFamily: "system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"  # --dwc-font-family-sans
    fontSize: 26px  # --dwc-font-size-2xl
  font-size-3xl:
    fontFamily: "system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"  # --dwc-font-family-sans
    fontSize: 34px  # --dwc-font-size-3xl
rounded:
  seed: 8px  # --dwc-border-radius-seed
  2xs: 1px  # --dwc-border-radius-2xs
  xs: 2px  # --dwc-border-radius-xs
  s: 4px  # --dwc-border-radius-s
  m: 6px  # --dwc-border-radius-m
  l: 8px  # --dwc-border-radius-l
  xl: 12px  # --dwc-border-radius-xl
  2xl: 16px  # --dwc-border-radius-2xl
  3xl: 24px  # --dwc-border-radius-3xl
  4xl: 32px  # --dwc-border-radius-4xl
  pill: 18px  # --dwc-border-radius-pill
  base: 8px  # --dwc-border-radius
spacing:
  3xs: 1px  # --dwc-space-3xs
  2xs: 2px  # --dwc-space-2xs
  xs: 4px  # --dwc-space-xs
  s: 8px  # --dwc-space-s
  m: 16px  # --dwc-space-m
  l: 20px  # --dwc-space-l
  xl: 24px  # --dwc-space-xl
  2xl: 28px  # --dwc-space-2xl
  3xl: 32px  # --dwc-space-3xl
  base: 8px  # --dwc-space
components:
  button-default:
    backgroundColor: "{colors.default}"  # --dwc-color-default
    textColor: "{colors.primary-text}"  # --dwc-color-primary-text
    typography: "{typography.control}"
    rounded: "{rounded.base}"  # --dwc-border-radius
    height: 36px  # --dwc-size-m
  button-primary:
    backgroundColor: "{colors.primary}"  # --dwc-color-primary
    textColor: "{colors.on-primary-text}"  # --dwc-color-on-primary-text
    typography: "{typography.control}"
    rounded: "{rounded.base}"  # --dwc-border-radius
    height: 36px  # --dwc-size-m
  button-success:
    backgroundColor: "{colors.success}"  # --dwc-color-success
    textColor: "{colors.on-success-text}"  # --dwc-color-on-success-text
    typography: "{typography.control}"
    rounded: "{rounded.base}"  # --dwc-border-radius
    height: 36px  # --dwc-size-m
  button-warning:
    backgroundColor: "{colors.warning}"  # --dwc-color-warning
    textColor: "{colors.on-warning-text}"  # --dwc-color-on-warning-text
    typography: "{typography.control}"
    rounded: "{rounded.base}"  # --dwc-border-radius
    height: 36px  # --dwc-size-m
  button-danger:
    backgroundColor: "{colors.danger}"  # --dwc-color-danger
    textColor: "{colors.on-danger-text}"  # --dwc-color-on-danger-text
    typography: "{typography.control}"
    rounded: "{rounded.base}"  # --dwc-border-radius
    height: 36px  # --dwc-size-m
  button-info:
    backgroundColor: "{colors.info}"  # --dwc-color-info
    textColor: "{colors.on-info-text}"  # --dwc-color-on-info-text
    typography: "{typography.control}"
    rounded: "{rounded.base}"  # --dwc-border-radius
    height: 36px  # --dwc-size-m
  button-gray:
    backgroundColor: "{colors.gray}"  # --dwc-color-gray
    textColor: "{colors.on-gray-text}"  # --dwc-color-on-gray-text
    typography: "{typography.control}"
    rounded: "{rounded.base}"  # --dwc-border-radius
    height: 36px  # --dwc-size-m
  input:
    backgroundColor: "{colors.default-light}"  # --dwc-color-default-light
    textColor: "{colors.body-text}"  # --dwc-color-body-text
    typography: "{typography.control}"
    rounded: "{rounded.base}"  # --dwc-border-radius
    height: 36px  # --dwc-size-m
  checkbox:
    backgroundColor: "{colors.primary}"  # --dwc-color-primary
    textColor: "{colors.on-primary-text}"  # --dwc-color-on-primary-text
    rounded: "{rounded.s}"  # --dwc-border-radius-s
    size: 18px  # --dwc-size-3xs
  radio:
    backgroundColor: "{colors.primary}"  # --dwc-color-primary
    textColor: "{colors.on-primary-text}"  # --dwc-color-on-primary-text
    size: 18px  # --dwc-size-3xs
  switch:
    backgroundColor: "{colors.primary}"  # --dwc-color-primary
    textColor: "{colors.on-primary-text}"  # --dwc-color-on-primary-text
    size: 18px  # --dwc-size-3xs
  badge-primary:
    backgroundColor: "{colors.primary}"  # --dwc-color-primary
    textColor: "{colors.on-primary-text}"  # --dwc-color-on-primary-text
    rounded: "{rounded.pill}"  # --dwc-border-radius-pill
  badge-success:
    backgroundColor: "{colors.success}"  # --dwc-color-success
    textColor: "{colors.on-success-text}"  # --dwc-color-on-success-text
    rounded: "{rounded.pill}"  # --dwc-border-radius-pill
  badge-warning:
    backgroundColor: "{colors.warning}"  # --dwc-color-warning
    textColor: "{colors.on-warning-text}"  # --dwc-color-on-warning-text
    rounded: "{rounded.pill}"  # --dwc-border-radius-pill
  badge-danger:
    backgroundColor: "{colors.danger}"  # --dwc-color-danger
    textColor: "{colors.on-danger-text}"  # --dwc-color-on-danger-text
    rounded: "{rounded.pill}"  # --dwc-border-radius-pill
  badge-info:
    backgroundColor: "{colors.info}"  # --dwc-color-info
    textColor: "{colors.on-info-text}"  # --dwc-color-on-info-text
    rounded: "{rounded.pill}"  # --dwc-border-radius-pill
  badge-gray:
    backgroundColor: "{colors.gray}"  # --dwc-color-gray
    textColor: "{colors.on-gray-text}"  # --dwc-color-on-gray-text
    rounded: "{rounded.pill}"  # --dwc-border-radius-pill
  avatar:
    backgroundColor: "{colors.default}"  # --dwc-color-default
    textColor: "{colors.on-default-text}"  # --dwc-color-on-default-text
    rounded: "{rounded.l}"  # --dwc-border-radius-l
    size: 36px  # --dwc-size-m
  table:
    backgroundColor: "{colors.surface-1}"  # --dwc-surface-1
    textColor: "{colors.body-text}"  # --dwc-color-body-text
  table-header:
    backgroundColor: "{colors.surface-2}"  # --dwc-surface-2
    textColor: "{colors.body-text}"  # --dwc-color-body-text
---

# DWC

## Overview

DWC is a web component design system driven by a single seed color per palette. From two values per palette - a hue and a saturation - the engine generates a full 19-step scale plus contrast-safe text colors, then derives every surface, border, shadow and focus ring from those steps with live CSS `oklch()` math.

The values in this file are a resolved snapshot of the **dark** theme at its default seeds. The real system is dynamic: change a seed hue or flip the mode and every color recalculates at runtime.

**If you are working in a webforJ or DWC project, every token here already exists at runtime as a CSS custom property - consume it directly and ignore the literal values.** Each entry carries its source variable as a trailing `# --dwc-*` comment; reference that with `var(--dwc-...)`. For example `m: 6px  # --dwc-border-radius-m` means write `border-radius: var(--dwc-border-radius-m)`, never `border-radius: 6px`. The engine keeps the `var()` correct across every theme and light/dark mode; the literal is a frozen snapshot of one seed and one mode and will not adapt.

The literal values matter only **outside** DWC - reproducing the look in a design tool, a non-DWC surface, or a preview. Inside a DWC or webforJ app, the tokens are already there.

## Colors

The `colors` block is the **intent layer** - the tokens to actually use. Seven palettes: `primary` (brand), `success`, `warning` and `danger` (their conventional meanings), `info` (complements primary), `gray` (pure neutral), and `default` (the primary hue at very low saturation, backing most neutral UI). Each exposes:

- `{name}` - the fill
- `{name}-dark` - pressed/active state
- `{name}-light` - hover state
- `{name}-alt` - subtle tint background
- `{name}-text` - the color as text on an app surface
- `on-{name}-text` - label text placed on a `{name}` fill
- `{name}-seed` - set this to any CSS color to rebrand the whole palette
- `border-color-{name}` / `-emphasis` - tinted borders

Every `text` / `on-text` pair meets WCAG AA automatically. Surfaces (`surface-1`-`surface-3`) sit beneath content and lift toward the viewer; `black`, `white` and `body-text` adapt per mode.

Behind each palette the engine also generates a full raw scale - `--dwc-color-{name}-5` through `-95` in steps of 5, plus `-text-{n}` and `on-{name}-text-{n}` siblings. **Prefer the variations above; the raw steps are fixed lightness and do not flip with light/dark mode.**

## Typography

The default stack is `system-ui` (San Francisco, Segoe UI, Roboto) with a monospace companion. DWC keeps three independent scales: font size runs 9 steps `3xs`-`3xl` (10px-34px) with `m` (14px) as the body default; font weight runs `thin`-`black` (100-900) with `normal` (400) as default; line height runs `3xs`-`3xl` (1-2) with `xs` (1.25) the component default and `m` (1.5) for body copy.

The `typography` entries above are the text styles: the heading roles `h1`-`h6` (bold, descending through the size scale; `h6` adds `0.03em` letter spacing), `body` and `p`. The `font-size-*` entries list every step of the size scale in the default family so no size is omitted; pair any with a weight and line height from the scales above.

## Layout

Spacing and sizing both follow `rem`-based scales that track the root font size. Use the `spacing` block above for margins and padding - keep a consistent rhythm of tight space inside a group, more between groups, most between sections.

Component dimensions (control heights, icon boxes) come from the **size** scale. Reference as `var(--dwc-size-{name})`, default `m`.

- `3xs` 18px
- `2xs` 22px
- `xs` 26px
- `s` 30px
- `m` 36px (default)
- `l` 44px
- `xl` 52px
- `2xl` 64px
- `3xl` 68px

## Elevation & Depth

Hierarchy comes first from tonal surfaces and borders, with shadows kept subtle. Shadows are tinted from the default seed rather than pure black, and their strength scales up in dark mode so depth stays legible. Six levels, default `m`. Reference as `var(--dwc-shadow-{name})`.

- `xs` `oklch(0.02 0.0173592 268.858 / 0.5) 0px 1px 2px -1px`
- `s` `oklch(0.02 0.0173592 268.858 / 0.2) 0px 3px 5px -2px, oklch(0.02 0.0173592 268.858 / 0.3) 0px 7px 14px -5px`
- `m` `oklch(0.02 0.0173592 268.858 / 0.15) 0px 4px 6px -2px, oklch(0.02 0.0173592 268.858 / 0.3) 0px 12px 16px -4px, oklch(0.02 0.0173592 268.858 / 0.1) 0px 1px 3px 0px`
- `l` `oklch(0.02 0.0173592 268.858 / 0.15) 0px 4px 6px -2px, oklch(0.02 0.0173592 268.858 / 0.25) 0px 12px 16px -4px, oklch(0.02 0.0173592 268.858 / 0.3) 0px 20px 25px -5px, oklch(0.02 0.0173592 268.858 / 0.1) 0px 1px 3px 0px`
- `xl` `oklch(0.02 0.0173592 268.858 / 0.15) 0px 4px 6px -2px, oklch(0.02 0.0173592 268.858 / 0.2) 0px 12px 16px -4px, oklch(0.02 0.0173592 268.858 / 0.25) 0px 20px 25px -5px, oklch(0.02 0.0173592 268.858 / 0.35) 0px 25px 50px -12px, oklch(0.02 0.0173592 268.858 / 0.1) 0px 1px 3px 0px`
- `2xl` `oklch(0.02 0.0173592 268.858 / 0.15) 0px 4px 6px -2px, oklch(0.02 0.0173592 268.858 / 0.2) 0px 12px 16px -4px, oklch(0.02 0.0173592 268.858 / 0.25) 0px 20px 25px -5px, oklch(0.02 0.0173592 268.858 / 0.3) 0px 25px 50px -12px, oklch(0.02 0.0173592 268.858 / 0.4) 0px 40px 80px -20px, oklch(0.02 0.0173592 268.858 / 0.1) 0px 1px 3px 0px`

## Motion

Motion clarifies a change, never decoration. Most interactions should feel near-instant.

**Durations** - reference as `var(--dwc-transition-{name})`.
- `x-fast` 100ms
- `fast` 150ms
- `medium` 250ms (default)
- `slow` 300ms
- `x-slow` 1000ms

**Easing** - reference as `var(--dwc-{name})`.
- `ease` `cubic-bezier(0.4, 0, 0.2, 1)` (general)
- `ease-out` `cubic-bezier(0, 0, 0.2, 1)` (entrances)
- `ease-in` `cubic-bezier(0.4, 0, 1, 1)` (exits)
- `ease-outGlide` `cubic-bezier(0.32, 0.72, 0, 1)` (long smooth moves)
- `ease-inQuad` `cubic-bezier(0.55, 0.085, 0.68, 0.53)`
- `ease-inCubic` `cubic-bezier(0.55, 0.055, 0.675, 0.19)`
- `ease-inQuart` `cubic-bezier(0.895, 0.03, 0.685, 0.22)`
- `ease-inQuint` `cubic-bezier(0.755, 0.05, 0.855, 0.06)`
- `ease-inExpo` `cubic-bezier(0.95, 0.05, 0.795, 0.035)`
- `ease-inCirc` `cubic-bezier(0.6, 0.04, 0.98, 0.335)`
- `ease-outQuad` `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- `ease-outCubic` `cubic-bezier(0.215, 0.61, 0.355, 1)`
- `ease-outQuart` `cubic-bezier(0.165, 0.84, 0.44, 1)`
- `ease-outQuint` `cubic-bezier(0.23, 1, 0.32, 1)`
- `ease-outExpo` `cubic-bezier(0.19, 1, 0.22, 1)`
- `ease-outCirc` `cubic-bezier(0.075, 0.82, 0.165, 1)`
- `ease-inOutQuad` `cubic-bezier(0.455, 0.03, 0.515, 0.955)`
- `ease-inOutCubic` `cubic-bezier(0.645, 0.045, 0.355, 1)`
- `ease-inOutQuart` `cubic-bezier(0.77, 0, 0.175, 1)`
- `ease-inOutQuint` `cubic-bezier(0.86, 0, 0.07, 1)`
- `ease-inOutExpo` `cubic-bezier(1, 0, 0, 1)`
- `ease-inOutCirc` `cubic-bezier(0.785, 0.135, 0.15, 0.86)`
- `ease-inBack` `cubic-bezier(0.36, 0, 0.66, -0.56)`
- `ease-outBack` `cubic-bezier(0.34, 1.56, 0.64, 1)`
- `ease-inOutBack` `cubic-bezier(0.68, -0.6, 0.32, 1.6)`

**Press feedback** - reference as `var(--dwc-scale-{name})`. Scale is never the only signal. It always pairs with a color change.
- `scale-press` 0.97 (3% shrink)
- `scale-press-deep` 0.93 (7% shrink)

## Shapes

Corner radii derive from a single seed and run from `2xs` through `4xl`, plus `round` (50%) for circles and `pill` (half a control height) for fully rounded controls. Smaller radii suit dense controls; larger radii suit menus, cards and modals.

## Components

The `components` block above exposes `button` per filled **theme** (`button-default` through `button-gray`), the single `input` style, and the selection controls, all at the default **expanse (m)**. Button and input share the `control` text style (semibold, size `m`), the bare adaptive radius (`rounded.base`), and the `--dwc-size-m` height. Borders are not a sub-token in this format, so they live here in prose: the button borders with its theme color (the `default` button with `{colors.border-color-default}`), and the input with `{colors.border-color}`.

**Themes.** A filled button fills with `{colors.{theme}}`, takes `{colors.on-{theme}-text}` for its label (the neutral `default` uses `{colors.primary-text}`), borders with `{colors.{theme}}` (`default` uses `{colors.border-color-default}`), darkens to `{theme}-dark` when pressed and lightens to `{theme}-light` on hover. The **outlined** variant (`theme="outlined-{theme}"`) is the same set with a transparent fill and a `{theme}-text` border and label. Every pair is AA-safe.

**Expanses.** Both button and input take an `expanse` of `xs`, `s`, `m` (default), `l`, or `xl`. The expanse sets two tokens: `height: var(--dwc-size-{expanse})` and `font-size: var(--dwc-font-size-{expanse})` - e.g. `m` is 36px / 14px, `xl` is 52px / 20px. Both scales are listed above (`--dwc-size-*` in prose, `--dwc-font-size-*` under typography).

**Selection controls.** `checkbox`, `radio` and `switch` share one palette. Unchecked they show a `{colors.default}` fill with a `{colors.border-color-default}` border. Checked they fill with `{colors.primary}` and reveal an `{colors.on-primary-text}` indicator (a checkmark, a dot, or the switch thumb). The box is `--dwc-size-3xs` (18px), halving with the `expanse`. The checkbox uses `rounded.s`, the radio is a circle, and the switch track is a pill with a round `shadow-m` thumb. All show `focus-ring-default` at `:focus-visible`.

**Badge.** A status pill. `badge-{theme}` fills with `{colors.{theme}}` and labels with `{colors.on-{theme}-text}` at `font-size-s` semibold with a `pill` radius. The default badge uses `gray`. The outlined variant uses a tinted `{theme}-alt` fill with a `{theme}-text` label.

**Avatar.** A `{colors.default}` square at `--dwc-size-m` with `{colors.on-default-text}` initials, rounded `l` for the square shape or a full circle via `shape="circle"`. It follows the same `{theme}` / `on-{theme}-text` pattern as the other controls.

**Table.** The table has no CSS variables of its own - it inherits the global tokens. Rows sit on `{colors.surface-1}` and the header is its own entry, `table-header`, on `{colors.surface-2}` with bold `{colors.body-text}`. Body text is `{colors.body-text}` and borders use `{colors.border-color}`. **Row and header height are set from Java, not CSS** - do not set `height`, `padding`, or `line-height` on table parts. Conditional row and cell styling is applied through part providers (e.g. a selected row on `{colors.primary-alt}`, an error row on `{colors.danger-alt}` with `{colors.danger-text}`) and styled with `::part()`. There are no `--dwc-table-*` tokens to override.

**Focus.** Every interactive element shows a focus ring at `:focus-visible`, never on mouse click. Reference `var(--dwc-focus-ring-{theme})` (default `var(--dwc-focus-ring-default)`, which follows `primary`). It is a two-layer gap ring - a `2px` ring in `surface-1` for separation, then a `2px` ring in the palette color at `0.75` alpha - so it stays visible on filled buttons and outlined inputs alike. Never remove an outline without a visible replacement.

Component internals are styled through CSS Shadow Parts (`::part()`). Compose from these tokens rather than hardcoding per-component values.

## Do's and Don'ts

- **Do** - in a webforJ or DWC project the tokens already exist at runtime, so reference them with `var(--dwc-...)` (named in each token's trailing comment) and ignore the literal values. The literals are only for reproducing the look outside DWC.
- **Do** use the semantic variations (`primary`, `primary-dark`, `on-primary-text`), not raw steps like `primary-50`. Only variations flip with light and dark mode.
- **Do** put `on-{name}-text` on a `{name}` fill and `{name}-text` on a surface. Both are generated to hold WCAG AA (4.5:1).
- **Do** layer surfaces by role - `surface-1` for the page, `surface-2` for cards and toolbars, `surface-3` for menus and dialogs.
- **Do** show the focus ring (`var(--dwc-focus-ring-{name})`) on every interactive element at `:focus-visible`, and never remove an outline without a visible replacement.
- **Do** apply the typography roles rather than setting font size, line height, or weight by hand.
- **Do** reserve a filled accent (`primary`, `danger`, ...) for genuine state or the single most important action on a view.
- **Do** rebrand by setting `--dwc-color-{name}-seed` (or `-h` / `-s`), never by editing individual shades.
- **Don't** hardcode the literal colors, sizes, or shadows. They are frozen to one seed and one mode and will not adapt.
- **Don't** signal state with color alone. Pair it with an icon or a text label.
- **Don't** pair arbitrary text and background colors. Use the generated `text` / `on-text` pairs to keep contrast safe.
- **Don't** swap `gray` for `default`. `gray` is pure neutral and `default` carries a subtle primary tint - they are separate palettes.
- **Don't** lean on the press scale as the only feedback. It always pairs with a color change.
- **Don't** mix more than two font weights, or rounded and sharp corners, in one view.
