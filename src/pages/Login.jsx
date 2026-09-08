import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/auth.css";
import api from "../services/api.js";
function Login() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        remember: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });

        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: "",
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.email.trim()) {
            newErrors.email = "البريد الإلكتروني مطلوب";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "البريد الإلكتروني غير صحيح";
        }

        if (!formData.password) {
            newErrors.password = "كلمة المرور مطلوبة";
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        console.log("Login Data:", formData);

        alert("تم تسجيل الدخول بنجاح!");
           navigate("/student/Dashboard");
    };

    return (
        <div className="auth-page">

            {/* =================================
                الجانب التعريفي
            ================================= */}

            <div className="auth-info">

                <div className="auth-info-content">

                    <Link to="/" className="auth-logo">
                        🎓 بوابة التدريب
                    </Link>


                    <div className="auth-info-main">

                        <span className="auth-badge">
                            التدريب التعاوني والميداني
                        </span>

                        <h1>
                            مرحباً بعودتك
                            <br />
                            إلى بوابة التدريب
                        </h1>

                        <p>
                            سجل الدخول للوصول إلى فرص التدريب،
                            ومتابعة طلباتك وتقاريرك والتواصل مع
                            جهات التدريب بسهولة.
                        </p>


                        <div className="auth-features">

                            <div className="auth-feature">

                                <span>✓</span>

                                <div>

                                    <strong>
                                        فرص تدريب مناسبة
                                    </strong>

                                    <small>
                                        اكتشف فرصاً تناسب تخصصك
                                        ومهاراتك.
                                    </small>

                                </div>

                            </div>


                            <div className="auth-feature">

                                <span>✓</span>

                                <div>

                                    <strong>
                                        متابعة طلباتك
                                    </strong>

                                    <small>
                                        تابع حالة طلبات التدريب
                                        في أي وقت.
                                    </small>

                                </div>

                            </div>


                            <div className="auth-feature">

                                <span>✓</span>

                                <div>

                                    <strong>
                                        إدارة تدريبك
                                    </strong>

                                    <small>
                                        ارفع التقارير وتابع تقييمات
                                        المشرفين.
                                    </small>

                                </div>

                            </div>

                        </div>

                    </div>


                    <div className="auth-info-footer">
                        © 2026 بوابة التدريب التعاوني والميداني
                    </div>

                </div>

            </div>


            {/* =================================
                قسم تسجيل الدخول
            ================================= */}

            <div className="auth-form-section">

                <div className="register-container">

                    {/* Mobile Logo */}

                    <div className="mobile-logo">

                        <Link to="/">
                            🎓 بوابة التدريب
                        </Link>

                    </div>


                    {/* Header */}

                    <div className="form-header">

                        <h2>
                            تسجيل الدخول
                        </h2>

                        <p>
                            أدخل بيانات حسابك للوصول إلى حسابك
                        </p>

                    </div>


                    {/* Login Form */}

                    <form
                        className="auth-form login-form"
                        onSubmit={handleSubmit}
                    >

                        {/* Email */}

                        <div className="form-group">

                            <label htmlFor="email">
                                البريد الإلكتروني
                            </label>

                            <div className="input-wrapper">

                                <span className="input-icon">
                                    ✉
                                </span>

                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="example@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    autoComplete="email"
                                />

                            </div>

                            {errors.email && (
                                <span className="error-message">
                                    {errors.email}
                                </span>
                            )}

                        </div>


                        {/* Password */}

                        <div className="form-group">

                            <label htmlFor="password">
                                كلمة المرور
                            </label>

                            <div className="input-wrapper">

                                <span className="input-icon">
                                    🔒
                                </span>

                                <input
                                    id="password"
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    name="password"
                                    placeholder="أدخل كلمة المرور"
                                    value={formData.password}
                                    onChange={handleChange}
                                    autoComplete="current-password"
                                />

                                <button
                                    type="button"
                                    className="password-toggle"
                                    onClick={() =>
                                        setShowPassword(
                                            !showPassword
                                        )
                                    }
                                    aria-label={
                                        showPassword
                                            ? "إخفاء كلمة المرور"
                                            : "إظهار كلمة المرور"
                                    }
                                >
                                    {showPassword ? "🙈" : "👁"}
                                </button>

                            </div>

                            {errors.password && (
                                <span className="error-message">
                                    {errors.password}
                                </span>
                            )}

                        </div>


                        {/* Remember + Forgot Password */}

                        <div className="login-options">

                            <label className="remember-me">

                                <input
                                    type="checkbox"
                                    name="remember"
                                    checked={formData.remember}
                                    onChange={handleChange}
                                />

                                <span>
                                    تذكرني
                                </span>

                            </label>


                            <Link
                                to="/forgot-password"
                                className="forgot-password"
                            >
                                نسيت كلمة المرور؟
                            </Link>

                        </div>


                        {/* Submit */}

                        <button
                            type="submit"
                            className="submit-btn"
                        >
                            تسجيل الدخول

                            <span>
                                ←
                            </span>

                        </button>

                    </form>


                    {/* Register */}

                    <div className="auth-switch">

                        ليس لديك حساب؟

                        <Link to="/register">
                            إنشاء حساب جديد
                        </Link>

                    </div>


                    {/* Home */}

                    <div className="back-home">

                        <Link to="/">
                            ← العودة إلى الصفحة الرئيسية
                        </Link>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Login;