$(document).ready(function() {
    var wow = new WOW();
    wow.init();
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

    // nav toggle
    let opener=$("#open")
    let close=$("#close")
    let mobile=$("#mobile-dropdown")
    opener.click(
        function(){
            mobile.toggleClass("d-none")
            opener.toggleClass("d-none")
        }
    )
    close.click(
        function(){
            mobile.toggleClass("d-none")
            opener.toggleClass("d-none")
        }
    )

    //chart

    const ctx = document.getElementById('chart');
    const myChart = new Chart(ctx, {
        type: 'pie',
        options: {
            cutout:'70%',
            plugins: {
              htmlLegend: {
                // ID of the container to put the legend in
                containerID: 'legend-container',
              },
              legend: {
                display: false,
              }
            }
          },
        data: {
            labels: [
              'NFT Competition',
              'Community Airdrops',
              'Token for Staking',
              'Liquidity Provider',
              'Grant Program',
              'Team Members'
            ],
            datasets: [{
              label: 'My First Dataset',
              data: [20, 20, 15, 10, 20, 5],
              backgroundColor: [
                '#2ecc71',
                '#f1c40f',
                '#3498db',
                '#e67e22',
                '#e74c3c',
                '#2c3e50'
              ],
              hoverOffset: 6
            }]
          }
        })
})