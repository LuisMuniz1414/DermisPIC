var hydra = new Hydra();

osc(20, 0.01, 1.1)
  .kaleid(50)
  .color(0.80, 0.60, 0.47)  
  .rotate(0, 0.1)
  .modulate(o0, () => mouse.x * 0.0004)
  .scale(1.01)
  .brightness(0.15)    
  .saturate(0.5)       
  .out(o0)
