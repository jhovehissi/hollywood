module.exports = require('cqrs-domain').defineEvent({
  name: 'filmCreated'
},
function (data, aggregate) {
  aggregate.set(data);
});
