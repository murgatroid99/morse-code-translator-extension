var badge = require('browserAction').BrowserAction({
    default_icon: 'img/icon.png',
    default_title: 'Translate Morse Code',
    default_popup: 'index.html'
});

badge.onMessage.addListener(function(message, sender, sendResponse) {
    require('sdk/tabs').activeTab.title = message;
});
