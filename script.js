const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const response = document.getElementById('response');

// Show response on "Yes"
yesBtn.addEventListener('click', () => {
  response.classList.remove('hidden');
});

// Move "No" button
noBtn.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

window.addEventListener('click', () => {
    const bgMusic = document.getElementById('bgMusic');
    if (bgMusic && bgMusic.paused) {
      bgMusic.play().catch(err => console.warn("Autoplay blocked:", err));
    }
  }, { once: true });

//   const yesBtn = document.getElementById('yesBtn');
//   const response = document.getElementById('response');
  const movieSection = document.getElementById('movieSection');
  
  yesBtn.addEventListener('click', () => {
    response.classList.remove('hidden');
    
    // Show movie section with animation
    movieSection.classList.remove('hidden');
    movieSection.classList.add('fade-in');
  });
  