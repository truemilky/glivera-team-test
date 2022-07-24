import React, { useState } from 'react';
import './app.css';
import UserLeftPanel from '../user-left-panel/user-left-panel';
import MainPanel from '../main-panel/main-panel';

export default function App() {
    let id = 0;
    const [data, setData] = useState([
        {
            isSelected: false,
            isOnline: false,
            userName: 'Александр Антонов',
            isClient: true,
            message: 'здравствуйте. как долго прийдёться ждать нож, который я заказал?',
            date: '13/04/2018',
            time: '14:02',
            id: id++
        },
        {
            isSelected: false,
            isOnline: true,
            userName: 'Gun Machine',
            isClient: false,
            message: 'а почему на ноже нет ни одной царапины?',
            date: '01/12/2018',
            time: '00:14',
            id: id++
        },
        {
            isSelected: true,
            isOnline: false,
            userName: 'Диана Павлова',
            isClient: false,
            message: 'нет, мне не нужно. если и вам тоже пофиг то выбор за вами.',
            date: '13/04/2018',
            time: '14:02',
            id: id++
        },
        {
            isSelected: false,
            isOnline: true,
            userName: 'Otto Zweig',
            isClient: false,
            message: 'thank you! that\'s great!',
            date: '01/12/2018',
            time: '00:14',
            id: id++
        },
        {
            isSelected: false,
            isOnline: false,
            userName: 'Александр Антонов',
            isClient: true,
            message: 'здравствуйте. как долго прийдёться ждать нож, который я заказал?',
            date: '13/04/2018',
            time: '14:02',
            id: id++
        },
        {
            isSelected: false,
            isOnline: true,
            userName: 'Gun Machine',
            isClient: false,
            message: 'а почему на ноже нет ни одной царапины?',
            date: '01/12/2018',
            time: '00:14',
            id: id++
        },
        {
            isSelected: true,
            isOnline: false,
            userName: 'Диана Павлова',
            isClient: false,
            message: 'нет, мне не нужно. если и вам тоже пофиг то выбор за вами.',
            date: '13/04/2018',
            time: '14:02',
            id: id++
        },
        {
            isSelected: false,
            isOnline: true,
            userName: 'Otto Zweig',
            isClient: false,
            message: 'thank you! that\'s great!',
            date: '01/12/2018',
            time: '00:14',
            id: id++
        }
    ]);

    function handleClick(id) {
        const index = data.findIndex(elem => elem.id === id);

        const old = data[index];
        const newItem = { ...old, isSelected: !old.isSelected };

        const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
        setData(newArr);
    }

    return (
        <div className='app'>
            <div className='app-wrapper'>
                <UserLeftPanel />
                <MainPanel data={data} handleClick={handleClick} />
            </div>
        </div>
    )
}