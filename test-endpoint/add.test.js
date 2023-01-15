const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');

chai.should();
chai.use(chaiHttp);

describe('API endpoint test add', () => {
    it('should add an item on /add POST', (done) => {
        const item = {
            name: 'caca',
            age: 18
        }
        chai.request(app)
            .post('/add')
            .send(item)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('name').eql('caca');
                res.body.should.have.property('age').eql(18);
                done();
            });
    });
});