'use strict';

const fs = require('fs');
const path = require('path');

const dir = path.resolve(__dirname, '..', 'emojis');
const images = new Map();

fs.readdirSync(dir)
.forEach(function(file) {
    var ext = path.extname(file);
    if (ext !== '.png') {
        return;
    }

    var basename = path.basename(file, ext);

    images.set(basename, path.join(dir, file));
});

module.exports = images;
