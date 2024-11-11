const express = require('express');
const app= express();

const port = process.env.Port

app.listen(port,()=>console.log('Listening to the port ${port}'));

app.get('/hello',(req,res)=>
{console.log(req.headers);
res.send('hello from port ${port}.\n');
}
);
