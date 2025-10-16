function playSound(animal) {
  const audio = new Audio(`sounds/${animal}.mp3`);
  audio.play();
}
