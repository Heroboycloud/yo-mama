/*
Required modules include Express and fs..
 ok

Build steps include `npm i express`


*/
const express= require('express');
var fs= require('fs');
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

function getRandom(arr){
 return arr[Math.floor(Math.random() * arr.length)];
}
function running(){
console.log(' Joke Server running on 8080...')
}
app.get('/',(req,res)=>{
res.json({
title: "Joke Fetcher",
tags: arr

})
});
app.get('/tags',(req,res)=>{
res.json({
title: "Joke Fetcher",
tags: arr

})
});

app.get('/:name',(req,res)=>{
let name= req.params.name;
res.send(Randomize(bb[`${name}`]));

})

app.get('/send',(req,res)=>{
let name= getRandom(arr);
res.send(Randomize(bb[`${name}`]));

})
