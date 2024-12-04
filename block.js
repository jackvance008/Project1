class Block
{
  constructor(x, y)
  {
    this.x = x;
    this.y = y;
    this.size = 20;

    this.velocity_x = 0;
    this.velocity_y = 0;
  }

  draw()
  {
    c.beginPath();
    c.rect(this.x, this.y, this.size, this.size);
    c.fillStyle = "black";
    c.fill();
  }

  update()
  {
    this.x += this.velocity_x;
    this.y += this.velocity_y;

    if(this.velocity_x > 0)
    {
      this.velocity_x -= 0.3;
    }
    if(this.velocity_x < 0)
    {
      this.velocity_x += 0.3;
    }
    if(this.velocity_y > 0)
    {
      this.velocity_y -= 0.3;
    }
    if(this.velocity_y < 0)
    {
      this.velocity_y += 0.3;
    }
  }

  moveUp()
  {
    this.velocity_y -= 0.7;
  }

  moveDown()
  {
    this.velocity_y += 0.7;
  }

  moveLeft()
  {
    this.velocity_x -= 0.7;
  }

  moveRight()
  {
    this.velocity_x += 0.7;
  }
}
