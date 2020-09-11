var button = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var modal = document.querySelector(".secondModal");
var modal2 = document.querySelector(".thirdModal");
var backdrop = document.querySelector('.back');
var ok = document.querySelector(".modal__action--negative");
var ok2 = document.querySelector("#ok2");
var ok3 = document.querySelector("#ok3"); 
var ok4 = document.querySelector("#ok4"); 
var ok5 = document.querySelector("#ok5"); 
var ok6 = document.querySelector("#ok6"); 
var ok7 = document.querySelector("#ok7"); 
var ok8 = document.querySelector("#ok8"); 
var ok9 = document.querySelector("#ok9"); 
var ok10 = document.querySelector("#ok10"); 
var ok11 = document.querySelector("#ok11"); 
var ok12 = document.querySelector("#ok12"); 
var ok13 = document.querySelector("#ok13"); 
var go1 = document.querySelector("#go1");
var go2 = document.querySelector("#go2");

var heart = document.querySelector(".heart");
var kidney = document.querySelector(".kidney");
var stomach = document.querySelector(".stomach");
var eye = document.querySelector(".eye");
var bone = document.querySelector(".bone");
var brain = document.querySelector(".brain");
var lungs = document.querySelector(".lungs");
var liver = document.querySelector(".liver");
var throat = document.querySelector(".throat");
var contri = document.querySelector(".contri");
var organ = document.querySelector(".organ");
var heartModal = document.querySelector(".heartModal");
var kidneyModal = document.querySelector(".kidneyModal");
var stomachModal = document.querySelector(".stomachModal");
var eyeModal = document.querySelector(".eyeModal");
var boneModal = document.querySelector(".boneModal");
var brainModal = document.querySelector(".brainModal");
var lungsModal = document.querySelector(".lungsModal");
var liverModal = document.querySelector(".liverModal");
var throatModal = document.querySelector(".throatModal");
var contriModal = document.querySelector(".contriModal");
var organModal = document.querySelector(".organModal");


heart.addEventListener('click',function(){
  heartModal.style.display="block";
  backdrop.style.display="block"
})
kidney.addEventListener('click',function(){
  kidneyModal.style.display="block";
  backdrop.style.display="block"
})
stomach.addEventListener('click',function(){
  stomachModal.style.display="block";
  backdrop.style.display="block"
})
eye.addEventListener('click',function(){
  eyeModal.style.display="block";
  backdrop.style.display="block"
})
bone.addEventListener('click',function(){
  boneModal.style.display="block";
  backdrop.style.display="block"
})
brain.addEventListener('click',function(){
  brainModal.style.display="block";
  backdrop.style.display="block"
})
lungs.addEventListener('click',function(){
  lungsModal.style.display="block";
  backdrop.style.display="block"
})
liver.addEventListener('click',function(){
  liverModal.style.display="block";
  backdrop.style.display="block"
})
throat.addEventListener('click',function(){
  throatModal.style.display="block";
  backdrop.style.display="block"
})
go1.addEventListener('click',function(){
  organModal.style.display="block";
  backdrop.style.display="block"
})
go2.addEventListener('click',function(){
  contriModal.style.display="block";
  backdrop.style.display="block"
})

button.addEventListener('click',function(){
  modal.style.display="block";
  backdrop.style.display="block"
});
button2.addEventListener('click',function(){
  modal2.style.display="block";
  backdrop.style.display="block"
});
ok.addEventListener('click',function(){
  modal.style.display="none";
  backdrop.style.display="none"
});
ok2.addEventListener('click',function(){
  modal2.style.display="none";
  backdrop.style.display="none"
});
ok4.addEventListener('click',function(){
  kidneyModal.style.display="none";
  backdrop.style.display="none"
});
ok5.addEventListener('click',function(){
  stomachModal.style.display="none";
  backdrop.style.display="none"
});
ok7.addEventListener('click',function(){
  boneModal.style.display="none";
  backdrop.style.display="none"
});
ok6.addEventListener('click',function(){
  eyeModal.style.display="none";
  backdrop.style.display="none"
});
ok8.addEventListener('click',function(){
  brainModal.style.display="none";
  backdrop.style.display="none"
});
ok3.addEventListener('click',function(){
  heartModal.style.display="none";
  backdrop.style.display="none"
});
ok9.addEventListener('click',function(){
  lungsModal.style.display="none";
  backdrop.style.display="none"
});
ok10.addEventListener('click',function(){
  liverModal.style.display="none";
  backdrop.style.display="none"
});
ok11.addEventListener('click',function(){
  throatModal.style.display="none";
  backdrop.style.display="none"
});
ok13.addEventListener('click',function(){
  organModal.style.display="none";
  backdrop.style.display="none"
});
ok12.addEventListener('click',function(){
  contriModal.style.display="none";
  backdrop.style.display="none"
});

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    //Toggle Nav
    burger.addEventListener('click', ()=>{
      nav.classList.toggle('nav-active');
      
      //Animate Links
      navLinks.forEach((link, index)=>{
        if(link.style.animation){
          link.style.animation = ''
        }else{
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
  
        }
      });
      
      //burger animation
      burger.classList.toggle('toggle');
      
      
    });
    
    
    
    
  }
  
  navSlide();

