require('chai').should();

const patternChaser = require('../index.js');

describe('Pattern Chaser', function () {

  it('For the input "aabbaa" your output was incorrect. The correct answer is yes aa.', function () {
    patternChaser('aabbaa').should.eql('yes aa');
  });

  it('For the input "abcdef12kkk12" your output was incorrect. The correct answer is yes 12.', function () {
    patternChaser('abcdef12kkk12').should.eql('yes 12');
  });

  it('For the input "ahhhkskshhh6" your output was incorrect. The correct answer is yes hhh.', function () {
    patternChaser('ahhhkskshhh6').should.eql('yes hhh');
  });

  it('For the input "yoop" your output was incorrect. The correct answer is no null.', function () {
    patternChaser('yoop').should.eql('no null');
  });

  it('For the input "458933896893" your output was incorrect. The correct answer is yes 893.', function () {
    patternChaser('458933896893').should.eql('yes 893');
  });

  it('For the input "nohere" your output was incorrect. The correct answer is no null', function () {
    patternChaser('nohere').should.eql('no null');
  });

  it('For the input "aaaakkdnrjsnur998aaaaks" your output was incorrect. The correct answer is yes aaaak.', function () {
    patternChaser('aaaakkdnrjsnur998aaaaks').should.eql('yes aaaak');
  });

  it('For the input "lettetr" your output was incorrect. The correct answer is yes et.', function () {
    patternChaser('lettetr').should.eql('yes et');
  });

  it('For the input "patterngaloratt" your output was incorrect. The correct answer is yes att.', function () {
    patternChaser('patterngaloratt').should.eql('yes att');
  });

  it('For the input "urokklr9833rokklb" your output was incorrect. The correct answer is yes rokkl.', function () {
    patternChaser('urokklr9833rokklb').should.eql('yes rokkl');
  });

});