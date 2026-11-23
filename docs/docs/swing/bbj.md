# Set up the theme in Enterprise Manager

Use Enterprise Manager to run the **Delivery address** form in a browser with BBj WebUI. The Swing client runs on the BBj server.

## 1. Put the jar and program on the server

Create a folder on the BBj server that BBjServices can read. Save the following program there as **Delivery.bbj**.

[Delivery.bbj](files/Delivery.bbj ':include :type=code bbj')

<a href="https://cdn.webforj.com/dwc-swing-laf/0.2.0/dwc-swing-laf.jar">Download the DWC theme JAR</a> into the same folder. Use the full server paths to the JAR and the program when you configure Enterprise Manager.

## 2. Create the client classpath

Open **BBjServices → Java Settings → Classpath** in Enterprise Manager. Add a classpath and give it a unique name. This guide uses **dwc_swing_guide**. If that name already belongs to another application, choose your own and use it in the following steps.

Add these entries in order and save the classpath.

1. The full server path to **dwc-swing-laf.jar**.
2. The BBj default classpath reference **(bbj_default)**.

The client needs both the theme and the libraries that draw BBj controls. If you replace the jar later, check this list for older copies.

## 3. Register your WebUI application

Under **Web → App Deployment → Global Settings**, check that your installation permits WebUI deployment. Open **Web → App Deployment → Applications** and add a new application. Choose an unused application name so you can identify your entry later.

| Setting | Enter |
| --- | --- |
| Application Name | A name you choose for this deployment. For example, **delivery-guide** if that name is available. |
| Program File | The full path to **Delivery.bbj** from step 1. |
| Working Directory | The server folder containing that file. |
| Classpath | The name you saved in step 2. |
| Program Arguments | Leave empty. This program takes no arguments. |
| WebUI App Enabled | Enable this application for WebUI. |
| WebUI → Java Arguments | Add **-Dcom.basis.bbj.iris.client.util.BasisHTML.disabled=true** as its own entry. |

Save the application. WebUI has its own Java arguments in Enterprise Manager. Set the option in the **WebUI** section of the application you just created. [BASIS WebUI configuration](https://documentation.basis.cloud/BASISHelp/WebHelp/webui/WebUI.htm).

## 4. Open the deployment you created

Return to **Web → App Deployment → Applications**. Find the name you chose in step 3 and check that **WebUI App Status** is **Enabled**. Select the application name to see its **Application Launch Details**. Open or copy the **URL** for WebUI. This is the address for your deployment, including your server's host, port and context. [Enterprise Manager application list and launch details](https://documentation.basis.cloud/BASISHelp/WebHelp/em/web/EM_W_AD_Applications.htm).

The **Delivery address** window opens with an empty email field.

<img src="./swing/files/bbj-initial.png" width="386" alt="BBj WebUI delivery form with the empty email field above Save">

Press **Save** with the field empty. The input keeps its height and **Enter a delivery email.** appears beneath it. Enter an address and press **Save** again to see **Delivery address saved.**

<img src="./swing/files/bbj-invalid.png?v=f4d37907a8" width="386" alt="WebUI delivery form after saving an empty field, with the instruction Enter a delivery email">

<img src="./swing/files/bbj-saved.png?v=11943d8145" width="386" alt="WebUI delivery form after saving a filled field, with the confirmation below the button">

## Use a program you already have

In Enterprise Manager, register your program file, its working directory and any arguments it needs. Select the classpath you created in step 2.

If you can edit the program, select a theme before creating its first window. For **DWC Light**, use this line. The **@** runs the call on the client that draws the window.

```bbj
javax.swing.UIManager@.setLookAndFeel(new com.basis.dwc.swing.laf.DwcLookAndFeel@())
```

For **DWC Dark**, use this line instead.

```bbj
javax.swing.UIManager@.setLookAndFeel(new com.basis.dwc.swing.laf.DwcDarkLookAndFeel@())
```
