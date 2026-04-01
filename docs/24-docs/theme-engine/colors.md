# Colors

Color variables help maintain consistent use of color throughout your app. BBj provides a palette for colors that you can use as a foundation for your application design.

Color variables can be referenced using the `--dwc-color-{name}-{n}` CSS custom property, where `{name}` is the name of the palette and `{n}` is the numeric value of the desired swatch.

?> **Note:** `{n}` is a value between `5` and `95` where step is `5` and it refers to the lightness of the color.

```css
.element {
  background-color: var(--dwc-color-primary-40);
  color: var(--dwc-color-primary-text-40);
}
```

## The Palette

BBj configures seven palettes plus the `black/white` palette where each palette is a variations (shadows and tints) of a semantic color.

- The `default` palette (aka The tone palette) consists of gray variations which are tinted with the primary color. This palette is used for almost all components.
- The `primary` palette is typically based on a brand color.
- The `success`, `warning`, and `danger` are used to visualize actions that correspond to their respective meanings.
- The `info` palette can be used a complementary palette for the `primary` one.
- The `gray` palette consists of pure gray variations.
- The `black/white` palette consists of two constant colors:
  ```css
  --dwc-color-white: white;
  --dwc-color-black: black;
  ```

Each palette is generated dynamically based on three variables: `hue` , `saturation` and `contrast-threshold`.

| **Palette Variable** | **Description**                                                                                                                                                                                                                                                                                               |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hue`                | The `<angle>` of the color circle given in degrees, rads, grads, or turns. When written as a unitless number, it is interpreted as a degree.                                                                                                                                                                   |
| `saturation`         | The value is given in percentage. 100% saturation is completely saturated, while 0% is completely unsaturated (gray).                                                                                                                                                                                         |
| `contrast-threshold` | The lightness threshold where the text color should flip to black. For instance setting this variable to `50` means the text color is white for backgrounds with lightness lower than `50` and black for backgrounds with lightness higher than `50`. The value of this variable should between `0` and `100`. |

The following is the list of all variables which control the generated palettes.

<!-- tabs:start -->

#### **Default / Tone**

| **Variable**                             | **Default Value**            |
| ---------------------------------------- | ---------------------------- |
| `--dwc-color-default-h`                | var(--dwc-color-primary-h) |
| `--dwc-color-default-s`         | 38%                          |
| `--dwc-color-default-c` | 50                           |

#### **Primary**

| **Variable**                             | **Default Value** |
| ---------------------------------------- | ----------------- |
| `--dwc-color-primary-h`                | 211               |
| `--dwc-color-primary-s`         | 100%              |
| `--dwc-color-primary-c` | 50                |

#### **Success**

| **Variable**                             | **Default Value** |
| ---------------------------------------- | ----------------- |
| `--dwc-color-success-h`                | 133               |
| `--dwc-color-success-s`         | 67%               |
| `--dwc-color-success-c` | 35                |

#### **Warning**

| **Variable**                             | **Default Value** |
| ---------------------------------------- | ----------------- |
| `--dwc-color-warning-h`                | 39                |
| `--dwc-color-warning-s`         | 100%              |
| `--dwc-color-warning-c` | 35                |

#### **Danger**

| **Variable**                            | **Default Value** |
| --------------------------------------- | ----------------- |
| `--dwc-color-danger-h`                | 3                 |
| `--dwc-color-danger-s`         | 100%              |
| `--dwc-color-danger-c` | 50                |

#### **Info**

| **Variable**                          | **Default Value** |
| ------------------------------------- | ----------------- |
| `--dwc-color-info-h`                | 287               |
| `--dwc-color-info-s`         | 61%               |
| `--dwc-color-info-c` | 55                |

#### **Gray**

| **Variable**                          | **Default Value** |
| ------------------------------------- | ----------------- |
| `--dwc-color-gray-h`                | 0                 |
| `--dwc-color-gray-s`         | 0%                |
| `--dwc-color-gray-c` | 50                |

<!-- tabs:end -->

### Modifying Palettes

To modify a palette, you need to change all the defined properties for that palette. The variations (shadows and tints) will be recalculated automatically.

For instance to change the `primary` palette

```css
:root {
  --dwc-color-primary-h: 225;
  --dwc-color-primary-s: 100%;
  --dwc-color-primary-c: 60;
}
```

# Component Themes

BBj abstracts the usage of the available palettes with a higher abstract set of variables to theme all components. In case the default palettes don't meet your design needs, you can create your own palettes and apply them by modifying the abstract variables.

The abstract variables are divided into four groups: `normal`, `dark`, `light` and `alt`.

1. `normal` variables are used to highlight the components structure.
2. `dark` variables are used mainly for `selected/active` states.
3. `light` variables are used mainly for `hover/focus` states.
4. `alt` variables are used mainly for `highlight` states.

<!-- tabs:start -->

#### **Default / Tone**

```css
--dwc-color-default-dark: var(--dwc-color-default-85);
--dwc-color-on-default-text-dark: var(--dwc-color-default-text-85);
--dwc-color-default-text-dark: var(--dwc-color-default-35);

