import http from 'node:http';
import { createCanvas, registerFont } from 'canvas';
import { renderImage } from './render.js';
import { settings } from './settings.js';

registerFont('./CascadiaCode.ttf', {
  family: settings.font.fontFamily
});

http
  .createServer(async (request, response) => {
    response.writeHead(200, {
      'content-type': 'image/png'
    });
    response.end(renderImage(createCanvas, settings));
  })
  .listen(3_000, () => {
    console.log(`Server is running on http://localhost:3000`);
  })