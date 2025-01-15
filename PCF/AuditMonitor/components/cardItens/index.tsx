import * as React from 'react';
import './style.css';
import { ArrowRight16Regular } from "@fluentui/react-icons";
import { TimelineItens } from '../timelineItens';
import {
    Link,
    Popover,
    PopoverTrigger,
    PopoverSurface,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Body1Stronger,
    Caption1Strong,
    TableCellLayout,
    Caption1Stronger,
    Caption1,
} from '@fluentui/react-components';
import { IDataAttributes } from '../../models';
import { IInputs } from '../../generated/ManifestTypes';

interface ICardItensProps {
    hour?: string;
    name?: string;
    action?: string;
    totalFields?: number;
    firts: boolean;
    attributes?: IDataAttributes[];
    context?: ComponentFramework.Context<IInputs>;
}

export default function CardItens(props: ICardItensProps) {
    const modifieldData = (data: string | number | boolean | object | undefined) => {
        switch (data) {
            case true:
                return 'Sim';
            case false:
                return 'Não';
            default:
                return data;
        }
    }
    const iconArrow = <ArrowRight16Regular style={{ color: "green" }} />;
    return (
        <div className='audit-monitor-card-item'>
            <div className='audit-monitor-card-item-timeline'>
                <TimelineItens first={props.firts} />
            </div>
            <div className='audit-monitor-card-item-content'>
                <Body1Stronger className='audit-monitor-card-item-content-title'>{props.hour} - {props.name}</Body1Stronger>
                <Caption1Strong>{props.action} - {props.totalFields} {props.context?.resources.getString("field-updates")}</Caption1Strong>
                <Popover
                    withArrow
                    positioning={{ align: 'center', position: 'below' }}
                    size='small'
                    closeOnScroll
                >
                    <PopoverTrigger disableButtonEnhancement>
                        <Link disabled={props.attributes?.length === 0} >
                            <Caption1Strong>{props.context?.resources.getString("label-more-details")}</Caption1Strong>
                        </Link>
                    </PopoverTrigger>
                    <PopoverSurface
                        tabIndex={-1}
                        className='audit-monitor-card-item-content-popover-surface'
                    >
                        <Table
                            size='extra-small'
                            as='table'
                        >
                            <TableBody
                                as='tbody'
                            >
                                {props.attributes?.map((attribute, index) => {
                                    return (
                                        <TableRow
                                            key={index}
                                            as='tr'
                                        >
                                            <TableCell
                                                className='.audit-monitor-card-item-content-table-row'
                                                as='td'
                                            >
                                                <Caption1Stronger>{attribute.displayName}</Caption1Stronger>
                                            </TableCell>

                                            <TableCell
                                                className='.audit-monitor-card-item-content-table-row'
                                                as='td'
                                            >
                                                <Caption1>{attribute.oldValue ? attribute.oldValue : "-"}</Caption1>
                                            </TableCell>
                                            <TableCell
                                                className='.audit-monitor-card-item-content-table-row'
                                                as='td'
                                            >
                                                <TableCellLayout
                                                    media={iconArrow}
                                                    truncate
                                                >
                                                    <Caption1>{modifieldData(attribute.newValue)}</Caption1>
                                                </TableCellLayout>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </PopoverSurface>
                </Popover>
            </div>
        </div>
    );
}