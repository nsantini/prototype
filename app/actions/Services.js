'use strict'

import Dispatcher from '../dispatcher/Dispatcher'

class Actions {
  loadServices: function() {
    Dispatcher.dispatch({
      action: 'LOAD'
    })
  }
}

export default Actions
