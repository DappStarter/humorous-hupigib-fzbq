require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half problem forward tooth warrior ridge remember attitude idea enroll surge shield'; 
let testAccounts = [
"0xd0cb5978ab3e1ba9d49d23b9d5c34ac3242aaab25db5389d3fe029962061ae71",
"0x704e47c97e84d18a361113932bc570fbfa8aacc1bf0bbf6919cdd63a594362eb",
"0x0498287c6ed3ca098a5a1ba6418041e225fc16c7fd95dd543c3993837aa82586",
"0xfdfb82422a7238cb5553153cc30618ecdec3d3fae5444aed3284a10021e6d405",
"0xfa834bc0844414e0298cc6df92903e30003e2054733932353b9953908bf9040c",
"0xc51a9bdcdb5a3c1586cffe716759ba99629b15f0e31e5174f2229408821158dd",
"0x4773561738a3bdc6505fc0c997ae637afb03a678a82c64e60e4e229c9438a014",
"0xdda780398bf5f7e989a702da712344fc9d0e3eca5aba673ac94e48237ee84811",
"0x34f81fc9219bdf70e64a48ae020fefcff59371fd3bfda7da88a879b0e17ef099",
"0x25dc72c6417b0a57054cea145c0ea9b25e890706b0ac61d156e38cbe889938b2"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

