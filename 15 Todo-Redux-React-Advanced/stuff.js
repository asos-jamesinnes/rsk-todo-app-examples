export default class App extends Component{
  static contextType = IDXContext
  render(){
    const idx = this.context
    return (
      <div className='Synchronous App'>
        <h3>Synchronous</h3>
        <HeroCard id={idx} delay={100} />
        <HeroCard id={idx + 1} delay={100} />
        <HeroCard id={idx + 2} delay={100} />
        </div>
    )
  }
}

class HeroCard extends Component {
  state = null;
  componentDidMount(){
    getInfo(this.props).ten(x=> this.setState(x))
  }


  render() {
    if (!this.state) return <Timer />
      return <Card {...this.state} />
    }
}

//above we have an application that either renders a card onto a page or it renders a loading icon while it waits. This is called synchronous react. This will show three loading icons even if the data loads almost instantly and the ui may jump around based on loading.