--dwc-color-default: var(--dwc-color-default-90);
--dwc-color-on-default-text: var(--dwc-color-default-text-90);
--dwc-color-default-text: var(--dwc-color-default-40);

--dwc-color-default-light: var(--dwc-color-default-95);
--dwc-color-on-default-text-light: var(--dwc-color-default-text-95);
--dwc-color-default-text-light: var(--dwc-color-default-45);

--dwc-color-default-alt: var(--dwc-color-primary-alt);
--dwc-color-on-default-text-alt: var(--dwc-color-on-primary-text-alt);

--dwc-border-color-default: var(--dwc-border-color-primary);
--dwc-focus-ring-default: var(--dwc-focus-ring-primary);
```

#### **Primary**

```css
--dwc-color-primary-dark: var(--dwc-color-primary-35);
--dwc-color-on-primary-text-dark: var(--dwc-color-primary-text-35);
--dwc-color-primary-text-dark: var(--dwc-color-primary-30);

--dwc-color-primary: var(--dwc-color-primary-40);
--dwc-color-on-primary-text: var(--dwc-color-primary-text-40);
--dwc-color-primary-text: var(--dwc-color-primary-35);

--dwc-color-primary-light: var(--dwc-color-primary-45);
--dwc-color-on-primary-text-light: var(--dwc-color-primary-text-45);
--dwc-color-primary-text-light: var(--dwc-color-primary-40);

--dwc-color-primary-alt: var(--dwc-color-primary-95);
--dwc-color-on-primary-text-alt: var(--dwc-color-primary-text-95);

--dwc-border-color-primary: var(--dwc-color-primary);
--dwc-focus-ring-primary: 0 0 0 var(--dwc-focus-ring-width) hsla(
    var(--dwc-color-primary-h),
    var(--dwc-color-primary-s),
    var(--dwc-focus-ring-l),
    var(--dwc-focus-ring-a)
  );
```

#### **Success**

```css
--dwc-color-success-dark: var(--dwc-color-success-35);
--dwc-color-on-success-text-dark: var(--dwc-color-success-text-35);
--dwc-color-success-text-dark: var(--dwc-color-success-15);

--dwc-color-success: var(--dwc-color-success-40);
--dwc-color-on-success-text: var(--dwc-color-success-text-40);
--dwc-color-success-text: var(--dwc-color-success-20);

--dwc-color-success-light: var(--dwc-color-success-45);
--dwc-color-on-success-text-light: var(--dwc-color-success-text-45);
--dwc-color-success-text-light: var(--dwc-color-success-25);

--dwc-color-success-alt: var(--dwc-color-success-95);
--dwc-color-on-success-text-alt: var(--dwc-color-success-text-95);

--dwc-border-color-success: var(--dwc-color-success);
--dwc-focus-ring-success: 0 0 0 var(--dwc-focus-ring-width) hsla(
    var(--dwc-color-success-h),
    var(--dwc-color-success-s),
    var(--dwc-focus-ring-l),
    var(--dwc-focus-ring-a)
  );
```

#### **Warning**

```css
--dwc-color-warning-dark: var(--dwc-color-warning-35);
--dwc-color-on-warning-text-dark: var(--dwc-color-warning-text-35);
--dwc-color-warning-text-dark: var(--dwc-color-warning-15);

--dwc-color-warning: var(--dwc-color-warning-40);
--dwc-color-on-warning-text: var(--dwc-color-warning-text-40);
--dwc-color-warning-text: var(--dwc-color-warning-20);

--dwc-color-warning-light: var(--dwc-color-warning-45);
--dwc-color-on-warning-text-light: var(--dwc-color-warning-text-45);
--dwc-color-warning-text-light: var(--dwc-color-warning-25);

--dwc-color-warning-alt: var(--dwc-color-warning-95);
--dwc-color-on-warning-text-alt: var(--dwc-color-warning-text-95);

--dwc-border-color-warning: var(--dwc-color-warning);
--dwc-focus-ring-warning: 0 0 0 var(--dwc-focus-ring-width) hsla(
    var(--dwc-color-warning-h),
    var(--dwc-color-warning-s),
    var(--dwc-focus-ring-l),
    var(--dwc-focus-ring-a)
  );
```

#### **Danger**

```css
--dwc-color-danger-dark: var(--dwc-color-danger-35);
--dwc-color-on-danger-text-dark: var(--dwc-color-danger-text-35);
--dwc-color-danger-text-dark: var(--dwc-color-danger-30);

--dwc-color-danger: var(--dwc-color-danger-40);
--dwc-color-on-danger-text: var(--dwc-color-danger-text-40);
--dwc-color-danger-text: var(--dwc-color-danger-35);

--dwc-color-danger-light: var(--dwc-color-danger-45);
--dwc-color-on-danger-text-light: var(--dwc-color-danger-text-45);
--dwc-color-danger-text-light: var(--dwc-color-danger-40);

