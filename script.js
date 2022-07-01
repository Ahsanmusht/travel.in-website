let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}


document.querySelectorAll('.about .video-containers .controls .control-btn').forEach(btn =>{
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src');

        document.querySelector('.about .video-containers .video').src = src;   
    }
})