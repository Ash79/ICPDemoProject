'use strict';

const chai = require('chai');
const expect = require('chai').expect;
chai.use(require('chai-http'));
const { app } = require('../../index.js'); // Our app
var fs = require("fs");

const BASE_PATH = '/api/icpclients/v1';
const samplePath = '/../../sampleData/v1/icpclient.json';
var icpclientData;

describe('Testing mochatestings API endpoints', function () {

  beforeEach(function() {
    var icpclientFD = fs.readFileSync(__dirname + samplePath);
    icpclientData = [];
    if(icpclientFD) {
      icpclientData = JSON.parse(icpclientFD);
    }
  });


                        
  // GET - List all records
  it('GET List of icpclients', function () {
    return chai.request(app)
      .get(BASE_PATH)
      .then(function (res) {
        var data = res.body;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(data.length).to.be.eql(icpclientData.length);
      });
  });
    // GET - List existing record by clientNumber
  it('GET Existing icpclient by clientNumber', function () {
    var myRecord = icpclientData[0];
    var uniqueParam = myRecord['clientNumber'];
    return chai.request(app)
      .get(BASE_PATH + '/'+uniqueParam)
      .then(function (res) {
        var data = res.body;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(data).to.be.eql(icpclientData[0]);
      });
  });

  // GET - List non-existing record by clientNumber
  it('GET Non-Existing icpclient by clientNumber', function () {
    var uniqueParam = 'randomNotExistingId';
    return chai.request(app)
      .get(BASE_PATH + '/'+uniqueParam)
      .then(function (res) {
        expect(res).to.have.status(404);
      });
  });
                    

                                  
  // PUT - Update existing record
  it('PUT Existing icpclient', function () {
    return chai.request(app)
      .put(BASE_PATH + '/'+icpclientData[0]['clientNumber'])
      .send(icpclientData[0])
      .then(function (res) {
        var data = res.body;
        expect(res).to.have.status(200);
        expect(data).to.be.eql(icpclientData[0]);
      });
  });      

    // PUT - Update non-existing record
    it('PUT Non-Existing icpclient', function () {
      var uniqueParam = 'randomNotExistingId';
      return chai.request(app)
        .put(BASE_PATH + '/'+uniqueParam)
        .send(icpclientData[0])
        .then(function (res) {
          expect(res).to.have.status(404);
        });
    });  

      

                            
  // POST - Add new record
  it('POST New icpclient', function () {
    return chai.request(app)
      .post(BASE_PATH)
      .send(icpclientData[0])
      .then(function (res) {
        var data = res.body;
        expect(res).to.have.status(200);
        expect(data).to.be.eql(icpclientData[0]);
      });
  }); 

            

                
  // PATCH - Semi-update existing record
  it('PATCH Existing icpclient', function () {
    var updatedSting = JSON.stringify(icpclientData[0]);
    var updatedRecord = JSON.parse(updatedSting);
    var uniqueParam = updatedRecord['clientNumber'];
    delete updatedRecord['clientNumber'];
    return chai.request(app)
      .patch(BASE_PATH + '/'+uniqueParam)
      .send(updatedRecord)
      .then(function (res) {
        var data = res.body;
        expect(res).to.have.status(200);
        expect(data).to.be.eql(icpclientData[0]);
      });
  }); 

                        

          
  // DELETE - Delete existing record
  it('Delete Existing icpclient', function () {
    var recordToDelete = icpclientData[0];
    var uniqueParam = recordToDelete['clientNumber'];
    return chai.request(app)
      .delete(BASE_PATH + '/'+uniqueParam)
      .then(function (res) {
        expect(res).to.have.status(204);
      });
  });    

  // DELETE - Delete non-existing record
  it('Delete Non-Existing icpclient', function () {
    var uniqueParam = 'randomNotExistingId';
    return chai.request(app)
      .delete(BASE_PATH + '/'+uniqueParam)
      .then(function (res) {
        expect(res).to.have.status(404);
      });
  });     

                              

      
});