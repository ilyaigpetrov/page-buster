'use strict';

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

  if (changeInfo.status === 'complete') {

    let bustAttempts = 2;
    let timerId;
    const main = () => {

      chrome.tabs.insertCSS(tabId, {
        code: `
          :root, body, * {
            display: none !important;
            opacity: 0 !important;
          }
	      `,
        runAt: 'document_start',
      });
      chrome.tabs.executeScript(tabId, {
        code: `
          console.log('BG START');
          /*
          if (document.documentElement.outerHTML.includes('Hide me')) {

            // console.log('BG LOCACTION CHANGE');
            // window.location = 'https://www.google.com/ncr';

            console.log('BG WRITES TO DOC');
            document.write();

          }*/`,
        //code: 'document.documentElement.innerText += ";\\nHACKED BY BG SCRIPT"',
        runAt: 'document_start',
      });
      if (!--bustAttempts) {
        clearInterval(timerId);
      }
    };
    timerId = setInterval(main, 2000);
    main();
  }
});

