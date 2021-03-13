// On va utliser le state
class Clock extends React.Component {
  // pour utiliser le state il faut créer un constructor
  constructor (props) {
    super(props);
    // on définit l'état du composant
    // c'est un objet
    this.state = {
      date: new Date()
    }
    this.timer = null;
  }

  // Cycle de vie: LifeCycle
  // détermine quand un composant est monté
  componentDidMount() {
    this.timer = window.setInterval(this.tick.bind(this), 1000);
  }
  
  // détermine quand un composant est supprimé
  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  tick () {
    // pour modifier le state on utilise la fonction setState
    this.setState({date: new Date()});
  }

  render () {
    return <div>
      Il est {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}
    </div>
  }
}

class Incrementer extends React.Component {

  constructor (props) {
    super(props);
    this.state = { count: this.props.start }
    this.timer = null;
  }

  componentDidMount() {
    this.timer = window.setInterval(this.addOne.bind(this), 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  addOne () {
    // mettre une function dans le setState (bonne pratique si plusieur setState lancé en même temps)
    this.setState(function (state, props) {
      return {count: state.count + this.props.step}
    });
    // ou: this.setState((state, props) => {count: state.count + 1}});
  }

  render() {
    return <div>
      Incrémenteur
      {this.state.count}
    </div>
  }
}

// On peut définir des valeurs par défaut pour les props
Incrementer.defaultProps = {
  start: 0,
  step: 1
}

function Home () {
  return <div>
    <Clock />
    <Incrementer start={10} />
    <Incrementer start={100} step={10} />
  </div>
}

ReactDOM.render(<Home />, document.querySelector('#app9'));
