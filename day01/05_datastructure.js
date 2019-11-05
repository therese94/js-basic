const numbers = [1, 2, 3, 4]

numbers[0]      // 1
numbers[-1]     // undefined
numbers.length  // 4

// 배열 뒤집기 => 원본을 파괴한다.
numbers.reverse() // [4, 3, 2, 1]
numbers           // [4, 3, 2, 1]

numbers.reverse() // [1, 2, 3, 4]
numbers           // [1, 2, 3, 4]


// 가장 마지막에 아이템 추가하기
numbers.push('abc') // 5 가 반환됨 => 추가 후 배열의 길이 값을 반환
numbers             // [1, 2, 3, 4, 'abc']

// 가장 마지막 요소 삭제 후 반환
numbers.pop()     // 'abc'
numbers           // [1, 2, 3, 4]

// 가장 앞에 요소 추가
numbers.unshift('a')  // 5, new length
numbers               // ['a', 1, 2, 3, 4]

// 첫번째 요소 제거 후 반환
numbers.shift()       // 'a', 제거한 아이템
numbers               // [1, 2, 3, 4]

// includes - 특정 아이템이 배열에 있는지 여부를 반환
numbers.includes(0)   // false
numbers.includes(1)   // true

// indexOf - 특정 아이템의 index 를 찾아서 반환
numbers.push('a')
numbers.push('a')   // [1, 2, 3, 4, 'a', 'a']

numbers.indexOf('a')    // 4, 일치하는 가장 첫번째 아이템의 인덱스를 반환
numbers.indexOf('b')    // -1, 일치하는 값이 없다면 -1 반환

// 배열의 아이템을 함수의 인자를 seperator 로 이어서 문자열로 반환
numbers.join()      // "1,2,3,4,a,a"
numbers.join('')    // "1234aa"
numbers.join('-')   // "1-2-3-4-a-a"

numbers             // [1, 2, 3, 4, 'a', 'a'], 원본은 바뀌지 않음



// Object
const name = 'jason'

const me = {
  name, // 변수의 이름과 key 의 이름이 같다면 `name: name, => name,` 으로 생략 가능 => Object Literal
  'phone number': '010-1234-5678',
  appleProducts: {
    macbook: '2018pro',
    iphone: '7',
  }
}


// JSON
const jsonData = JSON.stringify(me)       // 직렬화 => JS Object 를 String 값으로
const parsedData = JSON.parse(jsonData)   // 역직렬화 => String 을 JS Object 로
