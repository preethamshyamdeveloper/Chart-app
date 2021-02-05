
let theme = localStorage.getItem('theme');

if(theme == null){ 
    theme='light';
    themeSwitcher();
}else{
    themeSwitcher();
}

document.addEventListener('fullscreenchange', ()=> {
    let full_screen_element = document.fullscreenElement
    || document.mozFullScreenElement
    || document.webkitFullscreenElement;
    let msg;
    if(full_screen_element !== null){
        console.log('Page has entered fullscreen mode');
    }    
	else{
        console.log('Page has exited fullscreen mode');
        msg = 'Exited fullscreen mode.';
        snackBar(msg);
    }
});

let themeDots = document.getElementsByClassName('theme-dot');

for(let i=0;i<themeDots.length;i++){
    themeDots[i].addEventListener('click',themeSwitcher);
}

/* Get the element you want displayed in fullscreen */ 
//var elem = document.getElementById('window-panel');
var elem = document.documentElement

function themeSwitcher(){  
    let mode='';
   
    if(this.dataset){
        console.log(this.dataset);
        mode = this.dataset.mode;
    }else{
        mode=theme;
    }
    switch(mode){
        case 'light':
        default: {
            document.getElementById('theme-style').href ='default.css';
            localStorage.setItem('theme',mode);
        }
        break;
        case 'blue': {
            document.getElementById('theme-style').href ='blue.css';
            localStorage.setItem('theme',mode);
        }
        break;
        case 'green':{
            document.getElementById('theme-style').href ='green.css';
            localStorage.setItem('theme',mode);
        }
        break;
        case 'purple':{
            document.getElementById('theme-style').href ='purple.css';
            localStorage.setItem('theme',mode);
        };
        break;
    }
}

/* Function to open fullscreen mode */
function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen().catch((error)=>{
        console.log("error",error);
    });;
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen().catch((error)=>{
        console.log("error",error);
    });;
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen().catch((error)=>{
        console.log("error",error);
    });;
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem = window.top.document.body; //To break out of frame in IE
      elem.msRequestFullscreen().catch((error)=>{
        console.log("error",error);
    });;
    }
  }

  /* Function to close fullscreen mode */
function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen().catch((err)=>{
          console.log("Already in non fullscreen mode",err);
        let  msg = 'Already Exited fullscreen mode.';
        snackBar(msg);
      });
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen().catch((err)=>{
        console.log("Already in non fullscreen mode",err);
    });;
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen().catch((err)=>{
        console.log("Already in non fullscreen mode",err);
    });;
    } else if (document.msExitFullscreen) {
      window.top.document.msExitFullscreen().catch((err)=>{
        console.log("Already in non fullscreen mode",err);
    });;
    }
  }


function snackBar(msg) {
    console.log("message",msg);
    var x = document.getElementById("snackbar");
    x.innerHTML = msg;
    x.className = "show";
    setTimeout(() =>{
         x.className = x.className.replace("show", ""); 
        }, 3000);
  }



