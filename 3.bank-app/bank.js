class bank_accout{
    constructor(Account_Number,Holder_Name,Balance){
       this.Account_Number = Account_Number;
       this.Holder_Name = Holder_Name;
       this.Balance = Balance;
       
       console.log(`Account-Number is : ${this.Account_Number}`);
       console.log(`Holder_Name is : ${this.Holder_Name}`);
       console.log(`Balance ${Balance}`);
    }

    CashIn(ammout){
       this.Balance = this.Balance + ammout;
    }

    CashOut(ammout){
       if(this.Balance >= ammout){
          this.Balance = this.Balance - ammout;
       }
       else{
          console.log("Insufficient Balance");
       }
    }
    mainBalance(){
       return this.Balance
    }
}

const object = new bank_accout(61148,'Shafiul',1000);
object.CashIn(1000);
object.CashOut(5000);
console.log(object.mainBalance());