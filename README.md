# Full-Stack-Development-1

-Architecture

Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
Why did the backend use a NoSQL MongoDB database?

Express, JavaScript, and a single-page application, utilizing Angular, were all options for frontend development that I worked with during this course. Each one of them boasts some sort of use case where you could argue it is better than one another. The course started me off with Express frontend end development. Express works through traditional HTML pages that generate when a user requests to access a new page. The server would take this request and respond with the appropraite HTML page. JavaScript, along with some other assets, was implemented to improve the performance of the HTML pages by adding the ability to update a page as data is requested and accessed. The frontend piece that I found quite interesting was that of the single-page application. The SPA is an ingenious setup of JavaScript, specifically Angular in my case, that allows for a completely dynamic web page that updates as necessary to provide the user with the requested information and/or functionalities. It also shifts all of the resource requirements to the frontend, or user side, which allows the backend to perform better and serve more users.

MongoDB was chosen for its flexibility, scalability, and ease of use with JavaScript. This application serves a travel agency that will most likely have many varying types of vacation offerings. A traditional SQL database could be utilized, but in the event a new type of vacation is to be added, it requires a bit more work to get the database to support such information. The NoSQL database allows for quick addition of any new data without any strict adherence to existing SQL tables, as would be the case otherwise. With how easy it is to add more data of varying flavors, it is easily scalable to however big the database needs to be. Of course with JavaScript being a primary component of this project, it made sense to utilize a database scheme that integrates easily with it, and here we have MongoDB take that role.

-Functionality

How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

JavaScript is the main programming language utilized for the almost all of this project. JSON, or JavaScript Object Notation, is a data format. JavaScript is what makes the application function, but JSON does play a huge role in that. JSON is a data format that both the frontend and backend portions of the application can accept, send, and understand. JSON is the middle-man for the two pieces of the application. JavaScript utilizes JSON to get things to happen between the two.

The biggest instance of improving the efficiency of the full stack was all the portions of the course that refactored hard-cdoded HTML to be JSON objects. The first one was changing page portions to utilize JSON objects instead of just having a HTML file be coded to display a certain message. The usage of a JSON object in this case allows for changing the data accessed by the HTML file, instead of directly changing the HTML file itself. In a best case scenario, that HTML file will now no longer require being manipulated for changes made to the message or contents of the page. Instead, the data accessed through the JSON objects will be changed instead.

This is a perfect example of reusable user interface components. Different pages can then all utilize the same header file to implement a specific message. On the other hand, HTML pages can also utilize other header files to display whatever is desired. Hard-coding all of the HTML pages is also an option as well, but then it makes maintaining said HTML pages more arduous as any changes directly change the HTML and not files the HTML can dynamically utilize. Resusable, or modular, components allow for easy scaling and maintenance of a application as well. If something goes wrong with a new modular component, but the old one works, the problem is most likely in the new asset. It also allows for keeping the HTML file small with a bunch or referencing of other files that make up the meat of the HTML file.

-Testing

Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

Methods here refers to HTTP methods that are sent from the frontend to the backend based on what the user desires to do. The methods operate through the application API via Endpoints, which are the routes the frontend talks to the backend on. My project utilizes GET, POST, PUT, and allows for DELETE methods to be implemented. These are all used to get data, create data, update data, and delete data. These obviously come from the user and get sent to the database. Proper security implementations in the application keep these methods in order and prevent malicious activity from violating security of the clients, users, and company. Authentication, Authorization, Hashing passwords, and encryption are but a few of the basic methods to provide a minimum layer of security, as I implemented in my application.

-Reflection

How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course has taken all facets of my education I have learned thus far and put them to the test. I have no specifically worked with every single asset and resource that this course presented to me, but I have worked with languages and resources similar to them. I had a decent understanding of how each piece of this project should function, but then I had to dive in and make it work. When I did, I realized that I have completed a fundamental part of being a computer scientist. I created something and now I know I have the capability to continue creating.

The full-stack development process is impressive as it ties together pieces of an application that could be delegated to an entire team. The experience I gained throughout this process shows that I am capable in any of the positions applicable to application development. I handled database implementation, frontend development, backend development, and security implementation. I am not a master at any of these things of course, but I experienced them and wet my appetite to create. A potential employer should be able to see that from the efforts present in this project and consider me for a multitude of roles.
