var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var FSInfo =  require('./FundSplitterInfo');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var W3JSR = FSInfo.getWeb3R();

router.post('/create', function (req, res) {
    var retVal;
    var functionName = 'addMember';
    var params = [req.body.newAddress];
    W3JSR.prepareSignSend(FSInfo.Params.ABI,FSInfo.Params.ADDRESS,functionName,FSInfo.Params.ETHER_ACC,FSInfo.Params.ETHER_PKEY,params).then((result,error) =>{
        console.log(result);
        res.status(200).send(JSON.stringify(result));
    },(error) =>{
        console.log(error);
        retVal = {"error":error};
        res.status(200).send(JSON.stringify(retVal));
    });
});

router.get('/count', function (req, res) {
    var retVal;
    W3JSR.ContractInstance.methods.getMemberCount().call().then(function(result){
        if(result){
            console.log("getMemberCount", result.valueOf());
            retVal = {"memberCount":result.valueOf()};
            console.log(retVal);
            res.status(200).send(JSON.stringify(retVal));
        }
        else{
            retVal = {"error":error};
            res.status(200).send(JSON.stringify(retVal));
        }
    });
});


router.get('/at/:id', function (req, res) {
    var retVal;
    W3JSR.ContractInstance.methods.getMemberAt(req.params.id).call().then(function(result,error){
        if(result){
            retVal = {"index":req.params.id,"memberInfo":result};
            console.log(retVal);
            res.status(200).send(JSON.stringify(retVal));
        }
        else{
            retVal = {"error":result};
            res.status(200).send(JSON.stringify(retVal));
        }
    });
});

module.exports = router;
