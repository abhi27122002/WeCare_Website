var user, bot, id;

function Ready() {
    id = document.getElementById("ID").value;
    user = document.getElementById("Userbox").value;
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

function Select() {
    Ready();
    firebase
        .database()
        .ref("chatbot/" + id)
        .on("value", function(snapshot) {
            console.log(snapshot.val);
            document.getElementById("Userbox").value = snapshot.val().User_response;
            console.log();
        });
}