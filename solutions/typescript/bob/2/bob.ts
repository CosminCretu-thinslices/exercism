export function hey(message: string):string{
 let lastChar:string = message.trim().slice(-1);
  if((!message || message.trim() === ""))
    return "Fine. Be that way!" ;
  if(lastChar==="?" && message===message.toUpperCase() && /[a-zA-Z]/.test(message))
    return "Calm down, I know what I'm doing!";
  if(lastChar==="?")
    return "Sure.";
  if(message===message.toUpperCase() && /[a-zA-Z]/.test(message))
    return "Whoa, chill out!";
  return "Whatever.";
}