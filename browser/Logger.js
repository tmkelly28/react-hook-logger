import React, { Component } from 'react';
import {
  logComponentDidMount,
  logComponentWillMount,
  logComponentWillUnmount,
  logComponentWillReceiveProps,
  logRender
} from './utils';

export default (InnerComponent, name) =>
  class extends Component {

    componentWillMount () {
      logComponentWillMount(name);
    }

    componentDidMount () {
      logComponentDidMount(name);
    }

    componentWillReceiveProps (nextProps) {
      logComponentWillReceiveProps(name, this.props, nextProps);
    }

    componentWillUnmount () {
      logComponentWillUnmount(name);
    }

    render () {
      logRender(name);
      return <InnerComponent {...this.props} />
    }
  }
