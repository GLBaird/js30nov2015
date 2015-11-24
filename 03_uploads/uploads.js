// outlets
var imageFile    = document.getElementById("imagefile");
var imageName    = document.getElementById("imagename");
var userName     = document.getElementById("username");
var imagePreview = document.getElementById("preview");


imageFile.onchange = function(event) {
    if (imageFile.files
        && imageFile.files[0]
        && imageFile.files[0].type.indexOf("image")>=0
    ) {
        var file = imageFile.files[0];

        var reader = new FileReader();
        reader.onload = function(event) {
            var imageURL = event.target.result;
            imagePreview.style.backgroundImage = "url("+imageURL+")";
        };

        reader.readAsDataURL(file);

    } else {
        alert("You have to upload an image file!");
    }
};

function uploadData() {
    var formData = new FormData();
    formData.append("username", userName.value);
    formData.append("imagename", imageName.value);
    formData.append("image", imageFile.files[0]);

    var req = new XMLHttpRequest();
    req.open("POST", "server-input.php", true);

    req.onreadystatechange = function() {
        if (req.readyState == 4) {

            if (req.status == 200) {
                alert("File Uploaded");
            } else {
                alert("Upload Error!");
            }

        }
    };

    req.send(formData);

    /*
    $.ajax({
        url : "server-input.php",
        type: "POST",
        data: formData,
        processData: false,
        mimeType: null
    });
    */
}