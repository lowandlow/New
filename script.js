function playSound(animal){
  const sound=new Audio('sounds/${animal}.mp3');
  sound.play();
}
