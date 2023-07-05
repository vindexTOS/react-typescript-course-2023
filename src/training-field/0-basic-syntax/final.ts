function main() {
  type PersonType = {
    name: string
    age: number
    work: boolean
    salary?: null
    image?: string
  }

  let name: string = 'Gio'
  let age: number = 23
  let work: boolean = false
  let salary: null = null
  let lastName: any = 'giorgadze'
  lastName = 0
  let person: PersonType = {
    name: 'gio',
    age: 23,
    work: false,
    salary: null,
  }

  let personArray: PersonType[] = [person, person, person, person, person]
  personArray.push({ name: 'gg', age: 23, work: true, image: '' })
  let newArray: any = [person, person, person]
  newArray.push({
    name,
    age,
    work,
    salary,
    GG: 'hi',
    vite: 'Type',
    type: 'script',
  })
}
