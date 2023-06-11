import "./components.css";

function Footer() {
    let CURRENTYEAR = new Date().getFullYear();
    return (
        <footer>
            <p className="desc-text">
                This website is a keeper app, a note-taking application that
                allows users to create, edit, and delete notes. It uses ReactJS
                to create the user interface and the functionality of the app.
                ReactJS is a popular JavaScript library for creating user
                interfaces that are fast and dynamic. The website has a simple
                and elegant design.
            </p>
            <p className="Footer">Copyright &#169; {CURRENTYEAR}</p>
        </footer>
    );
}

export default Footer;
