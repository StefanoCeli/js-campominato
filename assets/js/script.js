// creo le variabili per le regole del gioco,la variabile num_bombe che sarà 16 e la variabile limit che sarà il range massimo dei numeri

var num_bombe=16;
var limit;

//creo una variabile flag dove vado a indicare quando il gioco termina e un array vuoto per i tentativi del giocatore

var gioco_finito=false;
var arr_tentativi=[];

//creo un prompt per chiedere la difficoltà all'utente e in base alla scelta sarà definito limit

var difficolta=parseInt(prompt('Inserisci da 0 a 2 per scegliere la difficoltà'))

//creo una condizione per verificare la scelta della difficolta,se l'utente non inserisce una condizione valida gioco_finito sarà true e non avvierà il codice

if(difficolta>2 || isNaN(difficolta)){
    alert('Ricarica la pagina e inserisci un numero da 0 a 2');
    gioco_finito=true;
}else if(difficolta==0){
    limit=100;
}else if(difficolta==1){
    limit=80;
}else{
    limit=50;
}

//console.log(numRandom(limit));

//creo una condizione che specifica che se gioco_finito=false parte il codice sennò non lo leggerà

if(!gioco_finito){
    //creo una variabile dove all'interno andrò a richiamare la funzione genBombs,come valore gli passo num_bombe e limit e infine salverò i dati che restituirà la funzione grazie al return della funzione

    var arr_bombe=genBombs(num_bombe,limit);


    console.log("Lista bombe: " + arr_bombe);


    //creo una variabile num_tentativi che sarà limit - num_bombe in modo che se l'utente raggiungerà questa lunghezza avrà vinto

    var num_tentativi= limit - num_bombe;


    //creo un ciclo dove finchè la flag sarà false continuerà a ciclare,all'interno del ciclo inserisco i vari controlli tramite delle condizioni dove l'utente se vince o se perde fa finire il ciclo

    while(!gioco_finito){

        //creo un prompt per l'utente dove vado a chiedere di inserire un numero tra 1-100

        var num_utente=parseInt(prompt('Inserisci un numero da 1 a ' + limit))

        //qui controllo se dentro l'array bombe è presente il numero inserito dall'utente,se si il gioco finisce e l'utente ha perso

        if(arr_bombe.includes(num_utente)){

            alert('Hai perso! i tuoi tentativi sono stati: ' + arr_tentativi.length + ' e il numero che ti ha fatto perdere è stato il ' + num_utente)
            gioco_finito=true;

            //qui controllo se l'utente inserisce un numero inferiore a 1,in caso apparià un alert

        }else if(num_utente<1){

            alert('Inserisci un numero superiore a 1')

            //qui controllo se l'utente inserisce un numero maggiore a limit,in caso apparirà un alert

        }else if(num_utente>limit){

            alert('Inserisci un numero minore di ' + limit)

            ////qui controllo se l'utente inserisce un numero già inserito ,in caso apparià un alert

        }else if(arr_tentativi.includes(num_utente)){

            alert('Numero già inserito')

            //qui invece se il numero dell'utente supera tutti i controlli verrà pushato all'interno dell'array arr_tentativi,all'interno inserisco una condizione dove se la lunghezza dell'array è uguale al numero dei tentativi l'utente ha vinto

        }else if(isNaN(num_utente)){

            alert('Non hai inserito un numero!')

        }else{

            arr_tentativi.push(num_utente);
            if(num_tentativi===arr_tentativi.length){

                alert('Complimenti hai vinto!')
                gioco_finito=true;
        
            }

        }
    }
    console.log("tentativi: " + arr_tentativi);

    //creo la funzione per generare l'array di bombe,come valore gli passo nBombs e max ,all'interno della funzione dichiaro una variabile array vuota che andrà a salvare i dati generati da un ciclo e a fine ciclo con il return avrò l'array completo.

    function genBombs(nBombs , max){

        
        var arr=[];

        while(arr.length<nBombs){

            //dichiaro una variabile per richiamare la funzione numRandom
            var bomb=numRandom(max);

            if(!(arr.includes(bomb))){

                arr.push(bomb)
            }
        }
        return arr;
    }

    //creo una funzione che genera un numero random da 1 a 100

    function numRandom(max){
        var rdm=Math.floor(Math.random() * max) +1;
        return rdm;
    }
}