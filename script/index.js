$(document).ready(function() {
    /* let toggler=document.getElementById("toggler");
    let clickCounter=0;
    let togglerIcon=document.getElementsByClassName("toggler-icon")
    console.log(togglerIcon)

    toggler.addEventListener("click", function(){
        clickCounter+=1
        if (clickCounter==2){
            clickCounter=0;
        }
        console.log(clickCounter)
        if (clickCounter==1){
            togglerIcon[0].style.display="none";
            togglerIcon[1].style.display="block";
        }
        if (clickCounter==0){
            togglerIcon[1].style.display="none";
            togglerIcon[0].style.display="block";
        }
    }) */
    // Add smooth scrolling to all links
  $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 500, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
        } // End if
    })

    // nav toggle
    let opener=$("#open")
    let close=$("#close")
    let mobile=$("#mobile-dropdown")
    opener.click(
        function(){
            mobile.toggleClass("d-none")
        }
    )
    close.click(
        function(){
            mobile.toggleClass("d-none")
        }
    )
})