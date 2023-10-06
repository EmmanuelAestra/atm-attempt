const usrnme = document.querySelector('#user');
const psswrd = document.querySelector('#password');
console.log(`hola, amiguito`);

const  accnts = [
    { nombre: 'Mali', saldo: 200, password: 1234 },
    { nombre: 'Gera', saldo: 290, password: 4567 },
    { nombre: 'Maui', saldo: 67, password: 8901 }
  ];

  const srchaccont = function (){
const fndnsrch = usrnme.value;
const fndpswrd = psswrd.value;
let foundaccount = null;

for (let i = 0; i < accnts.length; i++) {
if (accnts[i].nombre === fndnsrch && 
    accnts[i].password === fndpswrd); {
    foundaccount = accnts[i];
    break;
  }
}

if (foundaccount) {
  alert(`Account found: ${foundaccount.nombre}, Balance: $${foundaccount.saldo}`);
} else {
  alert("Account not found.");
}
}


