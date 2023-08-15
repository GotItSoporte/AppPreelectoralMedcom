export const CreateFile = async (data) => {
  
  function sendDataFullScreen(data) {
    return fetch('http://localhost:5000/Createxml', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    //.then((result) => console.log(result))
    .catch((error) => console.log(error));
  }
  sendDataFullScreen({data})

};
