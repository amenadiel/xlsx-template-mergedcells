var fs = require('fs'),
    path = require('path'),
    XlsxTemplate = require('./xlsx-template-alt.js');

// Load an XLSX file into memory
fs.readFile(path.join(__dirname, 'test_template.xlsx'), function(err, data) {

    // Create a template
    var template = new XlsxTemplate(data);

    // Replacements take place on first sheet
    var sheetNumber = 1;

    // Set up some placeholder values matching the placeholders in the template
    var values = {
        title: 'An example',
        landmarks: [
            { code: '1-01', name: "Picadilly Circus", location: 'here' },
            { code: '1-02', name: "Trafalgar Square", location: 'there' }
        ]
    };

    // Perform substitution
    template.substitute(sheetNumber, values);

    // Get binary data
    var generated_wb = template.generate(),
        buff = new Buffer(generated_wb, 'binary');


    fs.writeFileSync('output_test-alt.xlsx', generated_wb, 'binary');



});