// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

var tipoBici = [
    {
        nome : 'scott',
        peso : 7
    },
    {
        nome : 'ktm',
        peso : 10
    },
    {
        nome : 'bianchi',
        peso : 5
    }
];


var pesoMin = tipoBici[0];

for(var i = 1; i < tipoBici.length; i++){
    if(tipoBici[i].peso < pesoMin.peso){
        pesoMin = tipoBici[i];
    }
}

console.log(pesoMin);