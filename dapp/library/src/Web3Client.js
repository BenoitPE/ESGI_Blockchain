import Web3 from 'web3'
import NFTContractBuild from './ABI.json';
export let selectedAccount = undefined;
let nftContract;

export const setSelectedAccount = (account) => {
   selectedAccount = account;
}

export const setIsInitialized = (value) => {
   isInitialized = value;
}

export let isInitialized;

export const init = async () => {
   let provider = window.ethereum;

   if (typeof provider !== 'undefined') {

      await provider
         .request({ method: 'eth_requestAccounts' })
         .then((accounts) => {
            selectedAccount = accounts[0];
            console.log(`Selected account is ${selectedAccount}`);
            const web3 = new Web3(provider);
            nftContract = new web3.eth.Contract(NFTContractBuild.abi, NFTContractBuild.ContractId);
         })
         .catch((err) => {
            console.log(err);
            return;
         });
   }
};

export const mintToken = async (bookName, bookAuthor, bookState, bookDescription, bookTokenUri) => {
   if (!isInitialized) {
      await init();
   }
   return nftContract.methods
      .createBook(bookName, bookDescription, bookAuthor, bookTokenUri, bookState)
      .send({ from: selectedAccount })
}

export const getBookById = async (bookId) => {
   if (!isInitialized) {
      await init();
   }
   return nftContract.methods.Books(bookId).call({ from: selectedAccount })
}

export const getBookByOwnerId = async () => {
   if (!isInitialized) {
      await init();
   }
   return nftContract.methods.getBooksByOwnerId(selectedAccount).call({ from: selectedAccount })
}
