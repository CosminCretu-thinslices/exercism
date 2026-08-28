export function valid(digitString: string): boolean {
  var regExp = /[a-zA-Z]/g;
  if(regExp.test(digitString))
    return false;
  
  var regExp2 = /[-,:!?@#$%]/g;
  if(regExp2.test(digitString))
    return false;
  
  digitString = digitString.replace(/\D/g, "");
  
  if(digitString.length<=1)
    return false;
  
  let sum:number=0;

  for (let i = digitString.length - 1; i >= 0; i--) 
  {
    let digit = Number(digitString[i]);
    if ((digitString.length - 1 - i) % 2 === 1) 
    {
      digit *= 2;
      if (digit > 9) 
      {
        digit -= 9;
      }
    }

    sum += digit;
  }
  if(sum%10==0)
    return true;
  else
    return false;
}
