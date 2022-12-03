"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.VideojuegosComponent = void 0;
var core_1 = require("@angular/core");
var videojuego_1 = require("src/app/entidades/videojuego");
var VideojuegosComponent = /** @class */ (function () {
    //Datos que recogemos del formulario
    function VideojuegosComponent() {
        this.listaVideojuegos = [];
        this.videojuego = null;
        //Habilitar y deshabilitar botones
        this.insertarDeshabilitado = false;
        this.modificarBorrarDeshabilitado = true;
        //Habilitar y deshabilitar mensajes de error
        //El usuario y la contraseña no pueden estar vacíos
        this.usuarioObligatorioOculto = true;
        this.contraseñaObligatoriaOculta = true;
        var videojuego = new videojuego_1.Videojuego("Plantas vs Zombies", "PopCap Games", "url_imagen", 7.4);
        this.listaVideojuegos.push(videojuego);
        videojuego = new videojuego_1.Videojuego("Mario kart", "Nintendo", "url_imagen", 8.5);
        this.listaVideojuegos.push(videojuego);
        videojuego = new videojuego_1.Videojuego("Donkey Kong", "Nintendo", "url_imagen", 8.3);
        this.listaVideojuegos.push(videojuego);
        videojuego = new videojuego_1.Videojuego("Angry Birds", "Roviio Entertainment Corporation", "url_imagen", 7.2);
        this.listaVideojuegos.push(videojuego);
    }
    VideojuegosComponent.prototype.ngOnInit = function () {
    };
    VideojuegosComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-videojuegos',
            templateUrl: './videojuegos.component.html',
            styleUrls: ['./videojuegos.component.css']
        })
    ], VideojuegosComponent);
    return VideojuegosComponent;
}());
exports.VideojuegosComponent = VideojuegosComponent;
