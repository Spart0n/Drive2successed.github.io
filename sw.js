//service workers only get installeds once  in their live cycle 

self.addEventListener("intstall", e =>{
    console.log("Install!");
})