let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`


// const regexp = /fox/gi
// str = str.replace(regexp, 'AAA')
// console.log(str)

console.log(str.match(/\.$/gim))

console.log(
  str.match(/^t/gim)
)
console.log(
  str.match(/fox|dog/g)
)
console.log(
  str.match(/https?/g)
)
console.log( //숫자나 알파벳이 2글자 이상 3글자 이하인 경우
  str.match(/\b\w{2,3}\b/g)
)
console.log(
  str.match(/[0-9]{1,}/g)
)
console.log(
  str.match(/[가-힣]{1,}/g)
)
console.log(
  str.match(/\bf\w{1,}\b/g)  //소문자 f로 시작하는 모든 영단어
)
console.log(
  str.match(/\s/g)
)

const h = `  the hello  world   !

`
console.log(
  h.replace(/\s/g, '')  //공백 삭제
)

const str2 = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
console.log(
  str2.match(/(?<=@).{1,}/g)
)