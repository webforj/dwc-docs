# dwc-markdown-viewer
![Documentation Type](https://img.shields.io/badge/Documentation-dwc-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-dwc--markdown--viewer-%23006aff)  ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)




## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.

!> **Tip:** From BBj you can set and get the attributes using the [BBjControl::setAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setAttribute.htm)
and [BBjControl::getAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getAttribute.htm) methods respectively.
And to set properties you can use the [BBjControl::setProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setProperty.htm) and [BBjControl::getProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getProperty.htm) methods respectively.
<div style="overflow-x: auto;">

| Name                  | Attribute              | Description                                                                                                                                                                                                                                                                                                       | Reflects | Type        | Default   |
| --------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: | ----------- | --------- |
| ``autoScroll``        | ``auto-scroll``        | When true, the component will automatically scroll to show the latest content as it is added.&nbsp;This is useful for streaming content or chat-like interfaces. The auto-scroll behavior&nbsp;is paused when the user manually scrolls up, and resumes when they scroll back to the bottom.                      | &#x2718; | ``boolean`` | ``false`` |
| ``content``           | ``content``            | The markdown content to render.                                                                                                                                                                                                                                                                                   | &#x2718; | ``string``  | ``''``    |
| ``progressiveRender`` | ``progressive-render`` | When true, content is rendered progressively character-by-character rather than all at once.&nbsp;This is useful for AI chat interfaces where the server streams responses in chunks.&nbsp;The client-side render speed can be adjusted with ``renderSpeed`` to match or exceed&nbsp;the server's streaming rate. | &#x2718; | ``boolean`` | ``false`` |
| ``renderSpeed``       | ``render-speed``       | Controls how many characters are rendered per frame when ``progressiveRender`` is enabled.&nbsp;Higher values result in faster rendering. Adjust this based on the server's streaming speed.&nbsp;At 60fps: 4 = 240 chars/sec, 6 = 360 chars/sec, 10 = 600 chars/sec.                                             | &#x2718; | ``number``  | ``4``     |


</div>

----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2025.*
