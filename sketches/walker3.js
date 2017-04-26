Walker w;

void setup()
{
  size(640,360);
  w = new Walker();
  background(255);
}

void draw()
{
  w.walk();
  w.display();
}

class Walker
{
  int x,y;
  int d = 10;

  Walker()
  {
    x = width/2;
    y = height/2;
  }

  void display()
  {
    stroke(1);
    fill(random(0,250));
    rect(x,y,d,d);
  }

  void walk()
  {
    int choice = int(random(4));

    if (choice == 0) {
      x = x+10;
    } else if (choice == 1) {
      x = x-10;
    } else if (choice == 2) {
      y = y+10;
    } else {
      y = y-10;
    }

    /* jumping
    int choice = int(random(2));

    if (choice == 0) {
      x = random(640-d);
    }else {
      y = random(360-d);
    }
    */

    x = constrain(x, 0, width-d);
    y = constrain(y, 0, height-d);
  }
}
