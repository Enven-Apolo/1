 
 Webcam.attach ('#CAMERA')
 camera = document.getElementById("CAMERA")
 Webcam.set ({
width: 350,
height: 300,
image_format: "png",
png_quality: 90
}) ;
function Funo() {
Webcam.snap(function(data_uri){
document.getElementById("RESULTADO VERSÃO LEGAL").innerHTML= '<img id="selfie_image" src="'+data_uri+'" />';
})
classifier=ml5.imageClassifier ("https://teachablemachine.withgoogle.com/models/IeeBe_E4-/model.json", modelLoaded)
}
function VersoLegal()
{
    img =  document.getElementById ("selfie_image");
    classifier.classify(img, gotResult);
}
function modelLoaded() {
    console.log("model loaded!");
}
function gotResult(error,results) {
 if (error) {console.error(error);}
else {
    console.log(results);
    document.getElementById("result_object_name").innerHTML = results [0].label;
    document.getElementById("result_object_accuracy").innerHTML = results [0].confidence.toFixed(3);

}


}