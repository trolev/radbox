# RadBox v.2

Stylization checkboxes and radio buttons.
Стилизация чекбоксов и радио кнопок.

## Quickstart

~~~~{.html}
  <input type="radio">
  <input type="checkbox">
~~~~
~~~~{.js}
  $('[type=checkbox], [type=radio]').radbox();
~~~~

Base styles
~~~~{.css}
  .radbox {
    position: relative;
    display: inline-block;
    width: 12px;
    height: 12px;
    cursor: pointer;
  }
  .radbox .hidden {
    position: absolute;
    left: -9000px;
    top: 0;
  }
  .radbox.focus {
    // focus
  }
  .radio {
    // background
  }
  .checked {
    // background
  }
~~~~

## Checked/Unchecked

~~~~{.js}
  // Checked
  $('[type=checkbox]').radbox({'checked'});
  $('[type=checkbox]').radbox({'checked', true});
  // Unchecked
  $('[type=checkbox]').radbox({'checked', false});
~~~~

## Disabled/Enabled

~~~~{.js}
  // Disabled
  $('[type=checkbox]').radbox({'disabled'});
  $('[type=checkbox]').radbox({'disabled', true});
  // Enabled
  $('[type=checkbox]').radbox({'disabled', false});
~~~~

## Settings

* `wrapClass`: 'radbox'
* `checkboxClass`: 'checkbox'
* `radioClass`: 'radio'
* `checkedClass`: 'checked'
* `focusClass`: 'focus'
* `disabledClass`: 'disabled'
* `hideClass`: 'hidden'
* `areaClass`: 'area'
* `activeArea`: -8

## Example

~~~~{.js}
  $('[type=checkbox], [type=radio]').radbox({
    wrapClass: 'radbox',
    checkboxClass: 'checkbox',
    radioClass: 'radio',
    checkedClass: 'checked',
    focusClass: 'focus',
    disabledClass: 'disabled',
    hideClass: 'hidden',
    areaClass: 'area',
    activeArea: -8
  });
~~~~
~~~~{.html}
  <!-- BEFORE -->

  <input type="checkbox">

  <!-- AFTER -->

  <div class="radbox checkbox">
    <input type="checkbox" class="hidden">
    <span class="area" style="display: block; position: absolute; overflow: hidden; left: -8px; bottom: -8px; ..."></span>
  </div>
  <!-- Checked -->
  <div class="radbox checkbox checked">
  <!-- Disabled -->
  <div class="radbox checkbox disabled">
~~~~


## License

RadBox plugin is MIT License released. Point free to use it for personal and commercial need