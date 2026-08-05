import "./footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-row">
                <div className="footer-copy">© 2026 RailVista. All rights reserved.</div>
                <div className="footer-links">
                    <a href="#terms">Terms</a>
                    <a href="#privacy">Privacy</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;