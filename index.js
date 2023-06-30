var express= require('express');
var fs= require('node:fs');
var app= express()
var bb= fs.readFileSync('./jokes.json')
bb = bb.toString()
bb=JSON.parse(bb)
//console.log(bb);
const arr= ["bald","like","nasty","old","short","stupid","ugly","fat","hairy","odor","poor","skinny","tall"];

app.listen(8080,running);

function Randomize(j){
let le= j.length;
return j[(Math.floor(Math.random() * le))]
}


function running(){
console.log('Server running on 8080...')
}
app.get('/',(req,res)=>{
res.json({
title: "Joke Fetcher",
tags: arr

})
});

app.get('/:name',(req,res)=>{
let name= req.params.name;
res.send(Randomize(bb[`${name}`]));

})
