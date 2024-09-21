function slideani()
{
    gsap.from('#slideImg',{
        scale:1.2,
        duration:3,
        dealy:2
    })
    gsap.from('.empty1 span',{
        y:80,
        opacity:0,
        duration:3,
        delay:0.5,
        stagger:1
    })
}
slideani()
let a = document.getElementsByClassName('search-box')

let b = document.getElementsByClassName('close')

\