# RadBox v.2

Stylization checkboxes and radio buttons.
Стилизация чекбоксов и радио кнопок.

### Quickstart

~~~~{.html}
  <input type="radio">
  <input type="checkbox">
~~~~
~~~~{.js}
  $('[type=checkbox], [type=radio]').radbox();
~~~~

### Checked/Unchecked

~~~~{.js}
  // Checked
  $('[type=checkbox]').radbox({'checked'});
  $('[type=checkbox]').radbox({'checked', true});
  // Unchecked
  $('[type=checkbox]').radbox({'checked', false});
~~~~

### Disabled/Enabled

~~~~{.js}
  // Disabled
  $('[type=checkbox]').radbox({'disabled'});
  $('[type=checkbox]').radbox({'disabled', true});
  // Enabled
  $('[type=checkbox]').radbox({'disabled', false});
~~~~

### Settings

* `wrapClass`: 'radbox'
* `checkboxClass`: 'checkbox'
* `radioClass`: 'radio'
* `checkedClass`: 'checked'
* `focusClass`: 'focus'
* `disabledClass`: 'disabled'
* `hideClass`: 'hidden

#### Example

~~~~{.js}
  $('[type=checkbox], [type=radio]').radbox({
    wrapClass: 'radbox',
    checkboxClass: 'checkbox',
    radioClass: 'radio',
    checkedClass: 'checked',
    focusClass: 'focus',
    disabledClass: 'disabled',
    hideClass: 'hidden'
  });
~~~~
~~~~{.html}
  <!-- BEFORE -->

  <input type="checkbox">

  <!-- AFTER -->

  <div class="radbox checkbox">
    <input type="checkbox" class="hidden">
  </div>
  <!-- Checked -->
  <div class="radbox checkbox checked">
  <!-- Disabled -->
  <div class="radbox checkbox disabled">
~~~~