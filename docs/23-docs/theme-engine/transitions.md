# Transitions

Transition variables are used to provide consistent transitions throughout your app. It controls the duration to wait before starting an animation effect.

### Example

```css
.element {
  transition: var(--bbj-transition-slow) background-color;
}
```

### Variables

| **Variable**              | **Default Value**            |
| ------------------------- | ---------------------------- |
| `--bbj-transition-x-slow` | 1000ms                       |
| `--bbj-transition-slow`   | 500ms                        |
| `--bbj-transition-medium` | 250ms                        |
| `--bbj-transition-fast`   | 150ms                        |
| `--bbj-transition-x-fast` | 50ms                         |
| `--bbj-transition`        | var(--bbj-transition-medium) |

## Easing

The easing variables define a set of predefined transition-timing functions which can be used in your app to create a smooth transitions and animations.

### Example

```css
.element {
  transition: transform var(--bbj-transition) var(--bbj-ease-inOutBack);
}
```

### Variables

| **Variable**            | **Default Value**                         | **Test Link**                                              |
| ----------------------- | ----------------------------------------- | ---------------------------------------------------------- |
| `--bbj-ease-inQuad`     | `cubic-bezier(0.55, 0.085, 0.68, 0.53)`   | [Test it](http://cubic-bezier.com/#0.55,0.085,0.68,0.53)   |
| `--bbj-ease-outQuad`    | `cubic-bezier(0.25, 0.46, 0.45, 0.94)`    | [Test it](http://cubic-bezier.com/#0.25,0.46,0.45,0.94)    |
| `--bbj-ease-inOutQuad`  | `cubic-bezier(0.455, 0.03, 0.515, 0.955)` | [Test it](http://cubic-bezier.com/#0.455,0.03,0.515,0.955) |
| `--bbj-ease-inCubic`    | `cubic-bezier(0.55, 0.055, 0.675, 0.19)`  | [Test it](http://cubic-bezier.com/#0.55,0.055,0.675,0.19)  |
| `--bbj-ease-inCubic`    | `cubic-bezier(0.55, 0.055, 0.675, 0.19)`  | [Test it](http://cubic-bezier.com/#0.55,0.055,0.675,0.19)  |
| `--bbj-ease-outCubic`   | `cubic-bezier(0.215, 0.61, 0.355, 1)`     | [Test it](http://cubic-bezier.com/#0.215,0.61,0.355,1)     |
| `--bbj-ease-inQutCubic` | `cubic-bezier(0.645, 0.045, 0.355, 1)`    | [Test it](http://cubic-bezier.com/#0.645,0.045,0.355,1)    |
| `--bbj-ease-inQuart`    | `cubic-bezier(0.895, 0.03, 0.685, 0.22)`  | [Test it](http://cubic-bezier.com/#0.895,0.03,0.685,0.22)  |
| `--bbj-ease-outQuart`   | `cubic-bezier(0.165, 0.84, 0.44, 1)`      | [Test it](http://cubic-bezier.com/#0.165,0.84,0.44,1)      |
| `--bbj-ease-inQutQuart` | `cubic-bezier(0.77,0,0.175,1)`            | [Test it](http://cubic-bezier.com/#0.77,0,0.175,1)         |
| `--bbj-ease-inQuint`    | `cubic-bezier(0.755, 0.05, 0.855, 0.06)`  | [Test it](http://cubic-bezier.com/#0.755,0.05,0.855,0.06)  |
| `--bbj-ease-outQuint`   | `cubic-bezier(0.23, 1, 0.32, 1)`          | [Test it](http://cubic-bezier.com/#0.23,1,0.32,1)          |
| `--bbj-ease-inQutQuint` | `cubic-bezier(0.86, 0, 0.07, 1)`          | [Test it](http://cubic-bezier.com/#0.86,0,0.07,1)          |
| `--bbj-ease-inExpo`     | `cubic-bezier(0.95, 0.05, 0.795, 0.035)`  | [Test it](http://cubic-bezier.com/#0.95,0.05,0.795,0.035)  |
| `--bbj-ease-outExpo`    | `cubic-bezier(0.19, 1, 0.22, 1)`          | [Test it](http://cubic-bezier.com/#0.19,1,0.22,1)          |
| `--bbj-ease-inOutExpo`  | `cubic-bezier(1, 0, 0, 1)`                | [Test it](http://cubic-bezier.com/#1,0,0,1)                |
| `--bbj-ease-inCirc`     | `cubic-bezier(0.6, 0.04, 0.98, 0.335)`    | [Test it](http://cubic-bezier.com/#0.6,0.04,0.98,0.335)    |
| `--bbj-ease-outCirc`    | `cubic-bezier(0.075, 0.82, 0.165, 1)`     | [Test it](http://cubic-bezier.com/#0.075,0.82,0.165,1)     |
| `--bbj-ease-inOutCirc`  | `cubic-bezier(0.785, 0.135, 0.15, 0.86)`  | [Test it](http://cubic-bezier.com/#0.785,0.135,0.15,0.86)  |
| `--bbj-ease-inBack`     | `cubic-bezier(0.36, 0, 0.66, -0.56)`      | [Test it](http://cubic-bezier.com/#0.36,0,0.66,-0.56)      |
| `--bbj-ease-outBack`    | `cubic-bezier(0.34, 1.56, 0.64, 1)`       | [Test it](http://cubic-bezier.com/#0.34,1.56,0.64,1)       |
| `--bbj-ease-inOutBack`  | `cubic-bezier(0.68, -0.6, 0.32, 1.6)`     | [Test it](http://cubic-bezier.com/#0.68,-0.6,0.32,1.6)     |
