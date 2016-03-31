var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher');

var _environs = [];

var EnvironStore = new Store(Dispatcher);

EnvironStore.all = function() {
  return _environs;
};

EnvironStore.__onDispatch = function(payload) {
  switch (payload.actionType){
    case "RECEIVE_ENVIRONS":
      resetEnvirons(payload.environs);
      EnvironStore.__emitChange();
      break;
  }
};

var resetEnvirons = function(environs) {
  _environs = environs;
};

module.exports = EnvironStore;
