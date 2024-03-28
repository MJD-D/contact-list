This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Discussion

First this is a very basic implementation, given time my improvements would be as follows:

- add tests, if this was a piece of production code i would have started with scoping out tests but with limited time i wanted to get full functionality acheived. personally i would add jest tests that cover the add edit and delete fucntionality and then add some cypress tests to ensure the entire user journey is tested appropriately.

- sorting, currently the contacts are displayed in a grid ordered by their ID, this is not the best approach in my opinion as it can create a difficulty in finding a specific contact,

- avatar editor, this is a nice addition to the scope of the contact editor allowing the user to change their avatar as they see fit,

- light/dark mode support, currently there is not a lot of syling done to this at all and an easy win in my opinion is to add light mode and dark mode toggle, with it inheriting the system default.

- restyle the whole app, this is currently a very rough implementation which could use with a more planned out implementation if this was to be taken further, this currently serves more as a proof of concept.

- add a use callback around handleChange function in the contactCard to improve memory, on the small scale the extra complexity is not really required but if this was to be used on a larger scale it would be something that should be addressed.

- convert to serverside rendering 
