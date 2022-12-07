var AWS = require('aws-sdk');
// Load credentials and set region from JSON file
//AWS.config.loadFromPath('./config.json');
AWS.config.region = "us-east-1";

// Create the IAM service object
var lambda = new AWS.Lambda({apiVersion: '2015-03-31'});


var params = {
  Code: { /* required */
    S3Bucket: 'deletebucket112',
    S3Key: 'index.zip'
  },
  FunctionName: 'delete', /* required */
  Handler: 'index.handler', /* required */
  Role: 'arn:aws:iam::193654000169:role/lambdarole', /* required */
  Runtime: 'nodejs12.x', /* required */
  Description: 'Insert Items into table',
};
lambda.createFunction(params, function(err, data) {
  if (err) console.log(err); // an error occurred
  else     console.log(data);           // successful response
});