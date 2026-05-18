# Attributes and Properties

In the DWC client, BBj controls render as web components. Each control exposes the same customization through two channels: an **attribute** (the HTML-side knob) and a **property** (the JavaScript-side knob). They often share a name (e.g. `theme`) but live on different layers of the underlying web component and behave differently at runtime.

?> **DWC only.** The `setAttribute` / `getAttribute` / `setProperty` / `getProperty` methods on `BBjControl` exist across all clients, but GUI, BUI, and WebUI have no concept of attribute or property customization - the calls are no-ops there. Use these channels only when the target deployment is DWC, or guard them with a client check.

## When to use these channels

Most BBj controls already expose their customizations through dedicated methods like `setEnabled`, `setText`, `addItem`, and so on. Prefer those first - they are the documented, supported entry points and may coordinate several internal attributes and properties at once, perform validation, or trigger control-specific behavior. A direct `setAttribute` or `setProperty` call with the same value is not guaranteed to produce the same outcome.

Reach for `setAttribute` or `setProperty` only when a customization is documented under the web component's `Properties` section and has no equivalent BBj method.

## Attributes vs. Properties

| | Attribute | Property |
| --- | --- | --- |
| Layer | HTML attribute on the underlying web component | JavaScript property on the underlying web component |
| Value type | Always a string | Typed (string, number, boolean, object, array) |
| Visible in DOM | Yes, with the attribute's own name (e.g. `theme="danger"`) | Only if the property is marked `Reflects: Yes` in the control docs |
| Best for | Simple string or boolean values that match the documented attribute form | Structured data, large values, or anything that isn't a plain string |
| BBj API | `setAttribute` / `getAttribute` | `setProperty` / `getProperty` |

## Setting and reading attributes

Use [BBjControl::setAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setAttribute.htm) and [BBjControl::getAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getAttribute.htm).

For instance, `BBjButton` exposes `theme` and `expanse`:

```bbj
window! = BBjAPI().openSysGui("X0").addWindow(25,25,150,50,"BBjButton",$00090003$)
window!.setCallback(window!.ON_CLOSE,"eoj")

button! = window!.addButton(1,10,10,130,30,"Button",$$)
button!.setAttribute("theme","danger")
button!.setAttribute("expanse","l")

process_events

eoj:
release
```

Read it back:

```bbj
themeName$ = button!.getAttribute("theme")
```

## Setting and reading properties

Use [BBjControl::setProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setProperty.htm) and [BBjControl::getProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getProperty.htm).

The same customization can usually be written via `setAttribute` as well. `setProperty` is the right channel when the value isn't a plain string or when the property is documented as `Reflects: No` (in which case `setAttribute` would only set the initial attribute, not the live value).

```bbj
button!.setProperty("theme", "danger")
themeName$ = button!.getProperty("theme")
```

## Reflection

Reflection is what keeps the property and the attribute in sync. It is **per-property** and documented in each control's `Properties` section:

- **`Reflects: Yes`** - changing the property updates the attribute on the DOM as well, and vice versa. Either channel can be used to read or write the value, and inspection in browser dev tools will show the current value.
- **`Reflects: No`** - the attribute is only an initial hint. Changing the property does not update the attribute, and changing the attribute after the component is constructed may have no effect. For these, use `setProperty` / `getProperty` to read the live value.

Reflected attributes are mainly there to enable styling. Because the value lives on the DOM, CSS selectors like `dwc-button[theme="danger"]` or `dwc-button[expanse="l"]` can target the control by state. Properties that don't affect styling (labels, callbacks, focus hints) typically don't reflect, since putting them on the DOM wouldn't be useful.

Examples from `BBjButton`:

| Property | Attribute | Reflects |
| --- | --- | --- |
| `theme` | `theme` | Yes |
| `disabled` | `disabled` | Yes |
| `expanse` | `expanse` | Yes |
| `autofocus` | `autofocus` | No |
| `label` | `label` | No |

Other controls have different reflection patterns. Always check the control's `Properties` table to know which channel to read or write through.

## Choosing the right channel

Use the channels in this order:

1. **Dedicated BBj API method** if one exists - `setEnabled`, `setText`, `addItem`, and so on. These are the documented, supported entry points and may coordinate several internal attributes or properties at once. A direct `setAttribute` call with the same value is not guaranteed to produce the same outcome.
2. **`setAttribute`** for customizations documented under the control's `Properties` section that don't have a dedicated BBj method and whose value is a plain string or boolean.
3. **`setProperty`** as a last resort - for properties documented as `Reflects: No` (where `getAttribute` would return the stale initial value) or for the rare property whose value isn't a string.

The reverse applies to reading: prefer the dedicated getter, then `getAttribute` for reflected properties, then `getProperty` for live state of non-reflected properties.
