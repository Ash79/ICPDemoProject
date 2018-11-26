'use strict';

const request = require('request');
const config = require('../../configuration/config');

const MOCK_SERVER_PORT = config.MOCK_SERVER_PORT;
const BASE_PATH = `http://localhost:${MOCK_SERVER_PORT}`+'/api/icpclients/v1';

                        
module.exports.geticpclient = function geticpclient(callback) {
  request({
    url: BASE_PATH,
    method: "GET",
    headers: {
        "content-type": "application/json"
    }
  }, function(error, response, body) {
    callback(error,response);
  });
};
module.exports.geticpclientById = function geticpclientById(uniqueParam, callback) {
  request({
    url: BASE_PATH+'/'+uniqueParam,
    method: "GET",
    headers: {
        "content-type": "application/json"
    }
  }, function(error, response, body) {
    callback(error,response);
  });
};
                  
                                  module.exports.puticpclient = function puticpclient(uniqueParam, body, callback) {
  request({
    url: BASE_PATH+'/'+uniqueParam,
    method: "PUT",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(body)
  }, function(error, response, body) {
    callback(error,response);
  });
}; 
      
                            module.exports.posticpclient = function posticpclient(body, callback) {
  request({
    url: BASE_PATH,
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(body)
  }, function(error, response, body) {
    callback(error,response);
  });
}; 

            
                module.exports.patchicpclient = function patchicpclient(uniqueParam, body, callback) {
  request({
    url: BASE_PATH+'/'+uniqueParam,
    method: "PATCH",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(body)
  }, function(error, response, body) {
    callback(error,response);
  });
}; 
                        
          module.exports.deleteicpclient = function deleteicpclient(uniqueParam, callback) {
  request({
    url: BASE_PATH+'/'+uniqueParam,
    method: "DELETE",
    headers: {
        "content-type": "application/json"
    }
  }, function(error, response, body) {
    callback(error,response);
  });
}; 
                              
      
  
