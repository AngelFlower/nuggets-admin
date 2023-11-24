// import "./App.css";
// import { useState, useEffect } from "react";
// import { supabase } from "./supabaseClient";
// // import Auth from "./Auth";
// import { AuthCard, SignIn, ForgottenPassword } from "@supabase/auth-ui-react";
// import {
//   // Import predefined theme
//   ThemeSupa,
// } from "@supabase/auth-ui-shared";
// import Account from "./routes/account";

// function App() {
//   const [session, setSession] = useState(null);

//   useEffect(() => {
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setSession(session);
//     });

//     supabase.auth.onAuthStateChange((_event, session) => {
//       setSession(session);
//       if (session) {
//         window.location.href = "/";
//       }
//     });
//   }, []);

//   return (
//     <div className="container" style={{ padding: "50px 0 100px 0" }}>
//       <AuthCard
//         appearance={{
//           theme: ThemeSupa,
//         }}
//       >
//         <h1 className="text-3xl font-bold text-center text-gray-900">
//           Nuggacito
//         </h1>
//         <p>Bienvenido</p>
//         <SignIn
//           supabaseClient={supabase}
//           appearance={{
//             theme: ThemeSupa,
//           }}
//           localization={{
//             variables: {
//               sign_in: {
//                 email_label: "Correo electronico",
//                 email_input_placeholder: "admin@nuggacito.com.mx",
//                 password_label: "Contraseña",
//                 password_input_placeholder: "********",
//                 button_label: "Iniciar sesión",
//                 loading_button_label: "Cargando",
//               },
//               forgotten_password: {
//                 link_text: "¿Olvidaste tu contraseña?",
//                 button_label: "Restablecer",
//               },
//             },
//           }}
//           providers={[]}
//         />
//       </AuthCard>
//     </div>
//   );
// }

// export default App;

import { Admin, CustomRoutes, Resource, ListGuesser } from "react-admin";
import { LoginPage, SetPasswordPage, ForgotPasswordPage } from "ra-supabase";
import { BrowserRouter, Route } from "react-router-dom";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";

export const App = () => (
  <BrowserRouter>
    <Admin
      dataProvider={dataProvider}
      // authProvider={authProvider}
      // loginPage={LoginPage}
    >
      <CustomRoutes noLayout>
        <Route path={SetPasswordPage.path} element={<SetPasswordPage />} />
        <Route
          path={ForgotPasswordPage.path}
          element={<ForgotPasswordPage />}
        />
      </CustomRoutes>
      <Resource name="products" list={ListGuesser} />
      <Resource name="authors" list={ListGuesser} />
    </Admin>
  </BrowserRouter>
);
