import React from 'react';
import { useEffect } from 'react';
import Header from "./Header";
import Main from "./Main.js";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";


function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);

    const [currentUser, setCurrentUser] = React.useState({});
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

    function handleCardClick(card) {
        setSelectedCard(card);
    }


    function handleCardDelete(card) {
        console.log(card);
        api.deleteCard(card)
            .then(() => {
                const newCards = cards.filter((c) => c._id !== card._id);
                setCards(newCards);
                closeAllPopups()
            })
            .catch((err) => console.log(`Ошибка удаления карточки ${err}`));
    }

    function handleCardLike(card) {
        console.log(card);
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        api.changeLikeCardStatus(card._id, !isLiked)
            .then((newCard) => {
                const newCards = cards.map((c) => c._id === card._id ? newCard : c)

        setCards(newCards);
    }

)
.
    catch((err) => console.log(`Ошибка ${err}`));
}


    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard(null);
    }

    useEffect(() => {
        Promise.resolve(api.getUserInfo())
            .then ((info) => {
                setCurrentUser(info);
            })
    }, [])

    useEffect(() => {
        Promise.resolve(api.getCards())
            .then((data) => {
                setCards(data);
            })
            .catch((err) => {
                console.log(`Ошибка ${err}`);
            })
    }, [])

    return (

        <CurrentUserContext.Provider value={currentUser}>
        <div className="root">

            <Header/>
            <Main
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
                cards={cards}
                onCardDelete={handleCardDelete}
                onCardLike={handleCardLike}
            />
            <Footer/>
            <EditProfilePopup

                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}

            >



            </EditProfilePopup>

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
            </CurrentUserContext.Provider>
    )
}

export default App;
