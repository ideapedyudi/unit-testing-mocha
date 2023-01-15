const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');

chai.should();
chai.use(chaiHttp);

describe('API endpoint test find', () => {
    it('should return all data on /data GET', (done) => {
        chai.request(app)
            .get('/data')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});