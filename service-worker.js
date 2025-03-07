chrome.runtime.onMessage.addListener(async (request) => {
  if (request.message == 'selectionchange') {
    console.log(request.text);
  }
});
