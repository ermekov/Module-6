(function (window) {
  // Создаем объект helloSpeaker
  var helloSpeaker = {};

  // Добавляем метод speak, который выводит "Hello" и имя
  helloSpeaker.speak = function (name) {
    console.log("Hello " + name);
  };

  // Делаем helloSpeaker доступным глобально
  window.helloSpeaker = helloSpeaker;
})(window);