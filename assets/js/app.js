//navabar_current
var ul = document.querySelectorAll('.nav a');
// console.log(ul.length);
ul.forEach(item=>{
    item.addEventListener('click', (event) => {
        event.preventDefault();
        if(item.classList == 'current'){
            //item.classList.remove('current')
        }else{
            ul.forEach(item=>{
                if(item.classList == 'current'){
                    item.classList.remove('current');
                }
            });
            item.classList = 'current';
            var id = item.id;
           var secname = id.charAt(id. length-1);
            location.href = "#"+secname;
        }


})
});

//downloadCV


//counter
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 200;
    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 10);
    } else counter.innerText = target + '+';
  };
  updateCounter();
});

//navabar_scroll Ui-Design

document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 150) {
          document.getElementById('navbar_top').classList.add('navtop');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.nav').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('navtop');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 
//responsive:mobile
var menulist = document.getElementById("menulist");

menulist.style.maxHeight = "0px";
function togglemenu(){
    if(menulist.style.maxHeight == "0px")
    {
        menulist.style.maxHeight = "220px";
        document.getElementById("menuimg").src = "../images/close.png";
    }else{
        menulist.style.maxHeight = "0px";
        document.getElementById("menuimg").src = "../images/menu.png";
    }
}




//div four nav current and block
var navbtn = document.querySelectorAll('#divthreenav button');
// console.log(navbtn.length);
navbtn.forEach(item=>{
    item.addEventListener('click', (event) => {
        event.preventDefault();
        if(item.classList == 'current'){
            //item.classList.remove('current')
        }else{
            navbtn.forEach(item=>{
                if(item.classList == 'current'){
                    item.classList.remove('current');
                }
            });
            item.classList = 'current';
            if(item.id == 'personal'){
                document.getElementById('pb1').style.display = 'block';
                document.getElementById('pb2').style.display = 'none';
                document.getElementById('pb3').style.display = 'none';
                document.getElementById('pb4').style.display = 'none';
                document.getElementById('pb5').style.display = 'block';
                document.getElementById('pb6').style.display = 'block';
            }
            if(item.id == 'professional'){
                document.getElementById('pb1').style.display = 'none';
                document.getElementById('pb2').style.display = 'block';
                document.getElementById('pb3').style.display = 'none';
                document.getElementById('pb4').style.display = 'block';
                document.getElementById('pb5').style.display = 'none';
                document.getElementById('pb6').style.display = 'block';
            }
            if(item.id == 'all'){
                document.getElementById('pb1').style.display = 'block';
                document.getElementById('pb2').style.display = 'block';
                document.getElementById('pb3').style.display = 'block';
                document.getElementById('pb4').style.display = 'block';
                document.getElementById('pb5').style.display = 'block';
                document.getElementById('pb6').style.display = 'block';
            }
        }


})
});
