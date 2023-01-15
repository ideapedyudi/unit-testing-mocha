const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./index');

chai.use(chaiHttp);

describe('API endpoint test', () => {
    it('should return all data on /data GET', (done) => {
        chai.request(app)
            .get('/data')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });

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
                res.body.should.have.property('name');
                res.body.should.have.property('age');
                done();
            });
    });

    it('should update an item on /edit/:id PUT', (done) => {
        const item = {
            name: 'wahyudi tayo',
            age: 18
        }
        chai.request(app)
            .put('/edit/63c36a543b330936ca9dab1c')
            .send(item)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('name').eql('wahyudi tayo');
                res.body.should.have.property('age').eql(18);
                done();
            });
    });

    it('should delete an item on /delete/:id DELETE', (done) => {
        chai.request(app)
            .delete('/delete/63c36a543b330936ca9dab1c')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('success').eql(true);
                done();
            });
    });
});