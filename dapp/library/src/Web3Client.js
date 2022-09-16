import Web3 from 'web3'
import NFTContractBuild from './ABI.json';
let selectedAccount = undefined;
let nftContract;

export let isInitialized = false;
export const init = async () => {
   let provider = window.ethereum;

   if (typeof provider !== 'undefined') {

      provider
         .request({ method: 'eth_requestAccounts' })
         .then((accounts) => {
            selectedAccount = accounts[0];
            console.log(`Selected account is ${selectedAccount}`);
         })
         .catch((err) => {
            console.log(err);
            return;
         });
      window.ethereum.on('accountsChanged', function (accounts) {
         selectedAccount = accounts[0];
         console.log(`Selected account changed to ${selectedAccount}`);
      });
   }
   const web3 = new Web3(provider);
   await web3.eth.net.getId();
   nftContract = new web3.eth.Contract(NFTContractBuild.abi, NFTContractBuild.ContractId);
   if (selectedAccount !== undefined) {
      isInitialized = true;
   }
};

export const mintToken = async (bookName, bookAuthor, bookState, bookDescription, bookTokenUri) => {
   if (isInitialized) {
      return nftContract.methods
         ._createBook(bookName, bookDescription, bookAuthor, bookTokenUri, bookState)
         .send({ from: selectedAccount })
   }
}

export const initWeb3 = async (uri) => {
   if (!isInitialized) {
      await init();
   }
   return isInitialized;
}

export const getBookById = async (bookId) => {
   if (isInitialized) {
      return nftContract.methods.Books(bookId).call({ from: selectedAccount })
   }
}