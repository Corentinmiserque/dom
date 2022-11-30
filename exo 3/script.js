const title = document.querySelectorAll('.important')

title.forEach((important) => {
    important.setAttribute("title","This is an important item."); 
  })

/**/ 

const img= document.querySelectorAll("img");

img.forEach(img => {
    if (!img.classList.contains("important")) {
        img.style.display = "none";
    }
});

const paragraphe = document.querySelectorAll("p");

paragraphe.forEach(p => {
    console.log(p.textContent);
    if (p.className) {
        console.log("Class name: " + p.className);
    }
});


const color = document.querySelectorAll("p") ;

color.forEach( p => {
    if (!color.classList.contains("important")) 
     style.color = random_color;
    })




function random_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var randomColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(randomColor);

    }

random_color();




