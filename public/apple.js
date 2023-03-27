// app.js

require(['myModule', 'myOtherModule'], function (myModule, myOtherModule) {
  myModule.sayHello();
  myOtherModule.publicFunction();
});
  