# BBjAppLayout
![Documentation Type](https://img.shields.io/badge/Documentation-dwc-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-bbj--app--layout-%23006aff) <a href="https://bbj-plugins.github.io/BBjAppLayout/#/" title="The BBj Widget Name">
      <img src="https://img.shields.io/badge/Widget-BBjAppLayout &#8599;-%23006aff" alt="BBj v20.11" />
    </a> ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

`<bbj-app-layout>` is a responsive layout component that provides a header, a footer, a drawer, and content.
The header and footer are fixed, the drawer slides in and out of the viewport, and the content is scrollable.

This component can be used to build common application layouts, such as a dashboard.


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.

!> **Tip:** From BBj you can set and get the attributes using the [BBjControl::setAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setAttribute.htm)
and [BBjControl::getAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getAttribute.htm) methods respectively.
And to set properties you can use the [BBjControl::setProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setProperty.htm) and [BBjControl::getProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getProperty.htm) methods respectively.
<div style="overflow-x: auto;">

| Name                    | Attribute                 | Description                                                                                                                                                                                                                         | Reflects | Type                               | Default                  |
| ----------------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: | ---------------------------------- | ------------------------ |
| ``drawerBreakpoint``    | ``drawer-breakpoint``     | A media query to control when the drawer will be switched to popover mode.&nbsp;&nbsp;Useful for small screens. By default the drawer popover mode will be enabled&nbsp;when the screen size is ``800px`` or less.                  | &#x2718; | ``string``                         | ``'(max-width: 800px)'`` |
| ``drawerFooterVisible`` | ``drawer-footer-visible`` | When true, the drawer will show the footer section.                                                                                                                                                                                 | &#x2718; | ``boolean``                        | ``false``                |
| ``drawerHeaderVisible`` | ``drawer-header-visible`` | When true, the drawer will show the header section.                                                                                                                                                                                 | &#x2718; | ``boolean``                        | ``false``                |
| ``drawerOpened``        | ``drawer-opened``         | When true, the drawer is opened, otherwise it is closed.                                                                                                                                                                            | &#x2714; | ``boolean``                        | ``true``                 |
| ``drawerOverlay``       | ``drawer-overlay``        | When true and the ``drawerPopover`` is enabled, the drawer will have an overlay behind it when it is opened.                                                                                                                        | &#x2714; | ``boolean``                        | ``true``                 |
| ``drawerPlacement``     | ``drawer-placement``      | The drawer position.                                                                                                                                                                                                                | &#x2714; | ``"hidden" \| "left" \| "right"``  | ``'left'``               |
| ``drawerPopover``       | ``drawer-popover``        | When true, the drawer will pop over the header, footer and the content area.                                                                                                                                                        | &#x2714; | ``boolean``                        | ``false``                |
| ``fitViewport``         | ``fit-viewport``          | When true, the content area will fill the viewport height, otherwise the content area will be scrollable.&nbsp;&nbsp;When setting this property to ``true`` you should make the ``html`` and ``body`` elements&nbsp;non-scrollable. |   true   | ``boolean``                        | ``false``                |
| ``footerFixed``         | ``footer-fixed``          | When true, the footer will be fixed at the top and won't move when the user scrolls.                                                                                                                                                | &#x2714; | ``boolean``                        | ``true``                 |
| ``footerOffscreen``     | ``footer-offscreen``      | When true, the footer position will be shifted to fit beside the opened drawer.                                                                                                                                                     | &#x2714; | ``boolean``                        | ``true``                 |
| ``footerReveal``        | ``footer-reveal``         | When true, the footer will be revealed when the user scrolls up and hidden when scrolls down.                                                                                                                                       | &#x2714; | ``boolean``                        | ``false``                |
| ``footerShadow``        | ``footer-shadow``         | When set to ``scroll``, the footer will have a shadow after revealing.&nbsp;When set to ``always``, the shadow will always be visible, otherwise, it's hidden.                                                                      | &#x2714; | ``"always" \| "none" \| "scroll"`` | ``'none'``               |
| ``headerFixed``         | ``header-fixed``          | When true, the header will be fixed at the top and won't move when the user scrolls.                                                                                                                                                | &#x2714; | ``boolean``                        | ``true``                 |
| ``headerOffscreen``     | ``header-offscreen``      | When true, the header position will be shifted to fit beside the opened drawer.                                                                                                                                                     | &#x2714; | ``boolean``                        | ``true``                 |
| ``headerReveal``        | ``header-reveal``         | When true, the header will be revealed when the user scrolls up and hidden when scrolls down.                                                                                                                                       | &#x2714; | ``boolean``                        | ``false``                |
| ``headerShadow``        | ``header-shadow``         | When set to ``scroll``, the header will have a shadow after revealing.&nbsp;Alternatively, when set to ``always``, the shadow will always be visible; otherwise, it remains hidden.                                                 | &#x2714; | ``"always" \| "none" \| "scroll"`` | ``'scroll'``             |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part                      | Description                                                                         |
| ------------------------- | ----------------------------------------------------------------------------------- |
| ``content``               | The content part is the container for the default slot.                             |
| ``drawer``                | The drawer part is the container for the drawer slot.                               |
| ``drawer-control``        | The drawer-control part is the container for the drawer control.                    |
| ``drawer-footer``         | The drawer-footer part is the container for the drawer-footer slot.                 |
| ``drawer-header``         | The drawer-header part is the container for the drawer-header slot.                 |
| ``drawer-header-actions`` | The drawer-header-actions part is the container for the drawer-header-actions slot. |
| ``footer``                | The footer part is the container for the footer slot.                               |
| ``header``                | The header part is the container for the header slot.                               |


</div>

## CSS Properties


CSS Properties are DWC-defined variables in CSS, denoted by `--`, followed by a name.
They enable dynamic styling, reusability, and easy customization of components.
With CSS Properties, you can change the look and feel of a component simply by changing the value of a variable.
[[Read more]](theme-engine/css-variables).
<div style="overflow-x: auto;">

| Name                                        | Description                                                                                           |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| ``--bbj-app-layout-drawer-width``           | The width of the drawer to be used in the layout. By default, the width will be auto-calculated.      |
| ``--bbj-app-layout-footer-collapse-height`` | The minimum height of the footer when it is hidden. Used to create a sticky footer.                   |
| ``--bbj-app-layout-footer-height``          | The padding of the content to be used in the layout. By default, the padding will be auto-calculated. |
| ``--bbj-app-layout-header-collapse-height`` | The minimum height of the header when it is hidden. Used to create a sticky header.                   |
| ``--bbj-app-layout-header-height``          | The height of the header to be used in the layout. By default, the height will be auto-calculated.    |
| ``--bbj-menubar-height``                    | The height of the menubar to be used in the layout.                                                   |


</div>

## Components Dependencies

- [bbj-drawer](web-components/bbj-drawer.md)


----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
