// Création d'un composant réutilisable
// Il peut prendre différents arguments (props)
// On utilise souvent la destructuration ici props => {name, age, ...} pour ensuite affiche {name} plutôt que {props.name}
// Plus lisible
function Welcome (props) {
  // affiche les props envoyés au composant
  console.log(props);
  return <h1>Hello {props.name} !</h1>
}

ReactDOM.render(<Welcome name="Jean" />, document.querySelector('#app6'));

// On a une prop par défault children pour récupére ce que l'on met à l'intérieur du composant et pouvoir l'afficher
function Welcome2 ({name, children}) {
  return <div>
    <h1>Hello {name} !</h1>
    <p>{children}</p>
  </div>
}

ReactDOM.render(<Welcome2 name="Jean">Comment ça va ? </Welcome2>, document.querySelector('#app7'));

// Autre manière de créer des composant la Class
// On doit l'étendre de React.Component 
class WelcomeClass extends React.Component {
  // les props sont passés au niveau du constructor
  // on peut les récupérer ensuite avec this.props

  // exemple de construcor: non obligatoire
  constructor (props) {
    // méthode super obligatoire pour essayer props
    super(props);
    console.log(props);
  }

  // function render obligatoire
  render() {
    return <div>
      <h1>Hello {this.props.name} !</h1>
      <p>{this.props.children}</p>
    </div>
  }
}

ReactDOM.render(<WelcomeClass name="Jean">Comment ça va ? </WelcomeClass>, document.querySelector('#app8'));
