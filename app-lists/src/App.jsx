import { Colors } from "./components/Colors";


export function App() {
 
  const colorObj = [
    {id: 1, name: 'yellow'},
    {id: 2, name: 'black'}, 
    {id: 3, name: 'red'}, 
    {id: 4, name: 'violet'}
  ]

  return (
    <>
    <Colors items={colorObj}/>
    </>
  )
}


