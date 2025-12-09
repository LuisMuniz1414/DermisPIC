var hydra = new Hydra();

osc(100,-0.0018,0.17)
  .diff(osc(20,0.00008).rotate(Math.PI/0.00003))
  .modulateScale(
      noise(1.5,0.18)
        .modulateScale(osc(13).rotate(()=>Math.sin(time/22))), 
      3
  )

  .color(0.92, 0.78, 0.65) 
  .contrast(1.05)

  .add(
      src(o0).modulate(o0, .04),
      0.4
  )

  .brightness(0.02)
  .contrast(0.9)

  .color(1.05, 0.92, 0.88)

  .modulateScale(osc(2), -0.2, 2, 1, 0.3)

  .posterize(30)
  .rotate(1, 0.2, 0.01, 0.001)


  .color(0.82, 0.65, 0.52)

  .contrast(0.85)
  .brightness(0.01)

  .out()

