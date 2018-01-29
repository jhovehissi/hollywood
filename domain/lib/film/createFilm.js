module.exports = require('cqrs-domain').defineCommand({
  name: 'createFilm'
}, function (data, aggregate) {
  aggregate.apply('filmCreated', data);
});
