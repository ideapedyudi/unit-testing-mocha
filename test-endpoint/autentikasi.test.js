const chai = require('chai');
const chaiHttp = require('chai-http');
const fs = require('fs')

chai.should();
chai.use(chaiHttp);

describe('API Endpoint Test', () => {
    it('should get data from other website', (done) => {
        chai.request('https://fr24.edifly-si.com')
            .get('/service/api/v1/route?page=1&perPage=10&search=&search2={}&timestamp=1673846423')
            .set({ srawungtoken: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IiIsInBob25lIjoiIiwicm91dGluZyI6W10sImRlbGV0ZWQiOjAsIl9pZCI6IjYzYTQzYjE2M2Y3NjEyMmIzZDlkMjEzNyIsIm5hbWUiOiJTdXBlciBVc2VyIiwibGV2ZWwiOjEzMTA1NiwidXNlcm5hbWUiOiJhZG1pbiIsImNyZWF0ZWRBdCI6IjIwMjItMTItMjJUMTE6MTA6MTQuNjA1WiIsIl9fdiI6MCwiYmVfdmVyc2lvbiI6IjAuMC4wLjAwMDAiLCJpYXQiOjE2NzM4NDY0MTIsImV4cCI6MTY3Mzg2NDQxMiwiYXVkIjoiSEtOZXQiLCJzdWIiOiJMRENTQWlycG9ydCJ9.HLEVIaFRLZBLLk-moGK-fjXdA6GoIAx-9qdrExT55aEYmTs0D6G0jmn49WExb4El0yuWtsOL_O7I-Nc_-NQNgA' })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                fs.writeFileSync('result/autentikasi.test.json', JSON.stringify(res.body))
                done();
            });
    });
});
