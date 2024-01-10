var imgpath
var value
function imgfun(a){
    console.log(a)
    if (a=="Low"){
          
        let image = document.getElementById('waterlevelimg')
        image.setAttribute('src',"../assets/waterLow1.svg")
        image.style.marginTop='70px'

        let level = document.getElementById('levelIndicator')
        level.textContent= a
       

    }
    else if (a=="Med"){
         
        let image = document.getElementById('waterlevelimg')
        image.setAttribute('src',"../assets/waterLow2.svg")
        image.style.marginTop='40px'

        
        let level = document.getElementById('levelIndicator')
        level.textContent= a
    }
    else{
        
        let image = document.getElementById('waterlevelimg')
        image.setAttribute('src',"../assets/waterLow3.svg")

        image.style.marginTop='5px'
        let level = document.getElementById('levelIndicator')
        level.textContent= a
    }
    
}



// const title = document.getElementById('pump') 
// console.log(title)
function aja(){
fetch("https://djzp2yaxrd.execute-api.ap-south-1.amazonaws.com/Maithri_kiosk_test_stage/Maithri_kiosk_test",{
    method:"GET", 
    headers:{
        'Content-Type': 'application/json'
    }
})
.then((res)=>res.json())
.then((res)=>{
   console.log(res);
    let tValue = document.querySelector('#tempValue')
    tValue.textContent = res.temp + "c" 
    

function compressor1(){
   
    if (res.c1==="On") {
        let com1 = document.getElementById('com1')
        com1.style.background='#5FCE6A' 
    } else {
        let com1 = document.getElementById('com1')
        com1.style.background='#C56767' 
    }
}
compressor1()
function compressor3(){
    if (res.c3==="On") {
        let com3 = document.getElementById('com3')
        com3.style.background= '#5FCE6A' 
    } else {
        let com3 = document.getElementById('com3')
        com3.style.background= '#C56767'
    }
    
}
compressor3()
function compressor4(){
    if (res.c4==="On") {
        let com4 = document.getElementById('com4')
        com4.style.background= '#5FCE6A'  
        
    } else {
        let com4 = document.getElementById('com4')
        com4.style.background= '#5FCE6A'  
    }
}
compressor4()
function lower1(){
    if (res.lp1==="Off") {
        let low1 = document.getElementById('low1')
        low1.style.borderColor= '#BBBABA'
        low1.style.color='#BBBABA'
        
    } else {
        let low1 = document.getElementById('low1')
        low1.style.borderColor= '#C56767'
        low1.style.color='#C56767'
    }
}
lower1()
function lower3(){
    if (res.lp3==="Off") {
        let low3 = document.getElementById('low3')
        low3.style.borderColor= '#BBBABA'
        low3.style.color='#BBBABA'
        
    } else {
        let low3 = document.getElementById('low3')
        low3.style.borderColor= '#C56767'
        low3.style.color= '#C56767'
    }
}
lower3()
function lower2(){
    if (res.lp2==="On") {
        let low2 = document.getElementById('low2')
        low2.style.borderColor= '#C56767'  
        low2.style.color= '#C56767' 
    } else {
        let low2 = document.getElementById('low2')
        low2.style.borderColor= '#BBBABA'
        low2.style.color= '#BBBABA'  
    }
}
lower2()
function lower4(){
    if (res.lp4==="On") {
        let low4 = document.getElementById('low4')
        low4.style.borderColor= '#C56767'
        low4.style.color= '#C56767'
        
    } else {
        let low4 = document.getElementById('low4')
        low4.style.borderColor= '#BBBABA'
        low4.style.color= '#BBBABA'
    }
}
lower4()
function higher1(){
    if (res.hp1==="Off") {
        let high1 = document.getElementById('high1')
        high1.style.borderColor= '#BBBABA'
        high1.style.color= '#BBBABA'
        
    } else {
        let high1 = document.getElementById('high1')
        high1.style.borderColor= '#C56767'
        high1.style.color= '#C56767'
    }
   
}
higher1()
function higher3(){
    if (res.hp3==="Off") {
        let high3 = document.getElementById('high3')
        high3.style.borderColor= '#BBBABA'
        high3.style.color= '#BBBABA'
        
    } else {
        let high3 = document.getElementById('high3')
        high3.style.borderColor= '#C56767' 
        high3.style.color= '#C56767'
    }
}
higher3()
function higher2(){
    if (res.hp2==="On") {
        let high2 = document.getElementById('high2')
        high2.style.borderColor= '#C56767'
        high2.style.color= '#C56767'
        
    } else {
        let high2 = document.getElementById('high2')
        high2.style.borderColor= '#BBBABA' 
        high2.style.color= '#BBBABA'
    }
}
higher2()
function higher4(){
    if (res.hp4==="On") {
        let high4 = document.getElementById('high4')
        high4.style.borderColor= '#C56767'
        high4.style.color= '#C56767'


    } else {
        let high4 = document.getElementById('high4')
        high4.style.borderColor= '#BBBABA'
        high4.style.color= '#BBBABA'

 
    }
}
higher4()
function pumps(){
    if (res.pump1==="Off") {
        let pump= document.getElementById('pumps')
        pump.textContent= res.pump1
        pump.style.color= '#C56767'
     } else {
        let pump= document.getElementById('pumps')
        pump.textContent= res.pump1
        pump.style.color= '#5FCE6A'
    }
}
pumps()
imgfun(res.level)
function powerOffOn(){
    // console.log(res.power)
    if (res.power==='On') {
        let images =document.getElementById('powerImageOffOn')
        images.setAttribute('src',"../assets/poweron.jpg")
    } else {
        let images =document.getElementById('powerImageOffOn')
        images.setAttribute('src',"../assets/poweroff.png") 
    }
   

}
powerOffOn()    
})
}
// aja()
setInterval(aja,5000)


// function getuse(){
//     var xhr = new XMLHttpRequest()
//     xhr.open('GET',"https://djzp2yaxrd.execute-api.ap-south-1.amazonaws.com/Maithri_kiosk_test_stage/Maithri_kiosk_test",true)

//     xhr.onready = function(){
        
//             console.log("I am ajax")
        
//     }
//     xhr.send()
// }
// setInterval(getuse, 1000)


