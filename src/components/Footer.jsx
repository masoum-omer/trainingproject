import { Link } from "react-router-dom";
import "../styles/components.css";

function Footer() {
    return (
        <footer className="main-footer">

            <div className="footer-container">

                <div className="footer-brand">

                    <Link to="/" className="footer-logo">
                        🎓 بوابة التدريب
                    </Link>

                    <p>
                        منصة متكاملة لإدارة التدريب
                        التعاوني والميداني وربط الطلاب
                        بجهات التدريب.
                    </p>

                </div>


                <div className="footer-column">

                    <h3>
                        روابط سريعة
                    </h3>

                    <Link to="/">
                        الرئيسية
                    </Link>

                    <Link to="/training">
                        فرص التدريب
                    </Link>

                    <Link to="/about">
                        عن النظام
                    </Link>

                </div>


                <div className="footer-column">

                    <h3>
                        المساعدة
                    </h3>

                    <Link to="/contact">
                        تواصل معنا
                    </Link>

                    <Link to="/faq">
                        الأسئلة الشائعة
                    </Link>

                    <Link to="/privacy">
                        سياسة الخصوصية
                    </Link>

                </div>


                <div className="footer-column">

                    <h3>
                        حسابك
                    </h3>

                    <Link to="/login">
                        تسجيل الدخول
                    </Link>

                    <Link to="/register">
                        إنشاء حساب
                    </Link>

                </div>

            </div>


            <div className="footer-bottom">

                <p>
                    © 2026 بوابة التدريب التعاوني والميداني.
                    جميع الحقوق محفوظة.
                </p>

            </div>

        </footer>
    );
}

export default Footer;