$(document).ready(function() {

  // Initialize the plugin
  $('#popup1').popup();
  $('#popup2').popup();

  $('#pop1').click(function() {
    $('#popup1').popup('show');
  });

  $('#pop2').click(function() {
    $('#popup2').popup('show');
  });

  $('#send').click(function () {
    $('#popup1').popup('hide')
  });

  $('#sendjson').click(function () {
    $('#popup2').popup('hide')
  });

  // Set default `pagecontainer` for all popups (optional, but recommended for screen readers and iOS*)
  $.fn.popup.defaults.pagecontainer = '#page'
});

$(function() {
  // Sidebar toggle behavior
  $('#sidebarCollapse').on('click', function() {
    $('#sidebar, #content').toggleClass('active');
  });
});
