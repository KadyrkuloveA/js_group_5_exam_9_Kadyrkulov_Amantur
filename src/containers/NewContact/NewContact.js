import React, {useState} from 'react';
import {addContact} from "../../store/actions/actionContacts";
import {connect} from "react-redux";

const contactInf = {
    img: '',
    name: '',
    number: '',
    mail: ''
};

const NewContact = (props) => {
    const [contact, setContact] = useState(contactInf);

    const addContact = async e => {
        e.preventDefault();
        await props.addContact(contact);
        props.history.push('/');
    };

    const Changer = (event) => {
        setContact({
            ...contact,
            [event.target.id]: event.target.value
        });
    };

    return (
        <div className="card" style={{maxWidth: '1000px', margin: '40px auto'}}>
            <div className="card-header text-center">
                Add New Contact
            </div>
            <form>
                <div className="card-body row justify-content-around">
                    <div className='col-7'>
                        <div className="form-group row">
                            <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input type="text" value={contact.name} onChange={Changer} className="form-control" id="name" placeholder="John Doe" required/>
                            </div>
                        </div>
                        <div className="form-group row mt-2">
                            <label htmlFor="mail" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" value={contact.mail} onChange={Changer} className="form-control" id="mail" placeholder="name@example.com" required/>
                            </div>
                        </div>
                        <div className="form-group row mt-2">
                            <label htmlFor="number" className="col-sm-2 col-form-label">Phone</label>
                            <div className="col-sm-10">
                                <input type="number" value={contact.number} onChange={Changer} className="form-control" id="number" placeholder="0777 777 777" required/>
                            </div>
                        </div>
                        <div className="form-group row mt-2">
                            <label htmlFor="img" className="col-sm-2 col-form-label">Image</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="img" value={contact.img} onChange={Changer} placeholder="https://linkImg.jpg" required/>
                            </div>
                        </div>
                        <button type="submit" onClick={addContact} className="btn btn-success">Add</button>
                    </div>
                    <div className='col-4 row flex-column'>
                        <p>Image Preview:</p>
                        <img src={contact.img} className="rounded float-right" alt='' style={{maxWidth: '160px', maxHeight: '160px'}}/>
                    </div>
                </div>
            </form>
            <div className="card-footer text-muted text-center">
                after adding you will be redirected to the main page
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addContact: (contact) => dispatch(addContact(contact))
});

export default connect(null, mapDispatchToProps)(NewContact);