import React from "react";


const Footer = () => {
    return (<footer className="footer mt-auto py-3">
        <div className="container">
            <span className="text-muted">
            &copy; {new Date().getFullYear()} footer
            </span>
        </div>
    </footer>)
}

export default Footer
