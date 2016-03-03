'use strict'

import { EventEmitter } from 'events'
import assign from 'object-assign'
import Dispatcher from '../dispatcher/Dispatcher'

let services = []

let Store = assign({}, EventEmitter.prototype, {

    emitChange: function() {
        this.emit('changed')
    },

    addListener: function(callback) {
        this.on('changed', callback)
    },

    removeListener: function(callback) {
        this.removeListener('changed', callback)
    },

    loadServicesFromServer: function() {
        Store.emitChange()
    },

    getServices: function() {
        return services
    }
})

Dispatcher.register(function(action) {
  switch (action.action) {
    case 'LOAD':
      Store.loadServicesFromServer()
      break
  }
})

export default Store
