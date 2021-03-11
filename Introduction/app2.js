let count = 0;

function render () {
  const title2 = React.createElement('h1', {},
    'Hello world',
    React.createElement('span', {}, count)
  );

  ReactDOM.render(title2, document.querySelector('#app2'));
}

render();

window.setInterval(() => {
  count++;
  render();
}, 1000);

// Ici seulement le contenu du span est modifié (vérifiabble avec la console et le survol jaune modifivation du DOM)
// si on avait utilisé inner.HTML tous les éléments parents auraient été modifié