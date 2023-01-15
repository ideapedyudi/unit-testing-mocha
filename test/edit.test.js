const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');

chai.should();
chai.use(chaiHttp);

describe('API endpoint test edit', () => {
    it('should update an item on /edit/:id PUT', (done) => {
        const item = {
            name: 'caca tayo',
            age: 18
        }
        chai.request(app)
            .put('/edit/63c36a7a2059640c667e4e2e')
            .send(item)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('name').eql('caca tayo');
                res.body.should.have.property('age').eql(18);
                done();
            });
    });
});