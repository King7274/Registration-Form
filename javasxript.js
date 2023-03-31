

function changeImage() {
    // Get the image link from the input field
    var imageLink = document.getElementById("image-input").value;
  
    // Create a new image element
    var newImage = new Image();
    
    // Set the source of the new image to the image link
    newImage.src = imageLink;
  
    // Replace the old image with the new image in the image container
    var imageContainer = document.getElementById("I");
    imageContainer.innerHTML = "";
    imageContainer.appendChild(newImage);
  }

  function displayImage() {
    // Get the file input element and the image container element
    var input = document.getElementById("image-input");
    var container = document.getElementById("image-container");
  
    // Check if a file was selected
    if (input.files && input.files[0]) {
      // Create a new FileReader object
      var reader = new FileReader();
  
      // Set the callback function when the FileReader has finished loading the image
      reader.onload = function(e) {
        // Create a new image element and set its source to the uploaded image
        var img = new Image();
        img.src = e.target.result;
  
        // Append the image to the image container
        container.innerHTML = "";
        container.appendChild(img);
      };
  
      // Read the uploaded image file as a data URL
      reader.readAsDataURL(input.files[0]);
    }

    // Get the form element
var form = document.querySelector("form");

// Add an event listener to the form to call the displayImage function when a file is selected
form.addEventListener("change", displayImage);

  }

const profile = () => {
    let namedata = document.getElementById("name").value;
    document.getElementById("N").innerHTML = namedata;

    let emaildata = document.getElementById("email").value;
    document.getElementById("E").innerHTML = emaildata;

    let websitedata = document.getElementById("Website").value;
    document.getElementById("W").innerHTML = websitedata;

    let imagedata = document.getElementById("img-link").value;
    console.log(imagedata);

    changeImage();

}

