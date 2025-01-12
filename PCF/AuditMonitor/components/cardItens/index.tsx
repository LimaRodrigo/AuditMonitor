import * as React from 'react';
import './style.css';
 import { ArrowRight16Regular } from "@fluentui/react-icons";
import { TimelineIten } from '../timelineItens';
import {
    Text, Link, Popover, PopoverTrigger, PopoverSurface,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Body1Stronger,
    Caption1Strong,
    Body1Strong,
} from '@fluentui/react-components';
import { IDataAttributes } from '../../models';

interface ICardItensProps {
    hour?: string;
    name?: string;
    action?: string;
    totalFields?: number;
    firts: boolean;
    attributes?: IDataAttributes[];
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


    return (
        <div className='audit-monitor-card-item'>
            <div className='audit-monitor-card-item-timeline'>
                <TimelineIten first={props.firts} />
            </div>
            <div className='audit-monitor-card-item-content'>
                <Body1Stronger className='audit-monitor-card-item-content-title'>{props.hour} - {props.name}</Body1Stronger>
                <Caption1Strong>{props.action} - {props.totalFields} campos</Caption1Strong>
                <Popover withArrow positioning={{ align: 'center', position: 'below' }}>
                    <PopoverTrigger disableButtonEnhancement>
                     <Link><Caption1Strong>Mais detalhes</Caption1Strong></Link>   
                    </PopoverTrigger>

                    <PopoverSurface tabIndex={-1} style={{ maxHeight: '400px', overflowY: 'auto' }}>
                        <Table size='small' style={{ maxWidth: '550px' }}>
                            {/* <TableHeader as="thead">
                                <TableRow as='tr'>
                                    <TableHeaderCell as='th' style={{ width: '40%' }}>
                                        <Body1Stronger>Campo</Body1Stronger>
                                    </TableHeaderCell>
                                    <TableHeaderCell as='th' style={{ width: '32.5%' }}>
                                        <Body1Stronger>Antigo</Body1Stronger>
                                    </TableHeaderCell>
                                    <TableHeaderCell as='th' style={{ width: '5%' }}>
                                    </TableHeaderCell>
                                    <TableHeaderCell as='th' style={{ width: '32.5%' }}>
                                        <Body1Stronger>Novo</Body1Stronger>
                                    </TableHeaderCell>
                                </TableRow>
                            </TableHeader> */}
                            <TableBody>
                                {props.attributes?.map((attribute, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell style={{ width: '40%' }}>
                                                <Text><Body1Strong>{attribute.displayName}</Body1Strong></Text>
                                            </TableCell>

                                            <TableCell>
                                                <Text>{attribute.oldValue ? attribute.oldValue: "-" }</Text>
                                            </TableCell>
                                            <TableCell>
                                                <ArrowRight16Regular style={{color: "green"}}/>
                                            </TableCell>
                                            <TableCell>
                                                <Text>{modifieldData(attribute.newValue)}</Text>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>



                        {/* <table>
                            <thead>
                                <tr>
                                    <th>Campo</th>
                                    <th>Valor Antigo</th>
                                    <th>Valor Novo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.attributes?.map((attribute, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{attribute.displayName}</td>
                                            <td>{attribute.oldValue}</td>
                                            <td>{attribute.newValue}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table> */}

                    </PopoverSurface>
                </Popover>
                {/* <span className='audit-monitor-card-item-content-link'><a href='#'>Mais detalhes</a></span> */}

            </div>
        </div>
    );
}