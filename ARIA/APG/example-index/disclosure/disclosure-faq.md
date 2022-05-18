---
# This is a generated file
title: "Example Disclosure (Show/Hide) for Answers to Frequently Asked Questions"
ref: /aria/apg/example-index/disclosure/disclosure-faq

github:
  repository: w3c/aria-practices
  branch: main
  path: examples/disclosure/disclosure-faq.html
feedbackmail: public-aria-practices@w3.org
permalink: /aria/apg/example-index/disclosure/disclosure-faq

sidebar: true

footer: "          <div class='example-page-footer'>            <p><a href='https://github.com/w3c/aria-practices/projects/14'>View issues related to this example</a></p>            <p>Page last updated: November 23, 2021</p>          </div>        "

# Context here: https://github.com/w3c/wai-aria-practices/issues/31
type_of_guidance: APG

lang: en
---
<script src="../js/examples.js"></script>
<script src="../js/highlight.pack.js"></script>
<script src="../js/app.js"></script>

<link href="css/disclosure-faq.css" rel="stylesheet" />
<script src="js/disclosure-button.js" type="text/javascript"></script>


<link 
  rel="stylesheet"
  href="{{ '/content-assets/wai-aria-practices/styles.css' | relative_url }}"
>
<!-- Code highlighting styles -->
<link 
  rel="stylesheet"
  href="{{ '/aria/apg/example-index/css/github.css' | relative_url }}"
>

<script>
const addBodyClass = undefined;
const enableSidebar = true;
if (addBodyClass) document.body.classList.add(addBodyClass);
if (enableSidebar) document.body.classList.add('has-sidebar');
</script>
    
<div>

            <h2>About This Example</h2>
            <details id="support-notice" class="note">
    <summary>Important Note About Use of This Example</summary>
    <p>
        Note: This is an illustrative example of one way of using ARIA that conforms with the ARIA specification.
    </p>
    <ul>
    <li>
        There may be support gaps in some
        <a href="{{ '/aria/apg/practices/read-me-first/#browser_and_AT_support' | relative_url }}">browser and assistive technology combinations</a>,
        especially for <a href="{{ '/aria/apg/practices/read-me-first/#mobile_and_touch_support' | relative_url }}">mobile/touch devices</a>.
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
        <a href="{{ '/aria/apg/practices/read-me-first/#no_aria_better_bad_aria' | relative_url }}">No ARIA is better than Bad ARIA</a>.
    </li>
    </ul>
