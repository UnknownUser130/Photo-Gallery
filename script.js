/*Name this external file gallery.js*/

var currentIndex = 0; // Track current index of preview images

function upDate(previewPic){
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
    var x=document.getElementById("image");
    x.innerHTML=previewPic.alt;
    x.style.backgroundImage="url('"+previewPic.src;
    currentIndex = Array.from(document.getElementsByClassName("preview")).indexOf(previewPic); // Update current index
	}

	function unDo(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
	var x=document.getElementById("image");
    x.innerHTML="Hover over an image below to display here.";
    x.style.backgroundImage="url('";
    currentIndex = 0;	
	}
    
    //Function to be called on page load
    function onLoadFunction() {
        console.log("Page loaded!");
        addTabFocusAttribute();
        addImageClockListeners();
    }
    
    // Function to add tabindex attribute to images
    function addTabFocusAttribute() {
        var images = document.getElementsByClassName("preview");
        for (var i = 0; i < images.length; i++) {
            images[i].setAttribute("tabindex", i + 1);
        }
    }
                
    window.onload = onLoadFunction;