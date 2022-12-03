export class Usuario{

    /**
     * Los atributos privados se poneen con "_" por convenio
     * Atributo privado que lleva el identificador únido del videojuego.
     * Sólo se permitirá acceder a él con el método get.
     */
    //Datos que recogemos del formulario

    _usuario : string = ""
    _contraseña : string = ""

   
    constructor(private usuario : string, private contraseña : number){
        this.usuario = usuario;
        this.contraseña = contraseña;
    }


    public toString() : string{
            return `Usuario: ${this.usuario}, Contraseña: ${this.contraseña}}`
    }


}