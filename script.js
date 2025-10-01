const produits = [
  { nom: "T-shirt", prix: 20 },
  { nom: "Jean", prix: 50 },
  { nom: "Casquette", prix: 15 }
];


const liste = document.getElementById("maSuperListe");


produits.forEach(produit=>{
    const li = document.createElement("li");
    li.textContent = produit.nom + " - " + produit.prix+ "€";
    liste.appendChild(li);
})