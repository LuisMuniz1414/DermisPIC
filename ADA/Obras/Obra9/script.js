var hydra = new Hydra();


speed = 0.3

shape(20, 0.2, 0.3)
  .color(0.92, 0.78, 0.65)

  .scale(() => Math.sin(time) + 1 * 2)
  .repeat(() => Math.sin(time) * 10)

  .modulateRotate(o0)

  .scale(() => Math.sin(time) + 1 * 1.5)
  .modulate(noise(2, 2).color(0.82, 0.65, 0.52)) 
  .rotate(1, 0.2)
  .color(1.05, 0.92, 0.88)

.out(o0)


