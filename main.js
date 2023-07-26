let stars =document.getElementById('stars');
let moon =document.getElementById('moon');
let mountains3 =document.getElementById('mountains3');
let mountains4 =document.getElementById('mountains4');
let boat6 =document.getElementById('boat6');
let river5 =document.getElementById('river5');
let Amine =document.querySelector('Amine');
window.onscroll = function(){
    let value =scrollY;
    stars.style.left = value  + 'px';
    moon.style.top = value * 2 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1,5 + 'px';
    river5.style.top = value + 'px';
    boat6.style.top = value + 'px';
    boat6.style.left = value  + 'px';
    Amine.style.fontSize = value + 'px';
    if (scrollY >= 67){
        Amine.style.fontSize = 67 + 'px';
        Amine.style.position  = 'fixed';
        if (scrollY >= 478){
            Amine.style.display = 'none';
        }
        else{
            Amine.style.display = 'block';
        }
        if(scrollY >= 127){
            document.querySelector('.main').style.background = 'linear-gradient(#2873F5,#182E6E)'
        }
        else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)'
        }
    }
}
