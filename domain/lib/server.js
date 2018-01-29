//
var msgbus = require('../../msgbus');

//configurate domain
var domain = require('cqrs-domain')({
    domainPath: __dirname + '',
    filmStore: {
        type: 'mongodb',
        host: 'mongodb://<jhovehissi>:<123456789>@ds117878.mlab.com:17878/hollywood',
        port: 27017,
        dbName: 'hollywood',
        filmsCollectionName: 'films',
        timeout: 10000,
        username: 'jhovehissi',
        password: '123456789'
    },
});

domain.defineCommand({
  id: 'id',
  name: 'command',
  aggregateId: 'payload.id',
  payload: 'payload',
  revision: 'head.revision'
});

domain.defineEvent({
  correlationId: 'commandId',
  id: 'id',
  name: 'event',
  aggregateId: 'payload.id',
  payload: 'payload',
  revision: 'head.revision'
});

domain.init(function(err) {

    if (err) {
        return console.log(err);
    }

    // on receiving a message (__=command__) from msgbus pass it to
    // the domain calling the handle function
    msgbus.onCommand(function(cmd) {
        console.log('\ndomain -- received command ' + cmd.command + ' from redis:');
        console.log(cmd);
        console.log('\n-> handle command ' + cmd.command);

        domain.handle(cmd);
    });

    // on receiving a message (__=event) from domain pass it to the msgbus
    domain.onEvent(function(evt) {
        console.log('domain: ' + evt.event);
        msgbus.emitEvent(evt);
    });

    console.log('Starting domain service');
});

console.log(domain);
