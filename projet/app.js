require('dotenv').config();

const express = require('express');
const app =express();
const port = 3000;


app.get('/',(req, res) => {
    res.send(process.env.SERVICE__SENSITIVE_DATA + process.env.SERVICE__NONSENSITIVE_DATA);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})