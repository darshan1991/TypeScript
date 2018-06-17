interface Figure
{
    area(): number;
}
interface Image
{
    draw();
}
class Rectangle implements Figure, Image
{
    constructor(private length: number, private width:number)
    {}
    area():number {
        console.log("area() from rectangle");
        return this.length * this.width;
    }
    draw(){

    }
}
class Circle implements Figure  
    {
        constructor(private radius:number) 
            {}
            area(): number{
                console.log("area() from circle");
                return 22.0/7*this.radius*this.radius;
            }
    }
 
    function getTotalArea(figures: Figure[]):number
{
    let s:number = 0.0, i:any;
    for(i in figures)
    {
        s=s+figures[i].area();
    }
    return s;
}
var figures: Figure[] = [new Rectangle(4,5), new Circle(7), new Rectangle(4,5)];
console.log(getTotalArea(figures));


