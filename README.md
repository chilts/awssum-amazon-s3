# awssum-amazon-s3 #

This is an ```awssum``` plugin. You'll need to add ```awssum-amazon-s3``` to your package.json dependencies. Both
```awssum``` and ```awssum-amazon``` are pulled in as peer dependencies.

## Example ##

```
var fmt = require('fmt');
var amazon = require('awssum-amazon');
var S3 = require('awssum-amazon-s3').S3;

var s3 = new S3({
    'accessKeyId'     : process.env.ACCESS_KEY_ID,
    'secretAccessKey' : process.env.SECRET_ACCESS_KEY,
    'region'          : amazon.US_EAST_1
});

s3.ListBuckets(function(err, data) {
    fmt.dump(err, 'err');
    fmt.dump(data, 'data');
});
```

## Operations ##


(Ends)
