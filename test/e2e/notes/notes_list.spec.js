'use strict';

var cp = require('child_process'),
    h  = require('../../helpers/helpers'),
    db = h.getdb();

describe('notes_list', function() {
    beforeEach(function (done) {
        cp.execFile(__dirname + '/../../scripts/clean-db.sh', [db], {cwd: __dirname + '/../../scripts'}, function (err, stdout, stderr) {
            done();
        });
    });

});