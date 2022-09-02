# Tutorial upgrade smart contract (truffle)

example code for deploy an upgrade smart contract on binance smart chain (testnet)


![overview](https://github.com/zier/tutorial-upgrade-smart-contract/blob/7270c7523a2e2b686e8bb8159471622825660d0b/resources/overview.jpg?raw=true)

#### Resource
- https://docs.openzeppelin.com/learn/
- https://bscscan.com


### Step 0
prepare config 
- please update secret (deployer) to .secret file
- update bscscan api key in truffle-config.js


### Step 1 
Install dependencies
```
    npm install
```

### Step 2
deploy smart contract
```
    truffle migrate --network testnet
```

### Step 3
verify contract
```
    truffle run verify HelloWorld --network testnet
```

### Step 4
upgrade smart contract version (HelloWorld to HelloWorldV2)  
- move file resources/3_upgrade_helloworld_v2.js to migrations/3_upgrade_helloworld_v2.js

and run 
```
    truffle migrate --network testnet
```

### Step 5
verify contract
```
    truffle run verify HelloWorldV2 --network testnet
```
