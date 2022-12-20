import React, { Component } from 'react';
import Counter from '../component/counter';

class SHowAll extends Component {
    state = { 
        counter : [
            {id:1 ,value:4},
            {id:2 ,value:0},
            {id:3 ,value:0},
            {id:4 ,value:0}
        ]
     }; 
     handleDelete = counterId =>{
            console.log("Hadler event" , counterId);       
     };
    render() { 
        return (
            <div>
                {this.state.counter.map(counter => 
                    <Counter 
                        key={counter.id}  
                        onDelete={this.handleDelete} 
                        value= {counter.value} 
                        selected = {true}
                     />
                )}
            </div>
        );
    }
}
 
export default SHowAll;