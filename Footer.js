import React from "react";

function Footer() {
	return (
		   <footer style={{
			   width: "100%",
			   padding: "1rem 0",
			   background: "#000000",
			   color: "#fff",
			   textAlign: "center",
			   position: "fixed",
			   left: 0,
			   bottom: 0
		   }}>
			   <div style={{display: "flex", justifyContent: "flex-start", gap: "40px", marginBottom: "8px"}}>
				   <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
					   <span role="img" aria-label="Contact" style={{fontSize: "24px"}}>📞</span>
					   <span style={{fontSize: "14px", marginTop: "4px"}}>Contact</span>
				   </div>
				   <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
					   <span role="img" aria-label="Help" style={{fontSize: "24px"}}>❓</span>
					   <span style={{fontSize: "14px", marginTop: "4px"}}>Help</span>
				   </div>
				   <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
					   <span role="img" aria-label="About" style={{fontSize: "24px"}}>ℹ️</span>
					   <span style={{fontSize: "14px", marginTop: "4px"}}>About</span>
				   </div>
			   </div>
			   <div style={{fontSize: "12px"}}>
				   {new Date().getFullYear()} W'site!
			   </div>
		   </footer>
	);
}

export default Footer;
