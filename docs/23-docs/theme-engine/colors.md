# Colors

Color variables help maintain consistent use of color throughout your app. BBj provides a palette for colors that you can use as a foundation for your application design.

Color variables can be referenced using the `--bbj-color-{name}-{n}` CSS custom property, where `{name}` is the name of the palette and `{n}` is the numeric value of the desired swatch.

?> **Note:** `{n}` is a value between `5` and `95` where step is `5` and it refers to the lightness of the color.

```css
.element {
  background-color: var(--bbj-color-primary-40);
  color: var(--bbj-color-primary-text-40);
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
  --bbj-color-white: white;
  --bbj-color-black: black;
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
| `--bbj-color-default-h`                | var(--bbj-color-primary-h) |
| `--bbj-color-default-s`         | 38%                          |
| `--bbj-color-default-c` | 50                           |

#### **Primary**

| **Variable**                             | **Default Value** |
| ---------------------------------------- | ----------------- |
| `--bbj-color-primary-h`                | 211               |
| `--bbj-color-primary-s`         | 100%              |
| `--bbj-color-primary-c` | 50                |

#### **Success**

| **Variable**                             | **Default Value** |
| ---------------------------------------- | ----------------- |
| `--bbj-color-success-h`                | 133               |
| `--bbj-color-success-s`         | 67%               |
| `--bbj-color-success-c` | 35                |

#### **Warning**

| **Variable**                             | **Default Value** |
| ---------------------------------------- | ----------------- |
| `--bbj-color-warning-h`                | 39                |
| `--bbj-color-warning-s`         | 100%              |
| `--bbj-color-warning-c` | 35                |

#### **Danger**

| **Variable**                            | **Default Value** |
| --------------------------------------- | ----------------- |
| `--bbj-color-danger-h`                | 3                 |
| `--bbj-color-danger-s`         | 100%              |
| `--bbj-color-danger-c` | 50                |

#### **Info**

| **Variable**                          | **Default Value** |
| ------------------------------------- | ----------------- |
| `--bbj-color-info-h`                | 287               |
| `--bbj-color-info-s`         | 61%               |
| `--bbj-color-info-c` | 55                |

#### **Gray**

| **Variable**                          | **Default Value** |
| ------------------------------------- | ----------------- |
| `--bbj-color-gray-h`                | 0                 |
| `--bbj-color-gray-s`         | 0%                |
| `--bbj-color-gray-c` | 50                |

<!-- tabs:end -->

### Modifying Palettes

To modify a palette, you need to change all the defined properties for that palette. The variations (shadows and tints) will be recalculated automatically.

For instance to change the `primary` palette

```css
:root {
  --bbj-color-primary-h: 225;
  --bbj-color-primary-s: 100%;
  --bbj-color-primary-c: 60;
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
--bbj-color-default-dark: var(--bbj-color-default-85);
--bbj-color-on-default-text-dark: var(--bbj-color-default-text-85);
--bbj-color-default-text-dark: var(--bbj-color-default-35);

--bbj-color-default: var(--bbj-color-default-90);
--bbj-color-on-default-text: var(--bbj-color-default-text-90);
--bbj-color-default-text: var(--bbj-color-default-40);

--bbj-color-default-light: var(--bbj-color-default-95);
--bbj-color-on-default-text-light: var(--bbj-color-default-text-95);
--bbj-color-default-text-light: var(--bbj-color-default-45);

--bbj-color-default-alt: var(--bbj-color-primary-alt);
--bbj-color-on-default-text-alt: var(--bbj-color-on-primary-text-alt);

--bbj-border-color-default: var(--bbj-border-color-primary);
--bbj-focus-ring-default: var(--bbj-focus-ring-primary);
```

#### **Primary**

```css
--bbj-color-primary-dark: var(--bbj-color-primary-35);
--bbj-color-on-primary-text-dark: var(--bbj-color-primary-text-35);
--bbj-color-primary-text-dark: var(--bbj-color-primary-30);

--bbj-color-primary: var(--bbj-color-primary-40);
--bbj-color-on-primary-text: var(--bbj-color-primary-text-40);
--bbj-color-primary-text: var(--bbj-color-primary-35);

--bbj-color-primary-light: var(--bbj-color-primary-45);
--bbj-color-on-primary-text-light: var(--bbj-color-primary-text-45);
--bbj-color-primary-text-light: var(--bbj-color-primary-40);

--bbj-color-primary-alt: var(--bbj-color-primary-95);
--bbj-color-on-primary-text-alt: var(--bbj-color-primary-text-95);

--bbj-border-color-primary: var(--bbj-color-primary);
--bbj-focus-ring-primary: 0 0 0 var(--bbj-focus-ring-width) hsla(
    var(--bbj-color-primary-h),
    var(--bbj-color-primary-s),
    var(--bbj-focus-ring-l),
    var(--bbj-focus-ring-a)
  );
```

#### **Success**

```css
--bbj-color-success-dark: var(--bbj-color-success-35);
--bbj-color-on-success-text-dark: var(--bbj-color-success-text-35);
--bbj-color-success-text-dark: var(--bbj-color-success-15);

--bbj-color-success: var(--bbj-color-success-40);
--bbj-color-on-success-text: var(--bbj-color-success-text-40);
--bbj-color-success-text: var(--bbj-color-success-20);

--bbj-color-success-light: var(--bbj-color-success-45);
--bbj-color-on-success-text-light: var(--bbj-color-success-text-45);
--bbj-color-success-text-light: var(--bbj-color-success-25);

--bbj-color-success-alt: var(--bbj-color-success-95);
--bbj-color-on-success-text-alt: var(--bbj-color-success-text-95);

--bbj-border-color-success: var(--bbj-color-success);
--bbj-focus-ring-success: 0 0 0 var(--bbj-focus-ring-width) hsla(
    var(--bbj-color-success-h),
    var(--bbj-color-success-s),
    var(--bbj-focus-ring-l),
    var(--bbj-focus-ring-a)
  );
```

#### **Warning**

```css
--bbj-color-warning-dark: var(--bbj-color-warning-35);
--bbj-color-on-warning-text-dark: var(--bbj-color-warning-text-35);
--bbj-color-warning-text-dark: var(--bbj-color-warning-15);

--bbj-color-warning: var(--bbj-color-warning-40);
--bbj-color-on-warning-text: var(--bbj-color-warning-text-40);
--bbj-color-warning-text: var(--bbj-color-warning-20);

--bbj-color-warning-light: var(--bbj-color-warning-45);
--bbj-color-on-warning-text-light: var(--bbj-color-warning-text-45);
--bbj-color-warning-text-light: var(--bbj-color-warning-25);

--bbj-color-warning-alt: var(--bbj-color-warning-95);
--bbj-color-on-warning-text-alt: var(--bbj-color-warning-text-95);

--bbj-border-color-warning: var(--bbj-color-warning);
--bbj-focus-ring-warning: 0 0 0 var(--bbj-focus-ring-width) hsla(
    var(--bbj-color-warning-h),
    var(--bbj-color-warning-s),
    var(--bbj-focus-ring-l),
    var(--bbj-focus-ring-a)
  );
```

#### **Danger**

```css
--bbj-color-danger-dark: var(--bbj-color-danger-35);
--bbj-color-on-danger-text-dark: var(--bbj-color-danger-text-35);
--bbj-color-danger-text-dark: var(--bbj-color-danger-30);

--bbj-color-danger: var(--bbj-color-danger-40);
--bbj-color-on-danger-text: var(--bbj-color-danger-text-40);
--bbj-color-danger-text: var(--bbj-color-danger-35);

--bbj-color-danger-light: var(--bbj-color-danger-45);
--bbj-color-on-danger-text-light: var(--bbj-color-danger-text-45);
--bbj-color-danger-text-light: var(--bbj-color-danger-40);

--bbj-color-danger-alt: var(--bbj-color-danger-95);
--bbj-color-on-danger-text-alt: var(--bbj-color-danger-text-95);

--bbj-border-color-danger: var(--bbj-color-danger);
--bbj-focus-ring-danger: 0 0 0 var(--bbj-focus-ring-width) hsla(
    var(--bbj-color-danger-h),
    var(--bbj-color-danger-s),
    var(--bbj-focus-ring-l),
    var(--bbj-focus-ring-a)
  );
```

#### **Info**

```css
--bbj-color-info-dark: var(--bbj-color-info-35);
--bbj-color-on-info-text-dark: var(--bbj-color-info-text-35);
--bbj-color-info-text-dark: var(--bbj-color-info-35);

--bbj-color-info: var(--bbj-color-info-40);
--bbj-color-on-info-text: var(--bbj-color-info-text-40);
--bbj-color-info-text: var(--bbj-color-info-40);

--bbj-color-info-light: var(--bbj-color-info-45);
--bbj-color-on-info-text-light: var(--bbj-color-info-text-45);
--bbj-color-info-text-light: var(--bbj-color-info-45);

--bbj-color-info-alt: var(--bbj-color-info-95);
--bbj-color-on-info-text-alt: var(--bbj-color-info-text-95);

--bbj-border-color-info: var(--bbj-color-info);
--bbj-focus-ring-info: 0 0 0 var(--bbj-focus-ring-width) hsla(
    var(--bbj-color-info-h),
    var(--bbj-color-info-s),
    var(--bbj-focus-ring-l),
    var(--bbj-focus-ring-a)
  );
```

#### **Gray**

```css
--bbj-color-gray-dark: var(--bbj-color-gray-10);
--bbj-color-on-gray-text-dark: var(--bbj-color-gray-text-10);
--bbj-color-gray-text-dark: var(--bbj-color-gray-15);

--bbj-color-gray: var(--bbj-color-gray-15);
--bbj-color-on-gray-text: var(--bbj-color-gray-text-15);
--bbj-color-gray-text: var(--bbj-color-gray-20);

--bbj-color-gray-light: var(--bbj-color-gray-20);
--bbj-color-on-gray-text-light: var(--bbj-color-gray-text-20);
--bbj-color-gray-text-light: var(--bbj-color-gray-25);

--bbj-color-gray-alt: var(--bbj-color-gray-95);
--bbj-color-on-gray-text-alt: var(--bbj-color-gray-text-95);

--bbj-border-color-gray: var(--bbj-color-gray);
--bbj-focus-ring-gray: 0 0 0 var(--bbj-focus-ring-width) hsla(
    var(--bbj-color-gray-h),
    var(--bbj-color-gray-s),
    var(--bbj-focus-ring-l),
    var(--bbj-focus-ring-a)
  );
```

<!-- tabs:end -->

### Normal

| Variable                           | Description                                                             |
| ---------------------------------- | ----------------------------------------------------------------------- |
| `--bbj-color-${name}`         | The default color. Used mainly for backgrounds and some components use it for borders. |                                                                                       |
| `--bbj-color-on-${name}-text` | The text color when the text's background is `--bbj-color-${name}`. |
| `--bbj-color-${name}-text`    | The text color when it is used on the app background.<br> (The app background is one of the defined BBj surfaces). |
| `--bbj-border-color-${name}`  | The border color. Used only in focus,hover and active states. |
| `--bbj-focus-ring-${name}`    | The focus ring shadow. Used only when the component has focus visible. |

### Darker variation

| Variable                           | Description                                                             |
| ---------------------------------- | ----------------------------------------------------------------------- |
| `--bbj-color-primary-${name}`         | A darker version of `--bbj-color-${name}`. Used mostly for active states. |
| `--bbj-color-on-primary-text-${name}` | The text color when the text's background is `--bbj-color-primary-${name}`, |
| `--bbj-color-primary-text-${name}`    | A darker version of `--bbj-color-${name}-text`.                         |

### Lighter variation

| Variable                            | Description                                                              |
| ----------------------------------- | ------------------------------------------------------------------------ |
| `--bbj-color-${name}-light`         | A lighter version of `--bbj-color-${name}`. Used mostly for focus and hover states, |
| `--bbj-color-on-${name}-text-light` | The text color when the text's background is `--bbj-color-${name}-light`, |
| `--bbj-color-${name}-text-light`    | A lighter version of `--bbj-color-${name}-text`.                         |


### Alt variation

| Variable                            | Description                                                              |
| ----------------------------------- | ------------------------------------------------------------------------ |
| `--bbj-color-${name}-alt`         | A very light version of `--bbj-color-${name}`. Used mostly for highlight state (For instance when a menu item is focused by keyboard).|
| `--bbj-color-on-${name}-text-alt` | The text color when the text's background is `--bbj-color-${name}-alt`. |