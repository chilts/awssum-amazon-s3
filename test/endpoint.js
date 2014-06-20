// --------------------------------------------------------------------------------------------------------------------
//
// require.js
//
// Written by Giannis Kosmas <kosmasgiannis@gmail.com>
//
// License: http://opensource.org/licenses/MIT
//
// --------------------------------------------------------------------------------------------------------------------
// requires

var fs = require('fs');
var tap = require("tap");

var test = tap.test;

// local
var amazonS3 = require('../awssum-amazon-s3.js');
var S3 = amazonS3.S3;

var FAKE_ACCESS_KEY_ID = 'WHATEVER';
var FAKE_SECRET_ACCESS_KEY = 'WHATEVER';
// --------------------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------------------

test('Custom endpoint', function(t) {

    var s3 = new S3({
        'accessKeyId'     : FAKE_ACCESS_KEY_ID,
        'secretAccessKey' : FAKE_SECRET_ACCESS_KEY,
        'region'          : 'myregion',
        'endPoint'        : { 'region' : 'myregion',
                              'locationConstraint' : '',
                              'endpoint' : {'protocol' : 'http', 'host' : 'localhost', 'port' : 8123, 'path' : '/path/to/service'}
                            }
    });

    t.ok(s3, 'S3 instance created');
    t.equal('myregion', s3.region(), 'Region set');
    t.equal('http', s3.protocol(), 'Endpoint protocol set');
    t.equal('localhost', s3.host(), 'Endpoint host set');
    t.equal(8123, s3.port(), 'Endpoint port set');
    t.equal('/path/to/service', s3.path(), 'Endpoint path set');

    t.end();
});

// --------------------------------------------------------------------------------------------------------------------
