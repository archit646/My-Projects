count=0;
    document.getElementById("button").addEventListener("mouseover",function(){
        const email=document.getElementById("email");
        const password=document.getElementById("password");
        const button=document.getElementById("button");
        if(email.value=="architk471@gmail.com" && password.value=="1234567890"){
            email.style.border="2px solid green";
            password.style.border="2px solid green";
            button.value="Ab Thik Hai 👍"
            button.style.backgroundColor="green";
            button.style.color="white";
            button.style.border="none";
            button.style.left="150px";
        }
        else{
            if(count==0){
                button.style.left="20px";
                count=1;
            }
            else{
                button.style.left="205px";
                count=0;
            }
            email.style.border="2px solid red";
            password.style.border="2px solid red";
            button.value="Pahle Sahi Data Daal 😂"
            button.style.backgroundColor="red";
            button.style.color="white";
            button.style.border="none";
        }
        
    })




