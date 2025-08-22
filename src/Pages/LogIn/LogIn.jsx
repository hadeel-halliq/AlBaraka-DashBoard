import * as Yup from "yup";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import icon1 from "../../images/icon1.png";
import Popup from "./Components/Popup";

export default function LogIn() {

  useEffect(() => {
    document.title = "لوحة التحكم | تسجيل الدخول"
  }, []) 
  
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const validationSchema = Yup.object({
    username: Yup.string().required("اسم المستخدم مطلوب"),
    password: Yup.string().required("كلمة المرور مطلوبة"),
  });

  const handleLogIn = (values) => {
    if (values.username === "admin" && values.password === "1234") {
      localStorage.setItem("isAuthorized", "true");
      navigate("/home");
    } else {
      setIsPopupOpen(true);
    }
  };

  return (
    <div className="bg-[linear-gradient(to_bottom_left,rgba(255,255,255,1),rgba(250,177,71,1))] flex flex-col items-center justify-center min-h-screen px-4 py-10">
      <div className="bg-[rgb(255,248,235)]  border-primary border-[1px] py-10 sm:px-5 rounded-2xl w-xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl text-center ">
        <img src={icon1} className="w-48 sm:w-64 md:w-70 mx-auto" alt="icon" />
        <h2 className="text-lg sm:text-[24px] md:text-[28px] font-bold tracking-wide text-[rgba(73,65,58,1)] mt-4">
          اهلا بك في لوحة التحكم
        </h2>
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleLogIn}
        >
          <Form className="flex flex-col gap-4 mt-6">
            <div>
              <Field
                name="username"
                type="text"
                placeholder="اسم المستخدم"
                className="border border-primary rounded-lg p-3 w-[63%] sm:w-[78%] md:w-[74%] lg:w-[55%] text-right focus:outline-none focus:border-primary focus:border-2"
              />
              <ErrorMessage
                name="username"
                component="p"
                className="text-red-500 text-lg text-center"
              />
            </div>
            <div>
              <Field
                name="password"
                type="password"
                placeholder="كلمة المرور"
                className="border border-primary rounded-lg p-3 w-[63%] sm:w-[78%] md:w-[74%] lg:w-[55%] text-right focus:outline-none focus:border-primary focus:border-2"
              />
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500 text-lg text-center"
              />
            </div>

            <button
              type="submit"
              className="bg-primary text-white p-3 rounded-lg w-[63%] sm:w-[78%] md:w-[74%] lg:w-[55%] mx-auto cursor-pointer "
            >
              تسجيل الدخول
            </button>
          </Form>
        </Formik>
        <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      </div>
    </div>
  );
}
