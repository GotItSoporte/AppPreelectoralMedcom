export const SendInfo = async (data) => {

    try {
      const response = await fetch('http://192.168.0.19:5000/SendInfoForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
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
  