</details>
          <img alt=""
          src="{{ '/content-images/wai-aria-practices/img/disclosure.svg' | relative_url }}"
          class="example-page-example-icon"
        >
  
  <div>
  
  <p>
    The following example demonstrates using the
    <a href="{{ '/aria/apg/patterns/disclosure/' | relative_url }}">disclosure design pattern</a>
    to create a set of frequently asked questions where the answers may be independently shown or hidden.
  </p>
  <p>Similar examples include:</p>
  <ul>
    <li>
      <a href="disclosure-image-description.html">Example Disclosure (Show/Hide) for an Image Description</a>
    </li>
    <li>
      <a href="disclosure-navigation.html">Example Disclosure Navigation Menu</a>
    </li>
    <li><a href="disclosure-navigation-hybrid.html">Example Disclosure Navigation Menu with Top-Level Links</a></li>
  </ul>
  <section>
    <div class="example-header">
      <h2 id="ex_label">Example</h2>
    </div>
    <div role="separator" id="ex_start_sep" aria-labelledby="ex_start_sep ex_label" aria-label="Start of"></div>
    <div id="ex1">
      <h3>Parking <abbr title="Frequently Asked Questions">FAQ</abbr>s</h3>
      <dl class="faq">
        <dt>
          <button type="button" aria-expanded="false" aria-controls="faq1_desc">What do I do if I have a permit for an assigned lot, but can't find a space there?</button>
        </dt>
        <dd>
          <div id="faq1_desc" class="desc">
            Park at the nearest available parking meter without paying the meter
            and call 999-999-9999 to report the problem. We will note and approve your alternate
            location and will investigate the cause of the shortage in your assigned facility.
          </div>
        </dd>
        <dt>
          <button type="button" aria-expanded="false" aria-controls="faq2_desc">What do I do if I lose my permit or if my permit is stolen?</button>
        </dt>
        <dd>
          <div id="faq2_desc" class="desc">You should come to the Parking office and report the
            loss. There is a fee to replace your lost permit. However, if your permit was stolen, a
            copy of a police report needs to be submitted along with a stolen parking permit form for a fee replacement exemption.
          </div>
        </dd>
        <dt>
          <button type="button" aria-expanded="false" aria-controls="faq3_desc">Is there free parking on holidays?</button>
        </dt>
        <dd>
          <div id="faq3_desc" class="desc">
            All facilities are restricted from 2:00 am - 6:00 am on all days. No
            exceptions are made for any holiday or recess except those officially listed as a
            <q>Holidays</q> in the calendar. Please note: 24-hour rental spaces, 24-hour rental lots, and
            disabled parking is enforced at all times.
          </div>
        </dd>
        <dt>
          <button type="button" aria-expanded="false" aria-controls="faq4_desc">Do all parking facilities have the same enforcement rules?</button>
        </dt>
        <dd>
          <div id="faq4_desc" class="desc">
            Some parking facility restrictions differ from others. Be sure to
            take note of the signs at each lot entrance.
          </div>
        </dd>
      </dl>
    </div>
    <div role="separator" id="ex_end_sep" aria-labelledby="ex_end_sep ex_label" aria-label="End of"></div>
  </section>

  <section>
    <h2>Accessibility Features</h2>
    <ul>
      <li>
        The semantic structure of the FAQ is conveyed with native <code>dl</code>, <code>dt</code> and <code>dd</code> elements.
        To ensure  the list structure is communicated to assistive technologies, instead of applying a button role to the <code>dt</code> element, a <code>button</code> element is contained within the <code>dt</code> element.
        Similarly, each <code>div</code> element  containing  answer content that can be shown or hidden by the button is a child of a <code>dd</code> element.
        Since all the <code>dd</code> elements are present in the DOM even if some answers are hidden, the <code>dl</code> structure is always complete.
      </li>
      <li>
        To help people with visual impairments identify the disclosure as interactive and make it easier to perceive that clicking either the disclosure button or its label changes the expanded state, when a pointer hovers over the button or its label, the background color changes, a border appears, and the cursor changes to a pointer.
      </li>
      <li>
        Because transparent borders are visible on some systems with operating system high contrast settings enabled, transparency cannot be used to create a visual difference between the element that is focused an other elements.
        Instead of using transparency, the focused element has a thicker border and less padding.
        When an element receives focus, its border changes from 0 to 2 pixels and padding is reduced by 2 pixels.
        When an element loses focus, its border changes from 2 pixels to 0 and padding is increased by 2 pixels.
      </li>
      <li>
        To ensure the inline SVG arrow graphics in the CSS have sufficient contrast with the background when high contrast settings invert colors, the color of the arrows are synchronized with the color of the text content.
        For example, the color of the arrow is set to match the foreground color of high contrast mode text by specifying the CSS <code>currentColor</code> value for the <code>stroke</code> and <code>fill</code> properties of the <code>polygon</code> elements used to draw the arrows.
        If specific colors were instead used to specify the <code>polygon</code> properties, those colors would remain the same in high contrast mode, which could lead to insufficient contrast between the arrows and the background or even make the arrows invisible if the color matched the high contrast mode background.<br>
        Note: The SVG element needs to have the CSS <code>forced-color-adjust</code> property set to <code>auto</code> for the <code>currentColor</code> value to be updated in high contrast mode.
        Some browsers do not use <code>auto</code> for the default value.
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
          <th>
            <kbd>Tab</kbd>
          </th>
          <td>
              Moves keyboard focus to the disclosure button.
          </td>
        </tr>
        <tr data-test-id="key-enter-or-space">
          <th>
            <kbd>Space</kbd> or <br>
            <kbd>Enter</kbd>
          </th>
          <td>
              Activates the disclosure button,
              which toggles the visibility of the answer to the question.
          </td>
        </tr>
      </tbody>
    </table></div>
  </section>

  <section>
    <h2 id="rps_label">Role, Property, State, and Tabindex Attributes</h2>
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
            <code>aria-controls="ID_REFERENCE"</code>
          </th>
          <td><code>button</code></td>
          <td>Identifies the element controlled by the disclosure button.</td>
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
              <li>
                The visual indicator of the show/hide state is created using CSS <code>:before</code> pseudo element and <code>content</code> property
                so the image is reliably rendered in high contrast mode of operating systems and browsers.
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
              <li>
                The visual indicator of the show/hide state is created using CSS <code>:before</code> pseudo element and <code>content</code> property
                so the image is reliably rendered in high contrast mode of operating systems and browsers.
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table></div>
  </section>

  <section>
    <h2>Javascript and CSS Source Code</h2>
    
    <ul id="css_js_files">
      <li>
        CSS:
        <a href="css/disclosure-faq.css" type="tex/css">disclosure-faq.css</a>
      </li>
      <li>
        Javascript:
        <a href="js/disclosure-button.js" type="text/javascript">disclosureButton.js</a>
      </li>
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
<script 
  src="{{ '/content-assets/wai-aria-practices/skipto.min.js' | relative_url }}"
></script>