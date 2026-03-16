import{Link} from "react-router-dom";
// import Footer from "../components/Footer";

function Home() {
    return (
       
            <div style={{flex: 1, display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div className="card" style={{padding: "70px 100px", boxShadow: "0 2px 9px rgba(0,0,0,0.1)", textAlign: "center", borderRadius: "20px", background: "#fff"}}>
                    <h2 style={{fontSize: "40px", marginBottom: "40px"}}>w'site</h2>
                    <Link to="/login">
                        <button style={{fontSize: "22px",borderRadius: "4px", margin: "8px 0", width: "120px"}}>Log In</button>
                    </Link>
                   <br/>
                    <Link to="/signup">
                        <button style={{cursor:"pointer",fontSize: "22px",borderRadius: "4px", margin: "8px 0", width: "120px"}}>Sign Up</button>
                    </Link>
                </div>
            </div>
       
    );
}
export default Home;