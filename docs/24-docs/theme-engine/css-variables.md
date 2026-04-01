# CSS Variables

CSS Variables are used in the design of BBj components to allow for easy application customization. CSS variables are entities defined by BBj Theme Engine that contain specific values, which can be reused throughout your application. They also allow for dynamic CSS changes at runtime (which previously required a CSS preprocessor Like [SASS](https://sass-lang.com/) , [LESS](https://lesscss.org/) , ...). They reduce copy-paste, ensure consistency, and make style sheets easier to read and understand.

## Defining Values

CSS properties can be defined inside any CSS selector, scoping them to that particular selector. But the most common place to define custom properties is in the `:root` selector or at the document root, the `<html>` element. 

?> **Note:** The [:root](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) CSS pseudo-class matches the root element of a tree representing the document. In HTML, `:root` represents the <html> element and is identical to the selector `html`, except that its specificity is higher.

Variables start with a double-dash, to distinguish them from standard properties and avoid naming collisions with future standards.

```css
:root {
  --app-background: orange;
}
```

The value of a CSS variable can be any string. They are not limited to existing CSS property values. Non-standard property values are mainly useful together with JavaScript.

For example, in the following we define a CSS variable with non-standard values:

```css
html {
  --app-title: BBj
}
```

## Component Variables

To set a CSS variable for a specific component, add the variable inside its selector

```css
dwc-button {
  --dwc-button-font-weight: 400
}
```

?> **Note:** Each component/BBjControl defines a list of supported CSS variables/properties that can be set to customize the look and feel of that specific component.
You can find these variables listed under the `CSS properties` section of the component documentation.


## Using Properties

You can use the [var()](https://developer.mozilla.org/en-US/docs/Web/CSS/var()) function to get the value of a custom property.

```css
.panel {
  background-color: var(--app-background);
}
```

You can also define a fallback value for cases where the custom property is not defined:

```css
.panel {
  background-color: var(--app-background, red);
}
```

## With JavaScript

CSS variables can also be changed via JavaScript:

```javascript
// Set a CSS variable
const el = document.querySelector('dwc-button');
el.style.setProperty('--dwc-button-font-weight', '400');

// Get a CSS variable
const value = el.style.getPropertyValue('--dwc-font-size-m');
```

?> **Note:** BBj developers can set CSS variables with Javascript though [BBjHtmlView::executeScript](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/Window/bbjhtmlview/BBjHtmlView_executeScript.htm) and in BBj `21.10` and higher using `BBjSysGui::executeScript`

## Resources

- [Using CSS custom properties (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [A Complete Guide to Custom Properties](https://css-tricks.com/a-complete-guide-to-custom-properties/)