const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');

chai.should();
chai.use(chaiHttp);

describe('API endpoint test delete', () => {
    it('should delete an item on /delete/:id DELETE', (done) => {
        chai.request(app)
            .delete('/delete/63c370ae5e2811c062a6bec7')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('success').eql(true);
                done();
            });
    });
});