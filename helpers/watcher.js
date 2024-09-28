export const watcher = (opts, f) => {
  opts.target = f;
  opts.target();
  opts.target = null;
};
