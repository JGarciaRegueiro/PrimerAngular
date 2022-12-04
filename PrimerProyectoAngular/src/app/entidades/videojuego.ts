

//Clase que guarda los atributos de un videojuego
export class Videojuego{

        /**
         * Los atributos privados se poneen con "_" por convenio
         * Atributo privado que lleva el identificador únido del videojuego.
         * Sólo se permitirá acceder a él con el método get.
         */
        

        /**
         * Atributo contador del ID del videojuego. Es estático para que su ciclo de vida
         * no dependa del tiempo de vida de los objetos.
         * La función de este atributo es llevar un contador del atributo "_id"
         * que se asignará en el constructor y se autoincrementará automáticamente por cada
         * objeto heroe que se cree.
         */
        private static contadorId : number = 1;

        constructor(public id:number,public titulo : string, public compania : string, public imagen : string, public valoracionMedia : number){
            this.id = id;
            this.titulo = titulo;
            this.compania = compania;
            this.imagen = imagen;
            this.valoracionMedia = valoracionMedia;
        }


        public toString() : string{
                return `ID: ${this.id}, Titulo: ${this.titulo}, valoracionMedia: ${this.valoracionMedia}`
        }


}