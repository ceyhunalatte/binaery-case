function getBoxDimension() {
  const docW = document.body.offsetWidth;

  switch (true) {
    case docW >= 1024:
      return 80;
    case docW >= 768:
      return 55;
    default:
      return 30;
  }
}

function addBoxes() {
  const parent = document.getElementById('boxes');
  const area = parent.getBoundingClientRect();
  const boxW = getBoxDimension();

  const x = area.width / boxW;
  const y = area.height / boxW;
  const numBoxes = x * y;

  const box = document.createElement('div');
  box.className = 'box';

  for (let i = 0; i < numBoxes; i++) {
    const boxClone = box.cloneNode(true);
    parent.appendChild(boxClone);
  }

  animateBoxes();
}

// Duration to track the resize event
let resizeTimeout;
function refreshBoxes() {
  clearTimeout(resizeTimeout);
  document.querySelectorAll('.box').forEach((e) => e.remove());

  resizeTimeout = setTimeout(() => {
    addBoxes();
  }, 1000);
}

function animateBoxes() {
  const boxes = document.querySelectorAll('.box');

  // Randomize animation properties
  const maxDelay = 8;
  const minDuration = 3;
  const maxDuration = 8;
  boxes.forEach((box) => {
    const delay = Math.floor(Math.random() * maxDelay);
    const duration = Math.floor(
      Math.random() * (maxDuration - minDuration) + minDuration
    );

    gsap.to(box, {
      opacity: 1,
      duration,
      yoyo: true,
      repeat: -1,
      ease: 'slow',
      delay,
    });
  });
}
