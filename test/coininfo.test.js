var test = require('tape')
var ci = require('../')

test('+ coininfo()', function (t) {
  t.test('iterate all coins', function (t) {
    var coins = [
      'rpg', 'rpg-test'
    ]

    coins.forEach(function (c) {
      t.ok(ci(c).versions.scripthash, 'should return valid data for ' + c)
    })

    t.end()
  })

    t.test('should return bip32', function (t) {
      var v = ci('RPG-TEST').versions.bip32
      t.equal(v.public, 0x043587ce)
      t.equal(v.private, 0x04358396)
      t.end()
    })

    t.test('> when does not have bip32', function (t) {
      var v = ci('PPC').versions.bip32
      t.notok(v, 'should return null')
      t.end()
    })

    t.test('> when full formal coin name is passed', function (t) {
      t.ok(ci('rpgcoin'), 'should return coin info')
      t.end()
    })

    t.end()
  })

  t.test('> when coin not found', function (t) {
    var info = ci('XXX')
    t.equal(info, null, 'should return null')
    t.end()
  })

  t.test('> when accessing through property', function (t) {
    var rpgcoin = ci.rpgcoin
    t.equal(rpgcoin.main.versions.public, 0x3c)
    t.equal(rpgcoin.test.versions.public, 0x6f)
    t.end()
  })

  t.test('toRPGcoinJS()', function (t) {
    var rpgcoin = ci.rpgcoin.main
    var rjsRPGcoin = rpgcoin.toRPGcoinJS()
    t.equal(rjsRPGcoin.wif, 0x80, 'should return a compatible rpgcoinjs-lib')
    t.end()
  })

  t.test('toRPGcore()', function (t) {
    // should return a compatible Bitpay bitcore
    var rpgcoin = ci.rpgcoin.main
    var rjsRPGcore = rpgcoin.toRPGcore()
    t.equal(rjsRPGcore.privatekey, 0x80)
    t.equal(rjsRPGcore.networkMagic, 0x3b7ca3c7)
    t.true(rjsRPGcore.dnsSeeds.length > 0)
    t.end()
  })

  t.end()
})
