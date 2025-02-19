// CODE - 1
     function processNumbers(a, b, anonymous){
        sum = anonymous(a, b)
        console.log(`Sum: ${sum}`)
     }

     processNumbers(3, 4, function (num1, num2) {
        return num1 + num2
     })
// CODE - 2
     function greet(callback){
        callback("Alice")
     }
     greet(function (name){
        console.log(`Hello ${name}!`)
     })
// CODE - 3
      function calculation(a, b, operation){
       var result = operation(a, b)
       console.log(`Result: ${result}`)
      }
      add = function (num1, num2){
        return num1 + num2
      }
      subtract = function (num1, num2){
        return num1 - num2
      }
      divide = function (num1, num2){
        return num1 / num2
      }
      multiply = function (num1, num2){
        return num1 * num2
      }
      calculation(24, 7, divide)
      calculation(45, 32, add)
      calculation(3, 7, multiply)
      calculation(18, 9, subtract)
