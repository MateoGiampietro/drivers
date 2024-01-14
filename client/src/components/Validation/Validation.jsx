export default function Validation(userData, errors, setErrors) {
    const { name, lastName, nationality, image, bornDate, description } = userData;

    const updatedErrors = {};

    if (!name) {
        updatedErrors.name = 'El nombre no puede estar vacío.';
    } else if (name.length < 3 || name.length > 15) {
        updatedErrors.name = 'El nombre debe tener entre 3 y 15 caracteres.';
    } else {
        updatedErrors.name = '';
    }

    if (lastName.length > 0) {
        if (lastName[0] === lastName[0].toLowerCase()) {
            updatedErrors.lastName = 'El apellido debe empezar con mayúscula.';
        } else {
            updatedErrors.lastName = '';
        }
        if (!lastName) {
            updatedErrors.lastName = 'El apellido no puede estar vacío.';
        }
    }

    if (!image) {
        updatedErrors.image = 'Si no quieres agregar una imagen, ingresa "default".';
    } else {
        updatedErrors.image = '';
    }

    if (!nationality) {
        updatedErrors.nationality = "La nacionalidad no puede estar vacia.";
    } else {
        updatedErrors.nationality = "";
    }

    if (!bornDate) {
        updatedErrors.bornDate = "La fecha no puede estar vacia.";
    } else if (!/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(bornDate)) {
        updatedErrors.bornDate = "La fecha debe ser YYYY-MM-DD";
    } else {
        updatedErrors.bornDate = "";
    }

    if (description.length < 50) {
        updatedErrors.description = "Se necesita una descripcion de al menos 50 caracteres.";
    } else {
        updatedErrors.description = "";
    }

    setErrors(updatedErrors);
}
