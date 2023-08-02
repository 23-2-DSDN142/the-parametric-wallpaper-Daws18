//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


//DEVELOP_GLYPH
//GRID_WALLPAPER

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print
    //true to show outline 
  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(165, 230, 250); //light baby blue colour 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  fill(0);
  ellipse(100, 100, 61, 46); //head border oval
  rect(80, 110, 31, 41);// head border rectangle 
  noStroke();
  fill(255);
  ellipse(100, 100, 60, 45); //head oval 
//ellipse(x, y, w, [h])


rect(80, 110, 30, 40);// head rectangle 
stroke(12, 13, 12); //mouth  
strokeWeight(2);
rect(85, 125, 20, 20);

fill(0);
ellipse(85, 100, 10, 15);//left eye 
ellipse(105, 100, 10, 15);//right eye 

fill(200)
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


fill(252, 69, 3)//red petal 
ellipse(67, 87, 8, 19); //flower petal vertical  
ellipse(67, 87, 19, 8); //flower petal horizontal 
fill(252, 186, 3) //yellow cntre  
ellipse(67, 87, 8, 8); //flower centre 

fill(235, 122, 233) //pink 
ellipse(75, 110, 8, 8) //cheek highlight 

}
