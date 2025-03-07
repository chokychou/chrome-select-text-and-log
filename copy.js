function select_text() {
    return document.getSelection().toString();
}

document.addEventListener('mouseup', () => {
    chrome.runtime.sendMessage({ message: 'mouseup', text: select_text() });
});
