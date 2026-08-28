export class Triangle {
  sides: number[];
  constructor(...sides:number[]) {
    this.sides=sides;
  }
  get isTriangle(){
    const [a,b,c]=this.sides;
    if(a>b+c || b>a+c || c>a+b)
      return false;
    return true;
  }
  
  get isEquilateral() {
    const [a,b,c]=this.sides;
    if(a===b && b===c && a!==0)
      return true;
    return false;
  }

  get isIsosceles() {
    const [a,b,c]=this.sides;
    if(a==b || b==c || a==c)
      if(this.isTriangle==true)
        return true;
    return false;
  }

  get isScalene() {
    const [a,b,c]=this.sides;
    if(this.isEquilateral==false && this.isIsosceles==false && this.isTriangle==true)
      return true;
    return false;
  }
}
