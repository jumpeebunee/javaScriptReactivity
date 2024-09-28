import { DepSubscriber } from "./helpers/depSubscriber.js";
import { watcher } from "./helpers/watcher.js";

const mes = document.querySelector("#message");

const data = {
  name: "",
  lastname: "",
};

const opts = {
  target: null,
};

let fullname = "";

Object.keys(data).forEach((key) => {
  const dep = new DepSubscriber();

  let value = data[key];

  Object.defineProperty(data, key, {
    get() {
      dep.depend(opts.target);
      return value;
    },
    set(val) {
      value = val;
      dep.notify();
    },
  });
});

const computed = {
  getFullname() {
    fullname = data.name + " " + data.lastname;
    mes.textContent = fullname;
  },
};

watcher(opts, computed.getFullname);

document.querySelector("#firstname").addEventListener("input", (e) => {
  const value = e.target.value;
  data.name = value;
});

document.querySelector("#lastname").addEventListener("input", (e) => {
  const value = e.target.value;
  data.lastname = value;
});
