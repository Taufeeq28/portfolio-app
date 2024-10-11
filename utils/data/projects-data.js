export const projectsData = [
    {
        id: 1,
        name: 'Customer Churn Prediction Using AWS Kinesis and SageMaker',
        description: "Implemented a churn prediction application using AWS technologies, including Kinesis Data Streams and Firehose for real-time data collection, S3 for storage, and Spark EMR for data consolidation, followed by model training in SageMaker. Transformed 7000+ user telecom dataset into a streamable format, conducting data profiling with PySpark and Data Wrangler. Constructed a machine learning model with 76.26% accuracy and a 0.642 F-score, using AWS SageMaker's Quick Build feature.",
        tools: ['AWS Kinesis', 'AWS SageMaker', 'Spark EMR', 'PySpark', 'Data Wrangler'],
        role: 'Developer',
        code: '',
        demo: '',
        image: '/ChurnPrediction.png'
    },
    {
        id: 2,
        name: 'Lively Chat App',
        description: "Lively Chat App is a real-time messaging platform built with the MERN stack, WebSocket technology, and an integrated SMTP server for email functionality. It ensures secure user authentication and authorization, allowing only verified users to join. Users can personalize their profiles by selecting custom avatars, enhancing their chat experience. The app provides responsive communication across devices, ensuring seamless real-time conversations. With email notifications, robust security, and personalization features, Lively Chat App is perfect for both casual and professional use.",
        tools: ['React', 'MongoDB', 'Express', 'NodeJS', 'Websocket', 'SMTP server'],
        role: 'Developer',
        code: '',
        demo: '',
        image: '/LivelyChatApp.jpg'
    },
    {
        id: 3,
        name: 'Media Review Hub',
        description: "Media Review Hub is a Razor Pages web app for tracking and reviewing movies, books, and games. Built with C#, ASP.NET Core, and PostgreSQL, it features CRUD operations, autocomplete for media titles, and a clean UI. The app integrates with the TVMaze and Open Library APIs, allowing users to easily search for and add reviews on a wide range of media.",
        tools: ['C#', 'ASP.NET Core', 'PostgreSQL', 'Razor Pages'],
        role: 'Developer',
        code: '',
        demo: '',
        image: '/MediaReviewHub.jpg'
    },
    // {
    //     id: 4,
    //     name: 'BugHub Data Pipeline & Knowledge Graph for StackOverflow and GitHub',
    //     description: "Configured data pipeline to pull data from Stack Overflow and GitHub using Python scripts and APIs and stored in EdgeDB. Generated python script for data analysis from repositories and tags, stored data in DataFrames and used Pandas for analysis. Employed EdgeQL and GraphQL to create object-relational data models for GitHub and StackOverflow.",
    //     tools: ['Python', 'EdgeDB', 'EdgeQL', 'GraphQL', 'Pandas'],
    //     role: 'Developer',
    //     code: '',
    //     demo: '',
    //     image: '/LivelyChatApp.jpg'
    // },
];