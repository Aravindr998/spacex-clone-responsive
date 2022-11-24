let flag=0;
function closeButton() {
  if(flag==0){
    document.getElementById("bar1").style.transform = 'matrix(0.7071, 0.7071, -0.7071, 0.7071, 0, 4)';
    document.getElementById("bar2").style.width = '0%';
    document.getElementById("bar2").style.transform = 'matrix(1, 0, 0, 1, 8, 0)';
    document.getElementById("bar3").style.transform = 'matrix(0.7071, -0.7071, 0.7071, 0.7071, 0, -4)';
    document.getElementById("sidebar").style.width = '21.875rem';
    document.getElementById("sidebar").style.paddingRight = '2rem';
    const sideBar = document.getElementsByClassName('sidebar-text')
    for(i=0;i<sideBar.length;i++){
      sideBar[i].style.opacity = '1';
      sideBar[i].style.marginTop = '0';
    }
    // document.getElementById("sidebar").style.visibility = 'visible';
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
    // document.getElementById("sidebar").style.visibility = 'hidden';
    flag=0;
  }
}
// function moveUp(){
//   document.getElementById('load-transition').style.opacity = '1';
//   document.getElementById('load-transition').style.transform = 'translateY(0)';
// }