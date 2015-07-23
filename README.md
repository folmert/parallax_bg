# parallax_bg
Simulates parallax effect on element's background image.

  - no jQuery
  - no need of adding new code to your project
  - only 1 file
  - support for multiple parallax elements on the same page (but only if one at a time is visible on the screen)

### How to use

Add to your project file:

```html
<script src="parallax_bg/js/parallax_bg.js"></script>
```

Parallax effect will work for elements with `parallax_bg` class and `background-image` property.<br>
Images used as a background should be longer than element's viewport in order to always fill the whole container while scrolling.
