import * as React from "react";
import './style.css';
import { Circle16Filled, Edit16Regular } from "@fluentui/react-icons";

interface ITimelineItenProps {
    first: boolean;
}

function TimelineIten(props: ITimelineItenProps) {
    const iconCicle = <Circle16Filled style={{ color: "blue" }} />;
    const iconEdit = <Edit16Regular />;
    return (
        <div className='audit-monitor-card-timelineitem'>
            {iconEdit}
            <div className="audit-monitor-card-timelineitem-line">

            </div>
            {props.first && iconCicle}
        </div>
    );
}
export const TimelineItens = React.memo(TimelineIten);