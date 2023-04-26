import express from 'express';
import { createServer as createViteServer } from 'vite';
import fs from 'fs';
import path from 'path';

const PORT = 5174;
const __dirname = path.dirname('./');

const app = express();

const vite = await createViteServer({
  server: { middlewareMode: true },
  appType: 'custom',
});

app.use(vite.middlewares);

app.use('*', async (req, res) => {
  const url = req.originalUrl;

  const templateStr = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8');

  try {
    const template = await vite.transformIndexHtml(url, templateStr);
    const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
    const { pipe } = await render(url, {
      onShellReady() {
        res.statusCode = 200;
        res.setHeader('content-type', 'text/html');
        res.write(template);
        pipe(res);
      },
      onShellError() {
        res.statusCode = 500;
        res.setHeader('content-type', 'text/html');
        res.send('<h1>Something went wrong</h1>');
      },

      onError(err: Error) {
        console.error(err);
      },
    });
  } catch (err) {
    const error = err as Error;
    vite.ssrFixStacktrace(error);
    console.log(error.stack);
    res.status(500).end(error.stack);
  }
});

app.listen(PORT, () => {
  console.log(`start server http://localhost:${PORT}`);
});
