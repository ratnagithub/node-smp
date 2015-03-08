var superagent = require('superagent'),
    expect = require('expect.js');
describe('Homepage', function(){
    it('should respond to get', function(done){
        superagent.get('http://localhost:3000')
            .end(function(res){
                expect(res.status).to.equal(200);
                done();
            })
    });
});