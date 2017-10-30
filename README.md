### XLSX Template. Test case writing to merged cells


Executing `node index.js` will read from a template `test-template.xlsx` which has merged cells,
and try to write a table preserving merged columns.

The default library won't preserve merged columns in the output XLSX file (`output_test1.xlsx`)

There is an alternate library version which can be tried with `node index-alt.js` which will, in turn,
produce the desired output in the output XLSX file (`output_test-alt.xlsx`).

