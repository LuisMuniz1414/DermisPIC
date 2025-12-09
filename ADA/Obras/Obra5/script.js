var hydra = new Hydra();

noise(6,.05)
  .mult(
    osc(9,0, ()=>Math.sin(time/1.5)+2 )
      .color(0.3, 0.95, 0.75)        // tono piel cálido
  )
  .mult(
    noise(9,.03)
      .brightness(1.1)
      .contrast(1.4)
      .color(1.2, 0.85, 0.7)         // beige–rosado
      .mult( osc(9,0, ()=>Math.sin(time/3)+13 )
        .color(.15, 0.8, 0.65)      // crema suave
      )
  )
  .diff(
    noise(15,.04)
      .brightness(.25)
      .contrast(1.1)
      .color(0.95, 0.7, 0.55)        // sombra cálida, sin negros
      .mult( osc(9,0, ()=>Math.sin(time/5)+13 )
        .color(1.1, 0.75, 0.6)
      )
      .rotate( ()=>time/33 )
  )
  .scale( ()=>Math.sin(time/6.2)*.12+.15 )
  .modulateScale(
    osc(3,0,0)
      .mult( osc(3,0,0).rotate(3.14/2) )
      .rotate( ()=>time/25 )
      .scale(.39)
      .scale(1,.6,1)
      .invert()
      .color(1.15, 0.9, 0.75),        // sub-tono de piel en modulación
    ()=>Math.sin(time/5.3)*1.5+3
  )
  .rotate( ()=>time/22 )
  .mult( shape(100,.9,.01).scale(1,.6,1)
    .color(1.2, 0.85, 0.7) )          // borde cálido
  .colorama(0.02)                     // quita azules sin saturar
  .out()

