import axios from 'axios';

const NODE_URL_STRING = "NodeUrl";
const CANDIDATE_STRING = "Candidates";

export default {

    /**
     * Sets the node that the client will be pushing transactions too.
     * @param url
     */
    setNode(url){
        localStorage.setItem(NODE_URL_STRING, url);
    },

    /**
     * Deletes the setting from localstorage.
     * @param url
     */
    deleteNode(url){
        localStorage.removeItem(NODE_URL_STRING);
    },

    /**
     * Gets the URL of the node transactions are being sent too.
     */
    getNode(){
        if(localStorage.getItem(NODE_URL_STRING) === null){
            return "";
        } else {
            return localStorage.getItem(NODE_URL_STRING);
        }
    },

    /**
     * Returns true if the Node URL is set.
     * @returns {boolean}
     */
    isNodeSet(){
        return !!this.getNode();
    },

    getCandidates(){
        let candidates = JSON.parse(localStorage.getItem(CANDIDATE_STRING));


        if(candidates === null || candidates === undefined){
            return [];
        } else {
            return candidates;
        }

    },

    saveCandidates(candidates){
        localStorage.setItem(CANDIDATE_STRING, JSON.stringify(candidates));
    },

    addCandidate(name, publicKey){
        let candidates = this.getCandidates();

        candidates.push({
            name: name,
            key: publicKey
        });

        this.saveCandidates(candidates);
    },

    countCandidates(){
        return this.getCandidates().length;
    }

}
