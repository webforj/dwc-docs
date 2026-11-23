# Appearance and motion

Select the light or dark theme first. Then decide how widely the change should apply. A token sets an application-wide value. A client property styles an individual control.

## Set the primary color

The primary seed supplies the colors for primary actions, selections and focus outlines. In the delivery form, set the seed after installing the Look and Feel to turn the Save button violet. In Java, import **java.awt.Color**. In BBj, create the color in the client JVM with **@**.

**Java**

```java
DwcLookAndFeel.setToken("--dwc-color-primary-seed", new Color(117, 67, 188));
```

**BBj**

```bbj
primaryColor! = new java.awt.Color@(117, 67, 188)
DwcLookAndFeel@.setToken("--dwc-color-primary-seed", primaryColor!)
```

<img src="./swing/files/delivery-violet.png" width="370" alt="Delivery form with a violet primary Save button">

Order Desk shows the violet primary color across a full window in DWC Dark. Look at the selected order and the Save order button. The Delete button keeps its danger color.

<div class="swing-gallery">
  <a href="./swing/files/order-desk/order-desk-dark-violet.png" target="_blank" rel="noopener"><img src="./swing/files/order-desk/order-desk-dark-violet.webp" alt="" width="200" height="144"><span>Dark · Violet</span></a>
</div>

[Compare the default, violet, teal, and orange primary colors in Order Desk](swing/order-desk.md).

An override survives switching between light and dark. To restore the palette's own primary color, clear the override.

**Java**

```java
DwcLookAndFeel.setToken("--dwc-color-primary-seed", null);
```

**BBj**

```bbj
DwcLookAndFeel@.setToken("--dwc-color-primary-seed", null())
```

## Choose a color at the right level

| Goal | Choose |
| --- | --- |
| Set the application’s primary color | Set the primary seed. Other semantic colors, such as danger, retain their own palette. |
| Change a semantic color throughout the application | Set its seed, for example **--dwc-color-danger-seed** for danger. |
| Change one family of controls | Set its component token, for example **--dwc-button-background**. Check the result in both palettes. |
| Emphasize one action | Give that button the primary theme. [Style the Save button](swing/client-properties.md). |

## Choose a font

The jar includes Inter Regular and SemiBold. To use the platform font family, set the font token on the client.

**Java**

```java
DwcLookAndFeel.setToken("--dwc-font-family", "system-ui");
```

**BBj**

```bbj
DwcLookAndFeel@.setToken("--dwc-font-family", "system-ui")
```

Changing fonts can change the width of a label and the height of a field. Pack Swing windows after constructing their contents. When a BBj form places controls at fixed coordinates, check that the longest label and validation message fit those dimensions.

## Motion and reduced motion

Animations are **on by default**. You can see them when pressing a button, toggling a switch, changing tabs or opening a dropdown. To disable motion in a Java application, add **-Dcom.basis.dwc.swing.laf.animations=false** to the JVM options before starting it.

In BBj WebUI, select the application in **Web → App Deployment → Applications** and add the same option under **WebUI → Java Arguments**. Save and open a new session. Tab and switch changes should now take effect immediately and moving progress stripes should stay still. Remove the option and start a new session to restore the default.
