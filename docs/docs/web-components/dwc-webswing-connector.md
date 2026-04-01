# dwc-webswing-connector
![Documentation Type](https://img.shields.io/badge/Documentation-web--components-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--webswing--connector-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-none-%23006aff)




## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.
<table>
<thead><tr><th style="width:28px;padding:4px"></th><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>options</b></code></td><td style="vertical-align:top">Configuration options for the Webswing instance initialization. These options are passed directly to the Webswing API bootstrap method.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Type</span> <code>{ [k: string]: any; autoStart?: boolean; autoReconnect?: number; disableLogout?: boolean; disableLogin?: boolean; syncClipboard?: boolean; securityToken?: string; realm?: string; args?: string; recording?: boolean; connectionUrl?: string; debugPort?: number; javaCallTimeout?: number; pingParams?: { count: number; interval: number; maxLatency: number; notifyIf: number; url?: string; }; onReady?: (api: IWebswingApi) => void; onStart?: () => void; windowsListener?: { windowOpening(WebswingWindow: HtmlOrCanvasWindow): void; windowOpened(WebswingWindow: HtmlOrCanvasWindow): void; windowClosing(WebswingWindow: HtmlOrCanvasWindow, windowCloseEvent: IWindowCloseEvent): void; windowClosed(WebswingWindow: HtmlOrCanvasWindow): void; windowModalBlockedChanged(WebswingWindow: HtmlOrCanvasWindow): void; windowUndocked(WebswingWindow: HtmlOrCanvasWindow): void; windowDocked(WebswingWindow: HtmlOrCanvasWindow): void; }; actions?: { [key: string]: (event: IWebActionEvent) => void | String | Uint8Array | Promise<string | void | Uint8Array>; }; }</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>null</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
<tr class="pt-row" onclick="((r)=>{var d=r.nextElementSibling,o=d.style.display!=='none';d.style.display=o?'none':'table-row';r.querySelector('.pt-chev').classList.toggle('open',!o)})(this)"><td style="width:28px;padding:4px;vertical-align:middle;text-align:center"><span class="pt-chev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span></td><td style="white-space:nowrap;vertical-align:top"><code><b>url</b></code></td><td style="vertical-align:top">The URL endpoint of the Webswing server to connect to.</td></tr>
<tr class="pt-detail" style="display:none"><td colspan="3"><div class="pt-detail-inner"><div class="pt-item"><span class="pt-label">Attribute</span> <code>url</code></div><div class="pt-item"><span class="pt-label">Type</span> <code>string</code></div><div class="pt-item"><span class="pt-label">Default</span> <code>null</code></div><div class="pt-item"><span class="pt-label">Reflects</span> <span>No</span></div></div></td></tr>
</tbody></table>

## Events

<div style="overflow-x: auto;">

| Event                        | Description                                                                                                                                                                                               | Type                                                                |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| ``dwc-webswing-action``      | Emitted when a custom action is triggered from the Webswing application.&nbsp;&nbsp;The event detail contains the action name, optional data payload, and&nbsp;optional binary data encoded as Base64.    | ``{ actionName: string; data: string; binaryDataBase64: string; }`` |
| ``dwc-webswing-initialized`` | Emitted when the Webswing instance has been successfully initialized&nbsp;and is ready to receive commands.&nbsp;&nbsp;The instance is bootstrapped but may not be started yet if ``autoStart`` is false. | ``void``                                                            |
| ``dwc-webswing-started``     | Emitted when the Webswing application has been started and is&nbsp;actively running.&nbsp;&nbsp;This occurs after calling the ``start()`` method or if ``autoStart`` was set to true in options.          | ``void``                                                            |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part              | Description                                          |
| ----------------- | ---------------------------------------------------- |
| ``root``          | The root container element for the Webswing instance |
| ``webswing-root`` |                                                      |


</div>
## Methods

### `destroy() => Promise<void>`

Destroys this Webswing instance permanently.

After calling this method, the instance cannot be started again.
A new component instance must be created to establish a new connection.

### Returns

Type: `Promise<void>`

### `getInstance() => Promise<IWebswingInstance | null>`

Returns the raw Webswing instance object.

This provides direct access to the underlying Webswing API instance
for advanced operations not covered by the component's methods.

### Returns

Type: `Promise<IWebswingInstance>`

### `getInstanceId() => Promise<string | undefined>`

Returns the current Webswing instance ID.

The instance ID uniquely identifies this connection to the Webswing server.
Returns undefined if no instance is initialized or connected.

### Returns

Type: `Promise<string>`

### `logout(tabLogout?: boolean, closeOnSuccess?: boolean) => Promise<void>`

Logs out the currently logged in user from the Webswing session.

### Returns

Type: `Promise<void>`

### `performAction(actionName: string, data: string | undefined, binaryDataBase64: string | null) => Promise<void>`

Triggers a custom action on the server-side Webswing application.

### Returns

Type: `Promise<void>`

### `repaint() => Promise<void>`

Requests a repaint of the Webswing application.

Notifies the server that the application needs to refresh its display.
This can be useful after window resizing or when display issues occur.

### Returns

Type: `Promise<void>`

### `start() => Promise<void>`

Initiates the connection to Webswing server and starts the Swing application.

This method should be called when `autoStart` is set to false in the options.
If `autoStart` is true (default), the Webswing instance starts automatically
and this method should not be called.

### Returns

Type: `Promise<void>`

### `stop() => Promise<void>`

Disconnects the current Webswing session but leaves the Swing application running on the server
allowing to reconnect to the same application instance later.

### Returns

Type: `Promise<void>`



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2026.*
