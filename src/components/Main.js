import React from 'react';

function Main (props) {

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__info">
                    <img className="profile__avatar" src="../images/profile-avatar.png" alt="Аватар пользователя" />
                    <button onClick={props.onEditAvatar} className="profile__avatar-button"></button>
                <div className="profile__text-block">
                    <div className="profile__row">
                        <h2 className="profile__name">Жак-Ив Кусто</h2>
                        <button onClick={props.onEditProfile} type="button" className="profile__edit-button" ></button>
                    </div>
                    <p className="profile__status">Исследователь океана</p>
                </div>
                </div>
            <button type="button" onClick={props.onAddPlace} className="profile__add-button"></button>
            </section>

            <section className="elements">
                <ul className="elements__list">
                </ul>
            </section>

            <div className="popup popup_type_edit-profile">
                <div className="popup__content">
                    <button type="button" className="popup__close"></button>
                    <h3 className="popup__title">Редактировать профиль</h3>
                    <form className="popup__form popup__form_type_edit-profile" name="popup-edit-form" id="edit-profile-form"
                          noValidate>
                        <input type="text" id="profileName" className="popup__input popup__input_type_name" name="name"
                               placeholder="Имя" required minLength="2" maxLength="40"/>
                        <span className="popup__input-error profileName-error"></span>
                        <input type="text" id="profileStatus" className="popup__input popup__input_type_status" name="status"
                               placeholder="Обо мне" required minLength="2" maxLength="200"/>
                        <span className="popup__input-error profileStatus-error"></span>
                        <button type="submit" className="popup__submit-button">Сохранить</button>
                    </form>
                </div>
            </div>

            <div className="popup popup_type_add-new-card">
                <div className="popup__content">
                    <button type="button" className="popup__close"></button>
                    <h3 className="popup__title">Новое место</h3>
                    <form className="popup__form popup__form_type_add-new-card" name="popup-addCard-form" id="add-card-form"
                          noValidate>
                        <input type="text" id="placeName" className="popup__input popup__input_type_name" name="name"
                               placeholder="Название" required minLength="2" maxLength="30"/>
                        <span className="popup__input-error placeName-error"></span>
                        <input type="url" id="placeLink" className="popup__input popup__input_type_picture-link" name="link"
                               placeholder="Ссылка на картинку" required pattern="https://.*"/>
                        <span className="popup__input-error placeLink-error"></span>
                        <button type="submit" className="popup__submit-button">Создать</button>
                    </form>
                </div>
            </div>

            <div className="popup popup_edit-avatar">
                <div className="popup__content">
                    <button type="button" className="popup__close"></button>
                    <h3 className="popup__title">Обновить аватар</h3>
                    <form className="popup__form popup__form_edit-avatar" name="popup-edit-avatar-form" id="edit-avatar-form"
                          noValidate>
                        <input
                            id="avatar"
                            type="url"
                            className="popup__input popup__input_type_avatar-link"
                            name="avatar"
                            placeholder="Ссылка на картинку"
                            required
                        />
                        <span className="popup__input-error avatar-error"></span>
                        <button type="submit" className="popup__submit-button">Сохранить</button>
                    </form>
                </div>
            </div>

            <div className="popup popup_confirm">
                <div className="popup__content">
                    <button type="button" className="popup__close"></button>
                    <h3 className="popup__title">Вы уверены?</h3>
                    <form className="popup__form popup__form_delete-card" name="delete-card">
                        <button type="submit" className="popup__submit-button">Да</button>
                    </form>
                </div>
            </div>

            <div className="popup popup_type_view-image">
                <figure className="popup__figure">
                    <button type="button" className="popup__close popup__close_view-image"></button>
                    <img className="popup__image"
                         src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg" alt="Архыз"/>
                    <figcaption className="popup__imagecaption"></figcaption>
                </figure>
            </div>
        </main>
    )


}

export default Main;