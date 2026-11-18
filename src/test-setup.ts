// Node >= 25 expõe um `localStorage` global experimental (sem métodos quando não há
// --localstorage-file) que encobre o do jsdom. Garante um Storage em memória nos testes.
if (typeof globalThis.localStorage?.clear !== 'function') {
  const dados = new Map<string, string>();
  const storage: Storage = {
    get length() {
      return dados.size;
    },
    clear: () => dados.clear(),
    getItem: (k) => dados.get(k) ?? null,
    key: (i) => [...dados.keys()][i] ?? null,
    removeItem: (k) => void dados.delete(k),
    setItem: (k, v) => void dados.set(k, String(v)),
  };
  Object.defineProperty(globalThis, 'localStorage', { value: storage, configurable: true });
}
