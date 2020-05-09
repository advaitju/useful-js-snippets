script = document.createElement('script');
script.setAttribute('src', '');
script.setAttribute('sync', 'false');
script.addEventListener('load', () => {
  console.log('Script loaded.');
});
document.querySelector('head').appendChild(script);
