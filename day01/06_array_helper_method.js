// Array helper method
// forEach - Loop 를 대신 돌아줌
const colors = ['red', 'green', 'blue', 'salmon']

for (const color of colors) {
  // console.log(color)
}

// colors.forEach(color => console.log(color))


// map - 배열내의 모든 요소에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열 return
// 일정한 형식의 새로운 배열을 만들 때 사용한다.

const numbers = [1, 2, 3, 4]

// for number in numbers:
//     pass

const doubleNumbers = numbers.map((number) => {
  return number * 2
})

// 숫자가 담긴 배열을 받아 각 수의 제곱근이 들어있는 새로운 배열을 만들어 보자!
const numbers2 = [4, 9, 16]

numbers2.map(number => Math.sqrt(number))
numbers2.map(number => number ** 0.5)

// map 헬퍼를 사용해서, distance / time (속도) 를 저장하는 배열 speeds 를 만들어라.

const trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 },
]

// for trip in trips:
//     pass
//

const speeds = trips.map((trip) => { // 각 루프마다 실행하는 함수
  return trip.distance / trip.time
})

// filter - 주어진 함수의 테스트를 통과하는 모든 요소를 모아서 새로운 배열 반환.

numbers.filter(number => {
  return number % 2 !== 0
})

const products = [
  { name: 'cucumber', type: 'vege' },
  { name: 'banana', type: 'fruit' },
  { name: 'carrot', type: 'vege' },
  { name: 'apple', type: 'fruit' },
]

const fruits = products.filter(product => {
  return product.type === 'fruit'
})


// filter - 나이가 50 이상인 아이템만 가지고 있는 새로운 배열을 만드세요
const ages = [15, 25, 35, 45, 55, 65, 75, 85, 95]

const oldAges = ages.filter((age, index, self) => {
  // console.log(age, index, self)
  return age >= 50
})


// find - 주어진 판별 함수를 만족하는 첫번째 요소의 값을 반환, 없다면 undefined 반환.

const users = [
  { name: 'Tony Stark', age: 45 },
  { name: 'Steve Rogers', age: 32 },
  { name: 'Thor', age: 40 },
]

const tony = users.find(user => {
  return user.name === 'Tony Stark'
})


// some - 배연 안의 어떤요소라도 (=== 가 하나라도!) 주어진 판별 함수를
// 통과하는지 테스트하고 결과에 따라 boolean 값을 반환한다.

const arr = [1, 2, 3, 4, 5, ]

// 하나의 요소라도 짝수를 포함하고 있다면 true
const result1 = arr.some(number => {
  return number % 2 === 0
})

// 모든 요소가 짝수를 포함하고 있다면 true
const result2 = arr.every(number => {
  return number % 2 === 0
})

// requests 배열에서 각 요청들 중 status 가 pending 인 요청이 있는지 확인하라
const requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' },
]

const isInProgress = requests.some(request => {
  return request.status === 'pending'
})

// reduce - 배열의 각 요소에 대해 주어진 `reducer` 함수를 실행하고 하나의 값을 반환한다.
// reduce 는 배열 내의 숫자 총합, 배열 내 평균 계산 등 별의 값을 하나로 줄이는 동작을 한다.
// 첫 번째 매개변수는 `누적 값 (전 단계의 결과)`

const ssafyTest = [90, 99, 78, 80]

const sum = ssafyTest.reduce((total, score) => {
  total += score
  return total // 다음 루프로 누적 값을 넘김
}, 0)


// ssafyTest 배열을 doubleSsafyTest 로 만드시오!
// const ssafyTest = [90, 99, 78, 80]
// => [180, 198, 156, 160]

const doubleSsafyTest = ssafyTest.reduce((doubleScores, score) => {
  doubleScores.push(score * 2)
  return doubleScores // 다음 루프로 누적값 doubleScores 를 넘긴다.
}, [])
