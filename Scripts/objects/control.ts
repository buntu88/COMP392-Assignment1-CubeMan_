/// <reference path="../../typings/tsd.d.ts"/>

module objects {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    export class Control { 
        //PUBLIC INSTANCE VARIABLES +++++++++++++++++++++++++++
        public rotationSpeedx:number;
        public rotationSpeedy:number;
        public rotationSpeedz:number;
        public color:number;
        
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(rotationSpeedx:number, rotationSpeedy:number, rotationSpeedz:number, color:number) {
           this.rotationSpeedx = rotationSpeedx;
           this.rotationSpeedy = rotationSpeedy;
           this.rotationSpeedz = rotationSpeedz;
           this.color = color;
        }
        
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++
       
    }
}
