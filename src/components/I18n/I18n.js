/* eslint-disable */

import { createI18n } from 'react-router-i18n';

// Array of supported locales
// The first in the array is treated as the default locale
const locales = ['el', 'en'];

// Dictionary of translations
const translations = {
    el: {
        address: 'Διονύσου 70, Κηφισιά',
        home: 'Αρχική',
        ourFish: 'τα ψαρια μας',
        gallery: 'Φωτογραφίες',
        awards: 'Βραβεία',
        ourClients: 'Συνεργάτες',
        contact: 'Επικοινωνία',
    },
    en: {
        address: 'Dionysou 70, Kifisia',
        home: 'Home',
        ourFish: 'Our Fish',
        gallery: 'Gallery',
        awards: 'Awards',
        ourClients: 'Our Clients',
        contact: 'Contact',
    },
}

const I18n = createI18n(
    locales,
    translations,
);

export default I18n;
