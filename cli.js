
(function () {
    "use strict";
    var fs = require('fs')
        , filename = process.argv[2]
        , YAML = require('./index');
    if(!filename) {
        console.log("Please add input file");
        process.exit(1);
    }
    fs.readFile(filename, 'utf8', function (err, data) {
        if (err) {
            return console.log("Error while reading file:", err);
        }
        try {
            var json = JSON.parse(data);
        } catch (ex) {
            return console.log("Error while parse JSON:", ex);
        }
        let yaml = YAML.convert(json);
        console.info(yaml);
    });
}());