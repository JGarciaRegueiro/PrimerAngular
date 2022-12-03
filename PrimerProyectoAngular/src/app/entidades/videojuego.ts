//Clase que guarda los atributos de un videojuego
export class Videojuego{

        /**
         * Los atributos privados se poneen con "_" por convenio
         * Atributo privado que lleva el identificador únido del videojuego.
         * Sólo se permitirá acceder a él con el método get.
         */
        private _id : number = 0;
        

        /**
         * Atributo contador del ID del videojuego. Es estático para que su ciclo de vida
         * no dependa del tiempo de vida de los objetos.
         * La función de este atributo es llevar un contador del atributo "_id"
         * que se asignará en el constructor y se autoincrementará automáticamente por cada
         * objeto heroe que se cree.
         */
        private static contadorId : number = 1;


        constructor(public titulo : string, public compañia : string, public imagen : string, public valoracionMedia : number){
            this._id = Videojuego.contadorId++;
            this.titulo = titulo;
            this.compañia = compañia;
            this.imagen = imagen;
            this.valoracionMedia = valoracionMedia;
        }


        public get id() : number{
                return this._id;
        }

        public toString() : string{
                return `ID: ${this._id}, Titulo: ${this.titulo}, valoracionMedia: ${this.valoracionMedia}`
        }


}