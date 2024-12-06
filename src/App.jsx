import {BackgroundColor, BoxContainer} from "./styled-component"
import BoxListItems from "./boxListItems"
import { useState } from "react"
const boxes = [
  {
    id: 1,
    title: "Box1"
  },
  {
    id: 2,
    title: "Box2"
  },
  {
    id: 3,
    title: "Box3"
  },
  {
    id: 4,
    title: "Box4"
  },
  {
    id: 5,
    title: "Box5"
  },
  {
    id: 6,
    title: "Box6"
  },
  {
    id: 7,
    title: "Box7"
  },
  {
    id: 8,
    title: "Box8"
  },
  {
    id: 9,
    title: "Box9"
  },
  
]
const yellowCont = []
const App = () => {
  const [yellowStatus, setYellowStatus] = useState(false)
  return (
    <BackgroundColor>
      <BoxContainer>
        {
          boxes.map((eachItem) => (
            <BoxListItems key={eachItem.id} title={eachItem.title} id={eachItem.id} yellowStatus={yellowStatus} setYellowStatus={setYellowStatus} yellowCont={yellowCont} />
          ))
        }
      </BoxContainer>
    </BackgroundColor>
  );
}

export default App;
