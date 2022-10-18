const object1 = { id1: "Hello", value1: "World" }
const object2 = { id: "welcome", value: "home" }

const mergedObj = { ...object1, ...object2 }
console.log("Merged Object==>", mergedObj)