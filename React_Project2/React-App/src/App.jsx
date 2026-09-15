import "./App.css";
import Course from "./Course"; //with default export while importing its name can be changed arbitrarily eg. MyCourses
import { Footer } from "./Footer"; //but with named export we cannot rename the components name, which avoids confusions
import Navbar from "./Navbar";
import HTML from "./assets/HTML5.png";
import CSS from "./assets/CSS3.png";
import JS from "./assets/JS.png";
import { UserProfile } from "./UserProfile";
import { ContactForm } from "./ContactForm";
import { Welcome } from "./Welcome";
import { Product } from "./Product";
import { CardWrapper } from "./CardWrapper";
import { Alert } from "./Alert";
import { CustomButton } from "./CustomButton";
import { UserCard } from "./UserCard";
import { Menu } from "./Menu";
import { Counter } from "./Counter";
import { LoginCard } from "./LoginCard";
import { TodoList } from "./TodoList";

function App() {
  return (
    <>
      {" "}
      {/* React Fragment - used to group multiple components without using extra node like div*/}
      <Welcome name="Deepa" alias="ReturnMan" />
      <CardWrapper title="User Profile">
        <p>Deepa</p>
        <p>FrontEnd developer</p>
        <p>CTS</p>
        <button>Edit Profile</button>
      </CardWrapper>
      <Navbar />
      <Course
        name="HTML5"
        desc="HTML5 - web language"
        show={true}
        image={HTML}
      />
      <Course name="CSS" desc="CSS - Styling language" image={CSS} />
      <Course name="JS" desc="JS - Event handling" image={JS} />
      <ContactForm />
      <Product
        title="Laptop"
        price={50999.99}
        inStock={true}
        categories={["Electronics", "Computers", "Gaming"]}
      />
      <LoginCard />
      <Counter />
      <Alert>Your changes are saved successfully!</Alert>
      <Alert type="error">Something went wrong!</Alert>
      <CustomButton text="Like"/>
      <CustomButton text="Bookmark"/>
      <Menu/>
      <TodoList/>
      <UserCard/>
      <UserProfile />
      <Footer />
    </>
  );
}

export default App;
