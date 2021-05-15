import React from 'react';
import Header from "./Header";
import Main from "./Main.js";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";


function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);


    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard(false);
    }

    return (
        <div className="root">

            <Header/>
            <Main
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
            />
            <Footer/>
            <PopupWithForm
                name="edit-profile"
                title="Редактировать профиль"
                submitText="Сохранить"
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}

            >

                <input type="text" id="profileName" className="popup__input popup__input_type_name" name="name"
                       placeholder="Имя" required minLength="2" maxLength="40"/>
                <span className="popup__input-error profileName-error"></span>
                <input type="text" id="profileStatus" className="popup__input popup__input_type_status" name="status"
                       placeholder="Обо мне" required minLength="2" maxLength="200"/>
                <span className="popup__input-error profileStatus-error"></span>

            </PopupWithForm>

            <PopupWithForm
                name="add-new-card"
                title="Новое место"
                submitText="Сохранить"
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}

            >
                <input type="text" id="placeName" className="popup__input popup__input_type_name" name="name"
                       placeholder="Название" required minLength="2" maxLength="30"/>
                <span className="popup__input-error placeName-error"></span>
                <input type="url" id="placeLink" className="popup__input popup__input_type_picture-link" name="link"
                       placeholder="Ссылка на картинку" required pattern="https://.*"/>
                <span className="popup__input-error placeLink-error"></span>

            </PopupWithForm>

            <PopupWithForm
                name="edit-avatar"
                title="Обновить аватар"
                submitText="Сохранить"
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}

            >

                <input
                    id="avatar"
                    type="url"
                    className="popup__input popup__input_type_avatar-link"
                    name="avatar"
                    placeholder="Ссылка на картинку"
                    required
                />
                <span className="popup__input-error avatar-error"></span>

            </PopupWithForm>

            <PopupWithForm
                name="popup_confirm"
                title="Вы уверены?"
                submitText="Да"
                onClose={closeAllPopups}

            />

            <ImagePopup
                card={selectedCard}
                onClose={closeAllPopups}
            />

        </div>
    )
}

export default App;
