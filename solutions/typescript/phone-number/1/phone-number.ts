export function clean(phoneNum:string) {
  var regExp = /[a-zA-Z]/g;
  var regExp2 = /[,:!?@]/g;
  if(regExp.test(phoneNum))
    throw new Error('Letters not permitted');
  if(regExp2.test(phoneNum))
    throw new Error('Punctuations not permitted');
  
  let newNum:string = phoneNum.replace(/\D/g, "");

  
  if(newNum.length==11){
    if(newNum[0]!=="1")
      throw new Error('11 digits must start with 1')
    else{
      if(newNum[4]==="0")
        throw new Error('Exchange code cannot start with zero');
      if(newNum[4]==="1")
        throw new Error('Exchange code cannot start with one');
      
      newNum=newNum.slice(1);
      if(newNum[0]==="0")
        throw new Error('Area code cannot start with zero');
      if(newNum[0]==="1")
        throw new Error('Area code cannot start with one');
      return newNum;
    }
  }
  
  if(newNum.length==10)
  {
    if(newNum[0]==="0")
      throw new Error('Area code cannot start with zero');
    if(newNum[0]==="1")
      throw new Error('Area code cannot start with one');
    if(newNum[3]==="0")
      throw new Error('Exchange code cannot start with zero');
    if(newNum[3]==="1")
      throw new Error('Exchange code cannot start with one');
  }
  
  if(newNum.length<10)
    throw new Error('Must not be fewer than 10 digits');
  
  if(newNum.length>11)
    throw new Error('Must not be greater than 11 digits');
  
  return newNum;
}
