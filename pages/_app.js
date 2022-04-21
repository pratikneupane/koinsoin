import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import LayoutMain from "../components/layout_main";
import LayoutHome from "../components/layout_home";
import LayoutLogin from "../components/layout_login";
import LayoutDashboard from "../components/layout_dashboard";
import "/styles/bootstrap.min.css";
import "/styles/styles.css";
const layouts = {
  LM: LayoutMain,
  LH: LayoutHome,
  LL: LayoutLogin,
  LD: LayoutDashboard,
};
library.add(fas, far);
function MyApp({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
