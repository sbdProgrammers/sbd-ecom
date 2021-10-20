/* Scroll Change Add / Remove Class */
window.onscroll = function() {
    let nav = document.getElementById('content-root');
    if ( window.pageYOffset > 78 ) {
        nav.classList.add("scrollNav");
    }
    else {
        nav.classList.remove("scrollNav");
    }
}

function ShowModal() {
    console.log("oh okk")
}