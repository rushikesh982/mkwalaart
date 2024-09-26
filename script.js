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
// let a = document.getElementsByClassName('search-box')

// let b = document.getElementsByClassName('close')

gsap.from('.card',{
    y:100,
    opacity:0,
    duration:.1,
    delay:.1,
    color:'purple',
    stagger:1,
    // markers:true,
    scrollTrigger:{
        trigger:'.card-box',
        scroller:'body',
        // markers:true,
        start:'top 60%'
    }
})
