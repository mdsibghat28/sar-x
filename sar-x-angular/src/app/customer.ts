export class Customer {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;

    constructor(id ? : number, firstName?: string, lastName?: string, email?: string, password?: string, phoneNumber?: string){
        this.id=id ||0;
        this.firstName=firstName||"";
        this.lastName=lastName||"";
        this.email=email||"";
        this.password=password||"";
        this.phoneNumber=phoneNumber||"";
        
    }





}
