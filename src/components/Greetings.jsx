import React from "react";

function greetingLanguage(language) {
    switch (language) {
      case 'en':
        return 'Hello';
      case 'de':
        return 'Hallo';
      case 'fr':
        return 'Bonjour';
      case 'es':
        return 'Hola';

      default: 
      return "Hello";
    }
}


function Greetings({lang, children}) {
    return (
        <p>
            {greetingLanguage(lang)} {children}
        </p>
    )
}

export default Greetings