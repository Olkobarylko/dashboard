import Header from "./layouts/header/header.js";
import Aside from "./layouts/aside/aside.js";
import "./styles/globals.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main>
          <div className="site-container">
            <div className="content__wrapper">
              <Aside />
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
