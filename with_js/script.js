// Function to check the window width and show data
function checkWindowWidth() {
    var windowWidth = window.innerWidth;
    showData(windowWidth);
}


// Function to create para inside the row-item to show details
function showData(winWidth) {

    let updateData = null;

    // Check if paragraph already exists
    if (document.getElementsByClassName('data')) {
        updateData = document.getElementsByClassName('data');
    }

    // If a paragraph already exists, update it's content
    if  (updateData) {
        if (winWidth >= 992) {
            updateData.innerHTML = `<code>current window (${winWidth}): >= 992<br />col-lg-4</code>`;
        }
        else if (winWidth >= 768 && winWidth <= 991) {
            updateData.innerHTML = `<code>current window (${winWidth}): 768 - 991<br />col-md-8</code>`;
        }
        else if (winWidth >= 576 && winWidth <= 767) {
            updateData.innerHTML = `<code>current window (${winWidth}): 576 - 767<br />col-sm-12</code>`;
        }
    }


    // If no paragraph exists, create a new and add to div
    if (winWidth >= 992) {
        const para = document.createElement("p");
        para.innerHTML = `<code>current window (${winWidth}): >= 992<br />col-lg-4</code>`;
        para.classList.add = "data"
        document.getElementsByClassName('info-one').appendChild(para);
    } 
    else if (winWidth >= 768 && winWidth <= 991) {
        const para = document.createElement("p");
        para.innerHTML =  `<code>current window (${winWidth}): 768 - 991<br />col-md-8</code>`;
        para.classList.add = "data"
        document.getElementsByClassName('info-one').appendChild(para);
    }
    else if (winWidth >= 576 && winWidth <= 767) {
        const para = document.createElement("p");
        para.innerHTML =  `<code>current window (${winWidth}): 576 - 767<br />col-sm-12</code>`;
        para.classList.add = "data"
        document.getElementsByClassName('info-one').appendChild(para);
    }
} 


// Constantly check the window width every 500 milliseconds (0.5 seconds)
var intervalID = setInterval(checkWindowWidth, 50000);
