# CSS Shadow Parts

CSS Shadow Parts allow developers to style the elements inside a shadow DOM.

## Introduction

BBj UI is set of [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components). Web Components follow the [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) specification in order to encapsulate styles and markup.

?> **Note:** Web Components describe a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps.

The Shadow DOM is useful for preventing styles from leaking out of components and unintentionally applying to other elements.

?> **Note:** An important aspect of web components is encapsulation — being able to keep the markup structure, style, and behavior hidden and separate from other code on the page ensures that different parts do not clash, and that code is kept nice and clean. The Shadow DOM API is a key part of this paradigm, providing a way to attach a hidden, separated DOM to an element.

Due to this encapsulation, Inner elements of a Shadow DOM cannot be targeted directly with CSS.

Using the `bbj-button` component as an example, it renders the following markup:

```html
<bbj-button>
  #shadow-root (opened)
  <span class="control__prefix">...</span>
  <span class="control__label">Button</span>
  <span class="control__suffix">...</span>
  ...
</bbj-button>
```

The `label` text is inside the `#shadow-root`, which means the following CSS will **NOT** work to style the label:

```css
/* Does NOT work */
bbj-button .control__label {
  color: pink;
}
```

CSS shadow parts can be used to overcome the this problem.

## Different Approach

Shadow parts allow you to style inside a shadow tree from the outside. They do not allow you to style any element in the shadow tree; instead, they only allow you to style elements that BBj has marked as styling-eligible.

### Exposing a part

When creating a Shadow DOM component, a part can be added to an element inside of a shadow tree by assigning a part attribute on the element.

?> **Note:** All BBj components automatically expose their own parts for styling. You can find the list of exposed parts under the `Shadow Parts` section of the component documentation.

For instance , you can see how the `bbj-button` component exposes its parts `(label , suffix , prefix)`:

```html
<bbj-button>
  #shadow-root (opened)
  <span part="prefix" class="control__prefix">...</span>
  <span part="label" class="control__label">Button</span>
  <span part="suffix" class="control__suffix">...</span>
  ...
</bbj-button>
```

With these parts exposed, the component can be styled using [::part](https://developer.mozilla.org/en-US/docs/Web/CSS/::part).

### ::part()

The `::part()` pseudo-element enables developers to select elements within a shadow tree that have been exposed through the part attribute.

For instance `bbj-button` exposes a `label` part for styling the text - we can customize it in the following way:

```
bbj-button::part(label) {
  color: red;
}
```

You can use other pseudo elements or selectors (that were not explicitly exposed as shadow parts), so the following works:

```css
bbj-button::part(label):hover {
  color: pink;
}
```

!> **Important** You cannot select inside of shadow parts. so the following won't work

```css
/* Does NOT work */
bbj-button::part(label) span {
  ...;
}
```
