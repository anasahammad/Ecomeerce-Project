const myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this;
    }
  }
  
  // This will return [object Object] (the owner object)
  console.dir(myObject.fullName());