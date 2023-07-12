import logo from './logo.svg';
import './App.css';
import BasicForm from './components/basicform';
import ListingTable from './components/listingTable';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BackToListing } from './components/backToListing';

function App() {
  return (
    <div className="App">

      {/* <BasicForm /> */}
      {/* <ListingTable /> */}


      <BrowserRouter>
        <Routes>

          <Route path='/form' element={<BasicForm />}>
          </Route>

          <Route path='/form/edit/:id' element={<BasicForm />}>
          </Route>

          <Route path='/form/view/:id' element={<BasicForm isView={true} />}>
          </Route>

          <Route path='/listing' element={<ListingTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
// /form/edit:{id}
export default App;
