chrome.runtime.onMessage.addListener(async (request) => {
  if (request.message == 'mouseup') {
    console.log(request.text);
  }
});
