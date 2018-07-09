function slider(selector, delay, img, start=true) {

  document.querySelector(selector).style.backgroundImage = "url('" + img[0] + "')";
  var saveDelay = delay;

  function startImg(img, i=0) {
    if (start) {
      delay = 0000;
    } else {
      delay = saveDelay;
    }    
    if(i < img.length){
      setTimeout(function(){
        document.querySelector(selector).style.backgroundImage = "url('" + img[i] + "')";
        i++;
        start = false;
        startImg(img, i);
      }, delay);
    } else {
      i = 0;
      startImg(img, i);
    }
  }

  startImg(img);
}
