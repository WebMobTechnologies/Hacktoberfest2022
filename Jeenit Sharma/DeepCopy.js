const obj = {
    dummy: "a",
    test: {
        nestTest: {
            nestDummy: "dummy",
            deepNest: {
                veryDeepNest: {
                    deepDummy: "b"
                }
            }
        }
    },
    dummy2: "dummy2"
}

let deepCopyObj = {}

deepCopyObj = structuredClone(obj)

obj.test.nestTest.nestDummy = "should not change"
console.log(deepCopyObj)