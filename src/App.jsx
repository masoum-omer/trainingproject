import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import StudentDashboard from "./pages/student/Dashboard";
import StudentProfile from "./pages/student/Profile";
import StudentOpportunities from "./pages/student/Opportunities";
import OpportunityDetails from "./pages/student/OpportunityDetails";
import StudentApplications from "./pages/student/Applications";
import StudentTraining from "./pages/student/Training";
import StudentReports from "./pages/student/Reports";
import StudentEvaluation from "./pages/student/Evaluation";

import CompanyDashboard from "./pages/company/Dashboard";
import CompanyProfile from "./pages/company/Profile";
import CompanyOpportunities from "./pages/company/Opportunities";
import CreateOpportunity from "./pages/company/CreateOpportunity";
import Applicants from "./pages/company/Applicants";
import Trainees from "./pages/company/Trainees";
import CompanyEvaluation from "./pages/company/Evaluation";

import AdminDashboard from "./pages/admin/Dashboard";
import Students from "./pages/admin/Students";
import Companies from "./pages/admin/Companies";
import AdminOpportunities from "./pages/admin/Opportunities";
import AdminApplications from "./pages/admin/Applications";
import Trainings from "./pages/admin/Trainings";
import Reports from "./pages/admin/Reports";
import Evaluations from "./pages/admin/Evaluations";
import Statistics from "./pages/admin/Statistics";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route path="/student/dashboard" element={<StudentDashboard />} />
                <Route path="/student/profile" element={<StudentProfile />} />
                <Route path="/student/opportunities" element={<StudentOpportunities />} />
                <Route path="/student/opportunities/:id" element={<OpportunityDetails />} />
                <Route path="/student/applications" element={<StudentApplications />} />
                <Route path="/student/training" element={<StudentTraining />} />
                <Route path="/student/reports" element={<StudentReports />} />
                <Route path="/student/evaluation" element={<StudentEvaluation />} />

                <Route path="/company/dashboard" element={<CompanyDashboard />} />
                <Route path="/company/profile" element={<CompanyProfile />} />
                <Route path="/company/opportunities" element={<CompanyOpportunities />} />
                <Route path="/company/opportunities/create" element={<CreateOpportunity />} />
                <Route path="/company/applicants" element={<Applicants />} />
                <Route path="/company/trainees" element={<Trainees />} />
                <Route path="/company/evaluations" element={<CompanyEvaluation />} />

                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/students" element={<Students />} />
                <Route path="/admin/companies" element={<Companies />} />
                <Route path="/admin/opportunities" element={<AdminOpportunities />} />
                <Route path="/admin/applications" element={<AdminApplications />} />
                <Route path="/admin/trainings" element={<Trainings />} />
                <Route path="/admin/reports" element={<Reports />} />
                <Route path="/admin/evaluations" element={<Evaluations />} />
                <Route path="/admin/statistics" element={<Statistics />} />
            </Routes>
        </BrowserRouter>
    );
}
