const http = require('http');
const url = require('url');
const fs = require('fs');
const data = require('./dataSelector')

const notFound = './notFound.html'


const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;

  if (req.url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    fs.readFile('./index.html', (err, data) => {
      if (err) {
        res.writeHead(404, { 'content-type': 'text/html' });
        notFound_page = fs.readFileSync(notFound);
        res.write(notFound_page);
      };
      res.write(data)
      res.end();
    });
  } else if (req.url.indexOf('/provincias') === 0) {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.write(JSON.stringify(data.getProvincias()));
    res.end();
  } else if (req.url.indexOf('/municipios') === 0) {
    res.writeHead(200, { 'content-type': 'application/json' })
    res.write(JSON.stringify(data.getMunicipios(Number(queryObject.id))));
    res.end();
  } else if (req.url.indexOf('/sectores') === 0) {
    res.writeHead(200, { 'content-type': 'application/json' })
    res.write(JSON.stringify(data.getSectores(Number(queryObject.id))));
    res.end();
  } else {
    res.writeHead(404, { 'content-type': 'text/html' });
    notFound_page = fs.readFileSync(notFound);
    res.write(notFound_page);
    res.end();
  }
})
server.listen(8080);
