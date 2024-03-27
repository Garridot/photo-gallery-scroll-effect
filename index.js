// CURSOR //

var cursor         = document.querySelector(".cursor");
var cursorFollower = document.querySelector(".cursor-follower");

var posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function() {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(cursorFollower, {
            css: {
                left: posX - 20,
                top: posY - 20
            }
        });
        TweenMax.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        });
    }
});

window.addEventListener("mousemove", function(e) {
    
    mouseX = e.pageX;
    mouseY = e.pageY;
});

window.addEventListener('click', () => {
    cursorFollower.classList.add("click");
    cursor.classList.add("click");

    setTimeout(() => {
        cursorFollower.classList.remove("click");
        cursor.classList.remove("click");
    }, 500)
})


// TITLE PAGE //

var titles = document.querySelectorAll(".title-page h1");
titles[0].style.top = 0;
titles[1].style.bottom = 0;

// IMAGES //

const imagesList = [
    [
        "https://image.tokion.jp/wp-content/uploads/2021/11/ST_007-scaled.jpg",
        "https://w0.peakpx.com/wallpaper/222/600/HD-wallpaper-anri-timely-1980-city-pop-japan-japanese-jpop.jpg",
        "https://cdn.gethypervisual.com/images/shopify/778ca9ba-4401-4a4c-a175-51fb3ba37c51/w1200_db0d_Steeltown-Garage-Bosozoku-Motorcycle-2.jpg",
    ],
    [
        "https://i.shgcdn.com/04aa51e3-26d9-4faa-8c03-ab61b59d0d00/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
        "https://mymodernmet.com/wp/wp-content/uploads/2017/06/traditional-japanese-tattoo-1.jpg",
        "https://cdn11.bigcommerce.com/s-5xebt25/images/stencil/original/products/10142/29450/3677-1000px__78109.1576634184.jpg?c=2",
    ],
    [
        "https://i.pinimg.com/736x/c4/32/64/c43264e70c562d5d90843353e0494685.jpg",
        "https://s3.amazonaws.com/criterion-production/editorial_content_posts/hero/7325-/jvjaaMJWNfT1KeDsegigW8SAkIs15K_original.jpg",
        "https://pbs.twimg.com/media/FhqceR6XwAE8zqg.jpg:large",
    ]
]



// Scroll Effects For Gallery 1 //

const gallery_1 = document.querySelector(".scroll-effect.--1 .gellery--");

imagesList.forEach( images =>{

    var col = document.createElement("div");
    col.className = "col--"; 

    images.forEach(img =>{

        var row = document.createElement("div");
        row.className = "row--";        
        row.innerHTML = `<img src="${img}" alt="">`; 
        
        col.appendChild(row);       
        
    })

    gallery_1.appendChild(col);
    
})


const cols  = gallery_1.querySelectorAll(".col--");

const scrollEffect1 = (scrollY)=>{
    
    const scrollPosition = scrollY / 3 ;     

    cols.forEach((col, index)=>{   

        col.style.transform = "translate(0%)"; 
        
        const delay = index === 0 ? 0 : index / 25; // First element moves immediately, others have a delay
        
        col.style.transform = "translate(0%, -"+ scrollPosition + "px)"; 
        col.style.transitionDelay = delay + "s";

    })

    if (scrollY == 0) {

        cols[0].style.transform = "translate(100%, -"+ scrollPosition + "px)";   
        cols[2].style.transform = "translate(-100%,-"+ scrollPosition + "px)";
    }    

}

window.addEventListener("scroll",i=>{    

    // Move elements based on the scroll position
    var scrollY = window.scrollY

    scrollEffect1(scrollY);
    
})
