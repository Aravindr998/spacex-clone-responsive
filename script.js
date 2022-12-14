let flag=0;
function closeButton() {
  if(flag==0){
    var w = window.innerWidth;
    document.getElementById("bar1").style.transform = 'matrix(0.7071, 0.7071, -0.7071, 0.7071, 0, 4)';
    document.getElementById("bar2").style.width = '0%';
    document.getElementById("bar2").style.transform = 'matrix(1, 0, 0, 1, 8, 0)';
    document.getElementById("bar3").style.transform = 'matrix(0.7071, -0.7071, 0.7071, 0.7071, 0, -4)';
    if(w<768){
      document.getElementById("sidebar").style.width = '70%';
    }
    else{
      document.getElementById("sidebar").style.width = '21.875rem';
    }
    document.getElementById("sidebar").style.paddingRight = '2rem';
    const sideBar = document.getElementsByClassName('sidebar-text')
    for(i=0;i<sideBar.length;i++){
      sideBar[i].style.opacity = '1';
      sideBar[i].style.marginTop = '0';
    }
    flag=1;
  }else{
    document.getElementById("bar1").style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
    document.getElementById("bar2").style.width = '100%';
    document.getElementById("bar2").style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
    document.getElementById("bar3").style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
    document.getElementById("sidebar").style.width = '0rem';
    document.getElementById("sidebar").style.paddingRight = '0rem';
    const sideBar = document.getElementsByClassName('sidebar-text')
    for(i=0;i<sideBar.length;i++){
      sideBar[i].style.opacity = '0';
      sideBar[i].style.marginTop = '0.5rem';
    }
    flag=0;
  }
}
function moveUp(){
  document.getElementById('load-transition-1').style.opacity = '1';
  document.getElementById('load-transition-1').style.transform = 'translateY(0)';
  document.getElementById('load-transition-2').style.opacity = '1';
  document.getElementById('load-transition-2').style.transform = 'translateY(0)';
  document.getElementById('load-transition-3').style.opacity = '1';
  document.getElementById('load-transition-3').style.transform = 'translateY(0)';
}


