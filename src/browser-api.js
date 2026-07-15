(() => {
  const isFirefox = typeof globalThis.browser !== 'undefined';
  const raw = isFirefox ? globalThis.browser : globalThis.chrome;

  const callbackCall = (fn, context, ...args) => new Promise((resolve, reject) => {
    fn.call(context, ...args, (result) => {
      const error = raw.runtime?.lastError;
      if (error) return reject(new Error(error.message));
      resolve(result);
    });
  });

  const call = (namespace, method, ...args) => {
    const target = raw?.[namespace];
    const fn = target?.[method];
    if (!fn) return Promise.reject(new Error(`${namespace}.${method} is unavailable`));
    return isFirefox ? fn.call(target, ...args) : callbackCall(fn, target, ...args);
  };

  const WrenchBrowser = {
    raw,
    isFirefox,
    storage: {
      get: (keys) => isFirefox ? raw.storage.local.get(keys) : callbackCall(raw.storage.local.get, raw.storage.local, keys),
      set: (value) => isFirefox ? raw.storage.local.set(value) : callbackCall(raw.storage.local.set, raw.storage.local, value),
      remove: (keys) => isFirefox ? raw.storage.local.remove(keys) : callbackCall(raw.storage.local.remove, raw.storage.local, keys)
    },
    tabs: {
      query: (queryInfo) => call('tabs', 'query', queryInfo),
      create: (createProperties) => call('tabs', 'create', createProperties)
    },
    bookmarks: {
      getTree: () => raw.bookmarks ? call('bookmarks', 'getTree') : Promise.resolve([]),
      remove: (id) => call('bookmarks', 'remove', id),
      removeTree: (id) => call('bookmarks', 'removeTree', id)
    },
    permissions: {
      request: (permissions) => call('permissions', 'request', permissions),
      contains: (permissions) => call('permissions', 'contains', permissions)
    },
    runtime: {
      sendMessage: (message) => call('runtime', 'sendMessage', message),
      getURL: (path) => raw.runtime.getURL(path)
    }
  };

  globalThis.WrenchBrowser = WrenchBrowser;
})();
