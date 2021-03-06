export default function sketch(p){
    let canvas;
    let water;

    let story = "I used to love blueberries without hesitation. As a child, I drank blueberries like water, positioning the cup perpendicular to my head so that blueberries tumbled into my gaping mouth. I always kept a box of blueberries in the fridge, its’ dark blue orbs welcoming and smiling at us when our stomachs churned for a midnight snack. But then, I started eating blueberries more slowly, less impetuously. And when I observed the blueberry as I ate, I started to notice that all too often, there was a small inconspicuous white speck on the underside of the blueberry. That small white speck was the beginning of mold. I tried not to care about this small speck of mold. After all, our stomachs are literally a pool of acid. Yet, everytime I attempted to swallow a blueberry with a small white speck, I thought about the rare occasions in which I would shake a box of blueberries and find a whole group of blueberries at the bottom of the container encased in furry white mold and beyond saving. And I wonder whether mold grows like cancer or like a virus. Or perhaps it’s just a matter of which takes hold first: the white speck resting deep inside you or the white speck simply awaiting beside you. I’m sure there is a scientific explanation for how mold grows from blueberries. But for now, I’d like to rest in the suspense of the question and ponder it’s insignificant metaphysical implications."

    p.setup = () => {
      canvas = p.createCanvas(window.innerWidth, window.innerHeight);
      p.noStroke();
      p.background('#FFF7E8');
      p.textSize(window.innerWidth/40);
      p.textFont('Vollkorn');
      p.text('Blueberries and their Physiology', 170, 250, 160, 170);
      p.text('01', 70, 250, 170, 170);
      p.textSize(window.innerWidth/75);
      p.text(story, window.innerWidth - 650, 250, 500, 640);
      p.text('move mouse to interact', window.innerWidth - 80, 60, 40, 640);
    }

    p.windowResized = () => {
      p.resizeCanvas(window.innerWidth, window.innerHeight);
    }

    // let img = p.createImage(500, window.innerWidth/2);
    // img.loadPixels();
    // for (let i = 0; i < img.width/10; i++) {
    //   for (let j = 0; j < img.height/10; j++) {
    //     img.set(i, j, p.color(0, 90, 102, (i % img.width)));
    //   }
    // }
    //
    // img.updatePixels();
    p.draw = () => {
      p.stroke(0, 90, 102, 20);
      p.fill(0, 90, 102, 20);
      p.rect(17, 60, 40, 50);
      // p.point(p.random(17, 57), p.random(60, 110))
      // p.point(p.random(17, 57), p.random(60, 110))
      // p.rect(p.random(170, 220), p.random(60, 110);
      // p.rect(p.random(window.innerWidth - 650, )window.innerWidth - 650, 60, 40, 50);

      p.noFill();
      p.stroke(0, 90, 102, 60);
      p.ellipse(window.innerWidth/3-10, 90, p.mouseX/5, p.mouseX/5);
      p.ellipse(window.innerWidth/6, window.innerHeight-70, p.mouseX/3, p.mouseX/3);

      //ellipse();
    }

    const ellipse = () => {
      p.noFill();
      p.stroke(200, 130, 130, 127);
      p.ellipse(200, 200, p.mouseY/20, 100);
      p.ellipse(400, 200, p.mouseY/20, 100);
      p.ellipse(200, 200, 200, p.mouseY);
      p.ellipse(400, 200, 200, p.mouseY);
      p.ellipse(300, 200, p.mouseX, p.mouseY);
      p.ellipse(300, 300, p.mouseY, 100);
      
      p.stroke(100, 130, 130, 200);
      p.ellipse(300, 400, p.mouseY, p.mouseY);
  }


}
