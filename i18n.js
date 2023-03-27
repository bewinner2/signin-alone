const i18next = require('i18next');

i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        greeting: 'Hello, world!',
        farewell: 'Goodbye, world!'
      }
    },
    fr: {
      translation: {
        greeting: 'Bonjour, le monde!',
        farewell: 'Au revoir, le monde!'
      }
    }
  }
});

module.exports = i18next;
