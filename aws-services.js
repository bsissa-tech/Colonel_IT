import AWS from 'aws-sdk';
import dotenv from 'dotenv';

// Load environment variables from .env file if it exists
dotenv.config();

AWS.config.update({
  accessKeyId: process.env.APP_ACCESS_ID,
  secretAccessKey: process.env.APP_ACCESS_KEY,
  region: process.env.APP_REGION,
});

const textract = new AWS.Textract();
export default textract;
