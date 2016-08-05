var countBs = function(s){
  return countChar(s,'B');
}

var countChar = function(s, c){
  var cs = 0;

  var index = s.length;
  while (index>=0){
    if(s[index]==c){cs++};
    index--;
  }
  return cs;
}

console.log(countChar('BBB', 'B'))

console.log(countBs('BBB'));
console.log(countBs('sss'));
console.log(countBs(''));
console.log(countBs('Bonus Babys'));
console.log(countChar('Bonus Babys','s'));
