const myModel = document.querySelectorAll(".modal");

async function SignUp(e) {
    console.log("hi");
    e.preventDefault();
    const email = document.querySelector("#signUpEmail");
    const password = document.querySelector("#signUpPassword");
    console.log(email.value);
    console.log(password.value);

    try {
        const result = await firebase
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value);
        await result.user.updateProfile({
            displayName: "User",
        });

        firebase
            .auth()
            .currentUser.sendEmailVerification()
            .then(() => {
                console.log("verification mail send");
            });

        M.toast({
            html: `Welcome ${result.user.email}`,
            classes: "green",
        });
    } catch (err) {
        console.log(err);
        M.toast({ html: err.message, classes: "red" });
    }
    email.value = "";
    password.value = "";

    M.Modal.getInstance(myModel[0]).close();
}

async function login(e) {
    e.preventDefault();
    const email = document.querySelector("#LoginEmail");
    const password = document.querySelector("#LoginPassword");
    console.log(email.value);
    console.log(password.value);

    try {
        const result = await firebase
            .auth()
            .signInWithEmailAndPassword(email.value, password.value);
        console.log(result);
        M.toast({ html: `Welcome ${result.user.email}`, classes: "green" });
    } catch (err) {
        console.log(err);
        M.toast({ html: err.message, classes: "red" });
    }

    email.value = "";
    password.value = "";
    M.Modal.getInstance(myModel[1]).close();
}

function logout() {
    firebase.auth().signOut();

    const unsubcribe = firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log(user);

            var uid = user.uid;
        } else {
            console.log("Sign out Success");
            M.toast({ html: `Signout Success`, classes: "green" });
        }
    });
}

/*Clean up  unsubcribe*/

async function loginWithGoogle() {
    try {
        var provider = new firebase.auth.GoogleAuthProvider();
        const result = await firebase.auth().signInWithPopup(provider);
        M.toast({ html: `Signin Succesfully with  Google`, classes: "green" });
        console.log(result);
    } catch (err) {
        console.log(err);
    }

    M.Modal.getInstance(myModel[0]).close();
    M.Modal.getInstance(myModel[1]).close();
}

function Sign_out_div() {
    console.log("sign out");
    var node = document.createTextNode(user);
    var User_box = document.createElement("div");
    User_box.id = "block";
    User_box.className = "singoutdiv";
    User_box.innerHTML = user;
    document.getElementsByClassName("container")[0].appendChild(User_box);
}