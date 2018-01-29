module.exports = require('cqrs-domain').defineAggregate({
  name : 'film',
  defaultCommandPayload : 'payload',
  defaultEventPayload : 'payload'
});
