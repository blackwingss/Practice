window.onload = function() {
  let eleLoad = document.querySelector('.load');
  let eleGlobal = document.querySelector('.global');
  let screen = document.querySelector('.screen');
  let gesture = new AlloyFinger(screen, {
    swipe: function(evt) {
      let direction = evt.direction;
      // console.log(direction);
      if(direction = 'up') {
        screen.className = 'screen ease screen_x90';
      }
    }
  });
  setTimeout(() => {
    eleLoad.style.display = 'none';
    eleGlobal.style.display= 'block';
  },1000);
}
