# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

-The main differences are that functional components do not have access to the lifecycle methods and refs that class components do. Also class components were traditionally the only ones able to use state, however now functional components can as well.

2. When does a componentWillMount function be called? What about a componentWillUpdate?
   -componentWillMount triggers before the initial render
   -componentWillUpdate triggers immediately before rendering when new props or state are being received
3. Define stateful logic.
   -A behavior created with the use of one or more hooks that use state which you use that behavior to change state.
4. What are the three step of creating a successful test? What is done in each phase?
   -Arrange = assign variable, render the app, input and targets, set up data to be tested essentially
   -Act = act on the unit under test, usually by calling methods or functions on the element
   -Assert = verify that the expected results are as they should be
