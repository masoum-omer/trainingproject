import { NavLink, useNavigate } from "react-router-dom";
import "../styles/components.css";

function Sidebar({ role = "student" }) {

    const navigate = useNavigate();

    const studentLinks = [
        {
            title: "لوحة التحكم",
            icon: "📊",
            path: "/student/dashboard",
        },
        {
            title: "الملف الشخصي",
            icon: "👤",
            path: "/student/profile",
        },
        {
            title: "فرص التدريب",
            icon: "💼",
            path: "/student/opportunities",
        },
        {
            title: "طلباتي",
            icon: "📋",
            path: "/student/applications",
        },
        {
            title: "التدريب الحالي",
            icon: "🎓",
            path: "/student/training",
        },
        {
            title: "التقارير",
            icon: "📄",
            path: "/student/reports",
        },
        {
            title: "التقييم",
            icon: "⭐",
            path: "/student/evaluation",
        },
    ];


    const companyLinks = [
        {
            title: "لوحة التحكم",
            icon: "📊",
            path: "/company/dashboard",
        },
        {
            title: "ملف الشركة",
            icon: "🏢",
            path: "/company/profile",
        },
        {
            title: "فرص التدريب",
            icon: "💼",
            path: "/company/opportunities",
        },
        {
            title: "إضافة فرصة",
            icon: "➕",
            path: "/company/opportunities/create",
        },
        {
            title: "المتقدمون",
            icon: "👥",
            path: "/company/applicants",
        },
        {
            title: "المتدربون",
            icon: "🎓",
            path: "/company/trainees",
        },
        {
            title: "التقييمات",
            icon: "⭐",
            path: "/company/evaluations",
        },
    ];


    const adminLinks = [
        {
            title: "لوحة التحكم",
            icon: "📊",
            path: "/admin/dashboard",
        },
        {
            title: "الطلاب",
            icon: "🎓",
            path: "/admin/students",
        },
        {
            title: "الشركات",
            icon: "🏢",
            path: "/admin/companies",
        },
        {
            title: "فرص التدريب",
            icon: "💼",
            path: "/admin/opportunities",
        },
        {
            title: "طلبات التدريب",
            icon: "📋",
            path: "/admin/applications",
        },
        {
            title: "التدريبات",
            icon: "📝",
            path: "/admin/trainings",
        },
        {
            title: "التقارير",
            icon: "📄",
            path: "/admin/reports",
        },
        {
            title: "التقييمات",
            icon: "⭐",
            path: "/admin/evaluations",
        },
        {
            title: "الإحصائيات",
            icon: "📈",
            path: "/admin/statistics",
        },
    ];


    let links = studentLinks;

    if (role === "company") {
        links = companyLinks;
    }

    if (role === "admin") {
        links = adminLinks;
    }


    const handleLogout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/login");
    };


    return (
        <aside className="dashboard-sidebar">

            {/* Logo */}

            <div className="sidebar-logo">

                <span>
                    🎓
                </span>

                <strong>
                    بوابة التدريب
                </strong>

            </div>


            {/* User */}

            <div className="sidebar-user">

                <div className="sidebar-avatar">
                    {role === "student" ? "👨‍🎓" : "👤"}
                </div>

                <div>

                    <strong>
                        {role === "student"
                            ? "الطالب"
                            : role === "company"
                                ? "الشركة"
                                : "المسؤول"}
                    </strong>

                    <small>
                        {role === "student"
                            ? "طالب"
                            : role === "company"
                                ? "جهة تدريب"
                                : "مدير النظام"}
                    </small>

                </div>

            </div>


            {/* Navigation */}

            <nav className="sidebar-navigation">

                <span className="sidebar-section-title">
                    القائمة الرئيسية
                </span>

                {links.map((link) => (

                    <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) =>
                            `sidebar-link ${
                                isActive ? "active" : ""
                            }`
                        }
                    >

                        <span className="sidebar-link-icon">
                            {link.icon}
                        </span>

                        <span>
                            {link.title}
                        </span>

                    </NavLink>

                ))}

            </nav>


            {/* Bottom */}

            <div className="sidebar-bottom">

                <NavLink
                    to="/settings"
                    className="sidebar-link"
                >
                    <span className="sidebar-link-icon">
                        ⚙️
                    </span>

                    الإعدادات
                </NavLink>


                <button
                    className="sidebar-logout"
                    onClick={handleLogout}
                >

                    <span>
                        🚪
                    </span>

                    تسجيل الخروج

                </button>

            </div>

        </aside>
    );
}

export default Sidebar;