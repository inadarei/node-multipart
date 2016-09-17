var mp = require('../index.js');

var fh = require("./support/fixture-helper.js");

describe('multi_parser', function() {

    it('should parse single part properly', function() {
        let singlePart = fh.loadFixture("single-part.txt");
        let boundary = "some boundary string";

        let parsed = [];
        parsed = mp.parse(singlePart, boundary);
        console.dir(parsed);
        let json = JSON.parse(parsed);

    });


    it('should parse multiple parts properly', function() {
        let multiPartSimple = fh.loadFixture("multi-part.txt");
        let boundary = "simple boundary";

        let parsed = [];
        parsed = mp.parse(multiPartSimple, boundary);
    });

});