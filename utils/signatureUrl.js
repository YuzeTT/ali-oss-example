import { client } from '../config.js';

const url = client.signatureUrl("test.txt", {
  expires: 30
});

console.log(url)