import http from 'http';
import app from './app';

const port = process.env.PORT || 3001;

const server = http.createServer(app);

app.listen(port, () => {
  console.log('Server started on port ' + port);
});