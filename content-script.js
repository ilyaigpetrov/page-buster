'use strict';

const s = document.createElement('script');
s.innerText = 'delete window.alert; document.currentScript.remove()';
document.documentElement.insertBefore(s, document.documentElement.firstChild || null);
//document.documentElement.prepend(s);
//document.documentElement.insertBefore()

let timerId;
let bustAttempts = 2;
const main = () => {

  /*
  if (!document.documentElement.outerHTML.includes('Hide me')) {
    return;
  }
  */

  // console.log('LOCATION CHANGE (Content Script)');
  // window.location = 'https://www.google.com/ncr';

  // document.documentElement.innerText += ';\nHACKED BY CONTENT SCRIPT';

  if (!--bustAttempts) {
    clearInterval(timerId);
  }
};

timerId = setInterval(main, 2000);
main();
