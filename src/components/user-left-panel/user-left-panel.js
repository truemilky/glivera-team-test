import React, { useState } from 'react';
import './user-left-panel.css';
import avatar from '../../assets/img/avatar.jpg';
import checkImg from '../../assets/img/check.png';
import UserLeftPanelItem from '../user-left-panel-item/user-left-panel-item.js'

export default function UserLeftPanel() {
    const [special, specialUpdate] = useState(false);
    let classes = 'left-panel__buttons-field';

    if (!special) {
        classes += ' special';
    }

    return (
        <div className='left-panel'>
            <div className='left-panel__desktop'>
                <div className='left-panel__image'>
                    <img className='left-panel__check-img' alt='check' src={checkImg} />
                    <img alt='user-ava' className='left-panel__avatar' src={avatar} />
                </div>

                <div className='left-panel__buttons-field'>
                    <UserLeftPanelItem isActive="true" linkName='Сообщения' messages='3' />
                </div>

                <div className='left-panel__buttons-field'>
                    <UserLeftPanelItem linkName='Профиль' />
                    <UserLeftPanelItem linkName='Настройки' />
                </div>

                <div className='left-panel__buttons-field'>
                    <UserLeftPanelItem linkName='Вопросы' />
                    <UserLeftPanelItem linkName='Написать модератору' />
                </div>

                <div className={classes}>
                    <UserLeftPanelItem isSpecial={'true'} linkName='Купить подписку' />
                </div>
            </div>

            <div className='left-panel__mobile'>
                <div className='left-panel__image'>
                    <img className='left-panel__check-img' alt='check' src={checkImg} />
                    <img alt='user-ava' className='left-panel__avatar' src={avatar} />
                </div>

                <div className='left-panel__links'>
                    <UserLeftPanelItem isActive="true" linkName='Сообщения' messages='3' />
                    <UserLeftPanelItem linkName='Профиль' />
                    <UserLeftPanelItem linkName='Настройки' />
                    <UserLeftPanelItem linkName='Вопросы' />
                    <UserLeftPanelItem linkName='Написать модератору' />
                    <UserLeftPanelItem isSpecial={'true'} linkName='Купить подписку' />
                </div>
            </div>
        </div>


    )
}