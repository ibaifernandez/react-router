# React Router

## The structure of the project

```
react-router
├─ docs
├─ src
│  ├─ img
│  │   └─ favicon.jpeg
│  ├─ js
│  │  ├─ component
│  │  │   └─ Mynavbar.jsx
│  │  │
│  │  ├─ pages
│  │  │   ├─ AboutUs.jsx
│  │  │   ├─ Blogs.jsx
│  │  │   ├─ Contact.jsx
│  │  │   ├─ Home.jsx
│  │  │   ├─ Layout.jsx
│  │  │   ├─ NoPage.jsx
│  │  │   └─ Search.jsx
│  │  │
│  │  └─ index.js
│  │
│  └─ styles
│      └─ index.css
│
└─ store
   ├─ js
   ├─ md
   └─ svg

```

## The recipe for success

### 1. Following instructions

<div style="background:lightblue;padding:12px 12px 24px">

# Question (❓)

> **Please, note that I've called the extensions of my pages files as `.jsx`, contrary to what W3Schools does.**

<div style="text-align: center;color:red;font-size:36px;font-weight:bolder" >Is that right?</div>

</div>

Follow the instructions that can be found at [W3Schools](https://www.w3schools.com/react/react_router.asp) to set up a React MPA project.

> **MPA** stands for "Multiple Page Application".

By the end of it, you should have a project structure similar to this:

    src
    ├─ js
       ├─ component
       │
       ├─ pages
       │   ├─ Blogs.jsx
       │   ├─ Contact.jsx
       │   ├─ Home.jsx
       │   ├─ Layout.jsx
       │   ├─ NoPage.jsx
       │
       └─ index.js
       │
       └─ styles
           └─ index.css

Now, let's add some more _pages_ as well as another component. Concretely, within your `pages` folder, add `Search.jsx` and `AboutUs.jsx`. Equally, add `Mynavbar.jsx` to your folder `component`.

Also, if you don't have it by now, you're gonna wanna have an `index.css` within your `styles` folder.

Finally, it should all look like the project structure shown at the beginning of this documentation. Also, all components stored in the `pages` folder should have some code within by now, except `Search.jsx`, and `AboutUs.jsx`. We will have a look at them later, and also create the missing code in `Search.jsx` as well as in `AboutUs.jsx`.

### 2. Checking out our `index.js` **before tweaking it**

By following [W3Schools](https://www.w3schools.com/react/react_router.asp) instructions properly, we end up with the following code displayed in our `index.js`, which leads us to an important question:

    import ReactDOM from "react-dom/client";
    import { BrowserRouter, Routes, Route } from "react-router-dom";
    import Layout from "./pages/Layout";
    import Home from "./pages/Home";
    import Blogs from "./pages/Blogs";
    import Contact from "./pages/Contact";
    import NoPage from "./pages/NoPage";

    export default function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
        </BrowserRouter>
    );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);

<div style="background:lightblue;padding:12px 12px 24px">

# The Important Question (❓)

**Even though 4Geeks advises**

> **\[...\] the best practice to be always creating one component called `<Layout />` that will take care of routing the users to the specific views they should see, depending on each of the particular URLs,**

