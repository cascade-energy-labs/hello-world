// see http://helloworldcollection.de/#Human
const phrase = {
    en: "Hello world!",
    es: "¡Hola mundo!"
};

module.exports = language => phrase[language || "en"] || phrase.en;
