document.addEventListener('DOMContentLoaded', function() {

  const front = document.getElementById('cardFront');
  const inside = document.getElementById('cardInside');
  const heartOpener = document.getElementById('openHeartBtn');

  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');
  const responseMsg = document.getElementById('responseMsg');
  const actionButtons = document.getElementById('actionButtons');
  const questionEl = document.querySelector('.question');

  const bgMusic = document.getElementById('bgMusic');

  // Open card + play music
  heartOpener.addEventListener('click', function() {
    front.classList.add('hidden');
    inside.classList.remove('hidden');

    bgMusic.play().catch(error => {
      console.log("Autoplay blocked:", error);
    });
  });

  function showResponse(isPositive = true) {
    questionEl.style.display = 'none';
    actionButtons.style.display = 'none';
    responseMsg.classList.remove('hidden');

    if (isPositive) {
      responseMsg.innerHTML =
        `💖 yes! 💖<span class="sub-msg">I love you so much, mahal! Thank you for being my valentine!</span>`;
    } else {
      responseMsg.innerHTML =
        `💔 it's okay 💔<span class="sub-msg">I'll still be here, no pressure.</span>`;

      bgMusic.pause();
      bgMusic.currentTime = 0;
    }
  }

  yesBtn.addEventListener('click', function() {
    showResponse(true);
  });

  noBtn.addEventListener('click', function() {
    showResponse(false);
  });

});
