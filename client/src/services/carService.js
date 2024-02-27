const baseUrl = 'http://localhost:3030'; // URL адресът на Express сървъра

export const create = async (carData) => {
    const response = await fetch(`${baseUrl}/jsonstore/cars`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(carData)
    });

    const result = await response.json();

    return result;
};