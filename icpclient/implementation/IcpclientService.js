'use strict';
var fs = require("fs");
/*
* This file will not be changed by the generator
*/
var samplePath = '/sampleData/v1/Icpclient.json';
var bodyParam = 'icpclients/v1'; 
     


exports.getIcpclient = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var IcpclientFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var IcpclientData = [];
    if(IcpclientFD) {
        IcpclientData = JSON.parse(IcpclientFD);
    }
    cb(null, IcpclientData);
}
exports.getIcpclientById = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var clientNumber = args['clientNumber'] ? args['clientNumber'].value: null;
    var IcpclientFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var IcpclientData = [];
    if(IcpclientFD) {
        IcpclientData = JSON.parse(IcpclientFD);
    }
    var myRecord;
    for(var i=0;i<IcpclientData.length;i++) {
        if(IcpclientData[i]['clientNumber'] == clientNumber) {
             myRecord = IcpclientData[i];
             break;
        }
    }
    cb(null, myRecord);
}





exports.putIcpclient = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var clientNumber = args['clientNumber'] ? args['clientNumber'].value: null;
   var body = args[bodyParam].value;
   var IcpclientFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var IcpclientData = [];
   if(IcpclientFD) {
       IcpclientData = JSON.parse(IcpclientFD);
   }
   var myRecord;
   for(var i=0;i<IcpclientData.length;i++) {
       if(IcpclientData[i]['clientNumber'] == clientNumber) {
            IcpclientData[i] = Object.assign(IcpclientData[i],body);
            myRecord = IcpclientData[i];
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(IcpclientData));
   cb(null, myRecord);
}


exports.postIcpclient = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var body = args[bodyParam].value;
    var IcpclientFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var IcpclientData = [];
    if(IcpclientFD) {
        IcpclientData = JSON.parse(IcpclientFD);
    }
    IcpclientData.push(body);

    fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(IcpclientData));
    cb(null, body);
}


exports.patchIcpclient = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var clientNumber = args['clientNumber'] ? args['clientNumber'].value: null;
   var body = args[bodyParam].value;
   var IcpclientFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var IcpclientData = [];
   if(IcpclientFD) {
       IcpclientData = JSON.parse(IcpclientFD);
   }
   var myRecord;
   for(var i=0;i<IcpclientData.length;i++) {
       if(IcpclientData[i]['clientNumber'] == clientNumber) {
            IcpclientData[i] = Object.assign(IcpclientData[i],body);
            myRecord = IcpclientData[i];
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(IcpclientData));
   cb(null, myRecord);
}



exports.deleteIcpclient = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var clientNumber = args['clientNumber'] ? args['clientNumber'].value: null;
   //var body = args[bodyParam].value;
   var IcpclientFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var IcpclientData = [];
   if(IcpclientFD) {
       IcpclientData = JSON.parse(IcpclientFD);
   }
   var found = false;
   for(var i=0;i<IcpclientData.length;i++) {
       if(IcpclientData[i]['clientNumber'] == clientNumber) {
            IcpclientData.splice(i,1);
            found = true;
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(IcpclientData));
   if(found) {
    cb(null, true);
   }
   else {
    cb(null, false);
   }
}


