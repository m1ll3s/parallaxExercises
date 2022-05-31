 let carro = document.getElementById('carro');
 let estrada = document.getElementById('estrada');

 window.addEventListener('scroll',function(){
     let value = window.scrollY;
     carro.style.left = value * 0.5 + 'px';
     carro.style.left = value * -0.5 + 'px';
 })
