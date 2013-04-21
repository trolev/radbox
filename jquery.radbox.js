/*!
 * Radbox
 * Version: v.2.2.1 (2013-04-21)
 * 
 * https://github.com/trolev/radbox
 * 
 * RadBox plugin is MIT License released. Point free to use it for personal and commercial need
*/

(function ($) {
  var isTouch = document.createTouch !== undefined,
      eventType = (isTouch) ? "touchend.erbox" : "click.erbox",
      defaults = {
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
        var inpt = $(this),
            is_checked = inpt.is(':checked'),
            vars = $.extend({}, defaults, options),
            wrapTag = $('<div class="'+ vars.wrapClass +'">'),
            type = inpt.attr('type');

        if (inpt.data('radbox')) {
          return;
        }

        inpt.data({
          'radbox': true,
          'checkedClass': vars.checkedClass,
          'disabledClass': vars.disabledClass
        });

        inpt.addClass(vars.hideClass).wrap(wrapTag);

        var prnt = inpt.parent();

        if (type === 'checkbox') {
          prnt.addClass(vars.checkboxClass);
          inpt.on('change.erbox', function() {
            methods.setAttr(inpt, inpt.is(':checked'));
          });
        } else if (type === 'radio') {
          prnt.addClass(vars.radioClass);
          inpt.on('change.erbox', function() {
            var name = inpt.attr('name'),
                $other = $('input[name="'+ name +'"]').not(inpt);
            $other.removeAttr('checked');
            $other.parent().removeClass(vars.checkedClass);
            methods.setAttr(inpt, inpt.is(':checked'));
          });
        } else {
          return;
        }

        prnt.on(eventType, function(e) {
          if ($(e.target).hasClass(vars.wrapClass)) {
            inpt.focus().trigger('click');
            return false;
          };
        });

        inpt.on('focus.erbox, blur.erbox', function(e) {
          if (e.type === 'focus') {
            prnt.addClass(vars.focusClass); 
          } else {
            prnt.removeClass(vars.focusClass); 
          }
        });

        if(is_checked) {
          prnt.addClass(vars.checkedClass);
        }
        methods.setAttr(inpt, is_checked);
      });
    },
    setAttr: function(inpt, val) {
      inpt.prop('checked', val);
      if (val) {
        inpt.parent().addClass(inpt.data('checkedClass')); 
      } else {
        inpt.parent().removeClass(inpt.data('checkedClass'));
      }
    },
    checked: function(options) {
      var val = (typeof options === 'boolean') ? options : true;
      this.each(function() {
        var inpt = $(this);
        methods.setAttr(inpt, val);
      });
    },
    disabled: function(options) {
      var val = (typeof options === 'boolean') ? options : true;
      this.each(function() {
        var inpt = $(this);
        inpt.prop("disabled", val);

        if (val) {
          inpt.parent().addClass(inpt.data('disabledClass')); 
        } else {
          inpt.parent().removeClass(inpt.data('disabledClass'));
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