// On créer un élément avec React
// @param1: nom du tag
// @param2: options
// @param3: enfant(s) text ou autre élément React
const title = React.createElement('h1', {}, 'Hello world');

// React envoie un objet javascript avec des propriétés
// par exemple props, type, ...
// checker ce que renvoie le console.log
console.log(title);

// C'est avec ReactDOM qu'on envoie notre élément crée avec React sur la vue
// @param1: nom élément
// @param2: noeud sur lequel appliqué le rendu
// Attention déconseillé de le mettre sur document.body c'est pour ça qu'on encapsule toujours dans une div ('#app' par exemple)
ReactDOM.render(title, document.querySelector('#app'));

// Ici on utilise du React pur mais en génral on utilise du JSX