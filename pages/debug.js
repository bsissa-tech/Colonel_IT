// pages/debug.js
import React, { useEffect } from 'react';
import AWS from 'aws-sdk';

const DebugPage = () => {
  useEffect(() => {
    console.log('APP_ACCESS_KEY_ID:', process.env.APP_ACCESS_KEY_ID);
    console.log('APP_ACCESS_KEY:', process.env.APP_ACCESS_KEY);
    console.log('APP_REGION:', process.env.APP_REGION);

    AWS.config.update({
      accessKeyId: process.env.APP_ACCESS_KEY_ID,
      secretAccessKey: process.env.APP_ACCESS_KEY,
      region: process.env.APP_REGION,
    });

    console.log('AWS Config:', AWS.config);
  }, []);

  return <div>Check the console for environment variable logs.</div>;
};

export default DebugPage;
