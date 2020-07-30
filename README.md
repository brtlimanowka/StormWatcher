# StormWatcher
## A ServiceNow Plugin
### Current version: `0.1.2`
### Browsers supported:
~~• Chrome `75.0`~~

~~• Brave `0.65`~~

• Firefox `67.0`

### Description:
* Adds a Breach Monitor functionality to ServiceNow dashboards using two scripts:

  • Automatic and periodic report widget refreshing that relies on ServiceNow's built-in Angular scripts instead of full window refresh
  
  • Conditional formatting that lowlights any panes that don't return any tickets and highlights the ones that do, drawing attention to actions requiring service desk's attention
### Version history:
```
0.1.2:  Code cleanup
0.1.1:  Added console echoes for debugging purposes
```
### Current issues:
```
1.  Built-in ServiceNow React scripts causing memory leaks, prolonged plugin usage can render the browser unresponsive
2.  Conditional formatting not being applied after pane refresh or upon revisiting the dashboard in Chrome and Brave, requires window refresh to reapply
3.  Both scripts not being properly reapplied upon dashboard revisit if done in an iframe
```
### To be added:
```
1.  Descriptive icon set (to indicate if/what items require attention)
2.  Browser notification for Critical/High priority Incidents and password reset requests in queue
3.  Settings menu:
    3.1 Domain selector, if possible
    3.2 Dashboard selector
    3.3 Color palettes
4.  Separate and more context-appropriate refresh timers (1 min/5 mins/10 mins)
5.  Less/way more cheesy project name
```