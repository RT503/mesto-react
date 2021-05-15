import React from 'react';

function PopupWithForm(props) {

    return (
        <div className={`popup popup_type_${props.name}} ${props.isOpen && 'popup_opened'}`}>
            <div className="popup__content">
                <button type="button" className="popup__close" onClick={props.onClose}></button>
                <h3 className="popup__title">{props.title}</h3>

                <form className="popup__form" name={props.name} noValidate>
                    {props.children}
                    <button type="submit" form={props.name} className="popup__submit-button">{props.submitText}</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;