import ProjectList from "../components/ProjectList.jsx";

function Home() {
  return (
    <div>
     <h1>Welcome to the Home Page!</h1>
     <ProjectList limit={2}/>
    </div>
  );
}
export default Home;