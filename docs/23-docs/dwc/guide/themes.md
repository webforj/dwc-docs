# Themes

?> **Note:** Read The BBj [Theme Engine Documentation](/theme-engine/)

DWC ships three themes by default. The default `light` theme and two dark themes `dark` and `dark-pure`.

## Dark Theme

You can enable the dark theme for any BBj program using the [BBjWebManager](https://documentation.basis.cloud/BASISHelp/WebHelp/bui/BBjBuiManager/BBjWebManager_setTheme.htm)

```BBj
web! = bbjapi().getWebManager()
web!.setTheme("dark")
```

### User Preference

You can also apply the dark theme based on the user preference. The user might indicate this preference through an operating system.
Operating systems that support a dark mode or dark theme typically have an option to activate it somewhere in the settings. 

- **On Windows 10:** it's in the Colors section and called Choose your color ([@see to enable dark mode on Windows 10 and how to enable it on a Mac.](https://blogs.windows.com/windowsexperience/2016/08/08/windows-10-tip-personalize-your-pc-by-enabling-the-dark-theme/))
- **On macOS:** it's in the system preference's General section and called Appearance. ([@see to enable dark mode on a Mac.](https://support.apple.com/en-us/HT208976))
- **On iOS:** you can change the Appearance in the Display & Brightness section of the settings.
- **On Android:** you can find it under Display as a Dark Theme toggle switch.

In BBj, you need to use the [BBjWebManager::setDarkTheme](https://documentation.basis.cloud/BASISHelp/WebHelp/bui/BBjBuiManager/BBjWebManager_setDarkTheme.htm) and [BBjWebManager::setLightTheme](https://documentation.basis.cloud/BASISHelp/WebHelp/bui/BBjBuiManager/BBjWebManager_setLightTheme.htm) methods to configure the default dark and light themes to use when the operating system switches from dark to light or vice versa.

The methods require the name of the dark and light themes as parameters. For example:

```BBj
web! = bbjapi().getWebManager()
web!.setDarkTheme("dark-pure")
web!.setLightTheme("light")
``````

[filename](../_media/dwc/themes/app-theme-switcher.mp4 ':include :type=video')

## Animations

BBj will detect if the user has requested that the system minimize the amount of non-essential motion it uses and will disable some of the default animations.
This could potentially be problematic for some users.

### User preferences

Operating systems that support a motion reduce typically have an option to activate it somewhere in the settings.

- **On Windows 10:** Settings > Ease of Access > Display > Show animations in Windows.
- **On macOS:** System Preferences > Accessibility > Display > Reduce motion.
- **On iOS:** Settings > General > Accessibility > Reduce Motion.
- **On Android:** Settings > Accessibility > Remove animations.

[filename](../_media/dwc/themes/reduce-motion.mp4 ':include :type=video')

## Resources

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/1Bo5JjFe4mQ?start=435" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
