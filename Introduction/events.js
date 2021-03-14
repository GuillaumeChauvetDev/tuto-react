class ManualIncrementer extends React.Component {
  constructor (props) {
    super(props);
    this.state = { n: 0 }
  }

  increment(e) {
    // les fonction evenement on par default un e
    // c'est un synthetic event
    console.log(e);
    e.preventDefault();
    this.setState((state, props) => ({n: state.n +1}));
  }

  render() {
    return <div>
      Valeur: {this.state.n}
      {/* propriété event: onClick, onChange, etc ... on lui passe une fonction en argument */}
      <button onClick={this.increment.bind(this)}>Start</button>
    </div>
  }
}

class ManualIncrementer2 extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      n: 0,
      timer: null
    }
  }

  componentDidMount() {
    this.play();
  }

  componentWillUnmount() {
    this.pause();
  }

  increment() {
    this.setState((state, props) => ({n: state.n + 1}));
  }

  play() {
    window.clearInterval(this.state.timer);
    this.setState({
      timer: window.setInterval(this.increment.bind(this), 1000)
    })
  }

  toggle() {
    return this.state.timer ? this.pause() : this.play();
  }

  label() {
    return this.state.timer ? 'Pause' : 'Start';
  }

  reset() {
    this.setState({n: 0});
  }

  pause() {
    window.clearInterval(this.state.timer);
    this.setState({
      timer: null
    })
  }

  

  render() {
    const method = this.state.timer ? this.pause : this.play;
    return <div>
      Valeur: {this.state.n}
      {/* propriété event: onClick, onChange, etc ... on lui passe une fonction en argument */}
      <button onClick={this.toggle.bind(this)}>{this.label()}</button>
      <button onClick={this.reset.bind(this)}>Reset</button>
    </div>
  }
}

function Home () {
  return <div>
    <ManualIncrementer />
    <ManualIncrementer2 />
  </div>
}

ReactDOM.render(<Home />, document.querySelector('#events'));