// 1. Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

// var tipoBici = [
//     {
//         nome : 'scott',
//         peso : 7
//     },
//     {
//         nome : 'ktm',
//         peso : 10
//     },
//     {
//         nome : 'bianchi',
//         peso : 5
//     }
// ];


// var pesoMin = tipoBici[0];

// for(var i = 1; i < tipoBici.length; i++){
//     if(tipoBici[i].peso < pesoMin.peso){
//         pesoMin = tipoBici[i];
//     }
// }

// console.log(pesoMin);

// 2. Crea un array di 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

// var zucchine = [
//     {
//         nome : 'Varietà1',
//         peso : '1',
//         lunghezza : '12' 
//     },
//     {
//          nome : 'Varietà2',
//          peso : '0.8',
//          lunghezza : '12' 
//     },
//     {
//          nome : 'Varietà3',
//          peso : '0.5',
//          lunghezza : '10' 
//     },
//     {
//          nome : 'Varietà4',
//          peso : '0.3',
//          lunghezza : '7' 
//     },
//     {
//          nome : 'Varietà5',
//          peso : '0.2',
//          lunghezza : '5' 
//     },
//     {
//          nome : 'Varietà6',
//          peso : '0.5',
//          lunghezza : '8' 
//     },
//     {
//          nome : 'Varietà7',
//          peso : '0.9',
//          lunghezza : '9' 
//     },
//     {
//          nome : 'Varietà8',
//          peso : '2',
//          lunghezza : '15' 
//     },
//     {
//          nome : 'Varietà9',
//          peso : '0.1',
//          lunghezza : '5' 
//     },
//     {
//          nome : 'Varietà10',
//          peso : '0.3',
//          lunghezza : '7' 
//     },
    
//  ];
    
//  var sommaPeso = 0;
    
//  for (var i = 0; i < zucchine.length; i++){
//      console.log(zucchine[i].peso);
//      sommaPeso = sommaPeso + zucchine[i].peso;
        
//  }
//  console.log(sommaPeso);

 //3. Crea un array di 10 oggetti che rappresentano una zucchina.
 
 var zucchine = [
    {
        nome : 'Varietà1',
        peso : '1',
        lunghezza : '12' 
    },
    {
         nome : 'Varietà2',
         peso : '0.8',
         lunghezza : '22' 
    },
    {
         nome : 'Varietà3',
         peso : '0.5',
         lunghezza : '20' 
    },
    {
         nome : 'Varietà4',
         peso : '0.3',
         lunghezza : '17' 
    },
    {
         nome : 'Varietà5',
         peso : '0.2',
         lunghezza : '15' 
    },
    {
         nome : 'Varietà6',
         peso : '0.5',
         lunghezza : '8' 
    },
    {
         nome : 'Varietà7',
         peso : '0.9',
         lunghezza : '9' 
    },
    {
         nome : 'Varietà8',
         peso : '2',
         lunghezza : '15' 
    },
    {
         nome : 'Varietà9',
         peso : '0.1',
         lunghezza : '5' 
    },
    {
         nome : 'Varietà10',
         peso : '0.3',
         lunghezza : '7' 
    },
    
 ];

 for (var key in zucchine) {
    console.log(zucchine[key]);
    
}

 //Dividi in due array separati le zucchine che misurano meno o più di 15cm. 

 var corte = [];

 var lunghe = [];



for (var i = 0; i < zucchine.length; i++) {
    if (zucchine[i].lunghezza < 15){
        corte.push(zucchine[i])
        
    }else if (zucchine[i].lunghezza >= 15){
        lunghe.push(zucchine[i])
    }

}
console.log(corte);
console.log(lunghe);

 //Infine stampa separatamente quanto pesano i due gruppi di zucchine

var sommaPesoCorte = 0;

var sommaPesoLunghe = 0;

for ( var i = 0; i < corte.length; i++ ){
    console.log(corte[i].peso);
    sommaPesoCorte = sommaPesoCorte + corte[i].peso;
    
}

console.log(sommaPesoCorte)

for ( var i = 0; i < lunghe.length; i++ ){
    console.log(lunghe[i].peso);
    sommaPesoLunghe = sommaPesoLunghe + lunghe[i].peso;
    
}

console.log(sommaPesoLunghe)

