// 1

// import './App.scss';
// import React from 'react';
// import Intro from './components/Intro/Intro';
// import Promise from './components/Promise/Promise'
// import Popular from './components/Popular/Popular';
// import IdealHome from './components/IdealHome/IdealHome';
// import MultipleItems from './components/Slider/Slider'
// import Gallery from './components/Gallery/Gallery';
// import Consultation from './components/Consultation/Consultation';
// import Catalog from './components/Catalog/Catalog';
// import Estimate from './components/Estimate/Estimate';
// import Review from './components/Review/Review';
// import Director from './components/Director/Director';
// import Questions from './components/Questions/Questions';
// import Contacts from './components/Contacts/Contacts';
// import { Footer } from './components/Footer/Footer';
// import TestComments from './components/TestComments/TestComments';
// import Counter from './components/Counter/Counter';
// import Users from './components/Users/Users';
// import { Route, Routes, Link, NavLink } from 'react-router-dom';

// function App() {
//   return (
//     <div >
//       <Intro />

//       <div style={{ margin: '20px' }}>
//         <NavLink to="/" style={{ marginRight: '20px' }}>Home</NavLink>
//         <NavLink to="/test-comments" style={{ marginRight: '20px' }}>TestComments</NavLink>
//         <NavLink to="/users" style={{ marginRight: '20px' }}>Users</NavLink>
//       </div>

//       <Routes>
//         <Route path='/' element={<Counter />} />
//         <Route path='/test-comments' element={<TestComments />} />
//         <Route path='/users' element={<Users />} />
//         <Route path='/*' element={<Counter />} />
//       </Routes>

//       <Promise />
//       <Popular />
//       <IdealHome />
//       <MultipleItems />
//       <Gallery />
//       <Consultation />
//       <Catalog />
//       <Review />
//       <Director />
//       <Questions />
//       <Estimate />
//       <Contacts />
//       <Footer />
//     </div>
//   );
// }

// export default App;

// 2

// import './App.scss';
// import React from 'react';
// import Intro from './components/Intro/Intro';
// import Contacts from './components/Contacts/Contacts';
// import { Footer } from './components/Footer/Footer';
// import { Route, Routes, Link } from 'react-router-dom';

// const Counter = React.lazy(() => import('./components/Counter/Counter'));
// const TestComments = React.lazy(() => import('./components/TestComments/TestComments'));
// const Users = React.lazy(() => import('./components/Users/Users'));

// function App() {
//   return (
//     <div >
//       <Intro />

//       <div style={{ margin: '20px' }}>
//         <Link to="/" style={{ marginRight: '20px' }}>Home</Link>
//         <Link to="/test-comments" style={{ marginRight: '20px' }}>TestComments</Link>
//         <Link to="/users" style={{ marginRight: '20px' }}>Users</Link>
//       </div>

//       <Routes>
//         <Route
//           path='/'
//           element={
//             <React.Suspense fallback={<>Loading...</>}>
//               <Counter />
//             </React.Suspense>
//           }
//         />
//         <Route
//           path="/test-comments"
//           element={
//             <React.Suspense fallback={<>Loading...</>}>
//               <TestComments />
//             </React.Suspense>
//           }
//         />
//         <Route
//           path="/users"
//           element={
//             <React.Suspense fallback={<>Loading...</>}>
//               <Users />
//             </React.Suspense>
//           }
//         />
//       </Routes>

//       <Contacts />
//       <Footer />
//     </div>
//   );
// }

// export default App;

// 3

import './App.scss';
import React from 'react';
import Intro from './components/Intro/Intro';
import Contacts from './components/Contacts/Contacts';
import { Footer } from './components/Footer/Footer';
import { Route, Routes, Link } from 'react-router-dom';
import TestCommentsDetails from './components/TestCommentsDetails/TestCommentsDetails';

const Counter = React.lazy(() => import('./components/Counter/Counter'));
const TestComments = React.lazy(() => import('./components/TestComments/TestComments'));
const Users = React.lazy(() => import('./components/Users/Users'));

function App() {
  return (
    <div >
      <Intro />

      <div style={{ margin: '20px' }}>
        <Link to="/" style={{ marginRight: '20px' }}>Home</Link>
        <Link to="/test-comments" style={{ marginRight: '20px' }}>TestComments</Link>
        <Link to="/users" style={{ marginRight: '20px' }}>Users</Link>
        <Link to="/test-comments/1" style={{ marginRight: '20px' }}>TestComments - User 1</Link>
      </div>

      <Routes>
        <Route
          path='/'
          element={
            <React.Suspense fallback={<>...</>}>
              <Counter />
            </React.Suspense>
          }
        />
        <Route
          path="/test-comments"
          element={
            <React.Suspense fallback={<>...</>}>
              <TestComments />
            </React.Suspense>
          }
        />
        <Route
          path="/test-comments/:id"
          element={
            <React.Suspense fallback={<>...</>}>
              <TestCommentsDetails />
            </React.Suspense>
          } />
        <Route
          path="/test-comments/:id/:slug"
          element={
            <React.Suspense fallback={<>...</>}>
              <TestCommentsDetails />
            </React.Suspense>
          } />
        <Route
          path="/users"
          element={
            <React.Suspense fallback={<>...</>}>
              <Users />
            </React.Suspense>
          }
        />
      </Routes>

      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
