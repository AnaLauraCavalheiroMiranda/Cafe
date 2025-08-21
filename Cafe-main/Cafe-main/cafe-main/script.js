Terminar_pedido()
{
  //vetores de objeto


const Cafe = [

  { id:"cafe_comum", nome: "Cafe comum", preco: 1 },
  { id:"descafeinado", nome: "Cafe descafeinado", preco: 2 },
  { id:"cafeina_adicionada", nome: "Cafe com cafeína adicionada", preco: 3 },
  { id:"Café_leite", nome: "Cafe com leite", preco: 4 },
  { id:"Cafe_expresso", nome: "Cafe expresso", preco: 5 },
  { id:"Cafe_instantaneo", nome: "Cafe instantaneo", preco: 6 },
  { id:"Cafe_gourmet", nome:"Cafe gourmet", preco: 7 },
  { id:"Capuccino", nome:"Capuccino", preco: 8 },
  { id:"Mocha", nome:"Mocha", preco: 9 }
  
];

const Chas = [
  { id:"Cha_preto", nome:"Cha preto", preco: 9 },
  { id:"Cha_verde", nome:"Cha verde", preco: 12 },
  { id:"Cha_branco", nome:"Cha branco", preco: 9 },
  { id:"Cha_oolong", nome:"Cha oolong", preco: 23 },
  { id:"Cha_matcha", nome:"Cha matcha", preco: 20 },

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
    { id:"Chocolate_leite", nome:"Chocolate ao leite", preco: 8 },
    { id:"Chocolate_branco", nome:"Chocolate branco", preco: 19 },
    { id:"Chocolate_amargo", nome:"Chocolate amargo", preco: 22 },
    { id:"Chocolate_pistache", nome:"Chocolate de pistache", preco: 22 },
  
  ];

  const acucar= [
    { id:"acucar_cristal", nome: "acucar cristal", preco: 2 },
    { id:"acucar_demera", nome: "acucar demera", preco: 3 },
    { id:"acucar_mascavo", nome: "acucar mascavo", preco: 4 }
  ];  
}

preencherOpcoes()
{
//funções pra aparecer por trás 
 const selectCafe = documente.getElementById("Cafe");
 for (let i = 0; i < Cafe.length; i++)
  const item = Cafe[i];
  const options = document.createElement("option");
  options.value = item.id;
  option.textContent = item.nome;
  selectCafe.appendChild(option);
}
