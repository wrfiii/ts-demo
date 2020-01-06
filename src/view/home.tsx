import React from 'react'

import { AutoComplete, Skeleton } from 'antd';

interface Props {
    name: String
    age: Number
}
interface State {

}

function onSelect(value: any) {
    console.log('onSelect', value);
}


export default class Complete extends React.Component {
    render() {
        return (
            <div>
                {
                    [1, 2, 3, 5, 6].map(val => {
                        return <Skeleton key={val} />
                    })
                }

            </div>
        );
    }
}