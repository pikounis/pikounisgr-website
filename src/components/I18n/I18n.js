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
        timeOpen: 'Δευτέρα - Σάββατο, 8:00πμ - 2:00μμ',
        theNamePikounis: 'Tο όνομα Πικούνης αποτελεί ορόσημο για την αγορά φρέσκου ψαριού,' +
            ' αφού μας εμπιστεύονται τα καλύτερα εστιατόρια και ξενοδοχεία της Αθήνας.' +
            ' Επισκεφθείτε σήμερα κιόλας το κατάστημα μας στην Κηφισιά για να ανακαλύψετε' +
            ' ένα μοναδικό ψαράδικο και να απολαύσετε την τεράστια ποικιλία σε ψάρια,' +
            ' θαλασσινά και οστρακοειδή, ακόμη και στα πιο δυσεύρετα είδη.',
    },
    en: {
        address: 'Dionysou 70, Kifisia',
        home: 'Home',
        ourFish: 'Our Fish',
        gallery: 'Gallery',
        awards: 'Awards',
        ourClients: 'Our Clients',
        contact: 'Contact',
        timeOpen: 'Monday - Saturday, 8:00am - 2:00pm',
        theNamePikounis: 'The name Pikounis is the definition of fresh fish since the best restaurants ' +
            'and hotels of athens prefer us. Visit today our store in Kifisia to discover a unique store ' +
            'and the wide selection of fish, even the rare ones.',
    },
}

const I18n = createI18n(
    locales,
    translations,
);

export default I18n;
