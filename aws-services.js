import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: process.env.APP_ACCESS_ID,
  secretAccessKey: process.env.APP_ACCESS_KEY,
  region: process.env.APP_REGION,
});

const textract = new AWS.Textract();
export default textract