--dwc-color-danger-alt: var(--dwc-color-danger-95);
--dwc-color-on-danger-text-alt: var(--dwc-color-danger-text-95);

--dwc-border-color-danger: var(--dwc-color-danger);
--dwc-focus-ring-danger: 0 0 0 var(--dwc-focus-ring-width) hsla(
    var(--dwc-color-danger-h),
    var(--dwc-color-danger-s),
    var(--dwc-focus-ring-l),
    var(--dwc-focus-ring-a)
  );
```

#### **Info**

```css
--dwc-color-info-dark: var(--dwc-color-info-35);
--dwc-color-on-info-text-dark: var(--dwc-color-info-text-35);
--dwc-color-info-text-dark: var(--dwc-color-info-35);

--dwc-color-info: var(--dwc-color-info-40);
--dwc-color-on-info-text: var(--dwc-color-info-text-40);
--dwc-color-info-text: var(--dwc-color-info-40);

--dwc-color-info-light: var(--dwc-color-info-45);
--dwc-color-on-info-text-light: var(--dwc-color-info-text-45);
--dwc-color-info-text-light: var(--dwc-color-info-45);

--dwc-color-info-alt: var(--dwc-color-info-95);
--dwc-color-on-info-text-alt: var(--dwc-color-info-text-95);

--dwc-border-color-info: var(--dwc-color-info);
--dwc-focus-ring-info: 0 0 0 var(--dwc-focus-ring-width) hsla(
    var(--dwc-color-info-h),
    var(--dwc-color-info-s),
    var(--dwc-focus-ring-l),
    var(--dwc-focus-ring-a)
  );
```

#### **Gray**

```css
--dwc-color-gray-dark: var(--dwc-color-gray-10);
--dwc-color-on-gray-text-dark: var(--dwc-color-gray-text-10);
--dwc-color-gray-text-dark: var(--dwc-color-gray-15);

--dwc-color-gray: var(--dwc-color-gray-15);
--dwc-color-on-gray-text: var(--dwc-color-gray-text-15);
--dwc-color-gray-text: var(--dwc-color-gray-20);

--dwc-color-gray-light: var(--dwc-color-gray-20);
--dwc-color-on-gray-text-light: var(--dwc-color-gray-text-20);
--dwc-color-gray-text-light: var(--dwc-color-gray-25);

--dwc-color-gray-alt: var(--dwc-color-gray-95);
--dwc-color-on-gray-text-alt: var(--dwc-color-gray-text-95);

--dwc-border-color-gray: var(--dwc-color-gray);
--dwc-focus-ring-gray: 0 0 0 var(--dwc-focus-ring-width) hsla(
    var(--dwc-color-gray-h),
    var(--dwc-color-gray-s),
    var(--dwc-focus-ring-l),
    var(--dwc-focus-ring-a)
  );
```

<!-- tabs:end -->

### Normal

| Variable                           | Description                                                             |
| ---------------------------------- | ----------------------------------------------------------------------- |
| `--dwc-color-${name}`         | The default color. Used mainly for backgrounds and some components use it for borders. |                                                                                       |
| `--dwc-color-on-${name}-text` | The text color when the text's background is `--dwc-color-${name}`. |
| `--dwc-color-${name}-text`    | The text color when it is used on the app background.<br> (The app background is one of the defined BBj surfaces). |
| `--dwc-border-color-${name}`  | The border color. Used only in focus,hover and active states. |
| `--dwc-focus-ring-${name}`    | The focus ring shadow. Used only when the component has focus visible. |

### Darker variation

| Variable                           | Description                                                             |
| ---------------------------------- | ----------------------------------------------------------------------- |
| `--dwc-color-primary-${name}`         | A darker version of `--dwc-color-${name}`. Used mostly for active states. |
| `--dwc-color-on-primary-text-${name}` | The text color when the text's background is `--dwc-color-primary-${name}`, |
| `--dwc-color-primary-text-${name}`    | A darker version of `--dwc-color-${name}-text`.                         |

### Lighter variation

| Variable                            | Description                                                              |
| ----------------------------------- | ------------------------------------------------------------------------ |
| `--dwc-color-${name}-light`         | A lighter version of `--dwc-color-${name}`. Used mostly for focus and hover states, |
| `--dwc-color-on-${name}-text-light` | The text color when the text's background is `--dwc-color-${name}-light`, |
| `--dwc-color-${name}-text-light`    | A lighter version of `--dwc-color-${name}-text`.                         |


### Alt variation

| Variable                            | Description                                                              |
| ----------------------------------- | ------------------------------------------------------------------------ |
| `--dwc-color-${name}-alt`         | A very light version of `--dwc-color-${name}`. Used mostly for highlight state (For instance when a menu item is focused by keyboard).|
| `--dwc-color-on-${name}-text-alt` | The text color when the text's background is `--dwc-color-${name}-alt`. |