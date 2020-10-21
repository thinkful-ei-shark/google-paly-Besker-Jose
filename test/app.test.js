/* eslint-disable strict */
const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app.js');
console.log(app);
describe('GET./movie',  () => {
  it('should return a few movies for the sake of movies', () =>{
    return supertest(app)
      .get('/movie')
      .expect(200)
      .expect('content-type', /json/)
      .then(res => {
        expect(res.body).to.be.an('array');
        expect(res.body[0]).to.be.an('object');
        expect(res.body[0]).to.include.all.keys('genre', 'country', 'avg_vote');
      });
      
  });
});
