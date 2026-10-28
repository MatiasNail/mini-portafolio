export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
            <p>Matias Nail {year}</p>
        </footer>
    );
}