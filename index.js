
// const superbowlWin = (record) => {
//     let myResult = record.find((item) => item.result === 'W');
//     if (myResult) {
//       return myResult.year;
//     } else {
//       return undefined;
//     }
  
// }; 














const superbowlWin = (record)=>{
  let myResult = record.find((item)=>item.result === 'W')
  if (myResult) {
    return myResult.year
  } else {
    return undefined
  }

}















