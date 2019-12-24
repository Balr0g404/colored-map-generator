//This script relies on the color.js script

Dropzone.options.myDrop = {
  paramName: "json", // The name that will be used to transfer the file
  acceptedFiles : ".json",
  accept: function(file, done) {
        var reader = new FileReader();
        $(reader).on("loadend", function(event) {
          var json = (event.target.result);

          CheckInput(json);
          var worldmap = svg.contentDocument;

          $('#sendjson').click(function() {
            cleanMap(worldmap);
      		j = CheckInput(json);
      		setColor(j, worldmap);
          });


        });
        reader.readAsText(file); //Read the content of the file. Once done, trigger the loadend event.
    },
};
