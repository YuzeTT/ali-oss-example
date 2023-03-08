import dotenv from 'dotenv'
import OSS from 'ali-oss'

dotenv.config()

export let client = new OSS({
  region: process.env.REGION,
  accessKeyId: process.env.ACCESS_KEY_ID,
  accessKeySecret: process.env.ACCESS_KEY_SECRET,
  bucket: process.env.BUCKET
});
