const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/comments', function (req, res, next) {
  res.json([
    {
      id: 1,
      content:
        'Great guide! I found the tips on media queries particularly helpful.',
      postId: 1,
      userId: 2,
      createdAt: '2023-10-10T09:30:00Z',
    },
    {
      id: 2,
      content:
        "Thanks for sharing your performance optimization techniques. It's always good to learn new approaches.",
      postId: 2,
      userId: 3,
      createdAt: '2023-10-11T11:15:00Z',
    },
    {
      id: 3,
      content:
        "I'm currently using React for my projects. What's your take on it?",
      postId: 3,
      userId: 1,
      createdAt: '2023-10-12T13:45:00Z',
    },
    {
      id: 4,
      content:
        'Your CSS Grid Layout Mastery post is amazing! Helped me a lot in my recent project.',
      postId: 4,
      userId: 5,
      createdAt: '2023-10-13T15:10:00Z',
    },
    {
      id: 5,
      content:
        'Accessibility is crucial. Can you share more tips on building accessible web applications?',
      postId: 5,
      userId: 2,
      createdAt: '2023-10-14T17:30:00Z',
    },
    {
      id: 6,
      content:
        'Great insights on web animation! Do you recommend any specific tools for animation?',
      postId: 6,
      userId: 4,
      createdAt: '2023-10-15T10:20:00Z',
    },
    {
      id: 7,
      content:
        'Front-End Frameworks Comparison is a great topic! I prefer React for its flexibility.',
      postId: 7,
      userId: 1,
      createdAt: '2023-10-16T12:05:00Z',
    },
    {
      id: 8,
      content:
        'Mastering SASS for Stylish UIs is a must-read. SASS has elevated my styling game!',
      postId: 8,
      userId: 3,
      createdAt: '2023-10-17T14:15:00Z',
    },
    {
      id: 9,
      content:
        'Web Accessibility Best Practices are crucial. Thanks for shedding light on this!',
      postId: 9,
      userId: 2,
      createdAt: '2023-10-18T16:45:00Z',
    },
    {
      id: 10,
      content:
        'The Future of Web Development is exciting! Looking forward to your insights.',
      postId: 10,
      userId: 4,
      createdAt: '2023-10-19T18:55:00Z',
    },
    {
      id: 11,
      content:
        'I totally agree with the Front-End Frameworks Comparison. React all the way!',
      postId: 7,
      userId: 5,
      createdAt: '2023-10-20T10:30:00Z',
    },
    {
      id: 12,
      content:
        'Mastering SASS has been a game-changer for me. Thanks for the recommendation!',
      postId: 8,
      userId: 5,
      createdAt: '2023-10-21T11:45:00Z',
    },
    {
      id: 13,
      content:
        'Web Accessibility Best Practices are essential for creating an inclusive web. Thanks for emphasizing!',
      postId: 9,
      userId: 1,
      createdAt: '2023-10-22T13:20:00Z',
    },
    {
      id: 14,
      content:
        "The Future of Web Development is a fascinating topic. Can't wait to see what's next!",
      postId: 10,
      userId: 3,
      createdAt: '2023-10-23T15:40:00Z',
    },
    {
      id: 15,
      content:
        'This Front-End Frameworks Comparison is sparking a great debate among my colleagues. Thanks for sharing!',
      postId: 7,
      userId: 2,
      createdAt: '2023-10-24T17:15:00Z',
    },
  ])
})

app.get('/posts', function (req, res, next) {
  res.json([
    {
      id: 1,
      title: 'Responsive Web Design Techniques',
      content:
        'Just published a comprehensive guide on responsive web design techniques. Check it out!',
      userId: 1,
      createdAt: '2023-10-10T08:30:00Z',
    },
    {
      id: 2,
      title: 'Optimizing Front-End Performance',
      content:
        'Shared my experience on optimizing front-end performance. Tips and tricks for faster web applications!',
      userId: 2,
      createdAt: '2023-10-11T10:45:00Z',
    },
    {
      id: 3,
      title: 'Exploring Modern JavaScript Frameworks',
      content:
        'Diving into the world of modern JavaScript frameworks. Which one is your favorite?',
      userId: 3,
      createdAt: '2023-10-12T12:15:00Z',
    },
    {
      id: 4,
      title: 'CSS Grid Layout Mastery',
      content:
        'Mastering CSS Grid layout for creating complex and responsive web layouts.',
      userId: 4,
      createdAt: '2023-10-13T14:20:00Z',
    },
    {
      id: 5,
      title: 'Building Accessible Web Applications',
      content:
        'A guide on making web applications accessible to users with disabilities.',
      userId: 5,
      createdAt: '2023-10-14T16:45:00Z',
    },
    {
      id: 6,
      title: 'The Art of Web Animation',
      content:
        'Exploring the creative side of web animation. Tips for adding life to your web projects.',
      userId: 1,
      createdAt: '2023-10-15T09:30:00Z',
    },
    {
      id: 7,
      title: 'Front-End Frameworks Comparison',
      content:
        'Comparing popular front-end frameworks like React, Vue, and Angular. Pros and cons of each.',
      userId: 3,
      createdAt: '2023-10-16T11:20:00Z',
    },
    {
      id: 8,
      title: 'Mastering SASS for Stylish UIs',
      content:
        'Delving into the world of SASS to enhance your styling skills and create stylish user interfaces.',
      userId: 2,
      createdAt: '2023-10-17T13:10:00Z',
    },
    {
      id: 9,
      title: 'Web Accessibility Best Practices',
      content:
        'Best practices for ensuring web accessibility. Tips for inclusive web development.',
      userId: 4,
      createdAt: '2023-10-18T15:30:00Z',
    },
    {
      id: 10,
      title: 'The Future of Web Development',
      content:
        'Exploring emerging trends and technologies shaping the future of web development.',
      userId: 5,
      createdAt: '2023-10-19T17:45:00Z',
    },
  ])
})

app.get('/users', function (req, res, next) {
  res.json([
    {
      id: 1,
      name: 'Alice Thompson',
      email: 'alice.thompson@example.com',
      createdAt: '2023-10-05T08:00:00Z',
    },
    {
      id: 2,
      name: 'Daniel Rodriguez',
      email: 'daniel.rodriguez@example.com',
      createdAt: '2023-10-06T09:15:00Z',
    },
    {
      id: 3,
      name: 'Sophie Patel',
      email: 'sophie.patel@example.com',
      createdAt: '2023-10-07T10:30:00Z',
    },
    {
      id: 4,
      name: 'Chris Johnson',
      email: 'chris.johnson@example.com',
      createdAt: '2023-10-08T11:45:00Z',
    },
    {
      id: 5,
      name: 'Emily Davis',
      email: 'emily.davis@example.com',
      createdAt: '2023-10-09T13:00:00Z',
    },
  ])
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})
