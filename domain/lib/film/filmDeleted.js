module.exports = require('cqrs-domain').defineEvent({
  name: 'filmDeleted'
},
function (data, aggregate) {
  aggregate.destroy();
});
