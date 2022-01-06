export default function InstagramFeed() {
  const userInstagram = require("user-instagram");

  // Gets informations about a user
  userInstagram('cathyloerzel') // Same as getUserData()
    .then(console.log)
    .catch(console.error);

  return (
    <></>
  )
}