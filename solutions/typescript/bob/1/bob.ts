export function hey(message: string):string{
  if((!message || message.trim() === ""))
    return "Fine. Be that way!" ;
  if(message.trim().slice(-1)==="?" && message===message.toUpperCase() && /[a-zA-z]/.test(message))
    return "Calm down, I know what I'm doing!";
  if(message.trim().slice(-1)==="?")
    return "Sure.";
  if(message===message.toUpperCase() && message && /[a-zA-z]/.test(message))
    return "Whoa, chill out!";
  return "Whatever.";
}
