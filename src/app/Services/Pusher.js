import Pusher from 'pusher';

var pusher = new Pusher({
  appId: 845107,
  key: '3f743a4b72fb3609a40b',
  secret: '9ca56d1560e39da94ae1',
  cluster: 'ap1',
  useTLS: true
});

module.exports = pusher
