"use strict";
exports.__esModule = true;
var express = require('express');
var path = require('path');
// Allowed extensions list can be extended depending on your own needs
var allowedExt = [
    '.js',
    '.ico',
    '.css',
    '.png',
    '.jpg',
    '.woff2',
    '.woff',
    '.ttf',
    '.svg',
];
var Server = /** @class */ (function () {
    function Server() {
        var _this = this;
        this.port = 9090;
        // Create expressjs application
        this.app = express();
        // Route our backend calls
        // this.app.route('/api/*', (req, res) => res.json({ application: 'Reibo collection' }));
        this.app.use(express.static('dist/pdfApp'));
        this.app.get('', function (req, res) {
            var options = {
                root: path.join('dist/pdfApp')
            };
            res.sendFile('index.html', options);
        });
        // Redirect all the other resquests
        /* this.app.get('*', (req: Request, res: Response) => {
          if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
            res.sendFile(path.resolve(`dist/${req.url}`));
          } else {
            res.sendFile(path.resolve('dist/index.html'));
          }
        });
    
        // Depending on your own needs, this can be extended
        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use(bodyParser.raw({ limit: '50mb' }));
        this.app.use(bodyParser.text({ limit: '50mb' }));
        this.app.use(bodyParser.urlencoded({
          limit: '50mb',
          extended: true
        })); */
        // Start the server on the provided port
        this.app.listen(this.port, function () { return console.log("http is started " + _this.port); });
        // Catch errors
        /*  this.app.on('error', (error: any) => {
           console.error(moment().format(), 'ERROR', error);
         });
     
         process.on('uncaughtException', (error: any) => {
           console.log(moment().format(), error);
         }); */
    }
    Server.bootstrap = function () {
        return new Server();
    };
    return Server;
}());
//Bootstrap the server, so it is actualy started
var server = Server.bootstrap();
exports["default"] = server.app;
