const { highlightTerm } = require("../");

describe("stringPrefixSufix", () => {
  it("should add mark tag to text with string manipulation", () => {
    const text =
      "<p>Testing this lib is really easy, all you have to do is google it on Google enterprise LTDA and you will find</p>";
    const term = "Google Enterprise LTDA";
    const hightlightedText = highlightTerm(text, term);
    expect(hightlightedText).toBe(
      "<p>Testing this lib is really easy, all you have to do is google it on <mark>Google enterprise LTDA</mark> and you will find</p>"
    );
  });

  it("should add mark tag to text with fallback fuzzy", () => {
    const text =
      "<p>Testing this lib is really easy, all you have to do is google it on Google enterprise LTDA and you will find</p>";
    const term = "Google Enterprise LTDA ME";
    const hightlightedText = highlightTerm(text, term, true);
    expect(hightlightedText).toBe(
      "<p>Testing this lib is really easy, all you have to do is google it on <mark>Google enterprise LTDA an</mark>d you will find</p>"
    );
  });

  it("should not use fallback fuzzy and ignore mark tag", () => {
    const text =
      "<p>Testing this lib is really easy, all you have to do is google it on Google enterprise LTDA and you will find</p>";
    const term = "Google Enterprise LTDA ME";
    const hightlightedText = highlightTerm(text, term);
    expect(hightlightedText).toBe(
      "<p>Testing this lib is really easy, all you have to do is google it on Google enterprise LTDA and you will find</p>"
    );
  });
});
