import React from "react";
import './message-item.css';
import messageAvatar from '../../assets/img/user-noname.jpg';
import shoppingCart from '../../assets/img/shopping-cart.png';

export default function MessageItem(props) {
    const { data, handleClick } = props;
    const { isSelected, isOnline, userName, isClient, message, date, time, id  } = data;
    let selected = false;
    let avatarClass = 'message-item__avatar';
    let shopCartClass = 'message-ite__shop-cart';
    let checkboxClass = 'message-select__custom';
    let messageTextClass = 'message__text';
    let dateClass = 'message-item__date-text';
    let timeClass = 'message-item__time-text';

    if (isOnline) {
        avatarClass += ' active';
    }

    if (isSelected) {
        selected = !selected;
        checkboxClass += ' active';
        messageTextClass += ' active';
        dateClass += ' active';
        timeClass += ' active';
    }

    if (isClient) {
        shopCartClass += ' active';
    }

    return (
        <div className='message-item' >
            <div className='message-item__select'>
                <input onClick={(e) => handleClick(id)} id={id} type='checkbox' defaultChecked={selected} name='message-select' className='message-item__checkbox' />
                <label htmlFor='message-select' className={checkboxClass}></label>
            </div>

            <div className={avatarClass}>
                <div className='message-item__avatar-wrapper'>
                    <img alt='message-avatar' className="message-item__avatar-image" src={messageAvatar} />
                </div>
                <span className='message-item__user--online' />
            </div>

            <div className='message-item__user-name'>
                <div className={'message-item__user-name--text'}>{userName}</div>
                <img alt={shopCartClass} className={shopCartClass} src={shoppingCart} />
            </div>

            <div className='message-item__message'>
                <span className={messageTextClass}>{message}</span>
            </div>

            <div className='message-item__date'>
                <span className={dateClass}>{date}</span>
            </div>

            <div className='message-item__time'>
                <span className={timeClass}>{time}</span>
            </div>
        </div>
    )
}