let currentPage = 1
const button = document.querySelector(".button")
const list = document.querySelector(".class__list")
button.addEventListener("click", (event) => {
  currentPage += 1
  getFetch().then((data) => {
    const mapHTML = data.map((dataMap) => {
      console.log(dataMap)
      const classStructure = `      <li class="class__item">
      <p>${dataMap.id}</p>
      <h1>${dataMap.title}</h1>
      <p>${dataMap.body}</p>
    </li>`
     return classStructure
    })
    list.innerHTML = mapHTML
    console.log(data)
  })
})
function getFetch() {
  const fetcher = fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=5`).then((data) => data.json())
  return fetcher
}
getFetch().then((data) => {
  const mapHTML = data.map((dataMap) => {
    console.log(dataMap)
    const classStructure = `      <li class="class__item">
    <p>${dataMap.id}</p>
    <h1>${dataMap.title}</h1>
    <p>${dataMap.body}</p>
  </li>`
   return classStructure
  })
  list.innerHTML = mapHTML
  console.log(data)
})