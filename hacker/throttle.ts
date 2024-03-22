// create a function called throttle that takes in a function that does the same thing, but can only execute once every 100 milliseconds. For example, if a function is called 4 times in a span of 100 milliseconds, it should only execute the first request, drop the next 3 requests, and wait until 100 milliseconds has passed since to another, use typescript.

// it has the following parameters: func: Function
// it returns a function
//sample input for testng a = 2 b = 3, t = 140 ouptut = 5
// function throttle(func: Function) {
//   let lastCalled = 0;
//   return function(...args: any) {
//     const now = Date.now();
//     if (now - lastCalled >= 100) {
//       lastCalled = now;
//       return func(...args);
//     }
//   };
// }

//----------------------------------------------------------------

// create a class Memoize that implements the memoization ability for any function. Its constructor should have the signature new Memoize(fn: Function, cacheSize: number). It implements an LRU cache and stores the cacheSize most recent result for any function. Memoize should have 3 methods getFunction: returns a memoized form of the function provided during initialization. isEntryPresent: returns true if the arguments are present in the cache, false otherwise. getValueFromCache: returns the value of the arguments if they are in the cache

// use typescript

//example
// const obj = new Memoize((sum, 2));
// const memoizedSum = obj.getFunction();
// memoizedSum(1,2); // returns 3
// memoizedSum(1,2); // returns 3
//obj.isEntyInCache(1,2); // returns true
//obj.getValueFromCache(1,2); // returns 3

class Memoize {
  private cache: Map<string, any> = new Map();
  private cacheSize: number;
  private fn: Function;
  constructor(fn: Function, cacheSize: number) {
    this.fn = fn;
    this.cacheSize = cacheSize;
  }
  getFunction() {
    return (...args: any) => {
      const key = JSON.stringify(args);
      if (this.cache.has(key)) {
        return this.cache.get(key);
      }
      const result = this.fn(...args);
      this.cache.set(key, result);
      if (this.cache.size > this.cacheSize) {
        const firstKey = this.cache.keys().next().value;
        this.cache.delete(firstKey);
      }
      return result;
    };
  }
  isEntryPresent(...args: any) {
    return this.cache.has(JSON.stringify(args));
  }
  getValueFromCache(...args: any) {
    return this.cache.get(JSON.stringify(args));
  }
}
