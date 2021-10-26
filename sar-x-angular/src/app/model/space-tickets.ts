export class SpaceTickets {
    name: string;
    date: string;
    className:string;
    customerId:number;
    passenger_name:string;
    passengers:number;
    source:string;
    destination:string;

    constructor( name ?: string, date ?: string,className ?:string,price ?:number, customerId ?:number,passenger_name ?:string,passengers ?:number, source ?:string,destination ?:string){
        this.name=name|| "";
        this.date=date ||"";
        this.className=className || "";
        this.customerId=customerId||0;
        this.passenger_name=passenger_name||"";
        this.passengers=passengers||0;
        this.source=source||"";
        this.destination=destination||"";
    }

    

    
    




}