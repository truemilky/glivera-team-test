import React from "react";
import './user-left-panel-item.css';

export default function UserLeftPanelItem(props) {
    const { linkName, messages, isActive, isSpecial} = props;

    let itemClassNames = 'left-panel__item';

    if (isActive) {
        itemClassNames += ' active'
    }

    if (!isActive && isSpecial) {
        itemClassNames += ' special'
    }

    return (
        <div active={isActive} className={itemClassNames}>
            <a href='#' className="left-panel__item-link">{linkName}<span className="left-panel__item-amount">{messages}</span></a>
        </div>
    )
}