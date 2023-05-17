import "./components.css";

function Footer() {
    let CURRENTYEAR = new Date().getFullYear();
    return (
        <footer>
            <p className="Footer">
                Copyright &#169; {CURRENTYEAR}
            </p>
        </footer>
    );
}

export default Footer;