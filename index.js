import http from 'http';
import dt from './modules/datetime.js';

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    res.write(`Now: ${dt.date()}`);

    res.end();
}).listen(8889);
