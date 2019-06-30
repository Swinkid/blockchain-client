import eckey from 'ec-key';

const PUBLIC_KEY_STRING = 'PublicKey';
const PRIVATE_KEY_STRING = 'PrivateKey';

export default {
    reset(){
        this.deletePublicKey();
        this.deletePrivateKey();
    },
    savePublicKey(publicKey){
        localStorage.setItem(PUBLIC_KEY_STRING, publicKey);
    },
    savePrivateKey(privateKey){
        localStorage.setItem(PRIVATE_KEY_STRING, privateKey);
    },
    getPublicKey(){
      return localStorage.getItem(PUBLIC_KEY_STRING);
    },
    getPrivateKey(){
      return localStorage.getItem(PRIVATE_KEY_STRING)
    },
    deletePublicKey(){
        localStorage.removeItem(PUBLIC_KEY_STRING);
    },
    deletePrivateKey(){
        localStorage.removeItem(PRIVATE_KEY_STRING);
    },
    isKeyPairValid(publicKey, privateKey){
        //TODO
        var key = new ECKey('','');
    },
    isPublicKeyValid(publicKey) {
        //TODO
        return true;
    },
    isPrivateKeyValid(privateKey){
        //TODO
    }
}
