export const DeleteData = async (deleteData) => {
    console.log({deleteData})
    try {
      const response = await fetch('http://192.168.70.229:5000/SendDeleteData', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(deleteData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData); // Mensaje del servidor
      } else {
        console.error('Error en la solicitud');
      }
    } catch (error) {
      console.error('Error al enviar datos', error);
    }
  };
  