// Minor event delay controller so we don't bottleneck some devices
let limit = 100;
let shouldRun = true;

// Image parallax animation controller
function animateImage(e) {
  if (!shouldRun) return;
  shouldRun = false;
  const container = document.getElementById('main');
  const img = document.getElementById('product-image');
  var rect = container.getBoundingClientRect();
  var mouse = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
    moved: false,
  };

  gsap.to(img, 0.5, {
    x: ((mouse.x - rect.width / 2) / rect.width) * -60,
    y: ((mouse.y - rect.height / 2) / rect.height) * -60,
    duration: 0.2,
    ease: 'slow',
  });

  setTimeout(() => {
    shouldRun = true;
  }, limit);
}
