import React from 'react'
import classNames from 'classnames'
import './scroll.css'

class ScrollToTop extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      intervalId: 0
    }
  }

  scrollStep () {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId)
    }
    window.scroll(0, window.pageYOffset - this.props.step)
  }

  scrollToTop () {
    let intervalId = setInterval(() => this.scrollStep(), this.props.delay)
    this.setState({ intervalId: intervalId })
  }

  render () {
    return <button className={classNames('scroll_top', { 'is-visible': this.props.visibility })}
      onClick={() => this.scrollToTop()}>↑</button>
  }
}

export default ScrollToTop
