const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  // TODO: how do we prove to the server we're on the nice list? 
  
  // Create the Merkle tree for the nice list
  const merkleTree = new MerkleTree(niceList);
  
  // Choose a name to prove (you can change this to your name or any name in the list)
  const myName = 'Victoria Bradtke';
  
  // Find the index of the name in the nice list
  const index = niceList.findIndex(n => n === myName);
  
  if (index === -1) {
    console.log(`${myName} is not in the nice list :(`);
    return;
  }

  // Get the proof for the name
  const proof = merkleTree.getProof(index);

  // Send the proof and name to the server
  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here!
    proof: proof,
    name: myName
  });

  console.log({ gift });
}

main();