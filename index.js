var express= require('express')
var fs= require('node:fs')
var bb= fs.readFileSync('./jokes.json')
bb = bb.toString()
bb=JSON.parse(bb)

app.listen(8080,running)
function running(){
console.log('running...')
}
app.get('/',(req,res)=>{
res.json(bb)
});

