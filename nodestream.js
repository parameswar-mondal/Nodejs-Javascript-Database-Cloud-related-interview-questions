'use strict';

const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // This line opens the file as a readable stream
    var readStream = fs.createReadStream('input.txt');

    // This will wait until we know the readable stream is actually valid before piping
    readStream.on('open', function () {
        // This just pipes the read stream to the response object (which goes to the client)
        readStream.pipe(res);
    });

    readStream.on('data', (chunkData) => {
        res.write(chunkData);
    });

    readStream.on('end', () => {
        res.end();
    });

    // This catches any errors that happen while creating the readable stream (usually invalid names)
    readStream.on('error', function (err) {
        res.end(err);
    });

});


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});