class Animal {
    public tipo: string;
    public name: string;
    constructor(tipo: string, name: string) {
      this.tipo = tipo;
      this.name = name;
    }
    public makeSound(): void {
      if (this.tipo=="Perro")
      console.log ('wuff wuff\n');
      else if (this.tipo=="Gato")
      console.log('meow meow\n');

    }
   }
 
   let minino: Animal = new Animal('Gato','Pocky');
   console.log(minino);
   minino.makeSound(); // -> meow meow
   let firulais: Animal = new Animal('Perro','Pocky');
   console.log(firulais);
   firulais.makeSound(); // -> wuff wuff
   