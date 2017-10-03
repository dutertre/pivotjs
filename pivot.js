//Création d'un tableau à deux dimensions.
var tab = [ 
  ['00','01','02','03','04'],
  ['10','11','12','13','14'],
  ['20','21','22','23','24'],
  ['30','31','32','33','34']];

//Calcul du nombre de colonnes et de lignes dans le tableau créé.
var nbcol = tab.length
var nbrow = tab[0].length
console.log("Nombre de lignes : " + nbcol)
console.log("Nombre de colonnes : " + nbrow)
console.log(tab)

//Création d'un nouveau tableau vide du bon nombre de colonnes/lignes
var tabpivot=new Array(nbrow)
for (i=0; i <5; i++)
    tabpivot[i]=new Array(nbcol)

//Calcul du nombre de colonnes et de lignes du nouveau tableau pour vérification
var nbcolp = tabpivot.length
var nbrowp = tabpivot[0].length
console.log("Nombre de lignes : " + nbcolp)
console.log("Nombre de colonnes : " + nbrowp)

//Remplissage du tableau pour un pivot.
for (var k = 0; k < nbcol; k++) {
	for (var l = 0; l < nbrow; l++) {
		tabpivot[l][k] = tab[k][l]
}
}

console.log(tabpivot)
document.getElementById("tab").innerHTML += tab
document.getElementById("tabpivot").innerHTML += tabpivot