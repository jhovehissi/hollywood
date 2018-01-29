module.exports = require('cqrs-domain').defineEvent({
  name: 'titleChanged'
},
function (data, aggregate) {
  aggregate.set(data);
});
