
  const menuToggle = document.getElementById('menu-toggle');
  const menuOpen = document.getElementById('menu-open');
  const closeMenu = document.getElementById('close-menu');
  const mobileMenu = document.getElementById('mobile-menu');

  menuOpen.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('translate-y-0');
    menuOpen.classList.add('hidden');
    closeMenu.classList.remove('hidden');
  });

  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('translate-y-0');
    menuOpen.classList.remove('hidden');
    closeMenu.classList.add('hidden');
  });
 const words = ['Ibrahim'];
 let i = 0;
 let j = 0;
 let currentWord = '';
 let isDeleting = false;

 function type() {
   currentWord = words[i];
   if (isDeleting) {
     document.getElementById('typewriter').textContent = currentWord.substring(
       0,
       j - 1
     );
     j--;
     if (j == 0) {
       isDeleting = false;
       i++;
       if (i == words.length) {
         i = 0;
       }
     }
   } else {
     document.getElementById('typewriter').textContent = currentWord.substring(
       0,
       j + 1
     );
     j++;
     if (j == currentWord.length) {
       isDeleting = true;
     }
   }
   setTimeout(type, 500);
 }

 type();


const tl = gsap.timeline();

// tl.to('#apple-logo', {
//   opacity: 1,
//   delay: 1,
//   duration: 1,
//   scale: 2,
// });

// tl.to('#apple-logo', {
//   opacity: 0,
//   duration: 2,
// });

tl.to('.heding', {
  opacity: 1,
  scale: 2,
  duration: 2,
});
tl.to('.heding', {
  opacity: 0,
  scale: 1,
  duration: 2,
});

// tl.to('#root', {
//   y: '-100%',
//   duration: 2,
//   ease: 'sine.out',
// });

tl.from('header', {
  opacity: 0,
  scaleX: 2,
  duration: 1,
  ease: 'circ.out',
});
tl.from('.container h2 span', {
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: 'power3.out',
});
tl.from('nav a', {
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: 'power3.out',
});