**by following [W3Schools](https://www.w3schools.com/react/react_router.asp)'s instructions, you end up with that previous content at `index.js`.**

<div style="text-align: center;color:red;font-size:36px;font-weight:bolder" >What is the right thing to do?</div>

</div>

### <div style="font-size:18px;margin-top:56px"> 3. \<Layout /\></div>

---

Following [W3Schools](https://www.w3schools.com/react/react_router.asp)'s instructions, you should get this content at Layout.jsx

    import { Outlet, Link } from "react-router-dom";

    const Layout = () => {
    return (
        <>
        <nav>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/blogs">Blogs</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            </ul>
        </nav>

        <Outlet />
        </>
    )
    };

    export default Layout;

I felt as abvious that this was a navigation bar. So I thought I'd change it for a _more proper_ navigation bar, Bootstrap style. For that I will create a navigation bar component (`<Mynavbar />`) that I will call within my `<Layout />` component like so:

        import React from "react";
        import { Outlet } from "react-router-dom";
        import Mynavbar from "../component/Mynavbar.jsx";

        const Layout = () => {
            return (
                <>
                    <Mynavbar />
                    <Outlet />
                </>
            );
        };

        export default Layout;

`<Outlet />` should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.

**The "layout route" is a shared component that inserts common content on all pages, such as a navigation menu.**

#### 3.1 Creating the navigation bar

##### Important Notes Before We Start

1. How the whole react-bootstrap thing works, I am not completely sure. I've done nothing but copypasting the code and tweaking it so that it yields the results that I was expecting. All the proper documentation can be found at [react-bootstrap.github.io](https://react-bootstrap.github.io/components/navbar/), thought it feels a little short.

2. The `useNavigate()` hook returns a function that lets you navigate programmatically. More info at [reactrouter.com](https://reactrouter.com/en/main/hooks/use-navigate)

###### React-Bootstrap NavBar

At `Mynavbar.jsx` (`/js/component`), we're gonna create our navigation bar component. To do so we're gonna use **React Bootstrap**, "the most popular front-end framework Rebuilt for React", as it is described [in the homepage of its documentation](https://react-bootstrap.github.io/). Specifically, we will be getting _our_ **React Bootstrap's NavBar Code** from [here](https://react-bootstrap.github.io/components/navbar/#scrolling), and get a few tweaks done. Analyzing what will be our resulting code...

        import React from "react";                                                          //  Import React.
        import Button from "react-bootstrap/Button";                                        //  Import all the necessary components from
        import Container from "react-bootstrap/Container";                                      react-bootstrap.
        import Form from "react-bootstrap/Form";
        import Nav from "react-bootstrap/Nav";
        import Navbar from "react-bootstrap/Navbar";
        import NavDropdown from "react-bootstrap/NavDropdown";
        import { useNavigate } from "react-router-dom";                                     //  Import useNavigate from react-router-dom.

        const Mynavbar = () => {                                                            //  Declare our <Mynavbar /> component as an
                                                                                                anonymous arrow function.
        const navigate = useNavigate();                                                     //  Create the constant variable "navigate" and
                                                                                                assign it the value "useNavigate()" —more on it
                                                                                                later on.

            const handleSearch = (e) => {                                                   //  This is a function that handles an event,
                                                                                                declard as an arrow function that passes along
                                                                                                a parameter —the event itself.

                if (e.key === "Enter") {                                                    //  A conditional takes place: "if the key pressed
                                                                                                is 'Enter'...
                    navigate("/search");                                                        use the constant variable "navigate"
                                                                                                that refers us to "useNavigate()" with the
                                                                                                parameter "/search" —more on this later.
                }                                                                           //  Finish the conditional statement.
            };                                                                              //  Finish the 'handleSearch' function declaration.

            return (                                                                        //  Return (render)
                <Navbar bg="light" expand="lg">                                             //  From here on, it's just using the diffent
                    <Container fluid>                                                           components that react-bootstrap provides us
                        <Navbar.Brand href="/">React Router App</Navbar.Brand>                  with: "Navbar", "Navbar.Brand", "Navbar.Toogle",
                        <Navbar.Toggle aria-controls="navbarScroll" />                          "Navbar.Collapse", "Nav", "NavDropdown",
                        <Navbar.Collapse id="navbarScroll">                                     "Container", Form", and "Button".
                            <Nav className="me-auto my-2 my-lg-0 mh-100" navbarScroll>      //  In this case, I've personally added the class
                                                                                            //  "mh-100" to substitute and inline style.

                                                                                            //  And now, the 'magic' starts:
                                <Nav.Link href="/">Home</Nav.Link>                                  — "Nav.Link" allows us to use the attribute
                                                                                                    "href" to let our application know where
                                                                                                    we want this "Link" to address us. This is one of the ways we're gonna have to route
                                                                                                    the navigation in our MPA.
                                <Nav.Link href="/blogs">Blogs</Nav.Link>
                                <NavDropdown                                                //  When using "NavDropdown",
                                    title="About Us"                                            the attribute "title" will allow us to give a
                                                                                                name to our dropdown —which, initally, should
                                                                                                have no link associated. Its mission is to deploy a dropdown menu, but not link us
                                                                                                elsewhere. Now, what if we want it to behave as
                                                                                                both a dropdown menu and also as a link?
                                    id="navbarScrollingDropdown"
                                >
                                    <NavDropdown.Item href="/AboutUs">                      //  "NavDropdown.Item" also allows us to route
                                        Get to know us                                          an item elsewhere into our MPA.
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/contact">
                                        Contact us
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/this-address-does-not-exist">
                                        Error 404
                                    </NavDropdown.Item>
                                </NavDropdown>
                                {/* <Nav.Link href="#" disabled>                            //  I've chosen to comment out this one "Nav.Link"
                                    Link                                                        as I don't want any links on my navbar to be
                                </Nav.Link> */}                                                 disabled.
                            </Nav>
                            <Form className="d-flex">                                       //  This is the search input...
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    onKeyDown={handleSearch}                                //  ... to which an "onKeyDown" event has been
                                                                                                associated. This event will trigger the
                                                                                                "handleSearch" function previously described.
                                />
                                <Button                                                     //  Equally, the Button associated to the search
                                    variant="outline-success"                                   input has an
                                    onClick={() => navigate("/search")}                         "onClick" event which, in this case, triggers
                                                                                                an anonymous function which also refers to the
                                                                                                "navigate" constant variable that we'd seen before —which refers to the function
                                                                                                "useNavigate()".
                                >
                                    Search
                                </Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            );

        }

        export default Mynavbar;

---

### 4. Back to our `index.js`

We're gonna tweak the `index.js` file just a tad. Here's the result.

    import React from "react";                                                  //  Import React (can React work without this import, as
                                                                                    reflected in W3Schools' example? 🤔

    import ReactDOM from "react-dom";                                           //  Import ReactDom from "react-dom" instead of importing
                                                                                    ReactDOM from "react-dom/client"... what's the difference?
    🤔
    import { BrowserRouter, Routes, Route } from "react-router-dom";            //  Import components "BrowserRoute", "Routes" and "Route" from
                                                                                    "react-router-dom"
    import Layout from "./pages/Layout.jsx";                                    //  Import every
    import Home from "./pages/Home.jsx";                                            component (page) that we have
    import Blogs from "./pages/Blogs.jsx";                                          created while
    import Contact from "./pages/Contact.jsx";                                      following W3Schools'
    import NoPage from "./pages/NoPage.jsx";                                        instructions.

    import AboutUs from "./pages/AboutUs.jsx";                                  //  Import also the two components (pages) we have added to
    import Search from "./pages/Search.jsx";                                        the original W3Schools' example.

    const App = () => {                                                         //  We will analyze this part right below.
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="blogs" element={<Blogs />} />
                        <Route path="aboutus" element={<AboutUs />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="*" element={<NoPage />} />
                        <Route path="search" element={<Search />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        );
    };

    export default App;

    ReactDOM.render(<App />, document.querySelector("#app"));

Please, note:

1. The content advised by 4Geeks to have at component `<Layout» />` in the `Layout.js` file, I have it at `<App />`in the `index.js` file.

2. The conent that W3Schools suggests for the `<Layout />`, I've made it into a Bootstrap NavBar.

#### About Components `BrowserRouter`, `Routes`, and `Route`

-   `<BrowserRouter>` sets everything inside this tag to be _conditionally rendered_, **based on particular Routes (URLs)**.
-   `<Routes>`is a switch: only the first `<Route>` that matches the URL requested will be displayed.
-   `<Route>` takes in a path and element prop. The path value holds the path of the route. The element value holds a pointer to a component or page.

        <Route
        path="/sign-up"             //  The URL the link will point to.
        element={<Signup />}        //  The component React will render
        />

##### The Nesting of `<Routes>`

`<Route>`s can be nested. In between a `<Route />` component you can embed another `<Route />`. For example, in our `<App />` component:

        ...
        <Route path="/" element={<Layout />}>                   //  It always renders the `<Layout />` component
            <Route index element={<Home />} />                  //  It does not have a `path` but has an `index` attribute that
                                                                //  specifies this route as default route for the parent route.
            <Route path="blogs" element={<Blogs />} />          //  The nested `<Route>`s inherit and add to the parent route, so that it
                                                                    becomes `/blogs`.
            <Route path="aboutus" element={<AboutUs />} />      //  The nested `<Route>`s inherit and add to the parent route, so that it
                                                                    becomes `/aboutus`.
            <Route path="contact" element={<Contact />} />      //  The nested `<Route>`s inherit and add to the parent route, so that it
                                                                    becomes `/contact`.
            <Route path="*" element={<NoPage />} />             //  Setting the path to `*` will act as a catch-all for any undefined URLs.
                                                                //  Also, the nested `<Route>`s inherit and add to the parent route, so that it
                                                                    becomes `/*`.
            <Route path="search" element={<Search />} />        //  The nested `<Route>`s inherit and add to the parent route, so that it
                                                                    becomes `/search`.
        </Route>
        ...

That way, our application's path structure would be

| URL           | Page         | Components to be displayed   |
| ------------- | ------------ | ---------------------------- |
| /             | /            | `<Layout />` + `<Home />`    |
| /blogs        | blogs        | `<Layout />` + `<Blogs />`   |
| /aboutus      | aboutus      | `<Layout />` + `<AboutUs />` |
| /contact      | contact      | `<Layout />` + `<Contact />` |
| any other URL | ay other URL | `<Layout />` + `<NoPage />`  |
| /search       | search       | `<Layout />` + `<Search />`  |

<div style="background:lightblue;padding:12px 12px 24px">

# Question (❓)

<div style="text-align: center;color:red;font-size:36px;font-weight:bolder" >

What is achieving component "Mynavbar" to be shown in every view: "Outlet" or nested "Route"s?

</div>

</div>

### 5. The road so far

1. Our MPA's entry point is `index.js`. In it, the routing of the different views of this MPA takes place. Every posible `<Route />` is nested within a parent `<Route />` that calls for the `<Layout />` component. Thus, the `<Layout />` component will be rendered in every single possible view.

2. The `<Layout />` component calls for the component `<Mynavbar />`, and the component `<Outlet />`, used to render their child route elements.

3. Component `<Mynavbar />`is a Bootstrap-styled navigation bar with a `handleSearch` function that handles the search `onKeyDown==="Enter"` and a button that runs an anonymous function which, as `handleSearch` _routes_ the user towards the `<Search />` view.

4. All our other views (`<AboutUs />`, `<Blogs />`, `<Contact />`, `<Home />`, `<NoPage />`, and `<Search />`) are simple fragments of code to be rendered once the user has been _routed_ towards the proper components thru the associated URLs.

5. The only other _tweak_ that we might see in this project is the

<div style="text-align:center;font-weight:bold;">~ The end ~</div>
