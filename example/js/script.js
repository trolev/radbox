$(document).ready(function(){
  $('input[type=checkbox], input[type=radio]').radbox();


  var $all = $('.all');

  $('#checked-all').click(function(){
    $all.radbox('checked');
    return false;
  });

  $('#unchecked-all').click(function(){
    $all.radbox('checked', false);
    return false;
  });


  var $all2 = $('.all2');

  $('#disabled-all').click(function(){
    $all2.radbox('disabled');
    return false;
  });

  $('#enabled-all').click(function(){
    $all2.radbox('disabled', false);
    return false;
  });



});