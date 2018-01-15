function acivateNavToggle() {
  var navButton = document.querySelector('nav button');
  navButton.addEventListener('click', function() {
    let expanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !expanded);
    let menu = this.nextElementSibling;
    menu.hidden = !menu.hidden;
    document.body.setAttribute('data-menu-open', !menu.hidden);
  });
}

function main() {
  acivateNavToggle();
}

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', main);
} else {
  main();
}