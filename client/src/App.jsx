// Import components
import { 
  Navbar, 
  Welcome, 
  Footer, 
  Services, 
  Transactions 
} from "./components";

// Main App component
const App = () => (
  <div className="min-h-screen">
    {/* Header Section with Gradient Background */}
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>

    {/* Main Content */}
    <Services />
    <Transactions />

    {/* Footer Section */}
    <Footer />
  </div>
);

export default App;
