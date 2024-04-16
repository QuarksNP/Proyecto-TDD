export const glassSize = (selection: 1 | 2 | 3) => {
    const options = {
        1: 'Vaso pequeño',
        2: 'Vaso Mediano',
        3: 'Vaso Grande'
    }

    switch (selection) {
        case 1:
            console.log(`${options[selection]} seleccionado`);

            return {
                pass: true,
                selection: options[selection]
            }

        case 2:
            console.log(`${options[selection]} seleccionado`);

            return {
                pass: true,
                selection: options[selection]
            }

        case 3:
            console.log(`${options[selection]} seleccionado`);

            return {
                pass: true,
                selection: options[selection]
            }

        default:
            console.error(`Vaso no seleccionado`);
            return {
                pass: false,
                selection: null
            };
    }
}

export const howMuchSugar = (selection: number) => {
    if (selection === 0 || Number.isNaN(selection) || typeof selection !== 'number') {
        console.error(`Cantidad de azucar no válida`);
        return false;
    } else {
        console.log(`Cantidad de azucar seleccionada: ${selection} oz`)
        return selection
    }
}

