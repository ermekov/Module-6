var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// Перебираем массив имен
for (var i = 0; i < names.length; i++) {
  var name = names[i];

  // Проверяем первую букву имени
  if (name.charAt(0).toLowerCase() === 'j') {
    // Вызываем функцию goodbyeSpeaker для имен на 'J'/'j'
    goodbyeSpeaker.speak(name);
  } else {
    // Вызываем функцию helloSpeaker для остальных имен
    helloSpeaker.speak(name);
  }
}