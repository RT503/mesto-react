import React from 'react';
import { useState, useEffect } from 'react';
import Header from "./Header";
import Main from "./Main.js";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";


function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [cards, setCards] = React.useState([]);


    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
    }



    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
    }

    return (
        <div className="root">

            <Header />
            <Main
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
            />
            <Footer />
            <PopupWithForm
                name="edit-profile"
                title="Редактировать профиль"
                submitText="Сохранить"
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}

            />
            <PopupWithForm
                name="add-new-card"
                title="Создать"
                submitText="Да"
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}

            />
            <PopupWithForm
                name="edit-avatar"
                title="Обновить аватар"
                submitText="Сохранить"
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}

            />
            <PopupWithForm
                name="popup_confirm"
                title="Вы уверены?"
                submitText="Да"
                onClose={closeAllPopups}

            />
            <ImagePopup />

        </div>
  )
}

export default App;
