//adding the eventlistener to the button to  display the details

const button = document.querySelector(".btn");
button.addEventListener("click", () => {
  displayfact();
});

//fact displayed by fetched api
function displayfact() {
  const url = fetch("https://dogapi.dog/api/v2/breeds?page[number]=29");
  url
    .then((data) => data.json()) //convert to json format and to object
    .then((result) => {
      const objectData = result.data;
      let tableData = "";
      //displayed the data in the table
      objectData.map((values) => {
        tableData += `<tr>
        <td>${values.type}</td>
        <td>${values.attributes.name}</td>
        <td>${values.attributes.description}</td>
        
        </tr>
        
        `;
      });

      document.querySelector(".tableBody").innerHTML = tableData;
    })
    .catch((err) => console.log(err));
}
