import express from 'express';
import serverless from 'serverless-http';
const app = express();


app.get('/', (req, res) => {
  res.send('Hello, I am Axrorbek backend devloper!');
});

app.get('/about', (req, res) => {
    res.send('I am a backend developer with experience in Node.js, Express.js, and AWS Lambda');
})

export const handler = serverless(app);