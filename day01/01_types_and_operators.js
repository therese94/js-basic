// Types and Operators (타입과 연산자)
// Primitive Type

// Numbers
const a = 13
const b = -5
const c = 3.14 // float
const d = 2.998e8 // 2.998 * 10^8
const e = Infinity
const f = -Infinity
const g = NaN // Not a Number

console.log(a, b, c, d, e, f, g)
console.log(5 / '안녕하세요') // NaN

// Strings

const sentence1 = 'Ask and go to the blue'
const sentence2 = "Ask and go to the blue"
const sentence3 = `Ask and go to the blue`

console.log(sentence1)
console.log(sentence2)
console.log(sentence3)

// 따옴표를 사용하면 줄바꿈이 안됨
// 대신 escape sequence 사용 가능

// const word = '안녕
// 하세요'

const word = '안녕\n하세요'
console.log(word)

// 백틱을 쓰면 줄바꿈이 됨, escape sequence 사용 안됨
// Template literal 사용 할 수 있음

const word2 = `안녕
하세요`
console.log(word2)


// Template Literal
const age = 10
const message = `홍길동의 나이는 ${age}`
console.log(message)

console.log('Happy' + 'Hacking')


// Boolean
true
false


// Empty Value
// 값이 존재하지 않음을 표현하는 값
undefined
null

let firstName // 선언하고 할당하지 않음 => undefined
let students = {}
students.jason // undefined

let lastName = null // 우리가 의도적으로 값이 없음을 표시할 때

typeof null // object
typeof undefined // undefined

// Operators (연산자)
// 할당 연산자 

let x = 0

x += 10   // 10
x -= 3    // 7
x *= 3    // 21

x++       // 22
x--       // 21

// 비교 연산자

3 > 2 // true
3 < 2 // false

// 문자열 비교도 가능
// 영어 소문자가 대문자보다 큼, 알파벳은 오름차순

'A' < 'B'      // true
'A' < 'a'      // true
'가' < '나'    // true


// 동등 연산자 (==)
// 서로 같은 값을 갖도록 변환할 수 있으면 같다고 판단한다.
// (JS 엔진이 자동으로 형변환) => 동등 연산자의 사용은 지양한다.

const a1 = 1
const b1 = '1'

a1 == b1          // true
a1 == Number(b1)  // true


// 일치 연산자 (===), (!==)
1 === '1'           // false
1 === Number('1')   // true


// 논리 연산자
// and, or, not

// 둘 다 참일 경우에만 true
true && true    // true
true && false   // false

// 하나라도 참이라면 true
true || true    // true
true || false   // true
false || false  // false

// 값을 반대로 뒤집는다.
!true     // false
!false    // true


// 삼항 연산자
// 가장 앞의 boolean 값이 참이면 : 앞의 값이 반환, 그렇지 않다면 : 뒤의 값이 반환

let flag = true

const result = flag ? '참이니' : '거짓이니' // 참이니

console.log(result)     // 참이니