const createState = (value, onUpdate) => {
  const target = { value };

  const handler = {
    set(target, _, value) {
      target.value = value;
      onUpdate(target);
    },
  };

  return new Proxy(target, handler);
};

const init = () => {
  const render = (target) => {
    const input = document.querySelector("#input");
    const message = document.querySelector("#message");

    input.value = target.value;
    message.textContent = target.value;
  };

  const proxy = createState("", render);

  input.addEventListener("input", (e) => {
    proxy.value = e.target.value;
  });
};

window.addEventListener("load", init);
