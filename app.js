var express = require('express');
var app = express();
var git = require('git-rev');

var htmlDir = './html/';

app.use('/js',express.static(__dirname + '/assets/js'));
app.use('/css', express.static(__dirname + '/assets/css'));
app.use("/image", express.static(__dirname + '/assets/image'));

var FundSplitterController = require('./fund_splitter/FundSplitterController');
app.use('/contract', FundSplitterController);

app.get('/fund_splitter', function(request, response) {
    response.sendfile(htmlDir + 'fund_splitter.html');
});

app.get('/', function(request, response) {
    response.sendfile(htmlDir + 'fund_splitter.html');
});

app.get('/info', async function (req, res) {
    var info = "";
    git.branch(function(br){
        git.short(function(sh){
            info = br+"-"+sh;
            res.status(200).send(info);

        });
    });
});

module.exports = app;
