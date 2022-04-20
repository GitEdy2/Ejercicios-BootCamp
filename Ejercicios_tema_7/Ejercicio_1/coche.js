function Coche(peso,potencia,marca) {
    this.peso = peso;
    this.potencia = potencia;
    this.marca = marca;
    console.log(`El vehiculo pesa ${peso} kg. Tiene ${potencia} caballos de fuerza y pertence a la marca ${marca}`);
}

let coche = new Coche(789, 36, "KIA");

module.export = {Coche};