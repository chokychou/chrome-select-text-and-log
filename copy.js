function select_text() {
    return document.getSelection().toString();
}

document.addEventListener('selectionchange', () => {
    chrome.runtime.sendMessage({ message: 'selectionchange', text: select_text() });
});
