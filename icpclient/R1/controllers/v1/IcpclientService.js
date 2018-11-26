'use strict';
  var IcpclientFD = require('../../sampleData/v1/Icpclient.json');
  var IcpclientData = IcpclientFD;


var Promise = require('bluebird');
var paginationService = require('../apistrategies/pagination.js');
 

exports.getIcpclient = function(args, res, next) {
/**
 * Gets all customers from the system that the user has access to
 *
 * returns List
 **/
  if (Object.keys(IcpclientData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                                      console.log('Start Pagination......');
    paginationService.getPages(args.pageNumber.value, args.pageSize.value, IcpclientData).then(function(result) {
        res.writeHead(200, {
            "Total": result.total,
            "Per-Page": result.pageSize,
            "Total-Pages": result.totalPages
        });
        res.end(JSON.stringify(result.pagedData));
    }).catch(function(error) {
        res.end(JSON.stringify(error));
    });
                        } else {
      res.end();
  }
}





exports.putIcpclient = function(args, res, next) {
/**
 * Puts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(IcpclientData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(IcpclientData[Object.keys(IcpclientData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.postIcpclient = function(args, res, next) {
/**
 * Posts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(IcpclientData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(IcpclientData[Object.keys(IcpclientData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.patchIcpclient = function(args, res, next) {
/**
 * Patchs all customers from the system that the user has access to
 *
 **/
  if (Object.keys(IcpclientData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(IcpclientData[Object.keys(IcpclientData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}



exports.deleteIcpclient = function(args, res, next) {
/**
* Deletes all customers from the system that the user has access to
*
**/
  if (Object.keys(IcpclientData).length > 0) {
      res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(IcpclientData[Object.keys(IcpclientData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


