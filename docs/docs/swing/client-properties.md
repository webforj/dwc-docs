# Client properties

A client property changes one control. In the [delivery form](swing/getting-started.md), the field needs a label, the Save button needs emphasis, and the field should show a message when Save is pressed with an empty value. These choices belong to the control or its callback. Changing the application palette would affect every window.

## Label a field and emphasize an action

This excerpt runs after the delivery form creates its edit box and button. In Java, use the constants on **DwcLookAndFeel**. In BBj, the edit box takes string and Boolean properties directly. For the button theme, cast the BBj button to its client-side Swing component and pass the primary theme enum from that same client.

**Java**

```java
email.putClientProperty(DwcLookAndFeel.LABEL, "Delivery email");
email.putClientProperty(DwcLookAndFeel.REQUIRED, true);
save.putClientProperty(DwcLookAndFeel.THEME, ButtonTheme.PRIMARY);
```

**BBj**

```bbj
email!.putClientProperty("dwc.label", "Delivery email")
email!.putClientProperty("dwc.required", java.lang.Boolean.TRUE)
button! = cast(JComponent@, save!)
button!.putClientProperty("dwc.theme", ButtonTheme@.PRIMARY)
```

The required marker tells the reader what to enter. Your program still decides whether to accept the value. [BASIS client properties](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_putClientProperty.htm) · [Using client-side Swing objects in BBj](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/assignment.htm).

## Validate when the user presses Save

The action in this form checks for a blank value. On failure it applies the invalid appearance and puts the correction underneath the field. On success it clears both and updates a separate status label. A production program can perform its own address checks or persistence in that success branch.

**Java**

```java
boolean missing = email.getText().isBlank();
email.putClientProperty(DwcLookAndFeel.INVALID, missing);
email.putClientProperty(DwcLookAndFeel.HELPER_TEXT,
    missing ? "Enter a delivery email." : "");
status.setText(missing ? " " : "Delivery address saved.");
```

**BBj**

The edit box uses fixed coordinates. Its normal height is 52 pixels for the label and input. Give it 26 more pixels when showing the validation message so the input keeps its height.

```bbj
missing = len(cvs(email!.getText(), 3)) = 0
if missing then
    email!.setSize(email!.getWidth(), 78)
    email!.putClientProperty("dwc.invalid", java.lang.Boolean.TRUE)
    email!.putClientProperty("dwc.helperText", "Enter a delivery email.")
    status!.setText("")
else
    email!.putClientProperty("dwc.invalid", java.lang.Boolean.FALSE)
    email!.putClientProperty("dwc.helperText", "")
    email!.setSize(email!.getWidth(), 52)
    status!.setText("Delivery address saved.")
endif
```

<img src="./swing/files/bbj-invalid.png?v=f4d37907a8" width="386" alt="The BBj WebUI input keeps its height with Enter a delivery email shown below it">

## Find the property for another control

These keys apply to the Swing components named below. In BBj, use **BBjControl.putClientProperty** for text and Boolean values as shown above. For a button theme, set the enum on the client-side Swing button. A BBj control with its own renderer can behave differently from the corresponding Swing component.

| Field or action key | Value and use |
| --- | --- |
| dwc.label | Text above the input. |
| dwc.placeholder | Short hint inside an empty input. It disappears when the user enters a value. |
| dwc.helperText | Text below the input, including a validation message. |
| dwc.required | Boolean. Marks the label as required. |
| dwc.invalid | Boolean. Shows or clears the invalid state. |
| dwc.theme | ButtonTheme on buttons, including primary and outlined danger. Use Theme on controls such as sliders or combo boxes. |
| dwc.expanse | Expanse.XSMALL, SMALL, MEDIUM, LARGE or XLARGE. Changes preferred control size. |
| dwc.focusRing | Inside or outside focus outline. [Fit the outline to the available space](swing/limitations.md). |

| Selection controls, tables and trees | Value and use |
| --- | --- |
| dwc.switch | Boolean. Draw a check box or radio button as a switch and keep its selection model. |
| dwc.indeterminate | Boolean. Show a mixed state on an unchecked check box. |
| dwc.readOnly | Boolean. Prevent user changes on option controls, lists, combo boxes and spinners. |
| dwc.checkboxSelection | Boolean. Add a checkbox selection column to a Swing table in a scroll pane. |
| dwc.striped | Boolean. Alternate table row backgrounds or add stripes to a progress bar. |
| dwc.bordersVisible | A set of TableBorder values. Choose AROUND, ROWS or COLUMNS for a Swing table. |
| dwc.connected | Boolean. Turn off branch connectors on a tree with false. |
| dwc.groupIconsVisible, dwc.leafIconsVisible | Booleans. Control branch and leaf icons independently. |

| Layout, navigation and feedback | Value and use |
| --- | --- |
| dwc.segment | Boolean. Present tabs as a segmented control. |
| dwc.borderless | Boolean. Hide the divider below the tab strip. |
| dwc.hideActiveIndicator | Boolean. Hide the active tab's indicator. |
| dwc.closable | Boolean. Put a close button on all tabs or override one tab on its content component. |
| dwc.surface | Surface.PANEL or Surface.RAISED for a panel background. |
| dwc.compact | Boolean. Remove a toolbar's outer padding. |
| dwc.filled, dwc.tooltipVisible | Booleans. Fill a slider up to its thumb or display its numeric value. |
| dwc.animated, dwc.animationPhase | Animate progress stripes, or supply a number from zero to one for a fixed position. |
| dwc.backdrop, dwc.blurred | Booleans on a dialog root pane. Control the tint or blur over the owner. |
| dwc.fileChooserView | FileChooserView.DETAIL or FileChooserView.GRID for the initial chooser layout. |

These are Swing component properties. A native BBj grid or a control that BBj paints itself can have its own sizing and appearance rules. [Where BBj controls the result](swing/limitations.md).
