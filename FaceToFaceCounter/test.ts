const direct : { [string:string]:{[string:string]:number} } = {
  "00": { "00": 0, "01": 0, "10": 0, "11": 0 },
  "01": { "00": 0, "01": 0, "10": 0, "11": 0 },
  "10": { "00": 0, "01": 0, "10": 0, "11": 0 },
  "11": { "00": 0, "01": 0, "10": 0, "11": 0 },
};
const indirect : { [string:string]:{[string:string]:number} } = {
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

const test = "11010100110110110110";
const input_array :string[] = splitToSubstrings(test, 2);
console.log(input_array.toString());
const exDirect = (input:string[])=>{
    for(let i =0;i<input.length-1;i++){
        direct[input[i].toString()][input[i+1].toString()]++;
    }
    console.log(direct);
}
const exIndirect = (input:string[])=>{
    for(let  i=input.length-1;i>0;i--){
        indirect[input[i].toString()][input[i-1].toString()]++;
    }
    console.log(indirect);
}

//execute
exDirect(input_array);
exIndirect(input_array);
