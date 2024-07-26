// document.getElementById('menu-toggle').addEventListener('click', function () {
//   const mobileMenu = document.getElementById('mobile-menu');
//   mobileMenu.classList.toggle('hidden');
// });
  document.getElementById('menu-toggle').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden');
      mobileMenu.classList.add('translate-y-0');
    } else {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('translate-y-0');
    }
  });