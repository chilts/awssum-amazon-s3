# awssum-amazon-s3 #

This is an ```AwsSum``` plugin!

You'll need to add [awssum-amazon-s3](https://github.com/awssum/awssum-amazon-s3/) to your package.json
dependencies. Both [awssum](https://github.com/awssum/awssum/) and
[awssum-amazon](https://github.com/awssum/awssum-amazon/) are pulled in as peer dependencies.

## Example ##

List all your buckets:

```
var fmt = require('fmt');
var amazonS3 = require('awssum-amazon-s3');

var s3 = new amazonS3.S3({
    'accessKeyId'     : process.env.ACCESS_KEY_ID,
    'secretAccessKey' : process.env.SECRET_ACCESS_KEY,
    'region'          : amazonS3.US_EAST_1
});

s3.ListBuckets(function(err, data) {
    fmt.dump(err, 'err');
    fmt.dump(data, 'data');
});
```

## Streaming ##

Streaming uploads:

```
var fmt = require('fmt');
var amazonS3 = require('awssum-amazon-s3');

var s3 = new amazonS3.S3({
    'accessKeyId'     : process.env.ACCESS_KEY_ID,
    'secretAccessKey' : process.env.SECRET_ACCESS_KEY,
    'region'          : amazonS3.US_EAST_1
});

// you must run fs.stat to get the file size for the content-length header (s3 requires this)
fs.stat(__filename, function(err, file_info) {
    var bodyStream = fs.createReadStream( __filename );

    var options = {
        BucketName    : bucket,
        ObjectName    : 'amazon.js',
        ContentLength : file_info.size,
        Body          : bodyStream
    };

    s3.PutObject(options, function(err, data) {
        fmt.dump(err, 'err');
        fmt.dump(data, 'data');
    });
});
```

Streaming downloads:

```
var fmt = require('fmt');
var amazonS3 = require('awssum-amazon-s3');

var s3 = new amazonS3.S3({
    'accessKeyId'     : process.env.ACCESS_KEY_ID,
    'secretAccessKey' : process.env.SECRET_ACCESS_KEY,
    'region'          : amazonS3.US_EAST_1
});

var options = {
    BucketName    : 'pie-17',
    ObjectName    : 'javascript-file.js',
};

s3.GetObject(options, { stream : true }, function(err, data) {
    fmt.dump(err, 'err');
    fmt.dump(data, 'data');

    // stream this file to stdout
    fmt.sep();
    fmt.title('The File');
    data.Stream.pipe(process.stdout);
    data.Stream.on('end', function() {
        fmt.sep();
    });
});
```

## Operations ##

(Ends)
