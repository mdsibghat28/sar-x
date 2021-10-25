export class SpaceRooms {
    roomName:string;
    accomodates:number;
    customerId:number;
    checkIn:string;
    checkOut:string;
    name:string;

    constructor(roomName?:string,accomodates?:number, customerId?:number,checkIn?:string,checkOut?:string,name?:string){

         this.roomName=roomName||"";
         this.accomodates=accomodates||0;
         this.customerId=customerId||0;
         this.checkIn=checkIn||"";
         this.checkOut=checkOut||"";
         this.name=name||"";



    }





}