if ('serviceWorker' in navigator) {

  if (!navigator.serviceWorker.controller) {
    console.log("This page is not controlled by a ServiceWorker");
  }
  else {
    console.log("This page is controlled by a ServiceWorker");
  }

  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js', {scope: './'});
  });
}