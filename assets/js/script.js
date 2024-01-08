// Dezactiveaza contextmenu keybinds
document.addEventListener('contextmenu', event => event.preventDefault());
  document.addEventListener("keydown", function (e) {
    if (e.keyCode == 123) e.preventDefault();
    else if ((e.ctrlKey || e.metaKey) && e.altKey && e.keyCode == 73) e.preventDefault();
    else if ((e.ctrlKey || e.metaKey) && e.altKey && e.keyCode == 74) e.preventDefault();
    else if ((e.ctrlKey || e.metaKey) && e.altKey && e.keyCode == 85) e.preventDefault();
});


// Previne Tragerea unei imagini
function disableImgDragging() {
var images = document.getElementsByTagName("img");
  for(var i = 0 ; i < images.length ; i++) {
    images[i].classList.add('no-drag');
    images[i].setAttribute('no-drag', 'on');
    images[i].setAttribute('draggable', 'false');
    images[i].addEventListener('dragstart', function( event ) {
      event.preventDefault();
    }, false);	
  }
}
disableImgDragging();


// Data Anului Curent
var currentYear = new Date().getFullYear();
var currentDateSpan = document.getElementById('currentDate');
currentDateSpan.textContent = currentYear;


