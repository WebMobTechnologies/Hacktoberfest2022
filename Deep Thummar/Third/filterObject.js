var obj = {
  Students: [
    {
      name: "James",
      Age: "15",
      RollNumber: "123",
      Marks: "99",
    },
    {
      name: "David",
      Age: "14",
      RollNumber: "223",
      Marks: "69",
    },
    {
      name: "Tom",
      Age: "13",
      RollNumber: "253",
      Marks: "89",
    },
  ],
};

let filteredArray = document.getElementById("occurance");

let customArr = [];

const getFilteredArray = () => {
  let newArr = obj.Students.filter(function (data) {
    return data.Marks >= 80;
  });

  for (let i = 0; i < newArr.length; i++) {
    console.log(newArr[i].name);
    customArr.push(
      `{name: ${newArr[i].name}, Age: ${newArr[i].Age}, RollNumber: ${newArr[i].RollNumber}, Marks:${newArr[i].Marks}}`
    );
  }
  filteredArray.innerHTML = customArr;
};
