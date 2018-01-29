module.exports = require('cqrs-domain').defineCommand({
  name: 'changeTitle'
}, function (data, aggregate) {
  aggregate.apply('titleChanged', data);
});
