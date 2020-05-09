/* Paste into browser console to quickly load script.
script=document.createElement("script"),script.setAttribute("src","https://gist.githack.com/advaitju/0e38dc5dbd3b07add32f39c507e9d26b/raw/f53a6fae27f1daa03b88a5136339aafc53382420/matchCss.js"),script.addEventListener("load",()=>{console.log("Script loaded.")}),document.querySelector("head").appendChild(script);
*/

function matchCss(cssProp, cssValuesArray) {
  if (!window.jQuery) loadjQuery();

  return $('*').filter(function() {
    for (let i = 0; i < cssValuesArray.length; i++) {
      let found = $(this).css(cssProp)
        .toLowerCase()
        .search(cssValuesArray[i].toLowerCase()) > -1;

      if (found) return found;
    }

    return false;
  });
}


function loadjQuery() {
  const script = document.createElement('script');

  script.setAttribute('src', 'https://code.jquery.com/jquery-3.4.1.min.js');
  script.setAttribute('intergrity', 'sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=');
  script.setAttribute('crossorigin', 'anonymous');
  script.setAttribute('async', 'false');

  document.querySelector('head').appendChild(script);
}
