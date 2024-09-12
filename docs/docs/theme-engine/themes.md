# Themes

BBj includes a [color palette](/theme-engine/colors?id=the-palette) that can be used to customize an application to match a brand or color scheme. The default theme has a light background, but everything is fully customizable.

## Application Themes

BBj has three main themes; the default theme, `light` theme, has a light background. The other two themes are `dark`, which has a dark background tinted with the primary color, and `dark-pure` which has a pure dark background (grayish, not fully black).

## Applying Themes

Themes can applied by setting the `data-app-theme` attribute on the `HTML` element.

```html
<html data-app-theme="dark-pure">
  ...
</html>
```

**With Javascript**

```javascript
document.documentElement.setAttribute('data-app-theme', 'dark-pure');
```

## Overriding Themes

You can easily override the `light` theme by overriding the CSS Properties defined in [:root](https://developer.mozilla.org/en-US/docs/Web/CSS/:root)

?> **Note:** The [:root](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) CSS pseudo-class matches the root element of a tree representing the document. In HTML, `:root` represents the <html> element and is identical to the selector `html`, except that its specificity is higher.

#### Example

```css
:root {
  --dwc-color-primary-h: 215;
  --dwc-color-primary-s: 100%;
  --dwc-color-primary-c: 50;
  --dwc-font-size: var(--dwc-font-size-m);
}
```

To override the `dark` or `dark-pure` theme, you should define your variables in `html[data-app-theme='dark']` and `html[data-app-theme='dark-pure']` respectively.

```css
html[data-app-theme='dark'] {
  --dwc-color-primary-s: 9%;
  --dwc-color-white: hsl(210, 17%, 82%);
}
```

## Create a new theme

BBj makes creating application themes easy. Themes can co-exist in the same application where you can switch between them.

New themes should be defined in `html[data-app-theme='THEME_NAME']` in your application stylesheet.

```css
html[data-app-theme='new-theme'] {
  --dwc-color-primary-h: 280;
  --dwc-color-primary-s: 100%;
  --dwc-color-primary-c: 60;
}
```

## Applying Themes from BBj

Themes can be dynamically injected from BBj using [BBjWebManager](https://documentation.basis.cloud/BASISHelp/WebHelp/bui/BBjBuiManager/bbjbuimanager.htm). To inject a theme, you can use the method [`BBjWebManager::injectStyle`](https://documentation.basis.cloud/BASISHelp/WebHelp/bui/BBjBuiManager/BBjBuiManager_injectStyle.htm). If the theme is a physical file hosted on the BBj webserver/htdocs or any other web server, use [`BBjWebManager::injectStyleUrl`](https://documentation.basis.cloud/BASISHelp/WebHelp/bui/BBjBuiManager/BBjBuiManager_injectStyleUrl.htm). Once the theme is injected, it can be activated using [`BBjWebManager::setTheme`](https://documentation.basis.cloud/BASISHelp/WebHelp/bui/BBjBuiManager/BBjWebManager_setTheme.htm). If you have a custom theme that doesn't extend any of the built-in themes, the same method can accept the name of that theme.


## Automatically Enable Dark Mode

In JavaScript, the `data-app-theme="dark"` attribute can be added to the `<html>` tag by checking if the document matches the media query using [matchMedia()](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia). This will enable dark mode to still work based on the user preference.

```js
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
const switchTheme = shouldAdd => {
  if (shouldAdd) document.documentElement.setAttribute('data-app-theme', 'dark');
  else document.documentElement.removeAttribute('data-app-theme');
};

prefersDark.addListener(mediaQuery => switchTheme(mediaQuery.matches));

switchTheme(prefersDark.matches);
```

?> **Note:** In BBj, you can enable the preferred theme using the method [`BBjWebManager::setTheme`](https://documentation.basis.cloud/BASISHelp/WebHelp/bui/BBjBuiManager/BBjWebManager_setTheme.htm).

# Component Themes

Beside the the application default themes, BBj components support a set component themes based on the default palettes: **Default**, **Primary**, **Success**, **Warning**, **Danger**, **Info** and **Gray**.

?> **Note:** The component theme can be applied per component using the `theme` attribute.

To learn more about configuring components themes, see [Component Themes](theme-engine/colors?id=component-themes).
