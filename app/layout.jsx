import Nav from "@/components/Nav";
import "../styles/globals.css";
import Provider from "@/components/Provider";

export const metaData = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Nav />
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">{children}</main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
