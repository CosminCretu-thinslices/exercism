export class Allergies {
  index:number;
  allergies:string[]=["eggs","peanuts","shellfish","strawberries","tomatoes","chocolate"
                     ,"pollen","cats"];
  
  constructor(allergenIndex: number) {
    this.index=allergenIndex;
  }

  public list(): string[] {
    let result:string[]=[];
    let index2:number=this.index;
    for(let i=this.allergies.length;i>=0;i--)
      {
        if(2**i<=index2)
        {
          index2=index2-2**i;
          result.unshift(this.allergies[i]);
        }
      }
    return result;
  }

  public allergicTo(allergen: string): boolean {
    if(this.list().indexOf(allergen)>=0)
    {
      return true;
    }
    else
      return false;
  }
}
