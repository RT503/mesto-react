
import './index.css';

function App() {
  return (
    <body class="page">
    <div class="root">
      <header class="header">
        <img class="header__logo" src="./images/header-logo.svg" alt="Логотип сайта" / >
      </header>
      <main class="content">
        <section class="profile">
          <div class="profile__info">
            <img class="profile__avatar" src="./images/profile-avatar.png" alt="Аватар пользователя" / >
            <button class="profile__avatar-button"></button>
            <div class="profile__text-block">
              <div class="profile__row">
                <h2 class="profile__name">Жак-Ив Кусто</h2>
                <button type="button" class="profile__edit-button" ></button>
              </div>
              <p class="profile__status">Исследователь океана</p>
            </div>
          </div>
          <button type="button" class="profile__add-button"></button>
        </section>

        <section class="elements">
          <ul class="elements__list">
          </ul>
        </section>
      </main>
      <footer class="footer">
        <p class="footer__copyright">&copy;2021 Roman Tupikov</p>
      </footer>

      <div class="popup popup_type_edit-profile">
        <div class="popup__content">
          <button type="button" class="popup__close"></button>
          <h3 class="popup__title">Редактировать профиль</h3>
          <form class="popup__form popup__form_type_edit-profile" name="popup-edit-form" id="edit-profile-form" novalidate>
            <input type="text" id="profileName" class="popup__input popup__input_type_name" name="name" placeholder="Имя" required minlength="2" maxlength="40" />
            <span class="popup__input-error profileName-error"></span>
            <input type="text" id="profileStatus" class="popup__input popup__input_type_status" name="status" placeholder="Обо мне" required minlength="2" maxlength="200" />
            <span class="popup__input-error profileStatus-error"></span>
            <button type="submit" class="popup__submit-button">Сохранить</button>
          </form>
        </div>
      </div>

      <div class="popup popup_type_add-new-card">
        <div class="popup__content">
          <button type="button" class="popup__close"></button>
          <h3 class="popup__title">Новое место</h3>
          <form class="popup__form popup__form_type_add-new-card" name="popup-addCard-form" id="add-card-form" novalidate>
            <input type="text" id="placeName" class="popup__input popup__input_type_name" name="name" placeholder="Название" required minlength="2" maxlength="30" />
            <span class="popup__input-error placeName-error"></span>
            <input type="url" id="placeLink" class="popup__input popup__input_type_picture-link" name="link" placeholder="Ссылка на картинку" required pattern="https://.*" />
            <span class="popup__input-error placeLink-error"></span>
            <button type="submit" class="popup__submit-button">Создать</button>
          </form>
        </div>
      </div>

      <div class="popup popup_edit-avatar">
        <div class="popup__content">
          <button type="button" class="popup__close"></button>
          <h3 class="popup__title">Обновить аватар</h3>
          <form class="popup__form popup__form_edit-avatar" name="popup-edit-avatar-form" id="edit-avatar-form" novalidate>
            <input
              id="avatar"
              type="url"
              class="popup__input popup__input_type_avatar-link"
              name="avatar"
              placeholder="Ссылка на картинку"
              required
              />
            <span class="popup__input-error avatar-error"></span>
            <button type="submit" class="popup__submit-button">Сохранить</button>
          </form>
        </div>
      </div>

      <div class="popup popup_confirm">
        <div class="popup__content">
          <button type="button" class="popup__close"></button>
          <h3 class="popup__title">Вы уверены?</h3>
          <form class="popup__form popup__form_delete-card" name="delete-card">
            <button type="submit" class="popup__submit-button">Да</button>
          </form>
        </div>
      </div>

      <div class="popup popup_type_view-image">
        <figure class="popup__figure">
          <button type="button" class="popup__close popup__close_view-image"></button>
          <img class="popup__image" src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg" alt="Архыз" />
          <figcaption class="popup__imagecaption"></figcaption>
        </figure>
      </div>
    </div>

    <template class="card__template" id="card__template">
      <li class="card">
        <img class="card__image" src="#" alt="#" />
        <button type="button" class="card__remove-button"></button>
        <div class="card__bottom-section">
          <h2 class="card__title"></h2>
          <button type="button" class="card__like-button">
            <p class="card__counter">0</p>
          </button>
        </div>
      </li>
    </template>

  </body>
  );
}

export default App;
