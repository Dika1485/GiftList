# 🎁 Gift List Verification System

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project demonstrates a Merkle Tree-based gift list verification system where a client can prove to a server that they are on the "nice list" without revealing the entire list.

**Note**: This project is cloned from [Alchemy Platform's GiftList repository](https://github.com/alchemyplatform/GiftList) and modified for educational purposes.

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+ recommended)
- npm (comes with Node.js)

### Installation
1. Clone this repository
   ```bash
   git clone https://github.com/Dika1485/giftlist.git
   ```
2. Install dependencies
   ```bash
   npm install
   ```

## 📂 Project Structure

```
gift-list/
├── client/          # Client-side code (the prover)
├── server/         # Server-side code (the verifier)
├── utils/          # Shared utilities
│   ├── niceList.json       # List of names eligible for gifts
│   ├── MerkleTree.js      # Merkle Tree implementation
│   ├── verifyProof.js     # Proof verification logic
│   └── example.js         # Example usage
└── README.md       # This file
```

## 🖥️ Running the System

1. **Start the server** (in one terminal)
   ```bash
   node server/index.js
   ```
   The server will start on port 1225.

2. **Run the client** (in another terminal)
   ```bash
   node client/index.js
   ```
   The client will attempt to verify a name from the nice list with the server.

## 🔍 How It Works

### Client (Prover)
- Generates a Merkle proof for a specific name
- Sends the proof to the server for verification
- Receives a response indicating whether verification was successful

### Server (Verifier)
- Maintains the Merkle root of the nice list
- Verifies incoming proofs against the root
- Responds with whether the proof is valid

### Utilities
- `niceList.json`: Contains all eligible names
- `MerkleTree.js`: Modified Merkle Tree implementation
- `verifyProof.js`: Proof verification function
- `example.js`: Demonstration of generating and verifying proofs

## 🛠️ Customization

1. To add/remove names from the nice list:
   - Edit `utils/niceList.json`
   - Restart the server to recompute the Merkle root

2. To test different names:
   - Modify `client/index.js` to use a different name

## 📚 Learning Resources

This project demonstrates:
- Merkle Trees and their cryptographic properties
- Zero-knowledge proof concepts
- Client-server verification patterns
- Practical applications of blockchain data structures

Original concept by [Alchemy](https://github.com/alchemyplatform/GiftList).

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.