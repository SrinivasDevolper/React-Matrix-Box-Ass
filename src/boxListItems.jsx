import {BoxItems} from "./styled-component"
import { useState } from "react";

const BoxListItems = ({id, title, yellowStatus, setYellowStatus, yellowCont}) => {
    const [status, setStatus] = useState(false)
    const onChangeColor = () => {
        if (!yellowCont.includes(id)){
            yellowCont.push(id)
            setStatus(!status)
        }
        else{
            yellowCont.pop(id)
            setStatus(!status)
        }
        setTimeout(() => {
            if (yellowCont.length === 9){
                setYellowStatus(!yellowStatus)
            }
        }, 1000);
    }
    return <BoxItems title={title} color={status} style={{backgroundColor: yellowStatus ? "orange": null}} onClick={onChangeColor}></BoxItems>
}
export default BoxListItems