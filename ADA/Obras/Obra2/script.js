var hydra = new Hydra();

osc(4, 0.1, 0.1)  
  .color(0.925, 0.752, 0.690)
  .rotate(0.30, 0.1)
  .pixelate(2, 20)
  .modulate(noise(2.5), () => 1.5 * Math.sin(0.08 * time))
  .out(o0)