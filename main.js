function CLASSIFY() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/S1EWE56zT/model.json', modelReady)
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
     if (error) {
         console.error(error)
     } else {
         console.log(results);
         random_number_r = Math.floor(Math.random() * 255) + 1;
         random_number_g = Math.floor(Math.random() * 255) + 1;
         random_number_b = Math.floor(Math.random() * 255) + 1;

         document.getElementById("result_label").innerHTML = 'This Sound Is Of - '+ 
         results[0].label;
         document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
         (results[0].confidence*100).toFixed(2)+"%";
         document.getElementById("result_label").style.color = "rgb("
         +random_number_r+","+random_number_g+","+random_number_b+")";
         document.getElementById("result_confidence").style.color = "rgb("    
         +random_number_r+","+random_number_g+","+random_number_b+")";

         img1 = document.getElementById('Dog-Picture');
         img2 = document.getElementById('Cat-Picture');
         img3 = document.getElementById('Lion-Picture');
         img4 = document.getElementById('Cow-Picture');

         if (results[0].label == "Barking") {
             img1.src = 'DOG.gif';
             img2.src = 'CAT PIC.png';
             img3.src = 'LION PIC.png';
             img4.src = 'COW PIC.png';
         } else if (results[0].label == "Meowing") {
            img1.src = 'DOG PIC.png';
            img2.src = 'CAT.gif';
            img3.src = 'LION PIC.png';
            img4.src = 'COW PIC.png';
         } else if (results[0].label == "Roar") {
            img1.src = 'DOG PIC.png';
            img2.src = 'CAT PIC.png';
            img3.src = 'LION.gif';
            img4.src = 'COW PIC.png';
         } else if (results[0].label == "Mooing") {
            img1.src = 'DOG PIC.png';
            img2.src = 'CAT PIC.png';
            img3.src = 'LION PIC.png';
            img4.src = 'COW.gif';
         }
     } 
}