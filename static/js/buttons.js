document.addEventListener('DOMContentLoaded', function () {
    // Utility to find next .hero-list sibling
    function getNextHeroList(current) {
      let next = current.nextElementSibling;
      while (next && !next.classList.contains('hero-list')) {
        next = next.nextElementSibling;
      }
      return next;
    }
  
    // Button logic
    ['play', 'pause', 'backward'].forEach(action => {
      document.querySelectorAll(`.${action}-btn`).forEach(button => {
        button.addEventListener('click', function () {
          const currentHeroList = this.closest('.hero-list');
          const nextHeroList = getNextHeroList(currentHeroList);
          if (!nextHeroList) return;
  
          const videos = nextHeroList.querySelectorAll('video');
          videos.forEach(video => {
            if (action === 'play') video.play();
            if (action === 'pause') video.pause();
            if (action === 'backward') video.currentTime = 0;
          });
        });
      });
    });
  });
  