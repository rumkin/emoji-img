const fs = require('fs');
const assert = require('assert');
const emojis = require('..');

describe('emoji-img', function() {
    it('Should return map of images', function() {
        assert.ok(emojis instanceof Map, 'It\'s a Map');
        assert.equal(emojis.size, 882, 'Images count is 882');
        assert.ok(fs.existsSync(emojis.get('smiley')), 'Smiley exists on fs');
        assert.ok(fs.existsSync(emojis.get('thumbsup')), 'Thumbs up exists on fs');
    });
});
