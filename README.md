# game-engines-sdk

TON blockchain bindings and utilities for cocos game engines

This project is forked from https://github.com/ton-org/game-engines-sdk

# Getting started
Installation:
```sh
npm install --save @cocos-labs/game-sdk
```

Creating GameFi instance:
```typescript
// creation options described in the related section
import { CocosGameFi, TonConnectUI, Address, toNano } from '@cocos-labs/game-sdk';

// https://docs.ton.org/develop/dapps/ton-connect/manifest
let uiconnector = new TonConnectUI({
        manifestUrl: '{YOU_PROJECT_MANIFESURL}'
});
const gameFi = await CocosGameFi.create({ connector: uiconnector });

```


# GameFi methods & props
`GameFi` static methods:

| Method | Description |
| -------- | -------- |
| [create](https://cocostechlabs.github.io/game-engines-sdk/classes/CocosGameFi.html#create) | creates a GameFi instance |

`GameFi` instance methods:

| Method | Description |
| -------- | -------- |
| [connectWallet](https://cocostechlabs.github.io/game-engines-sdk/classes/CocosGameFi.html#connectWallet) | connect wallet manually (without build-in UIs) |
| [onWalletChange](https://cocostechlabs.github.io/game-engines-sdk/classes/CocosGameFi.html#onWalletChange) | watch weather wallet was connected or disconnected |
| [disconnectWallet](https://cocostechlabs.github.io/game-engines-sdk/classes/CocosGameFi.html#disconnectWallet) | disconnect wallet manually (without build-in UIs) |
| [buyWithTon](https://cocostechlabs.github.io/game-engines-sdk/classes/CocosGameFi.html#buyWithTon) | buy from in-game shop with TON |
| [buyWithJetton](https://cocostechlabs.github.io/game-engines-sdk/classes/CocosGameFi.html#buyWithJetton) | buy from in-game shop with jetton |
| [transferTon](https://cocostechlabs.github.io/game-engines-sdk/classes/CocosGameFi.html#transferTon) | transfer TON to another wallet address |
| [transferJetton](https://cocostechlabs.github.io/game-engines-sdk/classes/CocosGameFi.html#transferJetton) | transfer jetton to another wallet address |
| [openNftCollection](https://cocostechlabs.github.io/game-engines-sdk/classes/CocosGameFi.html#openNftCollection) | open NFT collection contract |
| [openNftSale](https://cocostechlabs.github.io/game-engines-sdk/classes/CocosGameFi.html#openNftSale) | open NFT collection contract |
| [openNftItem](https://cocostechlabs.github.io/game-engines-sdk/classes/CocosGameFi.html#openNftItem) | open NFT item contract |
| [openNftItemByIndex](https://cocostechlabs.github.io/game-engines-sdk/classes/CocosGameFi.html#openNftItemByIndex) | open NFT item contract using its index |
| [openSbtCollection](https://cocostechlabs.github.io/game-engines-sdk/classes/CocosGameFi.html#openSbtCollection) | open SBT collection contract |
| [openJetton](https://cocostechlabs.github.io/game-engines-sdk/classes/CocosGameFi.html#openJetton) | Open Jetton contract |
| [openJettonWallet](https://cocostechlabs.github.io/game-engines-sdk/classes/CocosGameFi.html#openJettonWallet) | Open Jetton Wallet contract |

`GameFi` instance props:

| Prop | Description |
| -------- | -------- |
| [assetsSdk](https://cocostechlabs.github.io/game-engines-sdk/classes/CocosGameFi.html#assetsSdk) | [asset-sdk](https://github.com/ton-community/assets-sdk) instance in case you need to use it directly |
| [walletConnector](https://cocostechlabs.github.io/game-engines-sdk/classes/CocosGameFi.html#walletConnector) | wallet connector instance in case you need to use it directly |
| [wallet](https://cocostechlabs.github.io/game-engines-sdk/classes/CocosGameFi.html#wallet) | user's connected wallet |
| [walletAccount](https://cocostechlabs.github.io/game-engines-sdk/classes/CocosGameFi.html#walletAccount) | user's connected account |
| [walletAddress](https://cocostechlabs.github.io/game-engines-sdk/classes/CocosGameFi.html#walletAddress) | user's connected wallet address |
| [merchantAddress](https://cocostechlabs.github.io/game-engines-sdk/classes/CocosGameFi.html#merchantAddress) | in-game shop's address to receive TON |
| [merchantJettonAddress](https://cocostechlabs.github.io/game-engines-sdk/classes/CocosGameFi.html#merchantJettonAddress) | in-game shop's jetton used as in-game currency |

# Use cases
To learn complex use cases read [TON GameFi article](https://gist.github.com/barinbritva/b3db1605f2667b7562b53a23877c0e73) and check out the source code of demo [Flappy Bird game](https://github.com/ton-community/flappy-bird).

# References
The full [typedoc references](https://cocostechlabs.github.io/game-engines-sdk/index.html).
