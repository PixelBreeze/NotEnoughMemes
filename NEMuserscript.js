var items = {};
$.getJSON('https://cdn.rawgit.com/PixelBreeze/NotEnoughMemes/master/NEM.json', function(data) {
    memes = data.memes;
    API.chatLog('Gifs Loaded.');
});

API.on(API.CHAT_COMMAND, function(data) {
    if (data.length > 0 && data[0] == '/') {
        data = data.substr(1);
    }
    if (memes[data.split(' ')[0]]) {
        API.sendChat(data.replace(data.split(' ')[0], '').trim() + ' ' + memes[data.split(' ')[0]]);
    }
});
