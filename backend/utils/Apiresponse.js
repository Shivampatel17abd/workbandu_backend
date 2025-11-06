class Apiresponse{

    constructor(stetusCode,data,message = "success"){
           this.stetusCode = stetusCode;
           this.data= data;
           this.message = message;
           this.success =  stetusCode < 400
    }
}
export default Apiresponse

