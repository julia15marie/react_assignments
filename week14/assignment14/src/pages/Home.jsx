import Projects from "../components/Projects.jsx";

function Home() {
  return (
    <div>
     <h1>Welcome to the Home Page!</h1>
     <Projects limit={4}/>
    </div>
  );
}
export default Home;