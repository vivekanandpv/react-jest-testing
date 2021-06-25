function foo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(34);
    }, 2000);
  });
}

function bar() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('oops!'));
    }, 2000);
  });
}

describe('Asynchronous test should', () => {
  it('resolve the promise in callback', () => {
    const promise = Promise.resolve(100);
    return promise.then((result) => {
      expect(result).toBe(100);
    });
  });

  it('resolve the promise with matcher', () => {
    const promise = Promise.resolve(100);
    expect(promise).resolves.toBe(100);
  });

  it('catch the rejected promise', () => {
    const promise = Promise.reject(new Error('oops!'));
    expect(promise).rejects.toThrow('oops!');
  });

  it('can work with passing async test', async () => {
    try {
      const result = await foo();
      expect(result).toBe(34);
    } catch (e) {}
  });

  it('can work with failing async test', async () => {
    try {
      const result = await foo();
    } catch (e) {
      expect(e).toMatch('oops!');
    }
  });
});
