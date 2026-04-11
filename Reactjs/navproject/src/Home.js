import { useNavigate } from "react-router-dom";
function Home()
{
    const navigate = useNavigate();
    const handleAbout = () =>
    {
        navigate("/about");
    }
    const handleContact = () =>
    {
        navigate("/contact");
    }
    return(
        <div>
            <h1>Home Page</h1>
            <button onClick={handleAbout}>Go to About Page</button>
            <button onClick={handleContact}>Go to Contact Page</button>
        </div>
    );

}
export default Home;