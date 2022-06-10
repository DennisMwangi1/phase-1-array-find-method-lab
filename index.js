
// function superbowlWin(collection) {
//    return collection.find((item)=>item.result === 'W' )
    
// }
// console.log(superbowlWin(record))

// function superbowlWin(collection) {
//     let item = collection.find(item =>{item.result === 'W'});
//     return item.year;
    
    
// }

const superbowlWin = (record) => {
    for (let result of record) {
      if (result.year) {
        let myResult = record.find((item) => item.result === 'W');
        return myResult.year;
      } else {
        return undefined;
      }
    }
  }; 


