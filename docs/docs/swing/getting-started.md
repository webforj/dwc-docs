# Install the theme in Java Swing

Use this guide for a Java desktop application. For a BBj program, follow [Set up BBj in Enterprise Manager](swing/bbj.md).

## Run the Java form

You’ll open a small window called **Delivery address**. It has an email field and a Save button. You’ll need a Java Development Kit (JDK) version 21 or newer.

Save the following program as **Delivery.java**.

[Delivery.java](files/Delivery.java ':include :type=code java')

<a href="https://cdn.webforj.com/dwc-swing-laf/0.2.0/dwc-swing-laf.jar">Download the DWC theme JAR</a> into the same folder. Open a terminal there and run the program.

```sh
java -cp dwc-swing-laf.jar Delivery.java
```

When the window opens, leave **Delivery email** empty and click **Save**. You’ll see **Enter a delivery email.** Type an address and click **Save** again. The message changes to **Delivery address saved.** You can now close the window.

## Install the theme in an existing program

Add **dwc-swing-laf.jar** to your application’s classpath. Add these imports at the top of your Java source file, below the package declaration.

```java
import com.basis.dwc.swing.laf.DwcLookAndFeel;
import javax.swing.UIManager;
import javax.swing.UnsupportedLookAndFeelException;
```

On the Swing event dispatch thread, select DWC Light before creating the first window or any of its controls.

```java
try {
  UIManager.setLookAndFeel(new DwcLookAndFeel());
} catch (UnsupportedLookAndFeelException e) {
  throw new IllegalStateException(e);
}
```

If your application uses Java modules, put the JAR on the module path and require **com.basis.dwc.swing.laf**.

## Start in dark mode

Replace the light-theme import with this one. Keep the two Swing imports above.

```java
import com.basis.dwc.swing.laf.DwcDarkLookAndFeel;
```

Inside the same `try` block, select DWC Dark.

```java
UIManager.setLookAndFeel(new DwcDarkLookAndFeel());
```

If your application has a Look and Feel setting, enter the class name for the palette you want.

| Palette | Class name |
| --- | --- |
| DWC Light | com.basis.dwc.swing.laf.DwcLookAndFeel |
| DWC Dark | com.basis.dwc.swing.laf.DwcDarkLookAndFeel |

Restart the application. If the original palette still appears, check whether your startup code selects another Look and Feel after this call.
