//issue 3
let merged = true;
let unmerged =!merged;
merged = Number(unmerged);
console.log(merged);

//issue 4
const a=0, b="0", c=null,d=false;
{
   let e = ((a==b)==(c==d));
    console.log(e);
   let  h = (((a==b)==c)==d);
console.log(h);
}

//issue 5
let k=5;
{
  console.log(k===++k);
  }
{
    console.log(k===k++);
}

//Issue 6
let word = "string";
let kk =word.length>3 ? 25 : "green";
let bb;
if (word.length>3){
    bb=25;} else {
    bb="green";
}
let mm;
switch (word.length) {
    case 0: mm = "green";
    break
    case 1: mm = "green";
    break
    case 2: mm = "green";
    break
    case 3: mm = "green";
    break
    default:
        mm = 25;}
 console.log(mm);

//issue 7
let apples=3;
let pears= -9;
let oranges =7;
let color= "Red";
let check = true;

if(apples>pears){
    if (oranges<pears){
        console.log("NOT checked") ;}
    else if (!color){console.log("checked");}
        else {console.log("NOT checked");}
}else if (pears<apples){console.log("checked");}
      else if (!color){console.log("NOT checked");}
            else {console.log("NOT checked")}
//issue 8


 for ( let begin=80; begin >= 4 ;begin=begin-2){
     console.log(begin);
 }
let end = 7;
 while (end<=41) {
     console.log(end);
     end = end+2;

 }
