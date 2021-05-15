import React from 'react';
import { useEffect } from 'react';
import Header from "./Header";
import Main from "./Main.js";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

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
            .catch((err) => console.log(`Ошибка ${err}`));
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

    function handleUpdateUser({name, about}){
        api.patchUserInfo({name, about})
            .then((data) => {
                setCurrentUser(data);
                closeAllPopups();
            }).catch((err) => {console.log(err)})
    }

    function handleUpdateAvatar({avatar}) {
        api.updateAvatar({avatar})
            .then((data) => {
                setCurrentUser(data);
                closeAllPopups()
            }).catch((err) => console.log(err));
    }

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
                onUpdateUser={handleUpdateUser}
            >
            </EditProfilePopup>

            <AddPlacePopup
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
                onUpda
            >


            </AddPlacePopup>

            <EditAvatarPopup
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                onUpdateAvatar={handleUpdateAvatar}
            />


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
