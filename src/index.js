import React from 'react'
let AnalyticsClient
const DefaultOnSSR = () => (<span></span>)

class Analytics extends React.Component { 

  constructor(...args) {
    super(...args)
    this.state = {
      canRender: false
    }
  }

  componentDidMount() {
    this.setState({canRender: true})
    if(window && !AnalyticsClient) {
      AnalyticsClient = require('./lib/segment')
      analytics.load(this.props.analytics_key)
      analytics.page()
    } else {
      analytics.load(this.props.analytics_key)
      analytics.page()
    }
  }

  render() {
    const { children, onSSR = <DefaultOnSSR /> } = this.props
    const { canRender } = this.state

    return canRender ? children : onSSR
  }
}

export default Analytics
