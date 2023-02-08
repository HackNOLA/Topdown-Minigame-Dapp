if (window.ethereum) {
  // Request account access if needed
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const network = "https://api.avax-test.network/ext/bc/C/rpc";
  const provider = ethers.getDefaultProvider(network);
  const address = accounts[0];

  const main = async () => {
    provider.getBalance(address).then((balance) => {
      // convert a currency unit from wei to ether
      const balanceInAvax = ethers.utils.formatEther(balance);
      // document.getElementById("wallet-balance").innerHTML = balanceInAvax;
      //Contract address: 0x6d5E1A4606810F50Ef0839310C17949b3eF96d2D
      // console.log(`balance: ${balanceInAvax} AVAX`);
      // balance: 2 AVAX
    });
  };

  main();
}
// Else throw an error
else {
  console.log("Please install Metamask");
}
