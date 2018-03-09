var person = {
   constructor: function(name,age gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
        return this;
   }
    greet: function () {
        console.log("hI, MY NAME IS" + this name);
    }
}

var person, anotherPerson, thirdPerson;

person = Obejct.create(person).constructor("Josh, 35, male");
anotherPerson = Obejct.create(person).constructor("Jessica, 28, female");
thirdPerson = Obejct.create(person).constructor("Bruce, 38, male");

console.log(person);
console.log(anotherPerson);
console.log(thirdPerson);

person.gret();
anotherPerson.greet();
thirdPerson(.greet );
