script = document.createElement('script');
script.src = '';
script.sync = false;
script.addEventListener('load', () => {
  console.log('Script loaded.');
});
document.head.appendChild(script);
