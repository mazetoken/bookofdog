var account = null;
var contract = null;
const ADDRESS1 = "0x83f5E6f0Eb916c067b7cCd4E08C7078937Fb4d3B";
const ADDRESS2 = "0x2efDE281498838C5405b4284d87aC319117e9B3C";

document.getElementById('connect').onclick = async () => {
if (window.ethereum) {
    await window.ethereum.send('eth_requestAccounts');
    //await ethereum.request({ method: 'eth_requestAccounts' });
    window.web3 = new Web3(window.ethereum);
    var accounts = await web3.eth.getAccounts();
    //var accounts = await ethereum.request({ method: 'eth_accounts' });
    account = accounts[0];
    document.getElementById('wallet-address').textContent = account;
    contract1 = new web3.eth.Contract(BODOabi, ADDRESS1);
    contract2 = new web3.eth.Contract(BODOSabi, ADDRESS2);

    // The Book Of Dog
    document.getElementById('sendMessage').onclick = async () => {
        var sender = $("#sender").val();
        var message = $("#message").val();
        var content = "Sending transaction from: ";
        content += account;
        $("#lang").html(content);
        contract1.methods.sendMessage(sender, message).send({ from: account, value: 10000000000000000, gas: 300000, gasPrice: 250000000000 })
            .then(function (receipt) {
                console.log(receipt);
        var content = "Transaction sent! You got 600 BODO: <br>";
        content += JSON.stringify(receipt.transactionHash);
        content += "<br> Woof-woof!";
        $("#lang").html(content);
            });;
        
        contract1.methods.messageCount().call()
            .then(function (result) {
        var content = "<br> Your post 🐕‍🦺 id: ";
            console.log(result ++);
        content += result;
        content += "<br> Remember it and share it with yo dawgz ;-)";
        content += "<br> Your post will be on blockchain forever.";
        $("#lang1").html(content);
            });;
    }

    document.getElementById('addIconB').onclick = async () => {
        const tokenAddress = '0x83f5E6f0Eb916c067b7cCd4E08C7078937Fb4d3B';
        const tokenSymbol = 'BODO';
        const tokenDecimals = 8;
        const tokenImage = 'https://bafkreicqe43tk2hpwvshrsxidwzc5rbqtg2czntdo5jbgbtnkylirvm3di.ipfs.nftstorage.link';
        ethereum.request({
            method: 'wallet_watchAsset',
            params: {
            type: 'ERC20',
            options: {
                address: tokenAddress,
                symbol: tokenSymbol,
                decimals: tokenDecimals,
                image: tokenImage,
            },
            },
        });
    }

    document.getElementById('totalSupply').onclick = async () => {
        contract1.methods.totalSupply().call()
            .then(function (result) {
        var content = "Current BODO supply is: ";
                console.log(result / 100000000);
        content += JSON.stringify(result.toString() / 100000000);
        $("#lang2").html(content);
            });;
    }

    document.getElementById('viewMessage').onclick = async () => {
        var id = $("#id").val();
        contract1.methods.messages(id).call()
            .then(function (result) {
        //var content = "The Book Of Dog post: <br>";
        var content = "";
            console.log(result);
        content += " 🐕‍🦺 " + "ID: " + result[0] + " <br> " + " 🐕 " + "guest: " + result[1] + " <br> " + " 📃 " + "post: " + result[2] + " <br> ";
        $("#lang3").html(content);
        });;
    }

    document.getElementById('viewMessage2').onclick = async () => {
        var id2 = $("#id2").val();
        contract1.methods.messages(id2).call()
            .then(function (result) {
        //var content = "The Book Of Dog post: <br>";
        var content = "";
            console.log(result);
        content += " 🐕‍🦺 " + "ID: " + result[0] + " <br> " + " 🐕 " + "guest: " + result[1] + " <br> " + " 📃 " + "post: " + "<img src=" + result[2] + ">" + " <br> ";
        $("#lang3").html(content);
        });;
    }

    document.getElementById('countMessage').onclick = async () => {
        contract1.methods.messageCount().call()
            .then(function (result) {
        var content = "Total posts: ";
            console.log(result);
        content += result;
        $("#lang4").html(content);
            });;
    }

    // Stake
    document.getElementById('approveB').onclick = async () => {
        var amount1 = $("#amount1").val();
        var amount2 = amount1 *100000000;
        var amount3 = amount2.toString();
        var content = "Approving transaction from: ";
        content += account;
        $("#lang5").html(content);
        contract1.methods.approve("0x2efDE281498838C5405b4284d87aC319117e9B3C", amount3).send({ from: account, gas: 100000, gasPrice: 250000000000 })
            .then(function (receipt) {
                console.log(receipt);
        var content = "Transaction id: ";
        content += JSON.stringify(receipt.transactionHash);
        $("#lang5").html(content);
            });;
    }

    document.getElementById('stake').onclick = async () => {
        var amount1 = $("#amount1").val();
        var amount2 = amount1 *100000000;
        var amount3 = amount2.toString();
        var content = "Sending transaction from: ";
        content += account;
        $("#lang5").html(content);
        contract2.methods.stakeTokens(amount3).send({ from: account, gas: 150000, gasPrice: 250000000000 })
            .then(function (receipt) {
                console.log(receipt);
        var content = "Transaction id: ";
        content += JSON.stringify(receipt.transactionHash);
        $("#lang5").html(content);
            });;
    }
        
    document.getElementById('balance').onclick = async () => {
        contract2.methods.stakingBalance(account).call()
            .then(function (result) {
        var content = "Your BODO balance staked is: ";
        content += JSON.stringify(result.toString() / 100000000);
        $("#lang6").html(content);
            });;
    }

    document.getElementById('reward').onclick = async () => {
        contract2.methods.calculateReward().call({ from: account })
            .then(function (result) {
        var content = "Your current INVADERS reward is: ";
        content += JSON.stringify(result.toString() / 1000000000000000000);
        $("#lang7").html(content);
            });;
    }
        
    document.getElementById('unstake').onclick = async () => {
        var content = "Sending transaction from: ";
        content += account;
        $("#lang8").html(content);
        contract2.methods.unstakeTokens().send({ from: account, gas: 150000, gasPrice: 250000000000 })
            .then(function (receipt) {
                console.log(receipt);
        var content = "Transaction id: ";
        content += JSON.stringify(receipt.transactionHash);
        $("#lang8").html(content);
            });;
    }

    document.getElementById('allMessages1').onclick = async () => {
        var content = "";
        for(i=1; i < 33; i++) {
        contract1.methods.messages(i).call()
            .then(function (result) {
            console.log(result);
        //content += "<tr>" + "<td>" + "id: " + result[0] + "</td>" + "<td>" + "name: " + result[1] + "</td>" + "<td>" + "post: " + result[2] + "</td>" + "</tr>";
        content += " <hr> " + " 🐕‍🦺 " + "ID: " + result[0] + " <br> " + " 🐕 " + "guest: " + result[1] + " <br> " + " 📃 " + "post: " + result[2] + " <br> ";
        $("#lang9").html(content);
        });;
        }
    }

    document.getElementById('allMessages2').onclick = async () => {
        var content = "";
        for(i=277; i < 328; i++) {
        contract1.methods.messages(i).call()
            .then(function (result) {
            console.log(result);
        //content += "<tr>" + "<td>" + "id: " + result[0] + "</td>" + "<td>" + "name: " + result[1] + "</td>" + "<td>" + "post: " + result[2] + "</td>" + "</tr>";
        content += " <hr> " + " 🐕‍🦺 " + "ID: " + result[0] + " <br> " + " 🐕 " + "guest: " + result[1] + " <br> " + " 📃 " + "post: " + result[2] + " <br> ";
        $("#lang10").html(content);
        });;
        }
    }

    document.getElementById('allMessages3').onclick = async () => {
        var content = "";
        for(i=328; i < 379; i++) {
        contract1.methods.messages(i).call()
            .then(function (result) {
            console.log(result);
        //content += "<tr>" + "<td>" + "id: " + result[0] + "</td>" + "<td>" + "name: " + result[1] + "</td>" + "<td>" + "post: " + result[2] + "</td>" + "</tr>";
        content += " <hr> " + " 🐕‍🦺 " + "ID: " + result[0] + " <br> " + " 🐕 " + "guest: " + result[1] + " <br> " + " 📃 " + "post: " + result[2] + " <br> ";
        $("#lang11").html(content);
        });;
        }
    }
    document.getElementById('allMessages4').onclick = async () => {
        var content = "";
        for(i=379; i < 430; i++) {
        contract1.methods.messages(i).call()
            .then(function (result) {
            console.log(result);
        //content += "<tr>" + "<td>" + "id: " + result[0] + "</td>" + "<td>" + "name: " + result[1] + "</td>" + "<td>" + "post: " + result[2] + "</td>" + "</tr>";
        content += " <hr> " + " 🐕‍🦺 " + "ID: " + result[0] + " <br> " + " 🐕 " + "guest: " + result[1] + " <br> " + " 📃 " + "post: " + result[2] + " <br> ";
        $("#lang11").html(content);
        });;
        }
    }
}
}