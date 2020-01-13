import Pusher from '../Services/Pusher';
export class Notification {
  sendMessager(to, channel, messager) {
    return Pusher.trigger(to, channel, messager);
  }
}
