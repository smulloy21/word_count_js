describe('wordCount', function(){
  it("should take a word input and return it with a 1 count", function(){
    expect(wordCount("Hello")).to.eql(['Hello: 1']);
  });

  it("should take two words input and return them with a count", function(){
    expect(wordCount("Hello stranger")).to.eql(['Hello: 1', 'stranger: 1']);
  });

  it("should take a few words input and return them with a count", function(){
    expect(wordCount("Hello stranger stranger")).to.eql(['stranger: 2', 'Hello: 1']);
  });

  it("should take a few words input and return them with a count", function(){
    expect(wordCount("Hello stranger stranger there")).to.eql(['stranger: 2', 'Hello: 1', 'there: 1']);
  });
});
