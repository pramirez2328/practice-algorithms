const age = 46;

const sayAge = () => {
  const inner = () => {
    const deepInner = () => {
      if (1 + 1 === 2) {
        console.log(age);
      }
    };
    deepInner();
  };
  inner();
};

sayAge(); // 46

class Person {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    const deepInner = () => {
      console.log('inner');
      console.log(this.name);
    };
    deepInner();
  }
}

const person = new Person('John');
person.sayName();

//why the this is working in the class?
// because arrow functions do not have their own this, they inherit it from the parent scope
// in this case, the parent scope is the class

const obj = {
  name: 'Pedro',
  sayName: () => {
    const deepInner = () => {
      console.log('inner2');
      console.log(this.name);
    };
    deepInner();
  },
};

obj.sayName(); // undefined

// why is undefined?
// because arrow functions do not have their own this, they inherit it from the parent scope
// in this case, the parent scope is the global scope
