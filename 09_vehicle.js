console.log('---------------------STEP 1 --------------------------');

class Vehicale {
    constructor(vehicleType,vehicleModel,vehicleColour,vehicleCompany,vehicleEngin){
        this.vehicleType = vehicleType;
        this.vehicleModel = vehicleModel;
        this.vehicleColour = vehicleColour;
        this.vehicleCompany = vehicleCompany;
        this.vehicleEngin = vehicleEngin;
        
        }
        show(){

            console.log(`Vehicale type : ${this.vehicleType}, Vechical Model : ${this.vehicleModel}, Vehicle Colour :
            ${this.vehicleColour}, vechicle Company : ${this.vehicleCompany},Vehicle Engin : ${this.vehicleEngin}`);
        
        }
    }
let vechicleJupiter = new Vehicale ("Two Wheeler", "MGTI" , "Midnight Grey","TATA", 2000 );
vechicleJupiter.show();
let vechicleKia = new Vehicale ("four Wheeler", "Bajaj" , " White "," Maruti", 5000 );
vechicleKia.show();
let vechicleAlto = new Vehicale ("Two Wheeler", "Alto" , " Black "," Honda", 7000 );
vechicleAlto.show();

console.log('---------------------STEP 2 --------------------------');

const arrayOfVehical = [vechicleJupiter, vechicleKia, vechicleAlto];
console.log('---------------------Traversing Array --------------------------');
  for (const vechicle of arrayOfVehical) {
      vechicle.show();
  }

  console.log('---------------------Collage Class --------------------------');

  class college {
    constructor(clgName,clgAddress,clgFounder,clgUnivercity ){
        this.clgName = clgName;
        this.clgAddress = clgAddress;
        this.clgFounder = clgFounder;
        this.clgUnivercity = clgUnivercity;
    }
    display(){
        console.log(` College Name : ${this.clgName} , Collage Address : ${this.clgAddress} , Clollege Founder :
                   ${this.clgFounder} , College Univercity : ${this.clgUnivercity}`);
    }
  }
let clgSangola = new college ("Sangola Collage" , "Solapur", "Sunil Kapgate", "Kolhapur");
clgSangola.display();
let clgPune = new college ("Polytecnic", "Hadpsar","Sanvi Kapgate", "Pune");
clgPune.display();
let clgLoni = new college("MIT","Loni","Siddharth Lokhande","Latur");
clgLoni.display();

console.log(' ----------- Traver Object -----------------');

let traversObject = function(object){
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key];
         console.log(`${key} , ${element}`);   
        }
    }
}
traversObject(clgSangola);
traversObject(clgPune);
traversObject(clgLoni);

