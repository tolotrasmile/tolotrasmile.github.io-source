import React from 'react'
import Hero from './components/Hero'
import ProjectList from './components/ProjectList'
import ScrollToTop from './components/scroll/ScrollToTop'
import 'whatwg-fetch'

// 'hyper-one-light', 'hyperterm-overlay', 'hyperline', 'hyperlinks', 'hypercwd', 'hyperterm-themed-scrollbar', 'hyperclean', 'hyperterm-clicky', 'hyperterm-alternatescroll', 'hyperborder', 'hyperminimal', 'hyper-search', 'hyper-blink'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { scrollVisibility: false }
  }

  render () {
    return (
      <div className='App'>
        <Hero />
        <ProjectList />
        <ScrollToTop visibility={this.state.scrollVisibility} delay='16.66' step='50' />
      </div>
    )
  }

  componentDidMount () {
    window.addEventListener('scroll', () => {
      let height = document.documentElement.clientHeight
      this.setState({scrollVisibility: (window.pageYOffset > height)})
    })
    fetch('https://api.github.com/users/tolotrasmile/repos')
      .then(response => response.json())
      .then(console.log)
      .catch(console.error)
  }
}

export default App
