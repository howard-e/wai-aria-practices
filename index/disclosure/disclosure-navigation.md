---
# This is a generated file
title: "Example Disclosure Navigation Menu"
ref: /aria-practices/

github:
  repository: w3c/aria-practices
  path: aria-practices.html
permalink: /index/disclosure/disclosure-navigation

lang: en
last_updated: 2021-12-15
---
<script src="../js/examples.js"></script>
<script src="../js/highlight.pack.js"></script>
<script src="../js/app.js"></script>

<link href="css/disclosure-navigation.css" rel="stylesheet" />
<script src="js/disclosureMenu.js"></script>


<link rel="stylesheet" href="/assets/styles.css">
<!-- Code highlighting styles -->
<link rel="stylesheet" href="/index/css/github.css">

<div>

        <div class="sidebar-container">
          <aside class="sidebar-left" aria-describedby="sidebar-toc">
            <h2 id="sidebar-toc" class="sidebar-headline">Table of Contents</h2>
            <ul class="sidebar-list">
              
                    <li>
                      <a href="#example-usage-options">Example Usage Options</a>
                    </li>
                   
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
                      <a href="#rps_label">Role, Property, State, and Tabindex Attributes</a>
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
      <li><a href="https://github.com/w3c/aria-practices/projects/14">Related Issues</a></li>
      <li><a href="/patterns/disclosure/">Design Pattern</a></li>
    </ul>
  
          </aside>
          <div class="sidebar-right"><h2 class="followed-by-support-notice">About This Example</h2>
  
  <div>
    
    <div class="advisement">
      <p>
        Although this example uses the word "menu" in the colloquial sense to refer to a set of navigation links, it does not use the WAI-ARIA menu role.
        That is because the menu and menubar roles require complex functionality, such as <a href="/fundamentals/keyboard-interface/#kbd_general_within">composite widget focus management</a> and first-character navigation, that is unnecessary for typical site navigation.
      </p>
    </div><img alt=""
        src="/assets/img/disclosure.svg"
        class="example-page-example-icon"
      >
    <p>
      The following example demonstrates using the
      <a href="/patterns/disclosure/">disclosure design pattern</a>
      to show and hide dropdown lists of links in a navigation bar for a mythical university web site.
      Each disclosure button represents a section of the web site, and expanding it shows a list of links to pages within that section.
    </p>
    <p>Similar examples include:</p>
  <ul>
    <li><a href="disclosure-faq.html">Example Disclosure (Show/Hide) for Answers to Frequently Asked Questions</a></li>
    <li><a href="disclosure-image-description.html">Example Disclosure (Show/Hide) for an Image Description</a></li>
    <li><a href="disclosure-navigation-hybrid.html">Example Disclosure Navigation Menu with Top-Level Links</a></li>
    <li><a href="../menubar/menubar-navigation.html">Navigation Menubar Example</a></li>
  </ul>
  <h2 tabindex="-1" id="example-usage-options">Example Usage Options</h2>
  <p>
    This example demonstrates two different ways of implementing keyboard support.
    Toggle between them with the following checkbox.
  </p>
  <label for="arrow-behavior-switch">
    <input type="checkbox" id="arrow-behavior-switch" checked>
    Include optional support for arrow keys, <kbd>Home</kbd>, and <kbd>End</kbd>
  </label>

  <section>
    <div class="example-header">
      <h2 id="ex_label" tabindex="-1">Example</h2>
    </div>
    <div role="separator" id="ex_start_sep" aria-labelledby="ex_start_sep ex_label" aria-label="Start of" ></div>
    <div id="ex1">
      <nav aria-label="Mythical University">
        <ul id="exTest" class="disclosure-nav">
          <li>
            <button type="button" aria-expanded="true" aria-controls="id_about_menu">About</button>
            <ul id="id_about_menu">
              <li>
                <a href="#mythical-page-content">Overview</a>
              </li>
              <li>
                <a href="#mythical-page-content">Administration</a>
              </li>
              <li>
                <a href="#mythical-page-content">Facts</a>
              </li>
              <li>
                <a href="#mythical-page-content">Campus Tours</a>
              </li>
            </ul>
          </li>
          <li>
            <button type="button" aria-expanded="true" aria-controls="id_admissions_menu">Admissions</button>
            <ul id="id_admissions_menu">
              <li>
                <a href="#mythical-page-content">Apply</a>
              </li>
              <li>
                <a href="#mythical-page-content">Tuition</a>
              </li>
              <li>
                <a href="#mythical-page-content">Sign Up</a>
              </li>
              <li>
                <a href="#mythical-page-content">Visit</a>
              </li>
              <li>
                <a href="#mythical-page-content">Photo Tour</a>
              </li>
              <li>
                <a href="#mythical-page-content">Connect</a>
              </li>
            </ul>
          </li>
          <li>
            <button type="button" aria-expanded="true" aria-controls="id_academics_menu">Academics</button>
            <ul id="id_academics_menu">
              <li>
                <a href="#mythical-page-content">Colleges &amp; Schools</a>
              </li>
              <li>
                <a href="#mythical-page-content">Programs of Study</a>
              </li>
              <li>
                <a href="#mythical-page-content">Honors Programs</a>
              </li>
              <li>
                <a href="#mythical-page-content">Online Courses</a>
              </li>
              <li>
                <a href="#mythical-page-content">Course Explorer</a>
              </li>
              <li>
                <a href="#mythical-page-content">Register for Class</a>
              </li>
              <li>
                <a href="#mythical-page-content">Academic Calendar</a>
              </li>
              <li>
                <a href="#mythical-page-content">Transcripts</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div id="mythical-page-content" class="disclosure-page-content" tabindex="-1" role="region" aria-label="Mythical University sample page content">
        <h3 id="mythical-page-heading">Mythical University</h3>
        <p>Sample content section. Activating a link above will update and navigate to this region.</p>
      </div>
    </div>
    <div role="separator" id="ex_end_sep" aria-labelledby="ex_end_sep ex_label" aria-label="End of"></div>
  </section>

  <section>
    <h2 tabindex="-1" id="accessibility-features">Accessibility Features</h2>
    <ol>
      <li>Since this set of disclosure buttons controls visibility of navigation links for the mythical university web site, the list that contains them is wrapped in a navigation landmark named <q>Mythical University</q>.</li>
      <li>
        The semantics of the list structure communicates the hierarchy of the navigation system to assistive technology users.
        The top-level set of three buttons is in a list of three items, and the set of links controlled by each button is contained within a list nested inside the item with the controlling button.
      </li>
      <li>
        If a dropdown is open and focus is inside the navigation region, pressing <kbd>Esc</kbd> will close the dropdown.
        Moving focus out of the navigation region also closes an open dropdown.
        Implementing this <kbd>Esc</kbd> behavior is necessary to meet the WCAG 2.1 <a href="https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html">1.4.13: Content on Hover or Focus</a> criterion.
      </li>
      <li>The visual indicator of the show/hide state is created using CSS <code>::after</code> pseudo element border styles so the caret is reliably rendered in high contrast mode of operating systems and browsers.</li>
      <li>Optional navigation keys (Arrow keys, <kbd>Home</kbd>, and <kbd>End</kbd>):
        <ol>
          <li>Implementing the optional arrow key support prevents the default page scroll behavior when focus is contained within the navigation region.</li>
          <li>
            Optional navigation key support is primarily for the benefit of keyboard users who are not running a screen reader.
            Screen readers that have both reading and interaction modes intercept these navigation keys and do not pass them to the page when the screen reader is in reading mode.
            When interacting with this example, such screen readers are typically in reading mode because this example does not use a widget role that triggers screen reader interaction mode.
          </li>
          <li>
            If implemented, the optional navigation keys supplement, but do not replace, tabbing among buttons and links.
            This is because the buttons and links are not contained by an element with a widget role, such as <code>grid</code>, that is expected to occupy only one stop in the page <kbd>Tab</kbd> sequence and manage focus for all its descendants.
          </li>
        </ol>
      </li>
    </ol>
  </section>

  <section>
    <h2 id="kbd_label" tabindex="-1">Keyboard Support</h2>
    <div class="table-wrap"><table aria-labelledby="kbd_label" class="def">
      <thead>
        <tr>
          <th>Key</th>
          <th>Function</th>
        </tr>
      </thead>
      <tbody>
        <tr data-test-id="key-tab">
          <th>
            <kbd>Tab</kbd><br>
            <kbd>Shift + Tab</kbd>
          </th>
          <td>Move keyboard focus among top-level buttons, and if a dropdown is open, into and through links in the dropdown.</td>
        </tr>
        <tr data-test-id="key-enter-space">
          <th>
            <kbd>Space</kbd> or <br>
            <kbd>Enter</kbd>
          </th>
          <td>
            <ul>
              <li>If focus is on a disclosure button, activates the button, which toggles the visibility of the dropdown.</li>
              <li>If focus is on a link:
                <ul>
                  <li>If any link has <code>aria-current</code> set, removes it.</li>
                  <li>Sets <code>aria-current="page"</code> on the focused link.</li>
                  <li>Activates the focused link.</li>
                </ul>
              </li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="key-escape">
          <th>
            <kbd>Escape</kbd>
          </th>
          <td>If a dropdown is open, closes it and sets focus on the button that controls that dropdown.</td>
        </tr>
        <tr data-test-id="key-arrows">
          <th>
            <kbd>Down Arrow</kbd> or <br>
            <kbd>Right Arrow</kbd><br>
            (Optional)
          </th>
          <td>
            <ul>
              <li>If focus is on a button and its dropdown is collapsed, and it is not the last button, moves focus to the next button.</li>
              <li>if focus is on a button and its dropdown is expanded, moves focus to the first link in the dropdown.</li>
              <li>If focus is on a link, and it is not the last link, moves focus to the next link.</li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="key-arrows">
          <th>
            <kbd>Up Arrow</kbd> or <br>
            <kbd>Left Arrow</kbd><br>
            (Optional)
          </th>
          <td>
            <ul>
              <li>If focus is on a button, and it is not the first button, moves focus to the previous button.</li>
              <li>If focus is on a link, and it is not the first link,  moves focus to the previous link.</li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="key-home-end">
          <th>
            <kbd>Home</kbd> (Optional)
          </th>
          <td>
          <ul>
              <li>If focus is on a button, and it is not the first button, moves focus to the first button.</li>
              <li>If focus is on a link, and it is not the first link, moves focus to the first link.</li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="key-home-end">
          <th>
            <kbd>End</kbd> (Optional)
          </th>
          <td>
          <ul>
              <li>If focus is on a button, and it is not the last button, moves focus to the last button.</li>
              <li>If focus is on a link, and it is not the last link, moves focus to the last link.</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table></div>
  </section>

  <section>
    <h2 id="rps_label" tabindex="-1">Role, Property, State, and Tabindex Attributes</h2>
    <div class="table-wrap"><table aria-labelledby="rps_label" class="data attributes">
      <thead>
        <tr>
          <th scope="col">Role</th>
          <th scope="col">Attribute</th>
          <th scope="col">Element</th>
          <th scope="col">Usage</th>
        </tr>
      </thead>
      <tbody>
        <tr data-test-id="button-aria-controls">
          <td></td>
          <th scope="row">
            <code>aria-controls="IDREF"</code>
          </th>
          <td>
            <code>button</code>
          </td>
          <td>
            The disclosure button controls visibility of the container identified by the <code>IDREF</code> value.
          </td>
        </tr>
        <tr data-test-id="button-aria-expanded">
          <td></td>
          <th scope="row">
            <code>aria-expanded="false"</code>
          </th>
          <td>
            <code>button</code>
          </td>
          <td>
            <ul>
              <li>
                Indicates that the container controlled by the disclosure button is <em>hidden</em>.
              </li>
              <li>
                CSS attribute selectors (e.g. <code>[aria-expanded="false"]</code>) are
                used to synchronize the visual states with the value of the <code>aria-expanded</code>
                attribute.
              </li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="button-aria-expanded">
          <td></td>
          <th scope="row">
            <code>aria-expanded="true"</code>
          </th>
          <td>
            <code>button</code>
          </td>
          <td>
            <ul>
              <li>
                Indicates that the container controlled by the disclosure button is <em>visible</em>.
              </li>
              <li>
                CSS attribute selectors (e.g. <code>[aria-expanded="true"]</code>) are
                used to synchronize the visual states with the value of the <code>aria-expanded</code>
                attribute.
              </li>
            </ul>
          </td>
        </tr>
        <tr data-test-id="link-aria-current">
          <td></td>
          <th scope="row">
            <code>aria-current="page"</code>
          </th>
          <td>
            <code>a</code>
          </td>
          <td>Indicates that the page referenced by the link is currently displayed.</td>
        </tr>
      </tbody>
    </table></div>
  </section>

  <section>
    <h2 tabindex="-1" id="javascript-and-css-source-code">Javascript and CSS Source Code</h2>
    
    <ul id="css_js_files">
      <li>
        CSS:
        <a href="css/disclosure-navigation.css">disclosure-navigation.css</a>
      </li>
      <li>
        Javascript:
        <a href="js/disclosureMenu.js">disclosureMenu.js</a>
      </li>
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
    <a href="/patterns/disclosure/">Disclosure (Show/Hide) Design Pattern in WAI-ARIA Authoring Practices 1.2</a>
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