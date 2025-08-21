
  //vetores de objeto


const Cafe = [

  { id:"Nenhum", nome:"Nenhum", preco: 0 },
  { id:"cafe_comum", nome: "Cafe comum", preco: 3.00 },
  { id:"descafeinado", nome: "Cafe descafeinado", preco: 6.50 },
  { id:"cafeina_adicionada", nome: "Cafe com cafeína adicionada", preco: 10.00 },
  { id:"Cafe_leite", nome: "Cafe com leite", preco: 4.50 },
  { id:"Cafe_expresso", nome: "Cafe expresso", preco: 5.50 },
  { id:"Cafe_instantaneo", nome: "Cafe instantaneo", preco: 4.00 },
  { id:"Cafe_gourmet", nome:"Cafe gourmet", preco: 10.00 },
  { id:"Capuccino", nome:"Capuccino", preco: 8.00 },
  { id:"Mocha", nome:"Mocha", preco: 10.00 }
  
];

const Chas = [
  { id:"Nenhum", nome:"Nenhum", preco: 0 },
  { id:"Cha_preto", nome:"Cha preto", preco: 7.50 },
  { id:"Cha_verde", nome:"Cha verde", preco: 8.00 },
  { id:"Cha_branco", nome:"Cha branco", preco: 10.00 },
  { id:"Cha_oolong", nome:"Cha oolong", preco: 12.99 },
  { id:"Cha_matcha", nome:"Cha matcha", preco: 12.00 }

];

const temperatura = [
  { id:"Quente", nome:"Quente", preco: 0 },
  { id:"Morno", nome:"Morno", preco: 0 },
  { id:"Gelado", nome:"Gelado", preco: 0 },
];

const Copos = [
  { id:"copo_50ml", nome: "copo 50 ml", preco: 11.99 },
  {id:"copo_100ml", nome: "Copo 100ml ", preco: 15.90 },
  { id:"copo_200ml", nome: "copo 200ml", preco: 20.00 },
  { id:"copo_300ml", nome: "copo 300ml", preco: 25.00  },
  { id:"copo_440", nome: "copo 440ml", preco: 30.00 },
  { id:"copo_500ml", nome: "copo 500ml", preco: 35.00 },
  ];

  const Xicaras = [
    { id:"xicara_100ml", nome: " copo 100ml", preco: 5.00 },
    { id:"xicara_180ml", nome: "copo 180ml", preco: 8.00 },
    { id:"xicara_200ml", nome: "copo 200ml", preco: 10.00 },
    { id:"xicara_250ml", nome: "copo 250ml", preco: 13.00 },
    { id:"xicara_325ml", nome: "copo 325ml", preco: 16.00 },
  ];

  const Chocolate = [
    { id:"Chocolate_leite", nome:"Chocolate ao leite", preco: 4.50 },
    { id:"Chocolate_branco", nome:"Chocolate branco", preco: 5.25 },
    { id:"Chocolate_amargo", nome:"Chocolate amargo", preco: 5.25 },
    { id:"Chocolate_pistache", nome:"Chocolate de pistache", preco: 6.50 },
  
  ];

  const acucar= [
    { id:"acucar_cristal", nome: "acucar cristal", preco: 1.50 },
    { id:"acucar_demera", nome: "acucar demera", preco: 2.00 },
    { id:"acucar_mascavo", nome: "acucar mascavo", preco: 2.50 }
  ];  

  const caldas=[
    { id:"calda_caramelo", nome: "calda de caramelo", preco: 4.00 },
    { id:"calda_chocolate", nome: "calda de chocolate", preco: 4.50 },
    { id:"calda_morango", nome: "calda de morango", preco: 4.00 },
    { id:"calda_pistache", nome: "calda de pistache", preco: 5.50 }

  ];
 
  const leites=[
    { id:"leite_integral", nome: "leite integral", preco: 3.00 },
    { id:"leite_desnatado", nome: "leite desnatado", preco: 3.00 },
    { id:"leite__amendoas", nome: "leite de amendoas", preco: 5.00 }

  ];



function preencherOpcoes(){
//funções pra aparecer por trás 
 const selectCafe = document.getElementById("Cafe");
 for (let i = 0; i < Cafe.length; i++){
  const item = Cafe[i];
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nome;
  selectCafe.appendChild(option);
 }

//funções pra aparecer por trás 
 const selecttemperatura = document.getElementById("temperatura");
 for (let i = 0; i < temperatura.length; i++){
  const item = temperatura[i];
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nome;
  selecttemperatura.appendChild(option);
 }
 //funções pra aparecer por trás 
 const selectChas = document.getElementById("Chas");
 for (let i = 0; i < Chas.length; i++){
  const item = Chas[i];
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nome;
  selectChas.appendChild(option);
 }





//funções pra aparecer por trás 
 const selectCopos = document.getElementById("Copos");
 for (let i = 0; i < Copos.length; i++){
  const item = Copos[i];
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.nome;
  selectCopos.appendChild(option);
 }
}

preencherOpcoes();



