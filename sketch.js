let canvas; 
let Room, Camera, Mirror, Shell;
let tooltip;

  function preload() {
    Room = loadImage("/Images/EUI_Project_1_Background - pre finished project.png");
    Camera = loadImage("/Images/Camera Item Big.png");
    Mirror = loadImage("/Images/EUI_Project_1_Mirror.png");
    Shell = loadImage("/Images/EUI_Project_1_Shell.png");
  }

  function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight); //Create a canvas that is the size of the window
    canvas.position(0, 0); //Set the position of the canvas to (0, 0)
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');

    //Mouse Pressed over Objects
    Camera.mousePressed(() => {
      goToDifferentPage();
    });

    Mirror.mousePressed(() => {
      goToDifferentPageTwo();
    });

    Shell.mousePressed(() => {
      goToDifferentPageThree();
    });
  }

  //Different Pages
  function goToDifferentPage(){
    window.location.href = "http://127.0.0.1:3000/ItemOnePage/item-one.html";
  }

  function goToDifferentPageTwo(){
    window.location.href = "http://127.0.0.1:3000/ItemTwoPage/item-two.html";
  }

  function goToDifferentPageThree(){
    window.location.href = "http://127.0.0.1:3000/ItemThreePage/item-three.html";
  } 

  function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight); //Resize the canvas to the size of the window
    mouseX = width/2;
    mouseY = height/2;
  }


  //Event listeners to set up object's tooltips
  document.addEventListener('DOMContentLoaded', (event) => {
    const cameraObject = document.getElementById('cameraObject');
    const mirrorObject = document.getElementById('mirrorObject');
    const shellObject = document.getElementById('shellObject');
    const tooltip = document.getElementById('tooltip');
  
    // Tooltip for cameraObject
    cameraObject.addEventListener('mouseover', (e) => {
      tooltip.innerHTML = 'I shutter and I click and a snap a pic'; // Set the tooltip text
      tooltip.style.display = 'block';
      tooltip.style.left = `${e.pageX + 2}px`;
      tooltip.style.top = `${e.pageY + 2}px`;
    });
  
    cameraObject.addEventListener('mousemove', (e) => {
      tooltip.style.left = `${e.pageX + 2}px`;
      tooltip.style.top = `${e.pageY + 2}px`;
    });
  
    cameraObject.addEventListener('mouseout', () => {
      tooltip.style.display = 'none';
    });
  
    // Tooltip for mirrorObject
    mirrorObject.addEventListener('mouseover', (e) => {
      tooltip.innerHTML = 'Mirror Mirror on the wall...'; // Set the tooltip text
      tooltip.style.display = 'block';
      tooltip.style.left = `${e.pageX + 2}px`;
      tooltip.style.top = `${e.pageY + 2}px`;
    });
  
    mirrorObject.addEventListener('mousemove', (e) => {
      tooltip.style.left = `${e.pageX + 2}px`;
      tooltip.style.top = `${e.pageY + 2}px`;
    });
  
    mirrorObject.addEventListener('mouseout', () => {
      tooltip.style.display = 'none';
    });
  
    // Tooltip for shellObject
    shellObject.addEventListener('mouseover', (e) => {
      tooltip.innerHTML = 'Swooshhhhh... Mr. Krabs?'; // Set the tooltip text
      tooltip.style.display = 'block';
      tooltip.style.left = `${e.pageX + 2}px`;
      tooltip.style.top = `${e.pageY + 2}px`;
    });
  
    shellObject.addEventListener('mousemove', (e) => {
      tooltip.style.left = `${e.pageX + 2}px`;
      tooltip.style.top = `${e.pageY + 2}px`;
    });
  
    shellObject.addEventListener('mouseout', () => {
      tooltip.style.display = 'none';
    });
  });


    
