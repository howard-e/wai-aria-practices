---
# This is a generated file
title: "Radio Group Example Using Roving tabindex"
ref: /ARIA/apg/example-index/radio/radio

github:
  repository: w3c/aria-practices
  branch: main
  path: examples/radio/radio.html
feedbackmail: public-aria-practices@w3.org
permalink: /ARIA/apg/example-index/radio/radio

sidebar: true

footer: "          <div class='example-page-footer'>            <p><a href='https://github.com/w3c/aria-practices/projects/22'>View issues related to this example</a></p>            <p>Page last updated: 23 November 2021</p>          </div>        "

# Context here: https://github.com/w3c/wai-aria-practices/issues/31
type_of_guidance: APG

lang: en
---
<script src="../js/examples.js"></script>
<script src="../js/highlight.pack.js"></script>
<script src="../js/app.js"></script>

<link rel="stylesheet" href="css/radio.css" />
<script src="js/radio.js" type="text/javascript"></script>


<link 
  rel="stylesheet"
  href="{{ '/content-assets/wai-aria-practices/styles.css' | relative_url }}"
>
<!-- Code highlighting styles -->
<link 
  rel="stylesheet"
  href="{{ '/ARIA/apg/example-index/css/github.css' | relative_url }}"
>

<script>
const addBodyClass = undefined;
const enableSidebar = true;
if (addBodyClass) document.body.classList.add(addBodyClass);
if (enableSidebar) document.body.classList.add('has-sidebar');
</script>
    

<script>
    const parentPage = window.location.pathname.match(
      /\/(patterns|practices|example-index)\//
    )?.[1];
    if (parentPage) {
      const parentHref = 'a[href*="' + parentPage + '"]';
      document.querySelector(parentHref).classList.add('active');
    }
  </script>
<div>

            <h2 id="support-notice-header">Read This First</h2>
            <details id="support-notice" class="note">
    
        <summary>
          <p>
            The code in this example is not intended for production environments. 
            Before using it for any purpose, read this to understand why.
          </p>
        </summary>
      
    <p>
        This is an illustrative example of one way of using ARIA that conforms with the ARIA specification.
    </p>
    <ul>
    <li>
        There may be support gaps in some
        <a href="{{ '/ARIA/apg/practices/read-me-first/#browser_and_AT_support' | relative_url }}">browser and assistive technology combinations</a>,
        especially for <a href="{{ '/ARIA/apg/practices/read-me-first/#mobile_and_touch_support' | relative_url }}">mobile/touch devices</a>.
        Testing code based on this example with assistive technologies is essential before considering use in production systems.
    </li>
    <li>
        The <a href="https://aria-at.w3.org">ARIA and Assistive Technologies Project</a>
        is developing measurements of assistive technology support for APG examples.
    </li>
    <li>
        Robust accessibility can be further optimized by choosing implementation patterns that
        <a href="https://www.w3.org/TR/using-aria/#rule1">maximize use of semantic HTML</a>
        and heeding the warning that
        <a href="{{ '/ARIA/apg/practices/read-me-first/#no_aria_better_bad_aria' | relative_url }}">No ARIA is better than Bad ARIA</a>.
    </li>
    </ul>
