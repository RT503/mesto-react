import React from 'react';

import Header from "./Header";
import Main from "./Main.js";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";


function App() {

    const [isEditProfileOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

    function handleEditAvatarClick() {

    }

    function handleEditProfileClick() {

    }

    function handleAddPlaceClick() {

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
            <PopupWithForm name="delete-card" title="Вы уверены?" submitText="Да"/>
            <PopupWithForm name="delete-card" title="Вы уверены?" submitText="Да"/>
            <PopupWithForm name="delete-card" title="Вы уверены?" submitText="Да"/>
            <PopupWithForm name="delete-card" title="Вы уверены?" submitText="Да"/>
            <ImagePopup />

        </div>
  )
}

export default App;
