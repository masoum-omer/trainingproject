import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">

            <div className="container navbar-content">

                <Link to="/" className="logo">
                    بوابة التدريب
                </Link>

                <div className="nav-links">

                    <Link to="/">الرئيسية</Link>

                    <Link to="/training">
                        فرص التدريب
                    </Link>

                    <Link to="/about">
                        عن النظام
                    </Link>

                    <Link to="/contact">
                        تواصل معنا
                    </Link>

                </div>

                <div className="nav-buttons">

                    <Link to="/login" className="login-btn">
                        تسجيل الدخول
                    </Link>

                    <Link to="/register" className="register-btn">
                        إنشاء حساب
                    </Link>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;