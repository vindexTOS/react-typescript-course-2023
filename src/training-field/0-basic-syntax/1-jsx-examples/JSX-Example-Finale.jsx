import React from 'react'
// ჯავასკრიპტი გვაძლევს ბევრი შეცდომის დაშვების საშვალებას
const JSXExample = () => {
  const [user, setUser] = useState('') // არ გვეუბნება რომ useState დასაიმპორტებელია
  const [name, setName, getName] = React.useState(' ') // არ გვეუბნება რომ useState array მხოლოდ 2 პარამეტრს გვაძლევს

  const handleSomthing = (hello, goodbye) => {
    return hello + goodbye
  }

  handleSomthing('hello', 'goodbye', 'nice to meet you', 'wow') // არ გვეუბნება რამდენი პარამეტრია ფუქნციაში

  let lastName // undefiend value

  //  არ გვეუბნება რომ name ფუნცქია არ არის
  return (
    <div onClick={() => name()}>
      <h1>
        {lastName.map((val) => (
          <div>{val.name}</div>
        ))}
      </h1>
      არ გვეუბნება რომ ღირებულება undefiend არის
    </div>
  )
}

// ეს ყველაფერი გამოიწვევს app-ის დაქრაშვას
export default JSXExample
