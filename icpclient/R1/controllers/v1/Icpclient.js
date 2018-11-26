'use strict';

  
    var paginationService = require('../apistrategies/pagination.js');
       var IcpclientImplementation = require('../../../implementation/IcpclientService.js');
    
var IcpclientData;

        


    module.exports.getIcpclient = function getIcpclient (req, res, next) {
    var args = req.swagger.params;
    IcpclientImplementation.getIcpclient(args, (error, data) => {
        IcpclientData = data;
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
    });
};
module.exports.getIcpclientById = function getIcpclient (req, res, next) {
    var args = req.swagger.params;
    IcpclientImplementation.getIcpclientById(args, (error, data) => {
        IcpclientData = data;
        if (IcpclientData && Object.keys(IcpclientData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                        
            res.writeHead(200);
            res.end(JSON.stringify(IcpclientData));

        } else {
            res.writeHead(404);
            res.end();
        }
    });
};
    
                
        


    
            module.exports.putIcpclient = function putIcpclient (req, res, next) {
    var args = req.swagger.params;
    IcpclientImplementation.putIcpclient(args, (error, data) => {
        IcpclientData = data;
        if (IcpclientData && Object.keys(IcpclientData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                                        res.writeHead(200);
            res.end(JSON.stringify(IcpclientData || {}, null, 2));
        } else {
            res.writeHead(404);
            res.end();
        }
    });
};
        
        


    
        module.exports.postIcpclient = function postIcpclient (req, res, next) {
    var args = req.swagger.params;
    IcpclientImplementation.postIcpclient(args, (error, data) => {
        IcpclientData = data;
        if (IcpclientData && Object.keys(IcpclientData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                                        res.writeHead(200);
            res.end(JSON.stringify(IcpclientData || {}, null, 2));
        } else {
            res.writeHead(400);
            res.end();
        }
    });
};
            
        


    
    module.exports.patchIcpclient = function patchIcpclient (req, res, next) {
    var args = req.swagger.params;
    IcpclientImplementation.patchIcpclient(args, (error, data) => {
        IcpclientData = data;
        if (IcpclientData && Object.keys(IcpclientData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                                        res.writeHead(200);
            res.end(JSON.stringify(IcpclientData || {}, null, 2));
        } else {
            res.writeHead(404);
            res.end();
        }
    });
};
                
        module.exports.deleteIcpclient = function deleteIcpclient (req, res, next) {
    var args = req.swagger.params;
    IcpclientImplementation.deleteIcpclient(args, (error, data) => {
        IcpclientData = data;
                if(data == true) {
            res.writeHead(204);
            res.end();
        }
        else {
            res.writeHead(404);
            res.end();
        }
    });
};
    


    
                
        
    
