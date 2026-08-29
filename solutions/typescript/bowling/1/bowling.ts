export class Bowling {
  rolls:number[]=[];
  
  public roll(pins: number){
    if(pins>10)
      throw new Error('Pin count exceeds pins on the lane');
    if(pins<0)
      throw new Error('Negative roll is invalid')
    if(this.isGameOver())
      throw new Error('Cannot roll after game is over');

    const frame=this.currentFrame();
    if(frame<10)
    {
      const frameRolls=this.getCurrentFrameRolls();

      if(frameRolls.length===1)
      {
        if(frameRolls[0]!==10 && frameRolls[0]+pins >10)
          throw new Error('Pin count exceeds pins on the lane');
      }
    }
    else
    {
      const frameRolls=this.getTenthFrameRolls();
      
      if(frameRolls.length===1&&frameRolls[0]<10)
        if(frameRolls[0]+pins>10)
          throw new Error('Pin count exceeds pins on the lane');

      if(frameRolls.length>=2)
      {
        const first=frameRolls[0];
        const second=frameRolls[1];

       // if(first!==10 && first + second<10)
         // throw new Error('Cannot roll after game is over'); 
        if(first===10 && second!==10 && second+pins>10)
          throw new Error('Pin count exceeds pins on the lane');
      }
    }
    
    this.rolls.push(pins);
  }

  public score(): number {
    if(!this.isGameOver())
      throw new Error('Score cannot be taken until the end of the game');
    
    let sum:number=0;
    let i:number=0;

    for(let frames=0;frames<10;frames++)
      {
        if(this.rolls[i]===10) //strike
        {
          sum+=this.rolls[i]+this.rolls[i+1]+this.rolls[i+2];
          i++;
        }
        else if((this.rolls[i]+this.rolls[i+1])===10) //spare
        {
          sum+=this.rolls[i]+this.rolls[i+1]+this.rolls[i+2];
          i=i+2;
        }
        else //open frame
        {
          sum+=this.rolls[i]+this.rolls[i+1];
          i=i+2;
        }
      }
    return sum;
  }

  currentFrame():number{
    let frame:number=1;
    let i:number=0;

    while(frame<10)
      {
        if(i>=this.rolls.length)
          return frame;

        if(this.rolls[i]===10)
        {
          i++;
          frame++;
          continue;
        }

        if(i+1>=this.rolls.length)
          return frame;

        i=i+2;
        frame++;
      }
    return 10;
  }

  getCurrentFrameRolls():number[]{
    const frame = this.currentFrame();
    
    if (frame === 10) 
      return this.getTenthFrameRolls(); 
    
    let i:number = 0; 
    for(let f=1;f<frame;f++) 
      { 
        if(this.rolls[i]===10) 
          i++; 
        else 
          i=i+2; 
      } 
    return this.rolls.slice(i);
  }

  getTenthFrameRolls():number[]{
    let i:number=0;
    for(let frame=1;frame<10;frame++)
      {
        if(this.rolls[i]===10)
          i++;
        else
          i=i+2;
      }
    return this.rolls.slice(i);
  }

  isGameOver():boolean{
    let frame:number=1;
    let i:number=0;

    while(frame<10)
      {
        if(i>=this.rolls.length)
          return false;

        if(this.rolls[i]===10)
          i++
        else{
          if(i+1>=this.rolls.length)
            return false;
          i=i+2;
        }
      frame++;
      }
    if(i>=this.rolls.length)
      return false;

    const first=this.rolls[i];

    if(first===10)
      return i+2<this.rolls.length;
    
    if(i+1>=this.rolls.length)
      return false;

    const second=this.rolls[i+1];

    if(first+second===10)
      return i+2<this.rolls.length;

    return true;
  }
}
