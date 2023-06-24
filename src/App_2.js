import './App.css';
import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom';
// Layouts
import RoutesLayout from './layouts/RoutesLayout.js';
import HelpLayout from './layouts/HelpLayout.js';
import CareersLayout from './layouts/CareersLayout.js';
// Pages
import Home from './pages/Home.js';
import About from './pages/About.js';
import Faq from './pages/help/Faq.js';
import Contact, { contactAction } from './pages/help/Contact.js';
import PageNotFound from './pages/PageNotFound';
import Careers, { careersLoader } from './pages/careers/Careers';
import CareerDetails, { careerDetailsLoader } from './pages/careers/CareerDetails';
import CareersError from './pages/careers/CareersError';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RoutesLayout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='help' element={<HelpLayout />}>
                <Route path='faq' element={<Faq />} />
                <Route path='contact' element={<Contact />} action={contactAction} />
            </Route>
            <Route path='careers' element={<CareersLayout />} >
                <Route 
                    index 
                    element={<Careers />} 
                    loader={careersLoader}
                    errorElement={<CareersError />}
                />
                <Route
                    path=':id'
                    element={<CareerDetails />}
                    loader={careerDetailsLoader}
                    errorElement={<CareersError />}
                />
            </Route>
            <Route path='*' element={<PageNotFound />} />
        </Route>
    )
)

function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
