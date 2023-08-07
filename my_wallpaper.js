//your parameter variables go here!
let Back_ground = [0]; 
let pupil_colour = [255]; 
let petal_colour =  [235, 84, 212]// [21, 125, 49]; 
let top_hat_colour = [0];
let dot_colour = [0];
let cheek_highlight = [255];
let skull_face_colour = [150, 5, 240];
let removeHat = true //if false hat disappears
let removeFlower = false //if false flowers disappear
//[165, 230, 250]; blue 
//[237, 134, 31] orange 
//pastel red [240, 70, 70]
//red [250, 42, 15] 
//DEVELOP_GLYPH
//GRID_WALLPAPER

//NINE_PORTRAIT
function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(false); //set this to false when you're ready to print
    //true to show outline 
  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(Back_ground); //light baby blue colour [165, 230, 250]
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 
  fill(0);
  ellipse(100, 100, 61, 46); //head border oval
  rect(80, 110, 31, 41);// head border rectangle 
  noStroke();
  fill(skull_face_colour);
  ellipse(100, 100, 60, 45); //head oval 


rect(80, 110, 30, 40);// head rectangle 
stroke(12, 13, 12); //mouth  
strokeWeight(2);
fill(255)
rect(85, 125, 20, 20); //mouth lips border 

fill(0);
ellipse(85, 100, 10, 15);//left eye 
ellipse(105, 100, 10, 15);//right eye 

fill(pupil_colour)
ellipse(85, 100, 10, 10);//left eye shadow
ellipse(105, 100, 10, 10);//right eye shadow

strokeWeight(1);
line(95, 125, 95, 145);//teeth first line left 
line(90, 125, 90, 145);//teeth middle line  
line(100, 125, 100, 145);//teeth last line right 
line(85, 135, 105, 135);//teeth horrizontal line 

fill(0)
ellipse(90, 115, 2, 5);// nostril
ellipse(95, 115, 2, 5);// nostril


fill(cheek_highlight); //pink 235, 122, 233
ellipse(78, 110, 8, 8); //left cheek highlight 
ellipse(113, 110, 8, 8); //right cheek highlight 


fill(dot_colour) //black
ellipse(95, 87, 8, 8); //middle dot design 
ellipse(105, 87, 4, 4); //right dot design
ellipse(112, 87, 4, 4);// 2nd right dot design 
ellipse(85, 87, 4, 4); //left dot design 
ellipse(78, 87, 4, 4); //1st left dot design 

if(removeHat){
noStroke();//top hat
fill(top_hat_colour)
beginShape(); //brim 
vertex(70, 80);
vertex(70, 70);
vertex(125, 75);
vertex(125, 85);
endShape(CLOSE);

//top hat 
beginShape(); //top
vertex(80, 80);
vertex(80, 50);
vertex(117, 55);
vertex(117, 80);
endShape(CLOSE);
}
draw_flower(67,87)//flower on left postion on skull
draw_flower(117,87)//flower on right postion on skull
}
if (Back_ground[0] === 0) {
  top_hat_colour = [255]; // Change top_hat_colour to white (255)
} else {
  top_hat_colour = [0];   // Revert to original color (black) if Back_ground is not 0
}
function draw_flower(x,y){
  
  if (removeFlower){
  fill(petal_colour)// petal colour prameter 
  stroke(0); //flower border colour  
  strokeWeight(1); //flower border 
  ellipse(x, y, 8, 19); //flower petal vertical  
  ellipse(x, y, 19, 8); //flower petal horizontal 
  fill(252, 186, 3) //yellow cntre  
  ellipse(x, y, 8, 8); //flower centre 
  }
}