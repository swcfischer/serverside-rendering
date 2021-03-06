import path from 'path';
import fs from 'fs';

import express from 'express';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App';

const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
  const reactApp = ReactDOMServer.renderToString(App);
  const indexFile = path.resolve('build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong', err.message);
      return res.status(500).send('Oops something went wrong');
    }
    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${reactApp}</div>`)
    );
  });
});

app.use(express.static('./build'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
