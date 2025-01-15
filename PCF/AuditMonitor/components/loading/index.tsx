import * as React from 'react';
import { Spinner } from '@fluentui/react-components';

interface ILoadingProps {
    size?: "small" | "extra-large" | "extra-tiny" | "tiny" | "extra-small" | "medium" | "large" | "huge" | undefined;
}

function Loading(props: ILoadingProps) {
    const spinnerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        minHeight: '200px'
    };

    return (
        <div style={spinnerStyle}>
            <Spinner
                size={props.size}
                labelPosition='below'
                label='Carregando...'
            />
        </div>
    );
}

export default Loading;