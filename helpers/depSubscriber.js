export class DepSubscriber {
  constructor() {
    this.subscribers = [];
  }

  depend(target) {
    if (target && !this.subscribers.includes(target)) {
      this.subscribers.push(target);
    }
  }

  notify() {
    this.subscribers.forEach((sub) => sub());
  }
}
