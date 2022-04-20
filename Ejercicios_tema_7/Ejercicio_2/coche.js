function Coche(peso,potencia,marca) {
    this._peso = peso;
    this._potencia = potencia;
    this._marca = marca;
    console.log(`El vehiculo pesa ${peso} kg. Tiene ${potencia} caballos de fuerza y pertence a la marca ${marca}`);

    this.getPeso = function(){
        return this._peso;
    }
    
    this.setPeso = function(peso){
        this._peso = peso;
    }

    this.getPotencia = function(){
        return this._potencia;
    }

    this.setPotencia = function(potencia) {
        this._potencia = potencia;
    }

    this.getMarca = function(){
        return this._marca;
    }

    this.setMarca = function(marca){
        this._marca = marca;
    }
}

let coche = new Coche(789,36,"KIA");

coche.setMarca("FORD");
console.log(coche.getMarca());

module.export = {Coche};




