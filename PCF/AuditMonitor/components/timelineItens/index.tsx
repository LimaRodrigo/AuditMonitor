import * as React from "react";
import './style.css';
import { Circle16Filled, Edit16Regular } from "@fluentui/react-icons";

interface ITimelineItenProps {
    first: boolean;
}

export function TimelineIten(props: ITimelineItenProps) {

    return (
        <div className='audit-monitor-card-timelineitem'>
            <Edit16Regular />
            <div className="audit-monitor-card-timelineitem-line">

            </div>
            {props.first && <Circle16Filled style={{ color: "blue" }} />}
        </div>

    );
}
