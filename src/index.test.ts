import { describe, expect, it } from 'vitest'
import { glassSize, howMuchSugar } from '.'

// All tests within this suite will be run in parallel
describe('La maquina de Café', () => {
  it(`Podre seleccionar entre 3 tamaños de vaso
  (Pequeño , Mediano, Grande)`, () => {

    const response = glassSize(2)

    expect(response.pass).toBeTruthy()

  })

  it('Podre seleccionar la cantidad de azúcar', async () => {
    const response = howMuchSugar(5.6)

    expect(response).toBeTruthy()
  })


  it.concurrent('concurrent test 3', async ({ expect }) => { /* ... */ })
})