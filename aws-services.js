import AWS from 'aws-sdk';


console.log('APP_ACCESS_KEY_ID:', process.env.APP_ACCESS_KEY_ID);
console.log('APP_ACCESS_KEY:', process.env.APP_ACCESS_KEY);
console.log('APP_REGION:', process.env.APP_REGION);
// Conditionally load dotenv only in non-production environments
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

AWS.config.update({
  accessKeyId: process.env.APP_ACCESS_KEY_ID,
  secretAccessKey: process.env.APP_ACCESS_KEY,
  region: process.env.APP_REGION,
});

const textract = new AWS.Textract();
export default textract;
