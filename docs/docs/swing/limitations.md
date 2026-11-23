# Dialogs and keyboard focus

A dialog has two parts you can configure separately. The window has a header, border and close action. Its content can be a standard Swing message, a color or file chooser, or your own form. Choose the header style before creating the dialog.

## Show a message in BBj

In the delivery form’s Save callback, call **MSGBOX** after saving the address.

```bbj
result = MSGBOX("Delivery address saved.", 64, "Delivery address")
```

BBj opens the message with an information icon and an **OK** button. BBj returns the user’s choice to the program when the message closes. With DWC installed on the BBj Swing client, the message box uses the theme automatically. [BASIS MSGBOX reference](https://documentation.basis.cloud/BASISHelp/WebHelp/commands/bbj-commands/msgbox_function_bbj.htm).

## Give Swing dialogs the DWC header

For dialogs created by your Java Swing application, install the DWC Look and Feel and set this preference before creating the dialog.

**Java**

```java
JDialog.setDefaultLookAndFeelDecorated(true);
```

<img src="./swing/files/delivery-dialog.png" width="370" alt="A dark DWC confirmation dialog asking Discard your changes with Yes and No actions">

For a confirmation, give the dialog an owner from the active window so it opens with the right form. Treat closing the window like cancelling when the program is about to discard an edit. Standard Swing option panes retain their usual return values.

## Blur the owner of a Java Swing dialog

In the delivery form’s Save handler, you can show a confirmation after the address is saved. Create a Swing message pane and call **createDialog**. It returns a modal dialog and uses the Save button to find the window that owns it. Set the blur property on the dialog before showing it.

**Java**

Add these imports at the top of the file.

```java
import com.basis.dwc.swing.laf.DwcLookAndFeel;
import javax.swing.JDialog;
import javax.swing.JOptionPane;
```

In the Save button’s action listener, **save** is the button created in [Delivery.java](swing/getting-started.md).

```java
JOptionPane message = new JOptionPane("Delivery address saved.", JOptionPane.INFORMATION_MESSAGE);
JDialog dialog = message.createDialog(save, "Delivery address");
dialog.getRootPane().putClientProperty(DwcLookAndFeel.BLURRED, true);
dialog.setVisible(true);
dialog.dispose();
```

For a dialog that should leave the owner fully visible, the **dwc.backdrop** property accepts false. The program still controls when the dialog opens, what its buttons do and when it closes. [Application motion settings](swing/themes.md).

## Keep a keyboard outline visible at the edge of a form

Move through the delivery form with Tab and Shift+Tab. The focus outline normally sits outside the focused control. A viewport or a tightly placed neighboring control can cover its edge. To keep the whole outline within the email field, set the property on that field. For the Java example, import **FocusRing** from **com.basis.dwc.swing.laf**.

**Java**

```java
email.putClientProperty(DwcLookAndFeel.FOCUS_RING, FocusRing.INSIDE);
```

**BBj**

```bbj
email!.putClientProperty("dwc.focusRing", "inside")
```

Check the first and last controls in a scroll pane, then try again after scrolling. The individual control setting takes precedence over the application setting. With a fixed-coordinate BBj form, also reserve room below the edit box for its helper text and validation message.

## Which appearance settings belong to BBj?

| What you are changing | Where to make the change |
| --- | --- |
| Window title and outer frame in a WebUI session | WebUI supplies the frame. Set the title when creating the BBj window. |
| Position, width or height on a BBj form | Set the dimensions in the BBj program. Changing the Swing font or expanse can change the space a control needs. |
| BBj grid density | Set the row height and bounds through the BBj grid. A Swing table’s preferred size applies to a JTable. |
| Placeholder color in a BBj input | Set the placeholder color on the BBj input itself. |
| BBj menu-button arrow or the close icon on a BBj tab | BBj draws these details. Applying the theme to the surrounding form preserves their BBj appearance. |

For Java Swing, use the standard chooser panels and keep the application’s file filters, selection mode and initial directory. The theme supplies the chooser controls. For a BBj form, test the actual chooser and control type that the program opens.
