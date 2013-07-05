morse = (function(){
  var exports = {};
  var translation = {
    ".-" : "A",
    "-..." : "B",
    "-.-." : "C",
    "-.." : "D",
    "." : "E",
    "..-." : "F",
    "--." : "G",
    "...." : "H",
    ".." : "I",
    ".---" : "J",
    "-.-" : "K",
    ".-.." : "L",
    "--" : "M",
    "-." : "N",
    "---" : "O",
    ".--." : "P",
    "--.-" : "Q",
    ".-." : "R",
    "..." : "S",
    "-" : "T",
    "..-" : "U",
    "...-" : "V",
    ".--" : "W",
    "-..-" : "X",
    "-.--" : "Y",
    "--.." : "Z",
    "-----" : "0",
    ".----" : "1",
    "..---" : "2",
    "...--" : "3",
    "....-" : "4",
    "....." : "5",
    "-...." : "6",
    "--..." : "7",
    "---.." : "8",
    "----." : "9"
  };

  exports.fromMorse = function(morse){
    return _.map(morse.split("/"), function(word){
      return _.map(word.split(" "), function(letter){
        if(_.has(translation, letter)){
          return translation[letter];
        } else {
          return letter;
        }
      }).join("");
    }).join(" ");
  };

  return exports;
}());
