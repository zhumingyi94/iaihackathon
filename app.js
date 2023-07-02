const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));

const logoImg = document.getElementById('logo-img');

logoImg.addEventListener('mouseover', function() {
  this.src = './assets/color-logo.png';
});

logoImg.addEventListener('mouseout', function() {
  this.src = './assets/logo.png';
});