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
        awards: 'Διακρίσεις',
        whoWeAre: 'Ποιοι είμαστε',
        contact: 'Επικοινωνία',
        timeOpen: 'Δευτέρα - Σάββατο, 8:00πμ - 3:00μμ',
        theNamePikounis: 'Tο όνομα Πικούνης αποτελεί ορόσημο για την αγορά φρέσκου ψαριού,' +
            ' αφού μας εμπιστεύονται τα καλύτερα εστιατόρια και ξενοδοχεία της Αθήνας.' +
            ' Επισκεφθείτε σήμερα κιόλας το κατάστημα μας στην Κηφισιά για να ανακαλύψετε' +
            ' ένα μοναδικό ψαράδικο και να απολαύσετε την τεράστια ποικιλία σε ψάρια,' +
            ' θαλασσινά και οστρακοειδή, ακόμη και στα πιο δυσεύρετα είδη. ' +
            'Ύστερα από εμπειρία δεκαετιών σας παρέχουμε τρόφιμα υψηλών προδιαγραφών. ' +
            'Η εταιρία μας φροντίζει για τη φρεσκάδα των τροφίμων χρησιμοποιώντας τόσο ' +
            'ξεχωριστούς χώρους συντήρησης ανά είδος όσο και ειδικά οχήματα μεταφοράς' +
            ' των προϊόντων.\n' +
            '\n',
        yachtSupplies: 'Τροφοδοσίες σκαφών',
        ys1: 'Απευθυνόμαστε σε ανθρώπους που αγαπούν τη θάλασσα και την ελευθερία που αυτή ' +
            'προσφέρει. Με μία παραγγελία ερχόμαστε στο κοντινότερο σημείο και τροφοδοτούμε ' +
            'το σκάφος σας με τα προϊόντα που επιθυμείτε.',
        ys2: 'Η ομορφία της θάλασσας είναι συνυφασμένη με τη γαλήνη και την ηρεμία. Όπου ' +
            'και αν βρίσκεστε θα σας παραδώσουμε μέσω delivery τα προϊόντα μας κι εσείς θα ' +
            'συνεχίσετε να απολαμβάνετε το ταξίδι σας.',
        ys3: 'Εγγυόμαστε 100% ποιότητα σε όλα μας τα προϊόντα εφόσον τηρούμε όλες τις ' +
            'νόμιμες διαδικασίες εμπορίας και διαχείρισης τροφίμων προκειμένου να ικανοποιούμε' +
            ' πλήρως τους ανθρώπους που μας εμπιστεύονται τόσες δεκαετίες.',
    },

    en: {
        address: 'Dionysou 70, Kifisia',
        home: 'Home',
        ourFish: 'Our Fish',
        gallery: 'Gallery',
        awards: 'Awards',
        whoWeAre: 'Who we are',
        contact: 'Contact',
        timeOpen: 'Monday - Saturday, 8:00am - 3:00pm',
        theNamePikounis: 'The name Pikounis is the definition of fresh fish since the best restaurants ' +
            'and hotels of athens prefer us. Visit today our store in Kifisia to discover a unique store ' +
            'and the wide selection of fish, even the rare ones.',
        yachtSupplies: 'Yacht Supplies',
    },
}

const I18n = createI18n(
    locales,
    translations,
);

export default I18n;
