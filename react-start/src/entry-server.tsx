import ReactDOMServer, { RenderToPipeableStreamOptions } from 'react-dom/server';

export function render(url: string, opts: RenderToPipeableStreamOptions) {
  return ReactDOMServer.renderToPipeableStream(
    <>
      <h1>Hello World!</h1>
    </>,
    opts
  );
}
