
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


// script.js
// document.addEventListener('DOMContentLoaded', function () {
//     const animatedImage = document.querySelector('.animated-image');
    
//     function animateImage() {
//         animatedImage.style.left = '0'; // Move to the right (visible area)
//     }

//     // Delay the animation start
//     setTimeout(animateImage, 500); // Adjust the delay as needed
// });






