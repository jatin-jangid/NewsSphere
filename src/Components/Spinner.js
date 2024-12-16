import React, { Component } from 'react'
import { spinner as loading } from './assets'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} style={{height: '100px', width: '100px'}} alt="loading" />
      </div>
    )
  }
}
