const express = require('express');
const app = express();
const port = 4000;
const fs = require('fs');

let readCamFramesNames = fs.readdirSync("../frontend/src/assets/img/sensors/cam_frames");
app.get('/', (req, res) => {
    res.send(readCamFramesNames)
});

///../frontend/dashboard-react/src/assets/img/sensors

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});
