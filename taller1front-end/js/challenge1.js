let wordChallenge=() => {
  let word = document.getElementById("word").value;
  let decision = document.getElementById("desicion").value;

  switch (parseInt(decision)) {
    case 1:
      let length=word.length;
      alert(`La longitud de su palabra es: ${length}`);
      break;
    case 2:
      let mayus=word.toUpperCase();
      alert(`Su palabra en mayúsculas es: ${mayus}`);
      break;
    case 3:
      let minus=word.toLowerCase();
      alert(`Su palabra en minúsculas es: ${minus}`);
      break;
    case 4:
      let first=word.charAt(0);
      alert(`El primer caracter de su palabra es: ${first}`);
      break;
    default:
      alert("Lo siento, no pudimos capturar tu elección");
      break;
  }
};

