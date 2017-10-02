var sound = new Howl({
  src: ['audio']
});

sound.play();


var sound = new Howl({
  src: ['audio/sound1.mp3', 'audio/sound1.wav', 
  'audio/sound1.webcam','audio/sound2.webcam','audio/sound2.wav','sound3.wav'],
  autoplay: true,
  loop: true,
  volume: 0.5,
  onend: function() {
    console.log('Finished!');
  }
});



