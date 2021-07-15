import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string

}
type AccordionTitlePropsType = {
    title: string
}

function Accordion(props:AccordionPropsType) {

    let  [collapsed, setCollapsed] = useState(false)
    let toggle = ()=> {
        setCollapsed(!collapsed)
    }


    return(
            <div>
                <AccordionTitle title={props.titleValue}/>
                <button onClick={toggle}>Toggle</button>
                {!collapsed && <AccordionBody/>}
            </div>
)


}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3>
           ---- {props.title} ----
        </h3>
    )
}


function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}


export default Accordion