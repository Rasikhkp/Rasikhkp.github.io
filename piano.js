const tutsPiano = document.querySelectorAll(".tuts-piano-putih, .tuts-piano-hitam");
const volumeSlider = document.getElementById('volume-slider');
const showKeys = document.getElementById('toggle-show-key');
let volumePiano = volumeSlider.value;
let kunci = [];


  


volumeSlider.addEventListener('input', () => {
  volumePiano = volumeSlider.value;
})

tutsPiano.forEach((element, i) => {
  kunci.push(element.innerHTML)

  showKeys.addEventListener('change', () => {
    let checked = showKeys.checked;
    
    if(checked){
      
      element.innerHTML = `${kunci[i]}`;
    
    }else{
      element.innerHTML = '';
    }
  })  

  element.addEventListener('click', () => {
    const suara = new Audio(`../src/tunes/${element.innerHTML}.wav`)

    suara.volume = volumePiano;
    suara.play();    
  });  

  document.addEventListener('keydown', () => {
    if(i == kunci.indexOf(`${event.key.toUpperCase()}`)){
      const suara = new Audio(`../src/tunes/${event.key}.wav`)

      suara.volume = volumePiano;
      suara.play();

      setTimeout(() => {          
        element.style.transform = '';
        element.style.filter = '';
      }, 250);
      element.style.transform = 'translate(2px, 0)';
      element.style.filter = 'drop-shadow(0 0 #0000)';
    }
  })
});



