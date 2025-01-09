import * as React from "react";
import './style.css';
import { CircleRegular, EditRegular } from "@fluentui/react-icons";

interface ITimelineItenProps {
    first: boolean;
}

export function TimelineIten(props: ITimelineItenProps) {

    return (
        <div className='audit-monitor-card-timelineitem'>
            <EditRegular />
            <div className="audit-monitor-card-timelineitem-line">

            </div>
            {props.first && <CircleRegular style={{ color: "blue" }} />}
        </div>

    );
}
