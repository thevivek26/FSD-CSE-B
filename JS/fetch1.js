//fetch using promise
const url="https://dummyjson.com/users?limit=2"
const pr=fetch(url);
      pr.then((res)=>{
         return res.json();
      })
      .then((data)=>{
        data.users.forEach((da)=>{
            console.log("name=",da.firstName);
            console.log("email=",da.email);
            console.log("ip=",da.ip);
            console.log("mac address=",da.macAddress);

        })
     })
    .catch((err)=>{
        console.error("Error:",err.message);
    })