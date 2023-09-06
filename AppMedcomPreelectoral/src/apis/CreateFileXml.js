export const CreateFile = async (data) => {
  try {
    const response = await fetch('http://192.168.70.229:5000/Createxml', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  } catch (error) {
    console.log(error);
  }
};