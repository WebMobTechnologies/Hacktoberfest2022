let items = [ 
    { "id": 3.1, "name": "test 3.1"}, 
    { "id": 22, "name": "test 3.1" }, 
    { "id": 23, "name": "changed test 23" } 
    ]
  
    function removeByKey(array, params){
        array.some(function(item, index) {
          return (array[index][params.key] === params.value) ? !!(array.splice(index, 1)) : false;
        });
        return array;
      }
  
      let removed = removeByKey(items, {
        key: 'id',
        value: 23
      });
  
      console.log(removed);