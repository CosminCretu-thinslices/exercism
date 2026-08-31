export class ValueError extends Error {
  constructor() {
    super('Bank account error')
  }
}

export class BankAccount {
  private _balance:number=0;
  private _open:boolean=false;

  open(){
    if(this._open===false)
      this._open=true;
    else
      throw new ValueError;
  }

  close(){
    if(this._open===true)
    {
      this._open=false;
      this._balance=0;
    }
    else
      throw new ValueError;
  }

  deposit(value: number){
    if(this._open===true && value>=0)
      this._balance+=value;
    else
      throw new ValueError;
  }

  withdraw(value: number){
    if(this._open===true)
    {
      if(this._balance>=value && value>=0)
        this._balance-=value;
      else
        throw new ValueError;
    }else
      throw new ValueError;
  }

  get balance(){
    if(this._open===true)
      return this._balance;
    else
      throw new ValueError;
  }
}
