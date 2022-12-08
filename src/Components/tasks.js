import React, {useRef} from 'react';
import './UserForm.css';

function UserForm(props){
    let servRef = useRef();


    function onCreateUser(event) {
        event.preventDefault();
        let user = {
            serviceofloa: servRef.current.value,

        }

        // console.log(user);
        props.onCreateUser(user)
    }
    

    return <>
            <div id="myModal" class="modal">
                    <div class="modal-content">
                        <div class="close" onClick={props.closeForm}>&times;</div>
                        <h3>Add new person</h3>
                        <div class="user-form">
                            <form onSubmit={onCreateUser}>
                                <div>
                                    <input type="text" placeholder="Name" ref={servRef} defaultValue={props.editMode ? props.user.serviceofloa : ''}/>
                                </div>

                                <button className='add-user-button'>{props.editMode ? 'Update' : 'Add'}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
}

export default UserForm;