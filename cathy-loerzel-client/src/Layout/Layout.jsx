import { Route, Switch } from "react-router-dom"

import NavBar from "./Components/NavBar"

import Home from "./Home/Home"
import BlogLayout from "./Blog/BlogLayout"
import Coaching from "./Coaching/Coaching"
import Events from "./Events/Events"
import RedeemingHeartache from "./RedeemingHeartache/RedeemingHeartache.jsx"
import Contact from "./Contact/Contact"
import AdminConsole from "./AdminConsole/AdminConsole"

import NotFound from "./NotFound/NotFound"
import Footer from "./Footer/Footer"

export default function Layout() {
  return (
    <div className="contain">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/blog/topic/:topic">
          <BlogLayout />
        </Route>
        <Route path="/blog/:category/:id">
          <BlogLayout />
        </Route>
        <Route path="/blog/:category">
          <BlogLayout />
        </Route>
        <Route path="/blog">
          <BlogLayout />
        </Route>
        <Route path="/coaching">
          <Coaching />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/redeeming-heartache">
          <RedeemingHeartache />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/admin">
          <AdminConsole />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}