import http from 'http';
import url from 'url';
import dt from './modules/datetime.js';
import { en } from './langs/en.js';

const nameParam = "name";

http.createServer((req, res) => {
    let urlParams = url.parse(req.url, true);

    let name = urlParams.query[nameParam];
    let datetime = dt.date();

    res.writeHead(200, {'Content-Type': 'text/html'});
    
    res.write('<p style="color: blue;">');
    res.write(en.greeting.replace('${name}', name).replace('${datetime}', datetime));
    res.write('</p>');

    res.end();
}).listen(8889);