</details>
            <h2>About This Example</h2>
          <img alt=""
          src="{{ '/content-images/wai-aria-practices/img/radiobutton.svg' | relative_url }}"
          class="example-page-example-icon"
        >
    
    <div>
      
      <p>
        This example implements the features of the <a href="{{ '/ARIA/apg/patterns/radiobutton/' | relative_url }}">Radio Group Design Pattern</a>
        for two radio groups -- one for choosing a pizza crust and another for choosing a delivery method.
        This implementation uses a roving tabindex for managing focus within the radio group.
      </p>
      <p>Similar examples include: </p>
      <ul>
        <li><a href="radio-activedescendant.html">Radio Group Example Using aria-activedescendant</a>: Radio button group that uses <code>aria-activedescendant</code> for managing keyboard focus.</li>
        <li><a href="radio-rating.html">Rating Radio Group Example</a>: Radio group that provides input for a five-star rating scale.</li>
      </ul>
      <section>
        <div class="example-header">
          <h2 id="ex_label">Example</h2>
        </div>
        <div role="separator" id="ex_start_sep" aria-labelledby="ex_start_sep ex_label" aria-label="Start of"></div>
        <div id="ex1">
          <div role="radiogroup" aria-labelledby="group_label_1" id="rg1">
            <h3 id="group_label_1">Pizza Crust</h3>

            <div role="radio" aria-checked="false" tabindex="0">
              Regular crust
            </div>
            <div role="radio" aria-checked="false" tabindex="-1">
              Deep dish
            </div>
            <div role="radio" aria-checked="false" tabindex="-1">
              Thin crust
            </div>
          </div>

          <div role="radiogroup" aria-labelledby="group_label_2" id="rg2">
            <h3 id="group_label_2">Pizza Delivery</h3>
            <div role="radio" aria-checked="false" tabindex="0">
              Pickup
            </div>

            <div role="radio" aria-checked="false" tabindex="-1">
              Home Delivery
            </div>

            <div role="radio" aria-checked="false" tabindex="-1">
              Dine in
            </div>
          </div>

        </div>
        <div role="separator" id="ex_end_sep" aria-labelledby="ex_end_sep ex_label" aria-label="End of"></div>
      </section>

      <section>
        <h2>Accessibility Features</h2>
        <ul>
          <li>Uses CSS attribute selectors for synchronizing <code>aria-checked</code> state with the visual state indicator.</li>
          <li>Uses CSS <code>:hover</code> and <code>:focus</code> pseudo-classes for styling visual keyboard focus and hover.
            <ul>
              <li>The focus indicator encompasses both the radio button and label, making it easier to perceive which option is being chosen.</li>
              <li>Hover changes background of both the radio button and label, making it easier to perceive that clicking either the label or button will activate the radio button.</li>
              <li>The cursor is changed to a pointer when hovering over the radio button to help people with visual impairments identify it as an interactive element.</li>
            </ul>
          </li>
          <li>
            Because transparent borders are visible on some systems with high contrast enabled, only the focused element has a visible border.
            When focusable elements are not focused, they have a 0-width border and additional padding equal in width to the border that is used to indicate focus.
          </li>
          <li>
            To ensure the inline SVG radio button graphics in the CSS file have sufficient contrast with the background when high contrast settings change the color of text content,
            CSS <code>forced-color-adjust</code> is set to <code>auto</code> on the <code>svg</code> graphics.
            This causes the colors of the <code>stroke</code> and <code>fill</code> of the circle elements to be overridden by the high contrast color setting.
            To make the background of the <code>circle</code> elements match the high contrast background color, the <code>fill-opacity</code> attribute of the outer <code>circle</code> is set to zero and the <code>stroke-opacity</code> attribute of the inner <code>circle</code> is set to zero.
            If <code>forced-color-adjust</code> were not used to override the colors specified for the <code>stroke</code> and <code>fill</code> properties, those colors would remain the same in high contrast mode, which could lead to insufficient contrast between the radio circle elements and the background or even make them invisible if their color matched the high contrast mode background.<br>
            Note: The explicit setting of <code>forced-color-adjust</code> is necessary because some browsers do not use <code>auto</code> as the default value for SVG graphics.
          </li>
        </ul>
      </section>

      <section>
        <h2 id="kbd_label">Keyboard Support</h2>
        <div class="table-wrap"><table aria-labelledby="kbd_label" class="def">
          <thead>
            <tr>
              <th>Key</th>
              <th>Function</th>
            </tr>
          </thead>
          <tbody>
            <tr data-test-id="key-tab">
              <th><kbd>Tab</kbd></th>
              <td>
                <ul>
                  <li>Moves focus to the checked <code>radio</code> button in the <code>radiogroup</code>.</li>
                  <li>If a <code>radio</code> button is not checked, focus moves to the first <code>radio</code> button in the group.</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="key-space">
              <th><kbd>Space</kbd></th>
              <td>
                <ul>
                  <li>If the <code>radio</code> button with focus is not checked, changes the state to <code>checked</code>.</li>
                  <li>Otherwise, does nothing.</li>
                  <li>Note: The state where a radio is not checked only occurs on page load.</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="key-down-right-arrow">
              <th><kbd>Down arrow</kbd><br><kbd>Right arrow</kbd></th>
              <td>
                <ul>
                  <li>Moves focus to and checks the next <code>radio</code> button in the group.</li>
                  <li>If focus is on the last <code>radio</code> button, moves focus to the first <code>radio</code> button.</li>
                  <li>The state of the previously checked radio button is changed to unchecked.</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="key-up-left-arrow">
              <th><kbd>Up arrow</kbd><br><kbd>Left arrow</kbd></th>
              <td>
                <ul>
                  <li>Moves focus to and checks the previous <code>radio</code> button in the group.</li>
                  <li>If focus is on the first <code>radio</code> button, moves focus to and checks the last <code>radio</code> button.</li>
                  <li>The state of the previously checked radio button is changed to unchecked.</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table></div>
      </section>

