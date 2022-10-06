import React from 'react';

const Title = (props) => {

    return (
        <div>
            <h1 className='text-center' style={mystyle}>{props.title}</h1>
        </div>
    );
}


export default Title;

const mystyle = {
    color: 'green',
    fontSize: '100px',
    margin: "3rem 0"
}
