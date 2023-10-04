const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1999,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1878,
      yearOfDeath: 1941,
    },
  ]

  let personName

  function findOldest() {

    let ages = []
    let oldestAge = 0


    for (i = 0; i < people.length; i++) {
        ages.push(people[i].yearOfDeath - people[i].yearOfBirth)

        if (ages[i] > oldestAge) {
            oldestAge = ages[i]
            personName = people[i].name
        }
    }

    return oldestAge

  }

 console.log(`Age: ${findOldest()}
Name: ${personName}`)

