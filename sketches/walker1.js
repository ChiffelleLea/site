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
  frameRate(200);
}

class Walker
{
  int x,y;
  int d = 15;

  Walker()
  {
    x = width/2;
    y = height/2;
  }

  void display()
  {
    stroke(1);
    fill(255);
    rect(x,y,d,d);
  }

  void walk()
  {
    int choice = int(random(4));

    if (choice == 0) {
      x++;
      x++;
    } else if (choice == 1) {
      x--;
      x--;
    } else if (choice == 2) {
      y++;
      y++;
    } else {
      y--;
      y--;
    }

    x = constrain(x, 0, width-d);
    y = constrain(y, 0, height-d);
  }
}
