import Pusher from 'pusher';

var pusher = new Pusher({
  appId: process.env.APP_PUSHER_ID,
  key: process.env.APP_PUSHER_KEY,
  secret: process.env.APP_PUSHER_SECRET,
  cluster: process.env.APP_PUSHER_CLUSTER,
  useTLS: process.env.APP_PUSHER_ENCRYPTED
});

module.exports = pusher
