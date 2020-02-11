let playing = {
  index: null,
  bool: false
};
window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "lightseagreen",
    "orchid",
    "saddlebrown",
    "seagreen",
    "slateblue",
    "yellow"
  ];

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      if (playing.bool === true) {
        sounds[playing.index].pause();
        playing.bool = false;
      }
      sounds[index].currentTime = 0;
      sounds[index].play();
      playing.index = index;
      playing.bool = true;

      createBubbles(index);
    });
  });

  const createBubbles = index => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };
});
