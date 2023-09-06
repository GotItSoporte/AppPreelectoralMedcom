async function fetchXmlData() {
    try {
      const response = await fetch(`http://192.168.70.229:5000/Readxml`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching API data:", error);
      return error;
    }
  }
  
  export default fetchXmlData;
  