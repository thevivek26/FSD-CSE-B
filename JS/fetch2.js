//fetch using async and await
const url="https://dummyjson.com/users?limit=2"
const f1=async()=>{
    try{
    const res=await fetch(url);
    const jsondata=await res.json();
    jsondata.users.forEach((data)=>{
        console.log("name=",data.firstName);
        console.log("email=",data.email);
        console.log("ip=",data.ip);
        console.log("mac address=",data.macAddress);
        console.log("#############")//for separating 2 records
    })
}
catch(err){
    console.error("Error:",err.message);
}
}
f1();