<section>
        <h2 id="rps_label">Role, Property, State, and Tabindex  Attributes</h2>
        <div class="table-wrap"><table aria-labelledby="rps_label" class="data attributes">
          <thead>
            <tr>
              <th scope="col">Role</th>
              <th scope="col">Attributes</th>
              <th scope="col">Element</th>
              <th scope="col">Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr data-test-id="radiogroup-role">
              <th scope="row"><code>radiogroup</code></th>
              <td></td>
              <td><code>div</code></td>
              <td>
                <ul>
                  <li>Identifies the <code>div</code> element as a container for a group of <code>radio</code> buttons.</li>
                  <li>Is not focusable because focus is managed using a roving tabindex strategy as described below.</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="radiogroup-aria-labelledby">
              <td></td>
              <th scope="row"><code>aria-labelledby="[IDREF]"</code></th>
              <td><code>div</code></td>
              <td>Refers to the element that contains the label of the radio group.</td>
            </tr>
            <tr data-test-id="radio-role">
              <th scope="row"><code>radio</code></th>
              <td></td>
              <td><code>div</code></td>
              <td>
                <ul>
                  <li>Identifies the <code>div</code> element as an ARIA <code>radio</code> button.</li>
                  <li>The accessible name is computed from the child text content of the <code>div</code> element.</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="radio-tabindex">
              <td></td>
              <th scope="row"><code>tabindex="-1"</code></th>
              <td><code>div</code></td>
              <td>
                <ul>
                  <li>Makes the element focusable but not part of the page <kbd>Tab</kbd> sequence.</li>
                  <li>Applied to all radio buttons contained in the radio group except for one that is included in the page <kbd>Tab</kbd> sequence.</li>
                  <li>This approach to managing focus is described in the section on <a href="{{ '/ARIA/apg/practices/keyboard-interface/#kbd_roving_tabindex' | relative_url }}">roving tabindex</a>.</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="radio-tabindex">
              <td></td>
              <th scope="row"><code>tabindex="0"</code></th>
              <td><code>div</code></td>
              <td>
                <ul>
                  <li>Makes the radio button focusable and includes it in the page <kbd>Tab</kbd> sequence.</li>
                  <li>Set on only one radio in the radio group.</li>
                  <li>On page load, is set on the first radio button in the radio group.</li>
                  <li>Moves with focus inside the radio group so the most recently focused radio button is included in the page <kbd>Tab</kbd> sequence.</li>
                  <li>This approach to managing focus is described in the section on <a href="{{ '/ARIA/apg/practices/keyboard-interface/#kbd_roving_tabindex' | relative_url }}">roving tabindex</a>.</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="radio-aria-checked">
              <td></td>
              <th scope="row"><code>aria-checked="false"</code></th>
              <td><code>div</code></td>
              <td>
                <ul>
                  <li>Identifies <code>radio</code> buttons which are not checked.</li>
                  <li>CSS attribute selectors (e.g. <code>[aria-checked="false"]</code>) are used to synchronize the visual states with the value of the <code>aria-checked</code> attribute.</li>
                  <li>The CSS <code>::before</code> pseudo-element is used to indicate visual state of unchecked radio buttons to support high contrast settings in operating systems and browsers.</li>
                </ul>
              </td>
            </tr>
            <tr data-test-id="radio-aria-checked">
              <td></td>
              <th scope="row"><code>aria-checked="true"</code></th>
              <td><code>div</code></td>
              <td>
                <ul>
                  <li>Identifies the <code>radio</code> button which is checked.</li>
                  <li>CSS attribute selectors (e.g. <code>[aria-checked="true"]</code>) are used to synchronize the visual states with the value of the <code>aria-checked</code> attribute.</li>
                  <li>The CSS <code>::before</code> pseudo-element is used to indicate visual state of checked radio buttons to support high contrast settings in operating systems and browsers.</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table></div>
      </section>

      <section>
        <h2>Javascript and CSS Source Code</h2>
        <ul id="css_js_files">
          <li>CSS: <a href="css/radio.css">radio.css</a></li>
          <li>Javascript: <a href="js/radio.js">radio.js</a></li>
        </ul>
      </section>

      <section>
        <h2 id="sc1_label">HTML Source Code</h2>
        <div role="separator" id="sc1_start_sep" aria-labelledby="sc1_start_sep sc1_label" aria-label="Start of"></div>
        <pre><code id="sc1"></code></pre>
        <div role="separator" id="sc1_end_sep" aria-labelledby="sc1_end_sep sc1_label" aria-label="End of"></div>
        <script>
          sourceCode.add('sc1', 'ex1', 'ex_label', 'css_js_files');
          sourceCode.make();
        </script>
      </section>
    </div>
    
  
</div>
<script 
  src="{{ '/ARIA/apg/example-index/js/skipto.js' | relative_url }}"
></script>