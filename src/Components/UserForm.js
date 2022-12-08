import React, {useRef} from 'react';
import './UserForm.css';

function UserForm(props){
    let nameRef = useRef();
    let descRef = useRef();
    let addRef = useRef();
    let loaRef = useRef();
    let elaRef = useRef();
    let taxRef = useRef();
    let busRef = useRef();
    let dateRef = useRef();
    let typeRef = useRef();
    let servRef = useRef();

    function onCreateUser(event) {
        event.preventDefault();
        let user = {
            name: nameRef.current.value,
            description: descRef.current.value,
            address: addRef.current.value,
            loa: loaRef.current.value,
            ela: elaRef.current.value,
            taxableyear: taxRef.current.value,
            businesstype: busRef.current.value,
            dateadded: dateRef.current.value,
            typeoftransac: typeRef.current.value,
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
                                    <input type="text" placeholder="Name" ref={nameRef} defaultValue={props.editMode ? props.user.name : ''}/>
                                </div>
                                <div>
                                    <input type="description" placeholder="Description" ref={descRef} defaultValue={props.editMode ? props.user.description : ''}/>
                                </div>
                                <div>
                                    <input type="address" placeholder="Address" ref={addRef} defaultValue={props.editMode ? props.user.address : ''}/>
                                </div>
                                <div>
                                    <input type="LOA" placeholder="LOA" ref={loaRef} defaultValue={props.editMode ? props.user.loa : ''}/>
                                </div>
                                <div>
                                    <input type="eLA" placeholder="eLA" ref={elaRef} defaultValue={props.editMode ? props.user.ela : ''}/>
                                </div>
                                <div>
                                    <input type="taxyear" placeholder="Taxable Year" ref={taxRef} defaultValue={props.editMode ? props.user.taxableyear : ''}/>
                                </div>
                                <div>
                                    <input type="business-type" placeholder="Business Type" ref={busRef} defaultValue={props.editMode ? props.user.businesstype : ''}/>
                                </div>
                                <div>
                                    <input type="date" placeholder="Date of Birth" ref={dateRef} defaultValue={props.editMode ? props.user.dateadded : ''}/>
                                    <select name="gender" ref={typeRef} defaultValue={props.editMode ? props.user.typeoftransac : ''}>
                                        <option value="Letter of Authority">Letter of Authority</option>
                                        <option value="Onnet">Onnet</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                                <button className='add-user-button'>{props.editMode ? 'Update' : 'Add'}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
}

export default UserForm;