morse = (function(){
  var exports = {};

  var translations = [
    {
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
    },
    {
      "-..." : "B",
      "-.-." : "C",
      "..-." : "F",
      "...." : "H",
      ".---" : "J",
      ".-.." : "L",
      ".--." : "P",
      "--.-" : "Q",
      "...-" : "V",
      "-..-" : "X",
      "-.--" : "Y",
      "--.." : "Z"
    },
    {
      "-.." : "D",
      "--." : "G",
      "-.-" : "K",
      "---" : "O",
      ".-." : "R",
      "..." : "S",
      "..-" : "U",
      ".--" : "W"
    },
    {
      ".-" : "A",
      ".." : "I",
      "--" : "M",
      "-." : "N"
    },
    {
      "." : "E",
      "-" : "T"
    }
  ];

  exports.fromMorse = function(morse){
    return _.map(morse.split("/"), function(word){
      return _.map(word.split(" "), function(letter){
        _.each(translations, function(trans){
          _.each(trans, function(val, pat){
            var re = new RegExp(pat.replace(/\./g, "\\."), "g");
            letter = letter.replace(re, val);
          });
        });
        return letter;
      }).join("");
    }).join(" ");
  };

  return exports;
}());
