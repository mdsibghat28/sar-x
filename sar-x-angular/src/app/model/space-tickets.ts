export class SpaceTickets {
    flightId: number;
    name: string;
    date: string;
    className:string;
    price:number;
    customerId:number;
    passenger_name:string;
    passengers:number;
    source:string;
    destination:string;

    constructor( flightId ?: number,  name ?: string, date ?: string,className ?:string,price ?:number, customerId ?:number,passenger_name ?:string,passengers ?:number, source ?:string,destination ?:string){
        this.flightId = flightId || 0;
        this.name=name|| "";
        this.date=date ||"";
        this.className=className || "";
        this.price=price||0;
        this.customerId=customerId||0;
        this.passenger_name=passenger_name||"";
        this.passengers=passengers||0;
        this.source=source||"";
        this.destination=destination||"";
    }

    

    
    




}