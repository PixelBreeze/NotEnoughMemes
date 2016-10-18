var items = {};
$.getJSON('https://rawgit.com/PixelBreeze/NotEnoughMemes/master/NEM.json', function(data) {
    items = data.items;
    API.chatLog('Gifs Loaded.');
});

API.on(API.CHAT_COMMAND, function(data) {
    if (data.length > 0 && data[0] == '/') {
        data = data.substr(1);
    }
    if (items[data.split(' ')[0]]) {
        API.sendChat(data.replace(data.split(' ')[0], '').trim() + ' ' + items[data.split(' ')[0]]);
    }
});
