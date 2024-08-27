# BBjUserAuthentication
![Documentation Type](https://img.shields.io/badge/Documentation-dwc-%23006aff) ![Tag Name](https://img.shields.io/badge/Component-bbj--login-%23006aff) <a href="https://documentation.basis.cloud/BASISHelp/WebHelp/usr/BBj_Components/BBjServices/bbj_user_authentication.htm?Highlight=Authentication%20" title="The BBj Control Name">
      <img src="https://img.shields.io/badge/Control-BBjUserAuthentication &#8599;-%23006aff" alt="BBj v20.11" />
    </a> ![Encapsulation](https://img.shields.io/badge/Encapsulation-shadow-%23006aff)

A configurable login dialog


## Properties 


Properties are JavaScript variables that are associated with client web component.
They are useful for storing data and controlling behavior. Properties make web components more reusable and easier to configure.
Almost every property has a corresponding attribute, which is useful for setting default values for properties.

Some properties reflect their values to attributes and vice versa. This means that if you set a property, the corresponding attribute is set automatically, and if you set an attribute, the corresponding property is set automatically.

!> **Tip:** From BBj you can set and get the attributes using the [BBjControl::setAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setAttribute.htm)
and [BBjControl::getAttribute](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getAttribute.htm) methods respectively.
And to set properties you can use the [BBjControl::setProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_setProperty.htm) and [BBjControl::getProperty](https://documentation.basis.cloud/BASISHelp/WebHelp/bbjobjects/SysGui/bbjcontrol/BBjControl_getProperty.htm) methods respectively.
<div style="overflow-x: auto;">

| Name                  | Attribute              | Description                                                                                                                                                                        | Reflects | Type                                                                                                                                        | Default                                                                                                                                                                                                                                        |
| --------------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ``autoSignin``        | ``auto-signin``        | When true and the [PasswordCredential](https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential) is supported by the browser, the form will be submitted automatically. | &#x2718; | ``boolean``                                                                                                                                 | ``false``                                                                                                                                                                                                                                      |
| ``disabled``          | ``disabled``           | When true, all components in the dialog will be disabled.                                                                                                                          | &#x2714; | ``boolean``                                                                                                                                 | ``false``                                                                                                                                                                                                                                      |
| ``emptyPassword``     | ``empty-password``     | When true, empty passwords will be valid.                                                                                                                                          | &#x2718; | ``boolean``                                                                                                                                 | ``false``                                                                                                                                                                                                                                      |
| ``i18n``              |                        | The dialog translation object                                                                                                                                                      | &#x2718; | ``{ title?: string; usernamePrompt?: string; passwordPrompt?: string; rememberMe?: string; loginButton?: string; cancelButton?: string; }`` | ``{&nbsp;      title: 'Authentication',&nbsp;      usernamePrompt: 'Username',&nbsp;      passwordPrompt: 'Password',&nbsp;      rememberMe: 'Remember me',&nbsp;      loginButton: 'Sign in',&nbsp;      cancelButton: 'Cancel',&nbsp;    }`` |
| ``maxHeight``         | ``max-height``         | Specifies the dialog max height.                                                                                                                                                   | &#x2718; | ``string``                                                                                                                                  | ``''``                                                                                                                                                                                                                                         |
| ``maxWidth``          | ``max-width``          | Specifies the dialog max width.                                                                                                                                                    | &#x2718; | ``string``                                                                                                                                  | ``'400px'``                                                                                                                                                                                                                                    |
| ``opened``            | ``opened``             | True when the dialog is opened, closed otherwise.                                                                                                                                  | &#x2714; | ``boolean``                                                                                                                                 | ``false``                                                                                                                                                                                                                                      |
| ``password``          | ``password``           | The default password                                                                                                                                                               | &#x2718; | ``string``                                                                                                                                  |                                                                                                                                                                                                                                                |
| ``passwordMediation`` | ``password-mediation`` | A String indicating whether the user will be required to log on for every visit to the website. Valid values are "silent", "optional", or "required".                              | &#x2718; | ``"optional" \| "required" \| "silent"``                                                                                                    | ``'optional'``                                                                                                                                                                                                                                 |
| ``rememberme``        | ``rememberme``         | When true, rememberme will checked by default, unchecked otherwise                                                                                                                 | &#x2718; | ``boolean``                                                                                                                                 | ``true``                                                                                                                                                                                                                                       |
| ``username``          | ``username``           | The default username                                                                                                                                                               | &#x2718; | ``string``                                                                                                                                  |                                                                                                                                                                                                                                                |


</div>

## Shadow Parts


Shadow Parts allow you to selectively style internal elements without affecting the rest of the component.
They offer encapsulation and modularity, promoting cleaner and more maintainable code for complex UI elements. [[Read more]](theme-engine/css-shadow-parts).
<div style="overflow-x: auto;">

| Part                 | Description                              |
| -------------------- | ---------------------------------------- |
| ``buttons``          | The buttons wrapper                      |
| ``cancel-button``    | The cancel button (bbj-button)           |
| ``content``          | The dialog's content                     |
| ``dialog``           | The dialog (bbj-dialog)                  |
| ``footer``           | The dialog's footer (buttons & checkbox) |
| ``form``             | The dialog's form                        |
| ``header``           | The dialog's header                      |
| ``password-input``   | The password input (bbj-editbox)         |
| ``rememberme-input`` | The checkbox input                       |
| ``signin-button``    | The signin button (bbj-button)           |
| ``username-input``   | The username input (bbj-editbox)         |


</div>

## Hosted Classes


Hosted Classes are CSS classes that are applied to the host element of a component. They are useful for styling the host element from outside the component's own CSS.
They can either reflect the component's state, such as "disabled" or "active," or provide options to alter the component's style based on user interaction or other conditions.
<div style="overflow-x: auto;">

| CSS Class                 | Description    |
| ------------------------- | -------------- |
| ``BBjUserAuthentication`` | Always applied |


</div>

## Components Dependencies

- [bbj-dialog](web-components/bbj-dialog.md)
- [bbj-editbox](web-components/bbj-editbox.md)
- [bbj-checkbox](web-components/bbj-checkbox.md)
- [bbj-button](web-components/bbj-button.md)


## Messages

Messages are the BBj instructions that are sent to the browser form the server to create and configure the BBj control.<!-- tabs:start -->

#### **Async component message**

| Message                    | Description                                                                                           | Returns                                                                 |
| -------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| ShowUserLoginDialogMessage | This implements the user authentication dialogue. It blocks forever on user action (login or cancel). | ``ArrayList<String> (resultType StringArray) (resultType StringArray)`` |


<!-- tabs:end -->



----------------------------------------------
*Built by [BASIS International Ltd](https://www.basis.cloud/). Al rights reserved 2024.*
