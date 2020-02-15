//Create an array containing three different strings representing colors
var listColors = 
    [{name:"First",
      color:"Chartreuse"},
     {name:"Second",
      color:"Turquoise"},
     {name:"Third",
     color:"Aqua"}
     ];

var boxes =[];
function box(color, name){
 
var that = this;
 this.name=name;
 this.color=color;
 //its starting value at 0 
  this.number=0;
  
this.ele=document.createElement("div"); 
   //The div you append to the body should be styled in JS. It should be 100px tall and 200px wide. It should have a border-radius of 10px.
 this.ele.style.height = "100px";
 this.ele.style.width = "200px";
 this.ele.style.borderRadius = "10px";
  //The text inside of the div you create should have a font-size of 18px and should be centered vertically and horizontally in the div
 this.ele.style.fontSize = "18px";
 this.ele.style.textAlign = "center";
 this.ele.style.verticalAlign = "center";
  //This is the div for the background color and making the boxes
 this.ele.style.backgroundColor=this.color;
 this.numberEle=document.createElement("div");
 this.numberEle.innerHTML=this.number;
 this.ele.appendChild(this.numberEle)
 //when I click on that div, it increases the number value inside of it by 1
this.ele.addEventListener("click", function(){
that.addUp();});  
  
document.body.appendChild(this.ele);}

box.prototype.addUp = function(){
this.number++;
this.numberEle.innerHTML=this.number;}

for(var i=0; i<listColors.length; i++){
boxes.push(new box(listColors[i].color, listColors[i].name))}