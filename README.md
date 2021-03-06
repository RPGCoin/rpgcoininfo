coininfo
========

JavaScript component for crypto currency specific information such as version numbers, DNS seeds, etc.
Works in Node.js and the browser.


Installation
------------

    npm i coininfo


Usage
-----

```js
var coininfo = require('coininfo')

console.dir(coininfo('LTC')) //use LTC-TEST for testnet
// =>
/*
{ versions:
   { public: 48,
     private: 176,
     scripthash: 5,
     bip32: { public: 27108450, private: 27106558 } } }
*/
```

Could also:

```js
var litecoin = coininfo.litecoin.main
var litecoinTest = coininfo.litecoin.test
```

Useful to use in conjunction with [coinkey](https://github.com/cryptocoinjs/coinkey) and [coinstring](https://github.com/cryptocoinjs/coinstring).


Want to Use With RPGcore or rpgcoinjs-lib?
-----------------------------------------

**rpgcoinjs-lib example:**

```js
var coininfo = require('coininfo')
var rpgcoin = coininfo.rpgcoin.main
var RPGcoinJSLib = rpgcoin.toRPGcoinJS()
```

**RPGcore example:**

```js
var coininfo = require('coininfo')
var rpgcoin = coininfo.rpgcoin.main
var RPGcoreLib = rpgcoin.toRPGcore()
```


Pull requests?
--------------

Follow the canonical example:

https://github.com/RPGCoin/rpgcoininfo/blob/master/lib/coins/rpg.js


License
-------

MIT
