import React from "react";
import './main-panel.css';
import MainPanelHeader from "../main-panel-header/main-panel-header.js";
import MainPanelMessages from "../main-panel-messages/main-panel-messages.js";
import MainPanelBottom from "../main-panel-bottom/main-panel-bottom";

export default function MainPanel(props) {
    const { data, handleClick, id } = props;
    return (
        <div className='main-panel'>
            <MainPanelHeader />
            <MainPanelMessages data={data} id={id} handleClick={handleClick} />
            <MainPanelBottom />
        </div>
    )
}