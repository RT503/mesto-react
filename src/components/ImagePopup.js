import React from 'react';


function ImagePopup () {
    return (
        <div className="popup popup_type_view-image">
            <figure className="popup__figure">
                <button type="button" className="popup__close popup__close_view-image"/>
                <img className="popup__image"
                     src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg" alt="Архыз"/>
                <figcaption className="popup__imagecaption"></figcaption>
            </figure>
        </div>
    )
}

export default ImagePopup;




























































