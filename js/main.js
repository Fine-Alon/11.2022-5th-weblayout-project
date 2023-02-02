const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  a11y: {
    paginationBulletMessage: 'Тут название слайда {{index}}'
  }
});

document.querySelectorAll('.mode__link').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.mode__link').forEach(function (btn) {
      btn.classList.remove('mode__link--active')
    });
    e.currentTarget.classList.add('mode__link--active');

    document.querySelectorAll('.tabs-content').forEach(function (tab) {
      tab.classList.remove('tabs-content--active')
    });

    document.querySelectorAll(`[data-target="${path}"]`).forEach(function (tab) {
      tab.classList.add('tabs-content--active');
    });
  });
});

document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('button-search-img').addEventListener('click', (e) => {
    document.getElementById('search--form').classList.add('search-form--visible')
  })
  document.getElementById('search--btn-close').addEventListener('click', (e) => {
    document.getElementById('search--form').classList.remove('search-form--visible')
  })
})

document.addEventListener("DOMContentLoaded", (e) => {
  document.getElementById("burgerID").addEventListener('click', (e) => {
    document.querySelector('header').classList.toggle("open-menu")
  })
})

new Accordion('.accordion-list', {
	elementClass: 'accordion',
	triggerClass: 'accordion__control',
	panelClass: 'accordion__content',
	activeClass: 'accordion--active'
});
