import React, { useState } from "react";
import './main-panel-header.css';

export default function MainPanelHeader() {
    const [active, setActive] = useState(false);
    return (
        <div className="main-panel__header">
            <div className='header__button-group'>
                <button className='header__button button--delete'>Удалить</button>
                <button className='header__button button--add'>Добавить в архив</button>
            </div>

            <div className='header__filter-group'>
                <button className='header__button button--filter active'>Непрочитанные</button>
                <button className='header__button button--filter'>Архив</button>
            </div>

            <div className='header__search'>
                <form name='form-search' className='header__search-form'>
                    <input onChange={setActive} type='text' name='search' className={`form-search__input ${active ? 'active' : ''}`} />
                    <span className='input__placeholder'>Искать ➔</span>
                </form>
            </div>
        </div>
    )
}