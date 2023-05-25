import logo from './logo.svg';
import './App.css';
//import TeacherDashboard from './TeacherDashboard';
//import NavbarTwo from './NavbarTwo';
import TeacherDashboard from './components/TeacherDashboard/TeacherDashboard';
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';
import ClassHeader from './components/ClassHeader/ClassHeader';
import ClassDefault from './components/ClassDefault/ClassDefault';
import ClassDefault2 from './StudentComponents/ClassDefault/ClassDefault';
//import TopicsBoard from './components/Topics/TopicsBoard';
import AssignmentPage from './components/AssignmentPage/AssignmentPage';
import Assignment from './StudentComponents/ClassAssignments/Assignment';
import SignUp from './components/LogInSignUp/SignUp'
import SignIn from './components/LogInSignUp/SignIn'
import LoginNav from './components/Navigations/LoginNav'
import nav from './components/Navigations/nav'
import Sidebar from './components/Navigations/Sidebar'
import HelpingMaterial from './components/HelpingMaterial/HelpingMaterial'
import StudentDashboard from './StudentComponents/StudentDashboard/StudentDashboard'
import Assignments from './StudentComponents/ClassAssignments/Assignment'
import AddTopic from './components/Topics/TopicsMainPage/AddTopic'
import ViewTopic from './components/Topics/TopicsView/ViewTopic'
import TeacherMaterial from './components/TeacherMaterial/TeacherMaterial';
import TeacherAssignmentViewer from './components/AssignmentPage/AssignmentViewer';
import TeacherMaterialViewer from './components/TeacherMaterial/TeacherMaterialViewer';
import SubmissionsDisplay from './components/Submission/SubmissionsDisplay'
import CloDetails from './components/CLO/CLODetails';

function App() {
  return (
    <div className="App">
      {/* <ViewTopic></ViewTopic> */}

      {/* <AddTopic></AddTopic> */}
      {/* <HelpingMaterial></HelpingMaterial> */}
      {/* <SignUp/> */}
      {/* <SignIn/> */}

      {/* <nav></nav>
      <SignIn></SignIn> */}
      {/* <LoginNav></LoginNav> */}
      {/* <ClassDefault></ClassDefault> */}
      {/* <TeacherDashboard></TeacherDashboard> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/t/:userId" element={<TeacherDashboard />} />
          <Route path="/s/:userId" element={<StudentDashboard />} />



          {/* <Route path="/" element={<TeacherDashboard />}/> */}

          <Route path="/t/:userId/class/:classId" element={<ClassDefault />} />
          <Route path="/s/:userId/class/:classId" element={<ClassDefault2 />} />

          <Route path="/t/:userId/class/:classId/week/:weekId" element={<CloDetails />} />
          {/* 
          <Route path="/t/:userId/class/:classId/week/:weekId/:weekNumber" element={<TopicsBoard />} /> */}
          <Route path="/t/:userId/class/:classId/week/:weekId/topic/:topicId/assignment" element={<AssignmentPage />} />
          <Route path="/t/:userId/class/:classId/week/:weekId/topic/:topicId/HelpingMaterial" element={<HelpingMaterial />} />
          <Route path="/t/:userId/class/:classId/week/:weekId/:weeknumber/topic/:topicId/TeacherMaterial" element={<TeacherMaterial />} />


          <Route path="/t/:userId/class/:classId/week/:weekId/topic/:topicId/materialId/:materialId/TeacherMaterialViewer" element={<TeacherMaterialViewer />} />
          <Route path="/t/:userId/class/:classId/week/:weekId/topic/:topicId/assignment/:assignmentId/AssignmentViewer" element={<TeacherAssignmentViewer />} />
          <Route path="/t/:userId/class/:classId/week/:weekId/topic/:topicId/assignment/:assignmentId/submissions" element={<SubmissionsDisplay />} />

          <Route path="/s/:userId/class/:classId/week/:weekId/topic/:topicId/assignment/:assignmentId" element={<Assignment />} />


        </Routes>


      </BrowserRouter>
      {/*---------------Student work ---------------*/}
      {/* <Assignments></Assignments> */}
      {/* <StudentDashboard></StudentDashboard>*/}

    </div>
  );
}

export default App;
