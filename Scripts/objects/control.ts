/// <reference path="../../typings/tsd.d.ts"/>

module objects {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    export class Control { 
        //PUBLIC INSTANCE VARIABLES +++++++++++++++++++++++++++
        public rotationSpeedx:number;
        public rotationSpeedy:number;
        public rotationSpeedz:number;
        public skinColor:number;
        public shirtColor:number;
        public pantColor:number;
        public bootColor:number;
        public eyesColor:number;
        
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(rotationSpeedx:number, rotationSpeedy:number, rotationSpeedz:number, skinColor:number, shirtColor:number,pantColor:number, bootColor:number, eyesColor:number) {
           this.rotationSpeedx = rotationSpeedx;
           this.rotationSpeedy = rotationSpeedy;
           this.rotationSpeedz = rotationSpeedz;
           this.skinColor = skinColor;
           this.shirtColor = shirtColor;
           this.pantColor = pantColor;
           this.bootColor = bootColor;
           this.eyesColor = eyesColor;
        }
        
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++
       
    }
}
