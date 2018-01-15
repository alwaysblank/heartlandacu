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

function watchNavBar() {
  var navBar = document.querySelector('.siteNav');
  var inview = new Waypoint.Inview({
    element: document.querySelector('.siteHeader'),
    enter: function(direction) {
      console.log('Enter triggered with direction ' + direction)
      navBar.classList.remove('headerOut');
    },
    entered: function(direction) {
      console.log('Entered triggered with direction ' + direction)
    },
    exit: function(direction) {
      console.log('Exit triggered with direction ' + direction)
    },
    exited: function(direction) {
      console.log('Exited triggered with direction ' + direction);
      navBar.classList.add('headerOut')
    }
  })
}

function main() {
  acivateNavToggle();
  watchNavBar();
}

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', main);
} else {
  main();
}