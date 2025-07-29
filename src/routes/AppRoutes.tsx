import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayoutsFile from '../layouts/LayoutsFile';
import UniversityProfile from '../pages/UniversityProfile';
import Home from '../components/Home';



const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<LayoutsFile />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<UniversityProfile />} />
          {/* <Route path="/calendar" element={<Calendar />} />
          <Route path="/clock" element={<Clock />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/users" element={<Users />} />
          <Route path="/institute" element={<Institute />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/notifications" element={<Notifications />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
