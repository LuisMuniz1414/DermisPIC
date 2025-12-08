var hydra = new Hydra();


voronoi(3, 0.35)                          // textura viva y rugosa
  .color(1.3, 0.35, 0.28)                // rojo oscuro, casi sanguíneo
  .saturate(1.2)
  .modulate(
    noise(8, 0.4)                       // tejido orgánico turbulento
      .thresh(0.4)
      .rotate(0, 0.03),
    0.4
  )
  .modulate(
    osc(30, 0.15)                      // líneas duras como cicatrices abiertas
  	  .thresh(0.48)
      .rotate(0, 0.15),
    0.45
  )
  .contrast(1.35)
  .brightness(0.15)                    // sombras profundas                         // bordes afilados, sensación de herida
  .out(o0)

