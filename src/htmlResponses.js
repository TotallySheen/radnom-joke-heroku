// 5 - here's our 404 page
const fs = require('fs');
const { request } = require('http');

const error = fs.readFileSync(`${__dirname}/../client/error.html`);
const style = fs.readFileSync(`${__dirname}/../client/default-styles.css`);


const get404Response = (request, response) => {
  response.writeHead(404, { 'Content-Type': 'text/html' });
  response.write(error);
  response.end();
};

const getStyles = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/css' });
  response.write(style);
  response.end();
}

module.exports = {
  get404Response,
  getStyles
};
