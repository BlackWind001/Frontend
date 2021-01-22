let resources = [
    'https://www.smashingmagazine.com/2018/05/guide-css-layout/',
    'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning'
];

window.onload = (event) => {
    let fixed_elements = document.querySelectorAll('.is_fixed');
    fixed_elements.forEach((v)=>{
        v.addEventListener('click',(e)=>{
            let target = e.target;
            target.classList.toggle('fixed');
        })
    })
}

resources.forEach((v)=>{
    console.log(v);
});