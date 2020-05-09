// Get chosen CSS properties of the first element from a group of elements returned by a CSS selector.

/* Paste into browser console to quickly load script.
script=document.createElement("script"),script.setAttribute("src","https://gist.githack.com/advaitju/065534c70bfb55b805d6333caf7108ed/raw/2ef27a285ea5695b70ddbf4d22ff78ad4718dcf0/getGroupCss.js"),script.setAttribute("sync","false"),script.addEventListener("load",()=>{console.log("Script loaded.")}),document.querySelector("head").appendChild(script);
*/

function getGroupCss(cssSelectorsArray, cssPropsArray) {
  if (!window.jQuery) loadjQuery();

  const css = {};

  for (let i = 0; i < cssSelectorsArray.length; i++) {
    selector = cssSelectorsArray[i];
    const el = $(selector);

    if (!el[0]) {
      css[selector] = null;
      continue;
    }

    css[selector] = {};
    cssPropsArray.forEach(cssProp => {
      css[selector][cssProp] = $(el[0]).css(cssProp);
    });
  }
  
  return css;
}

function loadjQuery() {
  const script = document.createElement('script');

  script.setAttribute('src', 'https://code.jquery.com/jquery-3.4.1.min.js');
  script.setAttribute('intergrity', 'sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=');
  script.setAttribute('crossorigin', 'anonymous');
  script.setAttribute('async', 'false');

  document.querySelector('head').appendChild(script);
}
