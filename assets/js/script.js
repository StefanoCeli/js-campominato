// creo le variabili per le regole del gioco,la variabile num_bombe che sarà 16 e la variabile limit che sarà 100

var num_bombe=16;
var limit=100;

//console.log(numRandom(limit));

//creo una variabile dove all'interno andrò a richiamare la funzione genBombs,come valore gli passo num_bombe e limit e infine salverò i dati che restituirà la funzione grazie al return della funzione

var arr_bombe=genBombs(num_bombe,limit);


//console.log(genBombs(num_bombe,limit))


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