import React from 'react';

class LifeCycle extends React.Component{
    constructor(){
        super();
        console.log('constructor!');
    }

    componentDidMount(){
        console.log('Component Mounted!')
    }

    componentDidUpdate(){
        console.log('component updated!')
    }
    componentWillUnmount(){
        console.log('component will mount')
    }
    shouldComponentUpdate(){
        console.log('should component update')
    }
  
    render(){
        return(
            <div>test</div>
        )
    }
}