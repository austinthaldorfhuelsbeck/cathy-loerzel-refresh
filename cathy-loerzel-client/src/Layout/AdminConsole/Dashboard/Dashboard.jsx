import { useState, useEffect } from "react"
import BlogsList from "./BlogsList"
import TopicsList from "./TopicsList"

/**
 *  Defines the Admin Console's dashboard page.
 * @returns {JSX.Element}
 */
export default function Dashboard() {
  const [blogs, setBlogs] = useState([])
  const [blogsError, setBlogsError] = useState("")
  const [topics, setTopics] = useState([])
  const [topicsError, setTopicsError] = useState("")

  useEffect(() => {
    setBlogsError("")
    listBlogs().then(setBlogs).catch(setBlogsError)
    listTopics().then(setTopics).catch(setTopicsError)
  }, [])

  function listBlogs() {
    let url = `${process.env.REACT_APP_API_BASE_URL}/blogs`
    return fetch(url)
      .then(res => res.json())
      .then((res) => res.data)
  }

  function listTopics() {
    let url = `${process.env.REACT_APP_API_BASE_URL}/topics`
    return fetch(url)
      .then(res => res.json())
      .then((res) => res.data)
  }

  return (
    <div>
      {blogsError}
      {topicsError}
      <h2>Dashboard</h2>
      <BlogsList blogs={blogs} />
      <TopicsList topics={topics} />
    </div>
  )
}