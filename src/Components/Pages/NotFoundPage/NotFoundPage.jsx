import { Link } from "react-router-dom";

import { Spinner } from "../../transponder";

import "./notFoundPage.scss"

const NotFoundPage = () => {
     return (
          <div className="page__notFounded notFounded _container">
               <h1 className="notFounded__title" >Такой страницы не существует!</h1>
               <Spinner />
               <Link to="/" className="notFounded__linkToMainPage" >Вернуться на главную страницу</Link>
          </div>
     );
};
export default NotFoundPage;