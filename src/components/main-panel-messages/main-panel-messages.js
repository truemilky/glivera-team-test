import React from "react";
import './main-panel-messages.css';
import MessageItem from "../message-item/message-item.js";

export default function MainPanelMessages(props) {
    const { data, handleClick} = props;
    const items = data.map((item, index) => {
        return (
            <MessageItem handleClick={handleClick} key={index} data={item} />
        )
    })
    return (
        <div className='main-panel__messages'>
            {items}
        </div>
    )
}