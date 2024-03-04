import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Pagination from "./components/Pagination";
import Todo from "./components/Todo";
import Weather from "./components/Weather";
import LoginForm from "./components/LoginForm";
import Carousel from "./components/Carousel";
import Chat from "./components/Chat";
import CountdownTimer from "./components/CountdownTimer";
import DragAndDrop from "./components/DragAndDrop";
import Dropdown from "./components/Dropdown";
import FormValidation from "./components/FormValidation";
import InfinityScroll from "./components/InfinityScroll";
import Modal from "./components/Modal";
import Quiz from "./components/Quiz";
import ReduxStore from "./components/ReduxStore";
import ResponsiveLayout from "./components/ResponsiveLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/countdowntimer" element={<CountdownTimer />} />
          <Route path="/draganddrop" element={<DragAndDrop />} />
          <Route path="/dropdown" element={<Dropdown />} />
          <Route path="/formvalidation" element={<FormValidation />} />
          <Route path="/infinityscroll" element={<InfinityScroll />} />
          <Route path="/loginform" element={<LoginForm />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/reduxstore" element={<ReduxStore />} />
          <Route path="/responsivelayout" element={<ResponsiveLayout />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
