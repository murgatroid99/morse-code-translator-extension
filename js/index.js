function translateMorse(){
  var input = document.getElementById("morse");
  var out = document.getElementById("output");
  out.innerHTML = morse.fromMorse(input.value);
}
function translateText(){
  var input = document.getElementById("text");
  var out = document.getElementById("text-output");
  out.innerHTML = morse.toMorse(input.value);
}
document.getElementById("morse").addEventListener("input", translateMorse);
document.getElementById("text").addEventListener("input", translateText);

