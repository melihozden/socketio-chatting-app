

const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();

const  server = require('../app');

chai.use(chaiHttp);

describe('Socketio Server',()=>{
    it('Initiation test',(done)=>{
        chai.request(server)
        .get('/')
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
})


