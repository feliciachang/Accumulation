
export default function home(p) {
  let edition = 'edition 01';
  let letter = 'Sine Qua Non is an interactive digital magazine meant to challenge the current information culture in which content is consumed passively. Through interactivity, Sine Qua Non hopes to make the reader part of the work itself. Your participation is essential to your experience of the works in this magazine. \n\n If you are interested in submitting work for our first edition, please email felicia.chang@yale.edu by October 15. Your work should explore the meaning of "sine qua non," a Latin phrase that means “an essential condition.” We hope to hear your persepctive on what is essential to the human experience in the form of poetry, art, and prose.'
  p.setup = () => {
    let canvas = p.createCanvas(window.innerWidth, window.innerHeight);
    p.background('#FCEFD8');
    p.textFont("Vollkorn");
    p.fill('#06069A')
    p.rect(window.innerWidth/5-60, window.innerHeight/6-60, 900, 860);
    // p.frameRate(5);
  }

// '#FCEFD8'
  p.draw = () => {
    //p.background('#FFF7E8');
    p.textSize(window.innerHeight/30);
    p.fill('#06069A');
    p.text(letter, window.innerWidth/5, window.innerHeight/6, 800, 800);
    p.fill('#FCEFD8');
    p.textSize(window.innerHeight/15);
    p.textStyle(p.BOLD);
    p.text(edition, p.mouseX, p.mouseY);
    p.fill('#06069A');
    p.textSize(window.innerHeight/50);
    p.text('move mouse to interact', window.innerWidth - 120, 60, 40, 640);
    // if(p.mouseIsPressed){
    //   p.text(edition, p.mouseX, p.mouseY);
    // }
  }
}
