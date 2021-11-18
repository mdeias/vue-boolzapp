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
                        data: '10/05/2021 12:45',
                        testo: 'Ciao Miche, come vanno le cose?',
                        stato: 'sent'
                    },
                    {
                        data: '10/05/2021 12:48',
                        testo: 'Da quanto tempo! tutto bene tu?',
                        stato: 'recevied'
                    },
                    {
                        data: '10/05/2021 12:55',
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
                        data: '10/05/2021 10:05',
                        testo: 'Hai portato a spasso il cane?',
                        stato: 'recevied'
                    },
                    {
                        data: '10/05/2021 10:45',
                        testo: 'Io oggi non posso occuparmene, sono a lavoro fino a tardi',
                        stato: 'sent'
                    },
                    {
                        data: '10/05/2021 11:15',
                        testo: 'Nessun problema, vado tra una decina di minuti.!',
                        stato: 'recevied'
                    }
                ]
            },
            {
                nome: 'Stefano',
                avatar: 'img/avatar_3.jpg',
                visibile: true,
                messaggi: [
                    {
                        data: '10/05/2021 15:45',
                        testo: 'Ciao Stefano, come sta andando il progetto?',
                        stato: 'sent'
                    },
                    {
                        data: '10/05/2021 15:57',
                        testo: 'Bene, siamo agli sgoccioli!',
                        stato: 'recevied'
                    },
                    {
                        data: '10/05/2021 16:22',
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
                        data: '10/05/2021 18:05',
                        testo: 'Ricordati di comprare il latte per la colazione',
                        stato: 'sent'
                    },
                    {
                        data: '10/05/2021 19:45',
                        testo: 'Ho già provveduto, ci vediamo per cena.',
                        stato: 'recevied'
                    }
                ]
            },
            {
                nome: 'Fabio',
                avatar: 'img/avatar_5.jpg',
                visibile: true,
                messaggi: [
                    {
                        data: '10/05/2021 10:35',
                        testo: 'Ciao Fabio, buon compleanno!',
                        stato: 'sent'
                    },
                    {
                        data: '10/05/2021 11:42',
                        testo: 'Grazie mille!',
                        stato: 'recevied'
                    }
                ]
            },
            {
                nome: 'Jessica',
                avatar: 'img/avatar_6.jpg',
                visibile: true,
                messaggi: [
                    {
                        data: '10/05/2021 12:45',
                        testo: 'Aperitivo alle 19?',
                        stato: 'recevied'
                    },
                    {
                        data: '10/05/2021 12:49',
                        testo: 'Assolutamente si, ci vediamo nel solito posto?',
                        stato: 'sent'
                    },
                    {
                        data: '10/05/2021 12:58',
                        testo: 'Certamente!',
                        stato: 'recevied'
                    }
                ]
            },
            {
                nome: 'Paolo',
                avatar: 'img/avatar_7.jpg',
                visibile: true,
                messaggi: [
                    {
                        data: '10/05/2021 19:35',
                        testo: 'Buonasera, le ho inviato via mail il preventivo del trilocale',
                        stato: 'sent'
                    },
                    {
                        data: '10/05/2021 19:45',
                        testo: 'La ringrazio, appena possibile darò uno sguardo, buona serata!',
                        stato: 'recevied'
                    },
                    {
                        data: '10/05/2021 19:58',
                        testo: 'A presto.',
                        stato: 'sent'
                    }
                ]
            }
              
        ],

        activeUtente: 0,

        msgUtente: '',

        ricercaUtente: '',

        activeMsg: -1,

        ora: dayjs().format("HH:MM"),

        data: dayjs().format("DD/MM/YYYY")

    },

    methods:{
        // funzione che restituisce l'indice dell'array contatti
        mostraUtente(index){
            console.log('indice chat', index);
            this.activeUtente = index;
            this.activeMsg = -1;
        },
        // funzione che pusha il nuovo messaggio nell' oggetto dell'array selezionato e invia una risposta automatica
        pushMsg(){
            const newMsg = {
                    
                data: this.data + " " + this.ora,
                testo: this.msgUtente,
                stato: 'sent' 
            }

            this.contatti[this.activeUtente].messaggi.push(newMsg);
            this.msgUtente ='';

            const autoMsg = {
                data: this.data + " " + this.ora,
                testo: 'Ok',
                stato: 'recevied' 
            }

            setTimeout(() => {
                this.contatti[this.activeUtente].messaggi.push(autoMsg);
            }, 2000);

        },
        // funzione che filtra i contatti in base all'input dell'utente 
        filtraContatti(){

            for (const nomi in this.contatti) {
            
            if (this.contatti[nomi.toUpperCase()].nome.includes(this.ricercaUtente.toUpperCase())) {
                this.contatti[nomi].visibile = true;
             }else{         
                this.contatti[nomi].visibile = false;
             }
            }
                
        },
        // funzione che restituisce la proprietà testo dell'ultimo messaggio nell'array messaggi e ne limita la lunghezza
        ultimoMsg(index){
            let lastMsg = this.contatti[index].messaggi[this.contatti[index].messaggi.length - 1].testo;
            if (lastMsg.length > 30) {
                lastMsg = lastMsg.substr(0, 30)+"...";
            }
            return lastMsg;
        },
        //funzione che restituisce la proprietà data dell'ultimo messaggio nell'array messaggi
        ultimaData(index){
            let lastDate = this.contatti[index].messaggi[this.contatti[index].messaggi.length - 1].data;
           
            return lastDate;
        },

        // funzione che restituisce l'indice dell'array messaggi
        attivaMsg(index){
            this.activeMsg = index;
        },
        
        // funzione che rimuove il messaggio dall'array
        eliminaMsg(index){

            let selectMsg = this.contatti[this.activeUtente].messaggi;
        
            selectMsg.splice(index, 1);
            this.activeMsg = -1;
        }

    },

    
})