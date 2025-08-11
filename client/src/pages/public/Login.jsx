import { Link } from "react-router";
import { LoginForm } from "../../components/forms/LoginForm";
import { PublicPageTitle } from "../../components/PublicPageTitle";
import { useContext } from "react";
import { UserContext } from "../../context/user/UserContext";

export function LoginPage() {
    const { isLoggedIn } = useContext(UserContext);

    return (
        <main className="min-page-height">
            <PublicPageTitle title={'Login'} />

            <div className="container">
                <div className="row">
                    {
                        isLoggedIn
                        ?
                        <>
                            <p>Einamuoju metu prie sistemos prisijunge vartotojai negali prisijungti prie kitos paskyros. Noredami ta atlikti - atsijunkite nuo dartines paskyros</p>
                            <div className="d-flex gap-3">
                                <Link to='/' className="btn btn-primary">Go home</Link>
                                or
                                <Link to='/logout' className="btn btn-primary">Logout</Link>
                            </div>
                        </>
                        : <LoginForm />
                    }
                </div>
            </div>
        </main>
    );
}