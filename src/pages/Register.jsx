import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/auth.css";

function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        universityId: "",
        major: "",
        role: "student",
        password: "",
        password_confirmation: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });

        // إزالة الخطأ عند تعديل الحقل
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: "",
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "الاسم الكامل مطلوب";
        }

        if (!formData.email.trim()) {
            newErrors.email = "البريد الإلكتروني مطلوب";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "البريد الإلكتروني غير صحيح";
        }

        if (formData.role === "student" && !formData.universityId.trim()) {
            newErrors.universityId = "الرقم الجامعي مطلوب";
        }

        if (formData.role === "student" && !formData.major) {
            newErrors.major = "يرجى اختيار التخصص";
        }

        if (!formData.password) {
            newErrors.password = "كلمة المرور مطلوبة";
        } else if (formData.password.length < 8) {
            newErrors.password =
                "كلمة المرور يجب أن تكون 8 أحرف على الأقل";
        }

        if (!formData.password_confirmation) {
            newErrors.password_confirmation =
                "يرجى تأكيد كلمة المرور";
        } else if (
            formData.password !== formData.password_confirmation
        ) {
            newErrors.password_confirmation =
                "كلمتا المرور غير متطابقتين";
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

        console.log("Registration Data:", formData);

        alert("تم إنشاء الحساب بنجاح!");
    };

    return (
        <div className="auth-page">

            {/* الجانب التعريفي */}
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
                            ابدأ رحلتك
                            <br />
                            المهنية معنا
                        </h1>

                        <p>
                            أنشئ حسابك الآن للوصول إلى فرص التدريب
                            والتواصل مع الشركات ومتابعة رحلتك التدريبية
                            بسهولة.
                        </p>

                        <div className="auth-features">

                            <div className="auth-feature">
                                <span>✓</span>
                                <div>
                                    <strong>فرص تدريب متنوعة</strong>
                                    <small>
                                        اكتشف فرصاً مناسبة لتخصصك.
                                    </small>
                                </div>
                            </div>

                            <div className="auth-feature">
                                <span>✓</span>
                                <div>
                                    <strong>متابعة التدريب</strong>
                                    <small>
                                        تابع تقاريرك وتقييماتك بسهولة.
                                    </small>
                                </div>
                            </div>

                            <div className="auth-feature">
                                <span>✓</span>
                                <div>
                                    <strong>تواصل مع الشركات</strong>
                                    <small>
                                        تواصل مع جهات التدريب مباشرة.
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


            {/* نموذج التسجيل */}
            <div className="auth-form-section">

                <div className="register-container">

                    <div className="mobile-logo">
                        <Link to="/">
                            🎓 بوابة التدريب
                        </Link>
                    </div>

                    <div className="form-header">

                        <h2>
                            إنشاء حساب جديد
                        </h2>

                        <p>
                            أنشئ حسابك للوصول إلى خدمات المنصة
                        </p>

                    </div>


                    <form
                        className="auth-form"
                        onSubmit={handleSubmit}
                    >

                        {/* نوع الحساب */}
                        <div className="form-group">

                            <label>
                                نوع الحساب
                            </label>

                            <div className="role-options">

                                <label
                                    className={`role-option ${
                                        formData.role === "student"
                                            ? "active"
                                            : ""
                                    }`}
                                >

                                    <input
                                        type="radio"
                                        name="role"
                                        value="student"
                                        checked={
                                            formData.role === "student"
                                        }
                                        onChange={handleChange}
                                    />

                                    <span className="role-icon">
                                        🎓
                                    </span>

                                    <span>
                                        طالب
                                    </span>

                                </label>


                                <label
                                    className={`role-option ${
                                        formData.role === "company"
                                            ? "active"
                                            : ""
                                    }`}
                                >

                                    <input
                                        type="radio"
                                        name="role"
                                        value="company"
                                        checked={
                                            formData.role === "company"
                                        }
                                        onChange={handleChange}
                                    />

                                    <span className="role-icon">
                                        🏢
                                    </span>

                                    <span>
                                        شركة
                                    </span>

                                </label>

                            </div>

                        </div>


                        {/* الاسم */}
                        <div className="form-group">

                            <label htmlFor="name">
                                الاسم الكامل
                            </label>

                            <div className="input-wrapper">

                                <span className="input-icon">
                                    👤
                                </span>

                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="أدخل اسمك الكامل"
                                    value={formData.name}
                                    onChange={handleChange}
                                />

                            </div>

                            {errors.name && (
                                <span className="error-message">
                                    {errors.name}
                                </span>
                            )}

                        </div>


                        {/* البريد */}
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
                                />

                            </div>

                            {errors.email && (
                                <span className="error-message">
                                    {errors.email}
                                </span>
                            )}

                        </div>


                        {/* بيانات الطالب */}
                        {formData.role === "student" && (
                            <div className="form-row">

                                <div className="form-group">

                                    <label htmlFor="universityId">
                                        الرقم الجامعي
                                    </label>

                                    <div className="input-wrapper">

                                        <span className="input-icon">
                                            #
                                        </span>

                                        <input
                                            id="universityId"
                                            type="text"
                                            name="universityId"
                                            placeholder="مثال: 20240001"
                                            value={
                                                formData.universityId
                                            }
                                            onChange={handleChange}
                                        />

                                    </div>

                                    {errors.universityId && (
                                        <span className="error-message">
                                            {errors.universityId}
                                        </span>
                                    )}

                                </div>


                                <div className="form-group">

                                    <label htmlFor="major">
                                        التخصص
                                    </label>

                                    <div className="input-wrapper">

                                        <span className="input-icon">
                                            🎓
                                        </span>

                                        <select
                                            id="major"
                                            name="major"
                                            value={formData.major}
                                            onChange={handleChange}
                                        >

                                            <option value="">
                                                اختر تخصصك
                                            </option>

                                            <option value="computer_science">
                                                علوم الحاسوب
                                            </option>

                                            <option value="information_technology">
                                                تقنية المعلومات
                                            </option>

                                            <option value="information_systems">
                                                نظم المعلومات
                                            </option>

                                            <option value="software_engineering">
                                                هندسة البرمجيات
                                            </option>

                                            <option value="computer_engineering">
                                                هندسة الحاسوب
                                            </option>

                                        </select>

                                    </div>

                                    {errors.major && (
                                        <span className="error-message">
                                            {errors.major}
                                        </span>
                                    )}

                                </div>

                            </div>
                        )}


                        {/* كلمة المرور */}
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
                                    placeholder="8 أحرف على الأقل"
                                    value={formData.password}
                                    onChange={handleChange}
                                />

                                <button
                                    type="button"
                                    className="password-toggle"
                                    onClick={() =>
                                        setShowPassword(
                                            !showPassword
                                        )
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


                        {/* تأكيد كلمة المرور */}
                        <div className="form-group">

                            <label htmlFor="password_confirmation">
                                تأكيد كلمة المرور
                            </label>

                            <div className="input-wrapper">

                                <span className="input-icon">
                                    🔒
                                </span>

                                <input
                                    id="password_confirmation"
                                    type={
                                        showConfirmPassword
                                            ? "text"
                                            : "password"
                                    }
                                    name="password_confirmation"
                                    placeholder="أعد كتابة كلمة المرور"
                                    value={
                                        formData.password_confirmation
                                    }
                                    onChange={handleChange}
                                />

                                <button
                                    type="button"
                                    className="password-toggle"
                                    onClick={() =>
                                        setShowConfirmPassword(
                                            !showConfirmPassword
                                        )
                                    }
                                >
                                    {showConfirmPassword
                                        ? "🙈"
                                        : "👁"}
                                </button>

                            </div>

                            {errors.password_confirmation && (
                                <span className="error-message">
                                    {
                                        errors.password_confirmation
                                    }
                                </span>
                            )}

                        </div>


                        {/* الشروط */}
                        <div className="terms">

                            <input
                                type="checkbox"
                                id="terms"
                                required
                            />

                            <label htmlFor="terms">
                                أوافق على
                                <Link to="/terms">
                                    شروط الاستخدام
                                </Link>
                                و
                                <Link to="/privacy">
                                    سياسة الخصوصية
                                </Link>
                            </label>

                        </div>


                        {/* زر التسجيل */}
                        <button
                            type="submit"
                            className="submit-btn"
                        >
                            إنشاء الحساب
                            <span>←</span>
                        </button>

                    </form>


                    <div className="auth-switch">

                        لديك حساب بالفعل؟

                        <Link to="/login">
                            تسجيل الدخول
                        </Link>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Register;