function countDown(no){
  let a = 0;
  while(a < no + 1){
      console.log(no - a)
      a++
  }
}

function writeCards(arr, msg){
  let cardsMsg = [];
  for(let item in arr){
      cardsMsg.push(`Thank you, ${arr[item]}, for the wonderful ${msg} gift!`);
  }
  return cardsMsg;
}
