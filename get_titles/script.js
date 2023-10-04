const books = [
  {
    title: 'Book1',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]


function getTitles(arr) {

  let newArr = []

  for (i  = 0; i < arr.length; i++) {
    newArr.push(arr[i].title)
  }

  return newArr

}

console.log(getTitles(books))

