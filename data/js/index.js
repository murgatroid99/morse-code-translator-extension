function translateMorse(){
  var input = document.getElementById("morse");
  var out = document.getElementById("output");
  out.innerHTML = morse.fromMorse(input.value);
}
document.getElementById("morse").addEventListener("input", translateMorse);
