import * as React from "react";
import './style.css';

interface ICardItensProps {
    date?: string;
    children?: React.ReactNode | React.ReactNode[];
}

export function CardGroups(props: ICardItensProps) {
    return (
        <div className='audit-monitor-cardgroups-container'>
            <div className='audit-monitor-cardgroups-container-day'>
                <div className='audit-monitor-cardgroups-container-day-title'>
                     {props.date}
                </div>
            </div>
            <div className='audit-monitor-cardgroups-container-connection'>
                <div className='audit-monitor-cardgroups-container-line-horizontal'></div>
            </div>
            <div className='audit-monitor-cardgroups-container-hour'>

                {props.children}

            </div>
        </div>
    );
}