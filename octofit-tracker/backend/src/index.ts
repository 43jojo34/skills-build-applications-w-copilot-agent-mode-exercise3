import express from 'express';

const app = express();

app.use(express.json());

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', service: 'octofit-tracker-api' });
});

app.listen(8000, '0.0.0.0', () => {
  console.log('OctoFit Tracker API listening on port 8000');
});
