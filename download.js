function writeInlineStyle(classe, color) {

  for (i = 0; i < classe.length; i++)
  {
    classe[i].setAttribute('style','fill:' + color + ' !important;');
  }
}

function resetDefaultInlineStyle(classe){
  for (i = 0; i < classe.length; i++)
  {
    classe[i].setAttribute('style','fill:#f2f2f2;fill-rule.evenodd');
  }
}

function clearMap(classe, color){
  for (i = 0; i < classe.length; i++)
  {
    console.log(classe[i].class);
    $(classe[i]).removeClass(color);
  }
}

$(document).ready(function() {

 var svg = document.getElementById('svg').contentDocument.getElementById('svg2');
 var width = svg.getBoundingClientRect().width;
 var height = svg.getBoundingClientRect().height;

 $('#dl').click(function () {

   green = svg.getElementsByClassName('green');
   yellow = svg.getElementsByClassName('yellow');
   orange = svg.getElementsByClassName('orange');
   red = svg.getElementsByClassName('red');

   writeInlineStyle(green, 'green');
   writeInlineStyle(yellow, 'yellow');
   writeInlineStyle(orange, 'orange');
   writeInlineStyle(red, 'red');

   var canvas = document.getElementById('canvas');
   svg.setAttribute('width', width);
   svg.setAttribute('height', height);
   canvas.width = width;
   canvas.height = height;
   var data = new XMLSerializer().serializeToString(svg);
   var win = window.URL || window.webkitURL || window;
   var img = new Image();
   var blob = new Blob([data], {type: 'image/svg+xml'});
   var url = win.createObjectURL(blob);

   $(img).on("load", function () {
     canvas.getContext('2d').drawImage(img, 0, 0);
     win.revokeObjectURL(url);
     var uri = canvas.toDataURL('image/png').replace('image/png', 'octet/stream');
     var a = document.createElement('a');
     document.body.appendChild(a);
     a.style = 'display: none';
     a.href = uri
     a.download = (svg.id || svg.svg.getAttribute('name') || svg.getAttribute('aria-label') || 'untitled') + '.png';
     a.click();
     window.URL.revokeObjectURL(uri);
     document.body.removeChild(a);
     resetDefaultInlineStyle(green);
     resetDefaultInlineStyle(yellow);
     resetDefaultInlineStyle(orange);
     resetDefaultInlineStyle(red);
   });
   img.src = url;
 });
});
