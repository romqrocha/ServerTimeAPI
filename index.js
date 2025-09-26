import http from 'http';
import url from 'url';
import dt from './modules/datetime.js';

const nameParam = "name";

http.createServer((req, res) => {
    let urlParams = url.parse(req.url, true);

    res.writeHead(200, {'Content-Type': 'text/html'});
    
    res.write('<p style="color: blue;">');
    res.write(`Hello ${urlParams.query[nameParam]}!`);
    res.write('<br/>')
    res.write(`Server time: ${dt.date()}`);
    res.write('</p>');

    res.end();
}).listen(8889);
