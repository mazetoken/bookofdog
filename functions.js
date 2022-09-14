// Connect
//function connect() {
    //location.reload();
//}

// The Book Of Dog
function sendMessage() {
    var sender = $("#sender").val();
    var message = $("#message").val();
    var content = "Sending transaction from: ";
    content += dogMaster;
    $("#lang").html(content);
    var event = contractTheBookOfDog.methods.sendMessage(sender, message).send({ from: dogMaster, value: 25000000000000000 })
        .then(function (receipt) {
            console.log(receipt);
    var content = "Transaction sent! You got 550 BODO: <br>";
            //alert("Done! You got 550 BODO");
    content += JSON.stringify(receipt.transactionHash);
    content += "<br> Woof-woof!";
    $("#lang").html(content);
        });;
    
    var event = contractTheBookOfDog.methods.messageCount().call()
        .then(function (result) {
    var content = "<br> Your post 🐕‍🦺 id: ";
        console.log(result ++);
    content += result;
    content += "<br> Remember it and share it with yo dawgz ;-)";
    content += "<br> Your post will be on blockchain forever.";
    $("#lang1").html(content);
        });;
};

function totalSupply() {
    var event = contractTheBookOfDog.methods.totalSupply().call()
        .then(function (result) {
    var content = "Current BODO supply is: ";
            console.log(result / 100000000);
    content += JSON.stringify(result.toString() / 100000000);
    $("#lang2").html(content);
        });;
};

function viewMessage() {
    var id = $("#id").val();
    var event = contractTheBookOfDog.methods.messages(id).call()
        .then(function (result) {
    //var content = "The Book Of Dog post: <br>";
    var content = "";
        console.log(result);
    content += " 🐕‍🦺 " + "id: " + result[0] + " <br> " + " 🐕 " + "guest: " + result[1] + " <br> " + " 📃 " + "post: " + result[2] + " <br> ";
    $("#lang3").html(content);
       });;
};

function countMessage() {
    var event = contractTheBookOfDog.methods.messageCount().call()
        .then(function (result) {
    var content = "Total posts: ";
        console.log(result);
    content += result;
    $("#lang4").html(content);
        });;
};

function allMessages1() {
    var content = "";
    for(i=1; i < 33; i++) {
    var event = contractTheBookOfDog.methods.messages(i).call()
        .then(function (result) {
        console.log(result);
    //content += "<tr>" + "<td>" + "id: " + result[0] + "</td>" + "<td>" + "name: " + result[1] + "</td>" + "<td>" + "post: " + result[2] + "</td>" + "</tr>";
    content += " <hr> " + " 🐕‍🦺 " + "id: " + result[0] + " <br> " + " 🐕 " + "guest: " + result[1] + " <br> " + " 📃 " + "post: " + result[2] + " <br> ";
    $("#lang5").html(content);
       });;
    }
};

function allMessages2() {
    var content = "";
    for(i=277; i < 350; i++) {
    var event = contractTheBookOfDog.methods.messages(i).call()
        .then(function (result) {
        console.log(result);
    //content += "<tr>" + "<td>" + "id: " + result[0] + "</td>" + "<td>" + "name: " + result[1] + "</td>" + "<td>" + "post: " + result[2] + "</td>" + "</tr>";
    content += " <hr> " + " 🐕‍🦺 " + "id: " + result[0] + " <br> " + " 🐕 " + "guest: " + result[1] + " <br> " + " 📃 " + "post: " + result[2] + " <br> ";
    $("#lang6").html(content);
       });;
    }
};

// Stake
function approve() {
    var amount1 = $("#amount1").val();
    var amount2 = amount1 *100000000;
    var amount3 = amount2.toString();
    var content = "Approving transaction from: ";
    content += dogMaster;
    $("#lang7").html(content);
    var event = contractTheBookOfDog.methods.approve("0x2efDE281498838C5405b4284d87aC319117e9B3C", amount3).send({ from: dogMaster })
        .then(function (receipt) {
            console.log(receipt);
    var content = "Approved!: ";
            //alert("Done. BODO approved!")
    content += JSON.stringify(receipt.transactionHash);
    $("#lang7").html(content);
        });;
};

function stakeTokens() {
    var amount1 = $("#amount1").val();
    var amount2 = amount1 *100000000;
    var amount3 = amount2.toString();
    var content = "Sending transaction from: ";
    content += dogMaster;
    $("#lang7").html(content);
    var event = contractTheBookOfDogStake.methods.stakeTokens(amount3).send({ from: dogMaster })
        .then(function (receipt) {
            console.log(receipt);
    var content = "Transaction sent! Staked!: ";
            //alert("Done. BODO staked!");
    content += JSON.stringify(receipt.transactionHash);
    $("#lang7").html(content);
        });;
};
    
function stakingBalance() {
    var event = contractTheBookOfDogStake.methods.stakingBalance(dogMaster).call()
        .then(function (result) {
    var content = "Your BODO balance staked is: ";
            //alert(result / 100000000);
    content += JSON.stringify(result.toString() / 100000000);
    $("#lang8").html(content);
        });;
};

function calculateReward() {
    var event = contractTheBookOfDogStake.methods.calculateReward().call({ from: dogMaster })
        .then(function (result) {
    var content = "Your current INVADERS reward is: ";
            //alert(result / 100000000);
    content += JSON.stringify(result.toString() / 1000000000000000000);
    $("#lang9").html(content);
        });;
};
    
function unstakeTokens() {
    var content = "Sending transaction from: ";
    content += dogMaster;
    $("#lang10").html(content);
    var event = contractTheBookOfDogStake.methods.unstakeTokens().send({ from: dogMaster })
        .then(function (receipt) {
            console.log(receipt);
    var content = "Transaction sent! ";
            //alert("Done. BODO and INVADERS sent!");
    content += JSON.stringify(receipt.transactionHash);
    $("#lang10").html(content);
        });;
};