import ECKey from 'ec-key';
import axios from 'axios';
import BlockchainService from '@/services/BlockchainService';

const PRIVATE_KEY_STRING = 'PrivateKey';

export default {

    /**
     * Resets local storage key state
     */
    reset(){
        this.deletePrivateKey();
    },

    /**
     * Saves a key string to localstorage
     * @param privateKey
     */
    savePrivateKey(privateKey){
        localStorage.setItem(PRIVATE_KEY_STRING, privateKey);
    },

    /**
     * Returns private key string from localstorage
     * @returns {string}
     */
    getPrivateKey(){
      return localStorage.getItem(PRIVATE_KEY_STRING)
    },

    /**
     * Deletes private key from localstorage
     */
    deletePrivateKey(){
        localStorage.removeItem(PRIVATE_KEY_STRING);
    },

    /**
     * Checks to see if the key is valid and can be used to vote.
     * @param privateKey
     */
    isKeyValid(privateKey){
       return new Promise((resolve) => {
           let key = new ECKey(privateKey, 'pkcs8');

           axios.post(`http://${BlockchainService.getNode()}/transaction/user`, {
               publicKey: key.asPublicECKey().toString('spki') //TODO
           }).then((result)=> {

               console.log(result);

               return resolve(result.data.valid === true);

           }).catch((error) => {
               return resolve(false);
           });
       });
    },
    /**
     * Check if private key is set
     * @returns {boolean}
     */
    isPrivateKeySet(){
        return !!this.getPrivateKey();
    }
}
