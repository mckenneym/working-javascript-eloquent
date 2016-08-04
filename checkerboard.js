var hex = '#';
var space = ' ';
var input = 0;
var pat1 = '';
var pat2 = '';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('size? ', (input)=>{console.log('Thanks you: ', input);
rl.close();

for(var pat=1; pat<=input-1; pat+=2){
  pat1 = pat1 + hex + space;
  pat2 = pat2 + space + hex;
};

if(input%2==1){
  pat1 = pat1 + hex;
  pat2 = pat2 + space;
};

for(var row=1; row<=input-1; row+=2){
  console.log(pat1);
  console.log(pat2);
};

if(input%2==1){
  console.log(pat1)
}
});
