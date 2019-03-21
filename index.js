// Pattern Chaser (15 mins)

// CHALLENGE

// Have the function PatternChaser(str) take str which will be a string and return the longest
// pattern within the string.

// A pattern for this challenge will be defined as: if at least 2 or more adjacent characters
// within the string repeat at least twice. So for example "aabecaa" contains the pattern aa, on
// the other hand "abbbaac" doesn't contain any pattern.

// Your program should return 'yes pattern' or 'no null'.

// The string may either contain all characters (a through z only), integers, or both.
// But the parameter will always be a string type.
// The maximum length for the string being passed in will be 20 characters.

// You must always return the longest pattern possible.

// EXAMPLES

// "aabejiabkfabed"  =>  "yes abe"
// "123224"          =>  "no null"
// "aa2bbbaacbbb"    =>  "bbb"

// TESTING YOUR SOLUTION

// To test your solution, run 'npm install' in the root directory
// and then run 'npm test' to run the automated tests.

// SUBMITTING YOUR SOLUTION

// When done, make sure you're working on a forked repo, push your
// changes to your forked repo and submit a pull request.
// Alternatively send an email with your solution to tuvieja@entanga.com.ar

function PatternChaser(str) {
  var len = str.length;
  var halfLen = Math.floor(str.length / 2);

  for (var i = halfLen; i > 1; i--) {
      for(var j = 0; j <= len - i; j++) {
          var txt = str.substr(j, i);
          var regTxt = new RegExp(txt, 'g');
          var testMatch = str.match(regTxt);
          if (testMatch.length > 1) {
              return 'yes ' + txt;
          }
      }
  }
  return 'no ' + null;
}

module.exports = PatternChaser;