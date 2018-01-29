module.exports = require('cqrs-domain').defineCommand({
  name: 'deleteFilm'
}, function (data, aggregate) {
  aggregate.apply('filmDeleted', data);
});
