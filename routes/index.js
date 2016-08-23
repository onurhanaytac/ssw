var fs = require('fs'),
    moment = require('moment'),
    path = require('path');
/*
 * GET home page.
 */

exports.index = function(req, res){
  var sess = req.session;
  var file = req.params[0] ? req.params[0] : 'index.html';

  var staticPath = 'views';

  fs.readFile(path.join( __dirname, '..', staticPath, file), function(err, data) {

    res.set('Cache-Control', 'public,max-age=900,s-maxage=900');
    res.set('Last-Modified', 'Mon, 29 Jun 1989 02:28:12 GMT'); // set some old date
    res.set('Expires', moment().add('7', 'days').format('ddd, DD MMM YYYY hh:mm:ss [GMT]'));
    if (err) {
      res.status(500).send(err);
    } else {
      if (file.indexOf('.json') > 0) {
        res.set('Content-Type', 'application/json');
        res.send(data);
      } else if (file.indexOf('.js') > 0) {
        res.set('Content-Type', 'text/javascript');
        res.send(data);
      } else if (file.indexOf('.css') > 0) {
        res.set('Content-Type', 'text/css');
        res.send(data);
      } else {
        res.write(data);
        res.end();
      }
    }
  });
};
