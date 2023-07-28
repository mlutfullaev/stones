import React, {ReactNode, useRef, useState} from "react";

import "./accordion.scss";

type AccordionT = {
    title: string;
    state: [number, React.Dispatch<React.SetStateAction<number>>];
    index: number;
    children: ReactNode;
}
const Accordion: React.FC<AccordionT> = (props) => {
    const accordionContent = useRef(null);
    const [contentHeight, setContentHeight] = useState('0px');
    const [state, setState] = props.state;

    const toggling = () => {
        if (state === props.index) {
            setContentHeight('0px')
            return setState(0);
        }
        if (accordionContent.current) {
            const div = accordionContent.current as HTMLDivElement;
            setContentHeight(div.clientHeight + 'px');
        }
        setState(props.index);
        setTimeout(() => {
            // setContentHeight('auto')
        }, 300)
    };

    return (
        <div className="accordion">
            <div className="accordion-top" onClick={toggling}>
                <h4 className="middle-title">{props.title}</h4>
                {props.index === state ?
                  <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 10L7.17424 1.7323C7.90341 0.7559 9.09659 0.7559 9.82576 1.7323L16 10" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg> :
                  <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 1L9.82576 9.2677C9.09659 10.2441 7.90341 10.2441 7.17424 9.2677L1 1" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                }
            </div>
            <div className={`accordion-body${props.index === state ? " active" : " hided"}`} style={{height: contentHeight}}>
                <div className="accordion-children" ref={accordionContent}>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Accordion;