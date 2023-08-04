async function sayHello(name, language) {
  let greeting = "";
  switch (language) {
    case 'en':
      greeting = `Hello, ${name}`;
      break;
    case 'fr':
      greeting = `Bonjour, ${name}`;
      break;
    case 'it':
      greeting = `Ciao, ${name}`;
      break;
    case 'kr':
      greeting = `Annyeonghaseyo, ${name}`;
      break;
    default:
      greeting = `Chao, ${name}`;
  }
  return new Promise((resolve) => {
    setTimeout(() => resolve(greeting), 1000);
  });
}

function hello() {
  const name = document.querySelector('#name').value;
  const lang = document.querySelector('#lang').value;
  sayHello(name, lang).then((greeting) => document.querySelector('#result').innerHTML = greeting);
}
