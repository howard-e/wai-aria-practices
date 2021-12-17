---
# This is a generated file
title: "Actions Menu Button Example Using <code>element.focus()</code>"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  path: aria-practices.html
permalink: /index/menu-button/menu-button-actions

lang: en
last_updated: 2021-12-15
---
<script src="../js/examples.js"></script>
<script src="../js/highlight.pack.js"></script>
<script src="../js/app.js"></script>

<link href="css/menu-button-actions.css" rel="stylesheet" />
<script src="js/menu-button-actions.js" type="text/javascript"></script>


<link rel="stylesheet" href="/assets/styles.css">
<!-- Code highlighting styles -->
<link rel="stylesheet" href="/index/css/github.css">

<div>

        <div class="sidebar-container">
          <aside class="sidebar-left" aria-describedby="sidebar-toc">
            <h2 id="sidebar-toc" class="sidebar-headline">Table of Contents</h2>
            <ul class="sidebar-list">
              
                    <li>
                      <a href="#ex_label">Example</a>
                    </li>
                   
                    <li>
                      <a href="#accessibility-features">Accessibility Features</a>
                    </li>
                   
                    <li>
                      <a href="#kbd_label">Keyboard Support</a>
                    </li>
                   
                    <li>
                      <a href="#rps_label">Role, Property, State, and Tabindex  Attributes</a>
                    </li>
                   
                    <li>
                      <a href="#javascript-and-css-source-code">Javascript and CSS Source Code</a>
                    </li>
                   
                    <li>
                      <a href="#sc1_label">HTML Source Code</a>
                    </li>
                  
            </ul>
            
      <ul class="sidebar-list sidebar-list-yellow">
        <li><a href="/#browser_and_AT_support">Browser and Assistive Technology Support</a></li>
        <li><a href="https://github.com/w3c/aria-practices/issues/new">Report Issue</a></li>
        <li><a href="https://github.com/w3c/aria-practices/projects/5">Related Issues</a></li>
        <li><a href="/patterns/menubutton/">Design Pattern</a></li>
      </ul>
    
          </aside>
          <div class="sidebar-right"><h2 class="followed-by-support-notice">About This Example</h2><img alt=""
        src="/assets/img/menubutton.svg"
        class="example-page-example-icon"
      >
    
    <div>
      
      <p>
        This example demonstrates how the
        <a href="/patterns/menubutton/">menu button design pattern</a>
      can be used to create a button that opens an actions menu.
      In this example, choosing an action from the menu will cause the chosen action to be displayed in the <q>Last Action</q> edit box.
    </p>
    <p>
    In this implementation, each item in the menu is made focusable by setting <code>tabindex=&quot;-1&quot;</code> so the JavaScript can use <code>element.focus()</code> to set focus in response to events that trigger focus movement inside the menu.
    An alternative technique for managing focus movement among menu items is demonstrated in
    <a href="menu-button-actions-active-descendant.html">the action menu button example that uses aria-activedescendant.</a>
      </p>
      <p>Similar examples include: </p>
      <ul>
        <li><a href="menu-button-actions-active-descendant.html">Action Menu Button Example Using aria-activedescendant</a>: A button that opens a menu of actions or commands where focus in the menu is managed using aria-activedescendant.</li>
        <li><a href="menu-button-links.html">Navigation Menu Button</a>: A button that opens a menu of items that behave as links.</li>
      </ul>
      <section>
        <div class="example-header">
          <h2 id="ex_label" tabindex="-1">Example</h2>
        </div>
        <div role="separator" id="ex_start_sep" aria-labelledby="ex_start_sep ex_label" aria-label="Start of"></div>
        <div id="ex1">
          <div class="menu-button-actions">
            <button type="button"
                id="menubutton1"
                aria-haspopup="true"
                aria-controls="menu1"
                >
              Actions
              <svg xmlns="http://www.w3.org/2000/svg" class="down" width="12" height="9" viewBox="0 0 12 9">
                <polygon points="1 0, 11 0, 6 8"></polygon>
              </svg>
            </button>

            <ul id="menu1" role="menu" aria-labelledby="menubutton1">
              <li role="menuitem">Action 1</li>
              <li role="menuitem">Action 2</li>
              <li role="menuitem">Action 3</li>
              <li role="menuitem">Action 4</li>
            </ul>
          </div>
        <p>
          <label>Last Action: <input class="action" id="action_output" type="text" value=""></label>
        </p>
        </div>
        <div role="separator" id="ex_end_sep" aria-labelledby="ex_end_sep ex_label" aria-label="End of"></div>
      </section>

      <section>
        <h2 tabindex="-1" id="accessibility-features">Accessibility Features</h2>
        <ol>
          <li>A down arrow icon is included to help users understand that the button opens a menu.</li>
          <li>To support operating system high contrast settings:
            <ul>
              <li>
                Because transparent borders are visible on some systems with operating system high contrast settings enabled, transparency cannot be used to create a visual difference between the element that is focused an other elements.
                Instead of using transparency, the focused element has a thicker border and less padding.
                When an element receives focus, its border changes from 1 to 3 pixels and padding is reduced by 2 pixels.
                When an element loses focus, its border changes from 3 pixels to 1 and padding is increased by 2 pixels.
              </li>
              <li>Because background color and text color styles can be overridden by operating system high contrast settings, a border is used to ensure the button has a visible boundary when high contrast mode is enabled.</li>
              <li>
                To ensure the arrow icons used to indicate the expanded or collapsed state have sufficient contrast with the background when high contrast settings invert colors, the CSS <code>currentColor</code> value for the <code>fill</code> and <code>stroke</code> properties of the SVG <code>polygon</code> element is used to synchronize the color with text content.
                If specific colors are used to specify the <code>fill</code> and <code>stroke</code> properties, these colors will remain the same in high contrast mode, which could lead to insufficient contrast between the icon and the background or even make the icon invisible if its color matches the high contrast mode background.
              </li>
            </ul>
          </li>
        </ol>
      </section>

      <section>
        <h2 id="kbd_label" tabindex="-1">Keyboard Support</h2>
        <h3 id="kbd1_label">Menu Button</h3>
        <div class="table-wrap"><table aria-labelledby="kbd1_label kbd_label" class="def">
          <thead>
            <tr>
              <th>Key</th>
              <th>Function</th>
            </tr>
          </thead>
          <tbody>
            <tr data-test-id="menu-button-key-open">
              <th><kbd>Down Arrow</kbd><br><kbd>Space</kbd><br><kbd>Enter</kbd></th>
              <td>Opens <code>menu</code> and moves focus to first <code>menuitem</code></td>
            </tr>
            <tr data-test-id="menu-button-key-up-arrow">
              <th><kbd>Up Arrow</kbd></th>
              <td>Opens <code>menu</code> and moves focus to last <code>menuitem</code></td>
            </tr>
          </tbody>
        </table></div>
         <h3 id="kbd2_label" class="widget">Menu</h3>
        <div class="table-wrap"><table aria-labelledby="kbd2_label kbd_label" class="def">
          <thead>
            <tr>
              <th style="min-width: 8em">Key</th>
              <th>Function</th>
            </tr>
          </thead>
          <tbody>
            <tr data-test-id="menu-key-enter">
              <th><kbd>Enter</kbd></th>
              <td>
                <ul>
                  <li>Activates the menu item, causing the <q>Last Action</q> textbox to be updated.</li>
                                    <li>Closes the menu.</li>
                                    <li>Sets focus on the menu button</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="menu-key-escape">
              <th><kbd>Escape</kbd></th>
              <td>
                <ul>
                  <li>Closes the menu.</li>
                  <li>Sets focus to the menu button.</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="menu-key-up-arrow">
              <th><kbd>Up Arrow</kbd></th>
              <td>
                <ul>
                  <li>Moves focus to the previous menu item.</li>
                  <li>If focus is on the first menu item, moves focus to the last menu item.</li>
                </ul>
              </td>
            </tr>
             <tr data-test-id="menu-key-down-arrow">
              <th><kbd>Down Arrow</kbd></th>
              <td>
                <ul>
                  <li>Moves focus to the next menu item.</li>
                  <li>If focus is on the last menu item, moves focus to the first menu item.</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="menu-key-home">
              <th><kbd>Home</kbd></th>
              <td>Moves focus to the first menu item.</td>
            </tr>
            <tr data-test-id="menu-key-end">
              <th><kbd>End</kbd></th>
              <td>Moves focus to the last menu item.</td>
            </tr>
            <tr data-test-id="menu-key-character">
              <th><kbd>A-Z</kbd><br><kbd>a-z</kbd></th>
              <td>
                <ul>
                  <li>Moves focus to the next menu item with a label that starts with the typed character if such an menu item exists.</li>
                  <li>Otherwise, focus does not move.</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table></div>
      </section>

      <section>
        <h2 id="rps_label" tabindex="-1">Role, Property, State, and Tabindex  Attributes</h2>
        <h3 id="rps1_label">Menu Button</h3>
        <div class="table-wrap"><table aria-labelledby="rps1_label rps_label" class="data attributes">
          <thead>
            <tr>
              <th scope="col">Role</th>
              <th scope="col">Attribute</th>
              <th scope="col">Element</th>
              <th scope="col">Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr data-test-id="menu-button-aria-haspopup">
              <td></td>
              <th scope="row"><code>aria-haspopup=&quot;true&quot;</code></th>
              <td>
                <code>button</code>
              </td>
              <td>
                <ul>
                  <li>Indicates the <code>button</code> element opens a menu.</li>
                  <li>
                    <strong>NOTE:</strong> While ARIA does not include a role specifically for menu buttons, most platform accessibility APIs include a menubutton role.
                    Consequently, on such platforms, assistive technologies, such as screen readers, identify buttons that have <code>aria-haspopup</code> set to either <code>true</code> or <code>menu</code> as menu buttons.
                  </li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="menu-button-aria-controls">
              <td></td>
              <th scope="row"><code>aria-controls=&quot;IDREF&quot;</code></th>
              <td>
                <code>button</code>
              </td>
              <td>
                <ul>
                  <li>Refers to the menu element controlled by the menu button.</li>
                  <li>Optional attribute: assistive technology users can operate the menu if not present.</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="menu-button-aria-expanded">
                <td></td>
                <th scope="row"><code>aria-expanded=&quot;true&quot;</code></th>
                <td><code>button</code></td>
                <td>
                  <ul>
                    <li>Added when the menu is open.</li>
                    <li>Indicates that the menu is displayed and that activating the menu button closes the menu.</li>
                    <li>The <code>aria-expanded</code> attribute is removed when the menu is closed.</li>
                    <li>Included to support touch devices where screen reader users can touch the menu button when the menu is displayed. Keyboard users cannot focus the menu button when the menu is open.</li>
                  </ul>
                </td>
            </tr>
          </tbody>
        </table></div>
        <h3 id="rps2_label">Menu</h3>
        <div class="table-wrap"><table aria-labelledby="rps2_label rps_label" class="data attributes">
          <thead>
            <tr>
              <th scope="col">Role</th>
              <th scope="col">Attribute</th>
              <th scope="col">Element</th>
              <th scope="col">Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr data-test-id="menu-role">
              <th scope="row">
                <code>menu</code>
              </th>
              <td></td>
              <td>
                <code>ul</code>
              </td>
              <td>Identifies the <code>ul</code> element as a <code>menu</code>.</td>
            </tr>
            <tr data-test-id="menu-aria-labelledby">
              <td>
                <code></code>
              </td>
              <th scope="row"><code>aria-labelledby=&quot;IDREF&quot;</code></th>
              <td>
                <code>ul</code>
              </td>
              <td>
                <ul>
                  <li>Refers to the element that contains the accessible name for the <code>menu</code>.</li>
                  <li>The menu is labeled by the menu button.</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="menuitem-role">
              <th scope="row">
                <code>menuitem</code>
              </th>
              <td></td>
              <td>
                <code>li</code>
              </td>
              <td>
                <ul>
                  <li>Identifies the <code>li</code> element as a <code>menuitem</code>.</li>
                  <li>The text content of the <code>li</code> element provides the accessible name of the <code>menuitem</code>.</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="menuitem-tabindex">
              <td></td>
              <th scope="row"><code>tabindex=&quot;-1&quot;</code></th>
              <td>
                <code>li</code>
              </td>
              <td>
                <ul>
                  <li>Allows DOM focus to be set on the menu item with the JavaScript focus method.</li>
                  <li>Dynamically added by the JavaScript.</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table></div>

      </section>

      <section>
        <h2 tabindex="-1" id="javascript-and-css-source-code">Javascript and CSS Source Code</h2>

        <ul id="css_js_files">
          <li>CSS: <a href="css/menu-button-actions.css" type="text/css">menu-button-actions.css</a></li>
          <li>Javascript: <a href="js/menu-button-actions.js" type="text/javascript">menu-button-actions.js</a></li>
        </ul>
      </section>
      <section>
        <h2 id="sc1_label" tabindex="-1">HTML Source Code</h2>
        <div role="separator" id="sc1_start_sep" aria-labelledby="sc1_start_sep sc1_label" aria-label="Start of"></div>
        <pre><code id="sc1"></code></pre>
        <div role="separator" id="sc1_end_sep" aria-labelledby="sc1_end_sep sc1_label" aria-label="End of"></div>
        
        <script>
          sourceCode.add('sc1', 'ex1', 'ex_label', 'css_js_files');
          sourceCode.make();
        </script>
      </section>

    </div>
    <nav>
      <a href="/patterns/menubutton/">Menu Button Design Pattern in WAI-ARIA Authoring Practices 1.2</a>
    </nav>
  </div>
        </div>
      
</div>
<script>
  var SkipToConfig = {
    settings: {
      skipTo: {
        displayOption: 'popup',
        attachElement: '#site-header',
        colorTheme: 'aria'
      }
    }
  };
</script>
<script src="/assets/skipto.min.js"></script>