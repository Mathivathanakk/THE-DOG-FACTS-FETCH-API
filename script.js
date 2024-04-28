//fetching the url

const url = fetch("https://dogapi.dog/api/v2/breeds?page[number]=29");
url
  .then((data) => data.json()) //convert to json format and to object
  .then((result) => {
    // console.log(result)
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
  }).catch((err)=>console.log(err));//else catch the error
