var user, bot, id;

function Ready() {
    id = document.getElementById("ID").value;
}

function insert() {
    console.log("hi");
    Ready();
    firebase
        .database()
        .ref("chatbot/" + id)
        .set({
            User_response: user,
        });
}

function send() {
    UserNode();
    SenderNode();
}

function UserNode() {
    var user = document.getElementById("ID").value;
    var node = document.createTextNode(user);
    var User_box = document.createElement("div");
    User_box.id = "block";
    User_box.className = "User_box";
    User_box.innerHTML = user;
    document.getElementsByClassName("container")[0].appendChild(User_box);
}

async function SenderNode() {


    var node = document.createTextNode(user);
    var User_box = document.createElement("div");
    User_box.id = "block";
    User_box.className = "bot_box";
    document.getElementsByClassName("container")[0].appendChild(User_box);

    Ready();

    try {


        firebase
            .database()
            .ref("chatbot/" + id)
            .on("value", function(snapshot) {
                console.log(snapshot.val);
                if (id = snapshot.val()) {
                    User_box.innerHTML = snapshot.val().User_response;
                    var obj = snapshot.val();
                    console.log(obj);
                } else {
                    User_box.innerHTML = "I dont know about it!!!";
                }
            });
    } catch (err) {
        console.log("hi");
        User_box.innerHTML = "Sorry, I don't know!!!";
    }


}