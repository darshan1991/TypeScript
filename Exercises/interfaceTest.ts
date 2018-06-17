import * as Collections from typescript-collections;

class Electronics{
    size: number;
    type: number;
    constructor(size:number, type:number)
    {
       this.size= size;
       this.type= type;
    }
    showDetails():void {
        console.log(`item is of size ${this.size} and of type ${this.type}`);
    }
}
interface saleItem{
    getPrice(): number;
    getGoDown(): string;
    getDeliveryItem(): number;
}
class TV extends Electronics implements saleItem
{
     constructor(size:number, type:string, private price:number, private godown:string, private delivTime:number)
     {
          super(size, type);
     }
    getPrice():number{
        return this.price;
    }
    getGoDown():string{
        return this.godown;
    }
    getDeliveryItem():number{
        return this.delivTime;
    }
    showdetails():void{
        console.log(this);
    }
var t1 = TV = new TV(21,"TV", 15000, "Blr", 20);
var t1 = TV = new TV(22,"TV", 25000, "Chn", 20);
var t1 = TV = new TV(24,"lcd", 35000, "Klk", 15);
var t1 = TV = new TV(25,"led", 20000, "Blr", 25);
var tvset : Collections.Set<Electronics> = new Collections.Set<Electronics>();

console.log("added TV" + tvset.add(t1));
console.log("added TV" + tvset.add(t2));
console.log("added TV" + tvset.add(t3));
console.log("added TV" + tvset.add(t4));

tvset.forEach((tv) => tv.showDetails());
/*
1. Create a class TV that inherits from Electronics and implements the interface SaleItem.
1(a) Override the method showDetails() in class TV.
2. Create 4 objects so the class TV create a set of TV. add these TV objects to the set.
3.for each object in the set display the details of the TV.
*/