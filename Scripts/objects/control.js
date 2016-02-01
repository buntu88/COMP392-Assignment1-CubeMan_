/// <reference path="../../typings/tsd.d.ts"/>
var objects;
(function (objects) {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    var Control = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Control(rotationSpeedx, rotationSpeedy, rotationSpeedz, color) {
            this.rotationSpeedx = rotationSpeedx;
            this.rotationSpeedy = rotationSpeedy;
            this.rotationSpeedz = rotationSpeedz;
            this.color = color;
        }
        return Control;
    })();
    objects.Control = Control;
})(objects || (objects = {}));
//# sourceMappingURL=control.js.map