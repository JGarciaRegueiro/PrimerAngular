export class Usuario{

    /**
     * Los atributos privados se poneen con "_" por convenio
     * Atributo privado que lleva el identificador únido del videojuego.
     * Sólo se permitirá acceder a él con el método get.
     */
    //Datos que recogemos del formulario

    user : string = ""
    pass : string = ""

   
    constructor(private usuario : string, private contraseña : string){
        this.user = usuario;
        this.pass = contraseña;
    }


    public toString() : string{
            return `Usuario: ${this.user}, Contraseña: ${this.pass}}`
    }


}