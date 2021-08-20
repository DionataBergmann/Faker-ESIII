const faker = require("faker");

const datas = [];
const Letter = "D"

function populateData(amount) {

  for (let index = 0; index < amount; index++) {
    faker.locale = 'pt_BR';
    const obj = {

      name: faker.name.findName(),
      birthday: faker.date.between('1910','2019'),
      gender: faker.name.gender(),
      lastPurchaseDate: faker.date.past(1000),
      countPurchase: faker.datatype.number(20),

    };

    datas.push(obj);
  }

}
populateData(100);

//LISTANDO TODOS OS DADOS DE CLIENTES
console.log(datas); 

//LISTANDO DADOS DE CLIENTES CUJO NOME INICIA COM D
function filterByName(name) {

  return datas.filter((value) => value.name.startsWith(name[0]));
}
console.log('filterByName("D") :>> ', filterByName("D"));


// NÚMERO TOTAL DE REGISTROS ENCONTRADOS, INFORMANDO O CARACTER DESEJADO

 function filterByCaracter(name){

  caracterFilter = datas.filter(value => value.name.startsWith(name[0]));
  return caracterFilter.length
}
console.log(filterByCaracter(Letter));


//APENAS NOME DOS CLIENTES
function ListByName(name){
const nameClient = datas.map(value => value.name);
return nameClient;
}
console.log(ListByName());


//APENAS PRIMEIRO NOME DO CLIENTE
function byFirstName(name){
  
return firstNameClient = datas.map(value => value.name.split(" ")[0]);
}
console.log(byFirstName())

// APENAS PRIMEIRO NOME DO CLIENTE, INFORMANDO A LETRA INICIAL
function byFirstLetter(){
return firstLetter = datas.filter((data) => data.name[0] === Letter[0]).map((data) => data.name.split(' ')[0]);
}
console.log(byFisrtLetter())

// USUARIOS MAIORES DE IDADE
function adult(){
  const year = 2021
return datas.filter((data) => (year - parseInt(data.birthday.toString().split(' ')[3])) >= 18)

}
console.log(adult())

// PESQUISAR POR NOME
const Name = 'Dra'
function NameByList(name){
return datas.find(value => value.name.match(name));
}
console.log(NameByList(Name));

// TOTAL DE VENDAS REALIZADAS
function allPurchase(){
  return datas.reduce((count, data) => count + data.countPurchase, 0);
}
console.log(allPurchase())

// CLIENTES QUE NAO COMPRAM A MAIS DE UM ANO
function oldClient(){
const year = 2021
return datas.filter((data) => (year - parseInt(data.lastPurchaseDate.toString().split('-')[0].split(' ')[3])) > 1)

}
console.log(oldClient())

//CLIENTES QUE REALIZARAM MAIS DE 15 COMPRAS
function loyalClient(){
 return datas.filter((data) => data.countPurchase > 15);
}
console.log(loyalClient())