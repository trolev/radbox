/*
  Radbox
  Version: v.2.1
*/
(function ($) {
  var defaults = {
    wrapClass: 'radbox',
    checkboxClass: 'checkbox',
    radioClass: 'radio',
    checkedClass: 'checked',
    focusClass: 'focus',
    disabledClass: 'disabled',
    hideClass: 'hidden'
  };

  var methods = {
    init: function(options) {
      this.each(function() {
        var $input = $(this),
            vars = $.extend({}, defaults, options),
            wrapTag = $('<div class="'+ vars.wrapClass +'">');

        if ($input.data('radbox')) {
          return;
        }
        $input.data('radbox', true);
        $input.data('checkedClass', vars.checkedClass);
        $input.data('disabledClass', vars.disabledClass);

        $input.addClass(vars.hideClass).wrap(wrapTag);

        var wrap = $input.parent();

        if ($input.attr('type') === 'checkbox') {
          wrap.addClass(vars.checkboxClass);
          $input.change(function() {
            methods.setAttr($input, $input.is(':checked'));
          });
        } else if ($input.attr('type') === 'radio') {
          wrap.addClass(vars.radioClass);
          $input.change(function() {
            var name = $input.attr('name'),
                $other = $('input[name="'+ name +'"]').not($input);
            $other.removeAttr('checked');
            $other.parent().removeClass(vars.checkedClass);
            methods.setAttr($input, $input.is(':checked'));
          });
        } else {
          return;
        }

        wrap.click(function(e) {
          if ($(e.target).hasClass(vars.wrapClass)) {
            $('input', this).focus().click();
            return false;
          };
        });

        $input.focus(function() {
            $(this).parent().addClass(vars.focusClass); 
        });

        $input.blur(function() {
            $(this).parent().removeClass(vars.focusClass); 
        });

        var is_checked = $input.is(':checked');
        if(is_checked) {
          wrap.addClass(vars.checkedClass);
        }
        methods.setAttr($input, is_checked);
      });
    },
    setAttr: function(input, val) {
      input.prop('checked', val);
      if (val) {
        input.parent().addClass(input.data('checkedClass')); 
      } else {
        input.parent().removeClass(input.data('checkedClass'));
      }
    },
    checked: function(options) {
      var val = (typeof options === 'boolean') ? options : true;
      this.each(function() {
        var $input = $(this);
        methods.setAttr($input, val);
      });
    },
    disabled: function(options) {
      var val = (typeof options === 'boolean') ? options : true;
      this.each(function() {
        var $input = $(this);
        $input.prop("disabled", val);

        if (val) {
          $input.parent().addClass($input.data('disabledClass')); 
        } else {
          $input.parent().removeClass($input.data('disabledClass'));
        }
      });
    }
  };

  $.fn.radbox = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply(this, arguments);
    } else {
      $.error( 'Method named ' +  method + ' does not exist to jQuery.radbox' );
    } 
  };
}(jQuery));