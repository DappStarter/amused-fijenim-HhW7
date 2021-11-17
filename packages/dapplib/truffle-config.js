require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift rebel pizza erosion hover enter equal gift'; 
let testAccounts = [
"0x6382dd0f6b8f0aa1e5cf87417519a3ba3fcd3bbe41028f485e02bfaeea00e68f",
"0xc4a4e3fc19d6d45e7f652dbf36fb7e79c4c183bc95919eb55389872020c33d75",
"0x017dc707a5711e8daf0e2ccc7c680993384ec8bab57364517561a0c40053d721",
"0x34ba19499bb8c35a92fef583baaecce598ccf59c3d24d26b8d0f9e8e2e409d84",
"0xf2fa3ee08fab66d4e3c3a180673b07afc84c864c4fdb0de4e7954d17ad3edf30",
"0xfb7e1c0a7aca603b184dbc299848ec745df66a8b4907238360535dc12956cd59",
"0x9de1e01793f83644c5ce257154c014da2440ec29c72260f0084f191708f67337",
"0xca2998e531012c50231dfced7528eea98bac1fc5107fddd621536afd297b4899",
"0x7d312cbe6e897a42bdd7634e665b3264c02aa0310da6ed63d38d9279afcb03c9",
"0x51d9902caab81fc7e64b325e1ffeec14a69edd4de36cc3a5e95f1a80c303bc58"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

