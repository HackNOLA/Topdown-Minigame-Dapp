import { contractABI, contractAddress } from "./abi.js";

async function getContractFactory() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  let contract = null;

  if (provider) {
    contract = new ethers.Contract(contractAddress, contractABI, signer);
  }

  return contract;
}

export async function saveScore(score) {
  const contract = await getContractFactory();

  if (!contract) return;
  try {
    /* give transaction a signer */
    await contract.incrementScore(score);
  } catch (e) {
    console.log(e);
  }
}

export async function getScore() {
  const contract = await getContractFactory();

  if (!contract) return;
  try {
    /* give transaction a signer */
    let score = await contract.getScore();
    return score;
  } catch (e) {
    console.log(e);
  }
}
