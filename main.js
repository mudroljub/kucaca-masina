var tekst = '"Po mišljenju komandanta Srbije, a u suprotnosti sa iznetim za Hrvatsku, nemiri se u prvom redu i gotovo isključivo imaju pripisati komunističkom uticaju."';
var potpis = '(Nemački izveštaj od 11. avgusta 1941.)';
var index = 0;
var index2 = 0;

function kucaj() {
  var t = setTimeout('kucaj()', 80); //brzina kuckanja, manji broj ide brže

  document.getElementById('tekst').innerHTML += tekst.charAt(index);
  index++;

  if (index > tekst.length) {
    document.getElementById('potpis').innerHTML += potpis.charAt(index2);
    index2++;

    if (index2 >= potpis.length) {
      var mediaElement = document.getElementById("kuckanje");
      mediaElement.pause();
      mediaElement.src = '';
    }
  }
}
