/// <reference path="../../typings/tsd.d.ts"/>
var objects;
(function (objects) {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    var Control = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Control(rotationSpeedx, rotationSpeedy, rotationSpeedz, skinColor, shirtColor, pantColor, bootColor, eyesColor) {
            this.rotationSpeedx = rotationSpeedx;
            this.rotationSpeedy = rotationSpeedy;
            this.rotationSpeedz = rotationSpeedz;
            this.skinColor = skinColor;
            this.shirtColor = shirtColor;
            this.pantColor = pantColor;
            this.bootColor = bootColor;
            this.eyesColor = eyesColor;
        }
        return Control;
    })();
    objects.Control = Control;
})(objects || (objects = {}));
//# sourceMappingURL=control.js.map