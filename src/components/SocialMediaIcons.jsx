
const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/dan-matuszak"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png"/>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src="../assets/twitter.png"/>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/danmatuszak"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="github-link"
          src="../assets/github-mark-white.png"
          style={{ width: "30px", height: "30px" }}
        />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/instagram.png"/>
      </a>
    </div>
  )
}

export default SocialMediaIcons;