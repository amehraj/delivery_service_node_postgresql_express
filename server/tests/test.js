import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

chai.use(chaiHttp);
chai.should();

describe("Orders", () => {
    describe("GET /api/order", () => {
        it("should get all Orders From database", (done) => {
             chai.request(app)
                 .get('/api/order')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('array');
                     done();
                  });
         });

    });
});

describe("Users", () => {
    describe("GET /api/user", () => {
        it("should get all Users From database", (done) => {
             chai.request(app)
                 .get('/api/user')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('array');
                     done();
                  });
         });

    });
});

describe("Products", () => {
    describe("GET /api/product", () => {
        it("should get all Products From database", (done) => {
             chai.request(app)
                 .get('/api/product')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('array');
                     done();
                  });
         });

    });
});