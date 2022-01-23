
    var form=document.getElementById('form');

    form.addEventListener('submit',function(event){
        event.preventDefault();

        var FirstName=document.getElementById("First_Name").value;
        var LastName=document.getElementById("last_name").value;
        var Locate=document.getElementById("locate").value;
        var Email=document.getElementById("email").value;
        var Message=document.getElementById("message").value;

        console.log(FirstName);
        console.log(LastName);
        console.log(Locate);
        console.log(Email);
        console.log(Message);


    firebase
        .database()
        .ref("ContactUS/" + FirstName)
        .set({
            FirstName_:FirstName ,
            LastName_ :LastName,
            Location:Locate,
            Email_:Email,
            Response_:Message
        });

        M.toast({
            html: `Form Submitted Succesfully`,
            classes: "green",
        });
    })
   

    

