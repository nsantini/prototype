'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import ToolboxApp from 'react-toolbox/lib/app'
import TransferApp from './components/TransferApp.jsx'

ReactDOM.render(
  <ToolboxApp>
    <TransferApp />
  </ToolboxApp>
, document.getElementById('app'))
