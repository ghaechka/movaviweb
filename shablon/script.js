let links = document.querySelectorAll("nav a");

// body.addEventListener('onload', getlink);

let path = window.location.pathname;
ids = path.lastIndexOf('/');
iddot = path.lastIndexOf('.');
path = path.substring(ids, iddot);
for (let link of links){
    let attr = link.getAttribute("href");
     if (path == attr) {
         console.log('ok')
         link.classList.add('active');
     }
}
console.log(path);
