/* 
note:
  translate() is used to move the origin (0, 0) to 110 pixeis over and 110 pixeis down. 

*/

function setup(){
  var yourWeight = 110;
  var marsWeight = caculateMars(yourWeight); 
  console.log(marsWeight);
}

function caculateMars(w){
  var newWeight = w*0.38;
  return newWeight;
}
  