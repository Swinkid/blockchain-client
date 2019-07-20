import eckey from 'ec-key';

const PRIVATE_KEY_STRING = 'PrivateKey';

export default {
    reset(){
        this.deletePrivateKey();
    },
    savePrivateKey(privateKey){
        localStorage.setItem(PRIVATE_KEY_STRING, privateKey);
    },
    getPrivateKey(){
      return localStorage.getItem(PRIVATE_KEY_STRING)
    },
    deletePrivateKey(){
        localStorage.removeItem(PRIVATE_KEY_STRING);
    },
    isPrivateKeyValid(privateKey){
        //TODO
    },
    isPrivateKeySet(){
        return !!this.getPrivateKey();
    }
}
