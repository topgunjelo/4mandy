document.addEventListener('DOMContentLoaded', function() {
  const front = document.getElementById('cardFront');
  const inside = document.getElementById('cardInside');
  const heartOpener = document.getElementById('openHeartBtn');

  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');
  const responseMsg = document.getElementById('responseMsg');
  const actionButtons = document.getElementById('actionButtons');
  const questionEl = document.querySelector('.question');

  // Open the secret card when heart is clicked
  if (heartOpener) {
    heartOpener.addEventListener('click', function() {
      front.classList.add('hidden');
      inside.classList.remove('hidden');
    });
  }

  // Helper to show response and hide question/buttons
  function showResponse(isPositive = true) {
    if (questionEl) questionEl.style.display = 'none';
    if (actionButtons) actionButtons.style.display = 'none';

    responseMsg.classList.remove('hidden');
    if (isPositive) {
      responseMsg.innerHTML = `💖 yes! 💖<span class="sub-msg">Mandy, you just made my day.</span>`;
    } else {
      responseMsg.innerHTML = `💔 it's okay 💔<span class="sub-msg">I'll still be here, no pressure.</span>`;
    }
  }

  // Yes button
  if (yesBtn) {
    yesBtn.addEventListener('click', function() {
      showResponse(true);
    });
  }

  // No button
  if (noBtn) {
    noBtn.addEventListener('click', function() {
      showResponse(false);
    });
  }
});