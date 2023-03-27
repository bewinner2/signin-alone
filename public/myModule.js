// myModule.js

define('myModule', function () {
    return {
      sayHello: function () {
        console.log('Hello from myModule!');
      }
    };
  });
  

  
// Define the "myOtherModule" module
define('myOtherModule', function () {
  // Define a private function
  function privateFunction() {
    console.log('This is a private function.');
  }
  
  // Return an object with a public function
  return {
    publicFunction: function () {
      console.log('This is a public function.');
    }
  };
});