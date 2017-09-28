const fs = require('fs');
const assert = require('assert');
const emojis = require('..');

describe('emoji-img', function() {
    it('Should return map of images', function() {
        assert.ok(emojis instanceof Map, 'It\'s a Map');
        assert.equal(emojis.size, 2373, 'Images count is 2373');
        assert.ok(fs.existsSync(emojis.get('helicopter')), 'Helicopter exists on fs');
        assert.ok(fs.existsSync(emojis.get('bacon')), 'Bacon up exists on fs');
    });
});
