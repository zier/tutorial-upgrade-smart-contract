Tutorial
https://docs.openzeppelin.com/learn/

Website for create api key for verify smart contract
https://bscscan.com


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