function Footer() {
  return (
    <footer style={styles.footer}>
      <p>Plz hire me microsoft</p>
      <p>Thank you for visiting, sorya ne banayi hai ye website</p>
      <p>
        <a
          href="https://www.linkedin.com/in/shaurya-jain-73836832b/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          My LinkedIn
        </a>
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#001f3f", // dark blue
    color: "beige",
    textAlign: "center",
    padding: "1rem",
    marginTop: "2rem",
  },
  link: {
    color: "beige",
    textDecoration: "underline",
  },
};

export default Footer;
