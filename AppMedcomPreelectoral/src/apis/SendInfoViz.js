export const SendInfoWall = async (data) => {
    try {
      if (!data || typeof data !== "object") {
        console.error("Data is not a valid object");
        return;
      }
  
      const response = await fetch("http://192.168.0.19:5000/SendInfoWall", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify( data ),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        if (responseData) {
          console.log(responseData); // Mensaje del servidor
        } else {
          console.error("Empty response data");
        }
      } else {
        console.error("Error en la solicitud");
      }
    } catch (error) {
      console.error("Error al enviar datos", error);
    }
  };