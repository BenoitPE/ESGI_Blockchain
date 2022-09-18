import { useState, useEffect } from 'react';
import { init, setSelectedAccount, setIsInitialized } from '../Web3Client';

export function Web3Button() {
   const [web3ButtonDisabled, setWeb3ButtonDisabled] = useState(false);
   const [web3Button, setWeb3Button] = useState("Se connecter avec  Web3");
   const [web3ButtonColor, setWeb3ButtonColor] = useState("btn btn-primary");

   const handleConnectToWeb3 = async (event) => {
      event.preventDefault();
      init();

      window.ethereum.on('accountsChanged', async function (accounts) {
         let selectedAccount = accounts[0];
         setSelectedAccount(selectedAccount);
         setIsInitialized(true);
         setWeb3Button(`Connecté à Web3 ✅`);
         setWeb3ButtonColor("btn btn-success")
         setWeb3ButtonDisabled(true);
      });

      let selectedAddress = window.ethereum.selectedAddress;
      if (selectedAddress !== undefined && selectedAddress !== null) {
         setSelectedAccount(selectedAddress);
         setIsInitialized(true);
         setWeb3Button(`Connecté à Web3 ✅`);
         setWeb3ButtonColor("btn btn-success")
         setWeb3ButtonDisabled(true);
      }
   }

   return (
      <button
         className={web3ButtonColor}
         disabled={web3ButtonDisabled}
         onClick={handleConnectToWeb3}>
         {web3Button}
      </button>
   )
}