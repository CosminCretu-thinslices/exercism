export function isLeap(n:number) {
  if(n%4===0 && n%100!==0)
    return true;
  if(n%100===0 && n%400===0)
    return true;
  return false;
}
