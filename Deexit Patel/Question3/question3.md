## How to filter object from Arrays of Object

We can filter the object with array.filter in following way:
```
var obj = {
"Students": [{
"name": "Raj",
"Age":"15",
"RollNumber": "123",
"Marks": "99",

        }, {
            "name": "Aman",
             "Age":"14",
            "RollNumber": "223",
            "Marks": "69",
           },
           {
            "name": "Vivek",
             "Age":"13",
            "RollNumber": "253",
            "Marks": "89",
           },
        ]
};

var newArray = obj.Students.filter(function (el) {
        return el.Age >=15 &&
        el.RollNumber <= 200 &&
        el.Marks >= 80 ;
    }
);
```