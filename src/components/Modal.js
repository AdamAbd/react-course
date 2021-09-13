function Modal(props) {
    function confirmHandler() {
        props.onConfirm();
    }

    return (
        <div className='modal'>
            <p>Are you sure?</p>
            <button className='btn btn--alt' onClick={props.onCancel}>Cancel</button>
            <button className='btn' onClick={confirmHandler}>Confirm</button>
        </div>
    );
}

export default Modal;
