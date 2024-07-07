// Function to check the window width and show data
function checkWindowWidth() {
    var screenWidth = screen.width;
    showData(screenWidth);
}


// Function to create para inside the row-item to show details
function showData(screenWidth) {

    let updateData = document.querySelector('.info-one .data');

    // Check if paragraph already exists
    // if (document.getElementsByClassName('data').length > 0) {
    //     updateData = document.getElementsByClassName('data')[0];
    // }

    // If a paragraph already exists, update it's content
    if  (updateData) {
        if (screenWidth >= 992) {
            updateData.innerHTML = `<code>current window (${screenWidth}): >= 992<br />col-lg-4</code>`;
        }
        else if (screenWidth >= 768 && screenWidth <= 991) {
            updateData.innerHTML = `<code>current window (${screenWidth}): 768 - 991<br />col-md-8</code>`;
        }
        else if (screenWidth >= 576 && screenWidth <= 767) {
            updateData.innerHTML = `<code>current window (${screenWidth}): 576 - 767<br />col-sm-12</code>`;
        }
        else {
            updateData.innerHTML = `<code>current window (${screenWidth}): <br />has no specific class</code>`;
        }
    }

    else {
        // If no paragraph exists, create a new and add to div
        const para = document.createElement("p");
        if (screenWidth >= 992) {
            para.innerHTML = `<code>current window (${screenWidth}): >= 992<br />col-lg-4</code>`;      
        } 
        else if (screenWidth >= 768 && screenWidth <= 991) {
            para.innerHTML =  `<code>current window (${screenWidth}): 768 - 991<br />col-md-8</code>`;
        }
        else if (screenWidth >= 576 && screenWidth <= 767) {
            para.innerHTML =  `<code>current window (${screenWidth}): 576 - 767<br />col-sm-12</code>`;
        }
        para.classList.add('data');
        document.querySelector('.info-one').appendChild(para);
    }
} 


// Constantly check the window width every 500 milliseconds (0.5 seconds)
var intervalID = setInterval(checkWindowWidth, 500);
