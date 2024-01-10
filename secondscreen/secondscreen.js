var imgpath
var value
function imgfun(a){
    console.log(a)
    if (a=='Low') {
        let image = document.getElementById('waterlevelimg')
        image.setAttribute("src","../assets/waterLow1.svg")
        image.style.marginTop='70px'

        let level=document.getElementById('levelIndicator')
        level.textContent= a
        
    }
    else if(a=='Med'){
        let image = document.getElementById('waterlevelimg')
        image.setAttribute("src","../assets/waterLow2.svg")
        image.style.marginTop='45px'

        let level = document.getElementById('levelIndicator')
        level.textContent= a
    }
    else{
        let image =document.getElementById('waterlevelimg')
        image.setAttribute("src","../assets/waterLow3.svg")

        let level = document.getElementById('levelIndicator')
        level.textContent= a
    }
}
fetch("https://djzp2yaxrd.execute-api.ap-south-1.amazonaws.com/Maithri_kiosk_test_stage/Maithri_kiosk_test",{
    method:"GET",
    headers:{
        'Content-Type': 'application/json'
    }
})
.then((res)=>res.json())
.then((res)=>{

    let tvalue = document.querySelector('#tempValue')
    tvalue.textContent= res.temp + "c"

function compressor1(){
    if (res.c1==="On") {
        let comp1= document.getElementById("comp1")
        comp1.style.background='#5FCE6A'
        
    } else {
        let comp1= document.getElementById("comp1")
        comp1.style.background='#C56767'
    }

}
compressor1()
function compressor2(){
    if (res.c3==="On") {
        let comp2= document.getElementById("comp2")
        comp2.style.background='#5FCE6A'
        
    } else {
        let comp2= document.getElementById("comp2")
        comp2.style.background='#C56767'
    }
}
compressor2()
function lower1(){
    if (res.lp1==="On") {
        let Low1= document.getElementById("Low1")
        Low1.style.borderColor='#C56767'
        
    } else {
        let Low1= document.getElementById("Low1")
        Low1.style.borderColor='#BBBABA'
    }
}
lower1()
function lower2(){
    if (res.lp2==="On") {
        let Low2= document.getElementById("Low2")
        Low2.style.borderColor='#C56767'
        
    } else {
        let Low2= document.getElementById("Low2")
        Low2.style.borderColor='#BBBABA' 
    }
}
lower2()
function higher1(){
    if (res.hp1==="On") {
        let High1= document.getElementById("High1")
        High1.style.borderColor='#C56767'
        
    } else {
        let High1= document.getElementById("High1")
        High1.style.borderColor='#BBBABA'
    }
}
higher1()
function higher2(){
    if (res.hp2==="On") {
        let High2= document.getElementById("High2")
        High2.style.borderColor='#C56767'
        
    } else {
        let High2= document.getElementById("High2")
        High2.style.borderColor='#BBBABA'
    }
}
higher2()
imgfun(res.level)

function powerImageOffOn(){
    if (res.power==="On") {
        let powerbutton = document.getElementById('powerbutton')
        powerbutton.setAttribute("src","../assets/poweron.jpg")
        
    } else {
        let powerbutton = document.getElementById('powerbutton')
        powerbutton.setAttribute("src","../assets/poweroff.png")
    }
}
powerImageOffOn()
function pumps(){
    if (res.pump1==="On") {
        let pump1= document.getElementById('pump1')
        pump1.textContent=res.pump1
        pump1.style.color='#5FCE6A'
        
    } else {
        let pump1= document.getElementById('pump1')
        pump1.textContent=res.pump1
        pump1.style.color='#C56767'
    }
}
pumps()

})


