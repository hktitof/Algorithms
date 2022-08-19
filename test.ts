const direct : { [string:string]:{[string:string]:number} } = {
  "00": { "00": 0, "01": 0, "10": 0, "11": 0 },
  "01": { "00": 0, "01": 0, "10": 0, "11": 0 },
  "10": { "00": 0, "01": 0, "10": 0, "11": 0 },
  "11": { "00": 0, "01": 0, "10": 0, "11": 0 },
};
const indirect = {
  "00": { "00": 0, "01": 0, "10": 0, "11": 0 },
  "01": { "00": 0, "01": 0, "10": 0, "11": 0 },
  "10": { "00": 0, "01": 0, "10": 0, "11": 0 },
  "11": { "00": 0, "01": 0, "10": 0, "11": 0 },
};
//split the input into substrings of given length
function splitToSubstrings(str: string, n:number) {
  const arr: string[] = [];
  for (let index = 0; index < str.length; index += n) {
    arr.push(str.slice(index, index + n));
  }

  return arr;
}
//incremnt where to point
// const point=(first,second)=>{
//     direct[first]=direct[first][second];
// }
const test = "11010100110110110110";
const input_array :string[] = splitToSubstrings(test, 2);
direct["00"]["00"]=1;
console.log(direct["00"]);
// const exDirect = (input:string[])=>{
//     let current;
//     let next;
//     for(let i =0;i<input.length-1;i++){
//         current=input[i].toString();
//         console.log("current : ",current);
//         console.log(direct[current]);
//         // next=input[i+1];
//         // input[current]
//     }
// }


//execute
// exDirect(input_array);


// console.log(input_array);