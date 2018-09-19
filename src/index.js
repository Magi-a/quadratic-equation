module.exports = function solveEquation(equation) {

  var reg = /[-|'+']?\s?\d+/g;

  var reg2 = /\s+/g;

  var arr = [];

  arr = equation.match(reg);

  for(var i = 0; i < arr.length; i++){
    
    arr[i] = arr[i].replace(/\s+/g,'');;
    

    //console.log(Number(arr[i]));
  }

  var a = Number(arr[0]);
  var b = Number(arr[2]);
  var c = Number(arr[3]);

  var D = Math.pow(b,2) - 4 * a * c;

  var x1;
  var x2;

  x1 = (b*(-1) + Math.sqrt(D))/(2*a);

  x2 = (b*(-1) - Math.sqrt(D))/(2*a);
  
  var res = [Math.round(x1), Math.round(x2)];

  res.sort(function(a,b){
    return a-b;
  });

  //console.log(res);

  return res;
  
}
