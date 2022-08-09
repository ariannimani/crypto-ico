import "./App.css";
import { Header } from "./components/header/header";
import { Main } from "./routes/main/main";
import { ExchangeListing } from "./routes/exchange-listing/exchange-listing";
import { Solutions } from "./routes/solutions/solutions";
import { About } from "./routes/about/about";
import { Whitepaper } from "./routes/whitepaper/whitepaper";
import { Token } from "./routes/token/token";
import { RoadMap } from "./routes/roadmap/roadmap";
import { AboutCoin } from "./routes/about-coin/about-coin";
import { TokenDistribution } from "./routes/token-distribution/token-distribution";
import { Team } from "./routes/team/team";
import { Advisors } from "./routes/advisors/advisors";
import { Faq } from "./routes/faq/faq";
import { Contact } from "./routes/contact/contact";

const App = () => {
  return (
    <div>
      <header className="page-header">
        <Header />
      </header>
      <div className="content-wrapper">
        <div className="content-body">
          <Main />
          <ExchangeListing />
          <About />
          <Solutions />
          <Whitepaper />
          <Token />
          <RoadMap />
          <AboutCoin />
          <TokenDistribution />
          <Team />
          <Advisors />
          <Faq />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
