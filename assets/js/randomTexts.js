(function () {
  const texts = [
  "«[...]je peux dire sans hésiter que c’est un profil rare.»",
  "«[...]apporte à la fois de la rigueur, de l’innovation et de la fraîcheur à une équipe.»",
  "«[...]structurer des systèmes solides tout en proposant des twists et des idées originales qui enrichissent et dynamisent l’expérience.»",
  "«C’est une personne fiable sur qui on peut se reposer pour planifier et avancer sereinement dans la production.»",
  "«Je la recommande très vivement pour un poste de Game Designer, Level Designer, ou les deux.»",
  "«[...]passionnée par le jeu vidéo.»",
  "n'hésitez pas à me contacter"
];

const chaine1 = texts[Math.floor(Math.random()*texts.length)]
console.log("premiere entrée " + chaine1)
myText.addEventListener('click', function() {
  myText.textContent = chaine1
})
})();
