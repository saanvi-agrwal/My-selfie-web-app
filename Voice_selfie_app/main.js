var speechRecognition=window.webkitSpeechRecognition;
var recognition= new speechRecognition();
function start()
{
    document.getElementById("textBox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textBox").innerHTML=content;
    if(content=="take my selfie"){
    console.log("taking selfie---");
    speak();
    }
}
function speak(){
    var synth=window.speechSynthesis;
    speakData="Taking youre selfie in 5 seconds";
    var utterThis= new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
Webcam.attach(camera);
setTimeout(function(){
    takeSnapshot();
    save();
},5000);
}

    Webcam.set({
        width:360,
        height:250,
        image_format:'png',
        png_quality:90
    });
    camera=document.getElementById("camera");

    function takeSnapshot(){
        Webcam.snap(function(dataUri){
            document.getElementById("result").innerHTML='<img id="selfieImage" src="'+dataUri+'">';
                });
    }
    function save(){
        link=document.getElementById("link");
        image=document.getElementById("selfieImage");
    link.href=image;
    link.click();
    }