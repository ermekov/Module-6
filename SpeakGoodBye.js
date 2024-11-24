(function (window) {
  // Создаем объект goodbyeSpeaker
  var goodbyeSpeaker = {};

  // Добавляем метод speak, который выводит "Goodbye" и имя
  goodbyeSpeaker.speak = function (name) {
    console.log("Goodbye " + name);
  };

  // Делаем goodbyeSpeaker доступным глобально
  window.goodbyeSpeaker = goodbyeSpeaker;
})(window);