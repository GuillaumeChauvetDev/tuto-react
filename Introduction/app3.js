let count2 = 0;

function numberFormat(n) {
  return n.toString().padStart(2, '0');
}

// Utilisation du JSX
// Même code que app2
function render2() {
  const title = <h1>
    Hello world <span>{ count }</span> -- JSX !
  </h1>

  ReactDOM.render(title, document.querySelector('#app3'));
}

// On peut passer des condition et des traitemetns en js à l'intérieur 
// null permet de ne rien envoyer
// on peut facilement lui passer des attributs: id, for className, ...
// qui corrspond aux options de React.createElement
function render3() {
  const title = <h1 id="title">
    Hello world <span>{ count2 % 2 ? numberFormat(count2) : null }</span> -- JSX !
  </h1>

  ReactDOM.render(title, document.querySelector('#app4'));
}

function render4() {
  const items = [
    'test 1',
    'test 2',
    'test 3'
  ]
  // On crée une list qui parcours le tableau en retournant un item à chaque fois
  // On aurait pu l'écrire directement dans le ul (souci de lisibilité)
  // Il faut toujours mettre des clefs aux item pour une meilleur performance au niveau de la manipulation du DOM
  const listItem = items.map((item, index) => <li key={index}>{ item }</li>);
  // Il faut qu'une seule racine pour avoir du JSX valide
  // Il faut toujours encapsuler dans une div ou un Fragment
  const title = <React.Fragment>
    <h1 id="title">Hello world !</h1>
    <ul>
      {listItem}
    </ul>
  </React.Fragment>

  ReactDOM.render(title, document.querySelector('#app5'));
}


render2();
render3();
render4();

window.setInterval(() => {
  count2++;
  render2();
  render3();
}, 1000);