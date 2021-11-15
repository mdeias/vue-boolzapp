const app = new Vue({

    el: '#app',

    data: {
        contatti: [
            {
                nome: 'Michele',
                avatar: 'img/avatar_1.jpg',
                visibile: true,
                messaggi: [
                    {
                        data: '10/05/2021 12:45:34',
                        testo: 'Ciao Miche, come vanno le cose?',
                        stato: 'sent'
                    },
                    {
                        data: '10/05/2021 12:45:34',
                        testo: 'Da quanto tempo! tutto bene tu?',
                        stato: 'sent'
                    },
                    {
                        data: '10/05/2021 12:45:34',
                        testo: 'Anche io non mi lamento, hai programmi per questo sabato?',
                        stato: 'sent'
                    }
                ]
            },
            {
                nome: 'Matteo',
                avatar: 'img/avatar_2.jpg',
                visibile: true,
                messaggi: [
                    {
                        data: '10/05/2021 12:45:34',
                        testo: 'Hai portato a spasso il cane?',
                        stato: 'sent'
                    },
                    {
                        data: '10/05/2021 12:45:34',
                        testo: 'Io oggi non posso occuparmene, sono a lavoro fino a tardi',
                        stato: 'sent'
                    },
                    {
                        data: '10/05/2021 12:45:34',
                        testo: 'Nessun problema, vado tra una decina di minuti, buon lavoro!',
                        stato: 'sent'
                    }
                ]
            },
            {
                nome: 'Stefano',
                avatar: 'img/avatar_3.jpg',
                visibile: true,
                messaggi: [
                    {
                        data: '10/05/2021 12:45:34',
                        testo: 'Ciao Stefano, come sta andando il progetto?',
                        stato: 'sent'
                    },
                    {
                        data: '10/05/2021 12:45:34',
                        testo: 'HBene, siamo agli sgoccioli!',
                        stato: 'sent'
                    },
                    {
                        data: '10/05/2021 12:45:34',
                        testo: 'Non sto più nella pelle!',
                        stato: 'sent'
                    }
                ]
            },
            {
                nome: 'Riccardo',
                avatar: 'img/avatar_4.jpg',
                visibile: true,
                messaggi: [
                    {
                        data: '10/05/2021 12:45:34',
                        testo: 'Ricordati di comprare il latte per la colazione',
                        stato: 'sent'
                    },
                    {
                        data: '10/05/2021 12:45:34',
                        testo: 'Ho già provveduto, ci vediamo per cena.',
                        stato: 'sent'
                    }
                ]
            },
            {
                nome: 'Fabio',
                avatar: 'img/avatar_5.jpg',
                visibile: true,
                messaggi: [
                    {
                        data: '10/05/2021 12:45:34',
                        testo: 'Ciao Fabio, buon compleanno!',
                        stato: 'sent'
                    },
                    {
                        data: '10/05/2021 12:45:34',
                        testo: 'Grazie mille!',
                        stato: 'sent'
                    }
                ]
            },
            {
                nome: 'Jessica',
                avatar: 'img/avatar_6.jpg',
                visibile: true,
                messaggi: [
                    {
                        data: '10/05/2021 12:45:34',
                        testo: 'Aperitivo alle 19?',
                        stato: 'sent'
                    },
                    {
                        data: '10/05/2021 12:45:34',
                        testo: 'Assolutamente si, ci vediamo nel solito posto?',
                        stato: 'sent'
                    },
                    {
                        data: '10/05/2021 12:45:34',
                        testo: 'Certamente!',
                        stato: 'sent'
                    }
                ]
            },
            {
                nome: 'Paolo',
                avatar: 'img/avatar_7.jpg',
                visibile: true,
                messaggi: [
                    {
                        data: '10/05/2021 12:45:34',
                        testo: 'Buonasera, le ho inviato via mail il preventivo del trilocale',
                        stato: 'sent'
                    },
                    {
                        data: '10/05/2021 12:45:34',
                        testo: 'La ringrazio, appena possibile darò uno sguardo, buona serata!',
                        stato: 'sent'
                    },
                    {
                        data: '10/05/2021 12:45:34',
                        testo: 'A presto.',
                        stato: 'sent'
                    }
                ]
            }
              
        ],

        activeMsg: 0

    },

    methods:{
        mostraMsg(index){
            console.log('indice chat', index);
            this.activeMsg = index;
        },
    }
})