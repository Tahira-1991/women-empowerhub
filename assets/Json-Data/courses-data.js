const coursesData = [
    {
      id: 1,
      title: "Digital Marketing for Beginners",
      category: "Marketing",
      description: "Learn the fundamentals of social media, SEO, and content marketing to reach more customers.",
      thumbnail: "assets/img/d-m.png",
      instructor: {
        name: "Sana Tariq",
        img: "assets/img/sanatariq.png"
      },
      lessons: [
        {title: "Introduction to Digital Marketing", duration: "1h 30m"},
        {title: "Social Media Strategy", duration: "2h 15m"},
        {title: "Content Creation and Curation", duration: "1h 45m"},
        {title: "Basics of Search Engine Optimization (SEO)", duration: "2h 0m"},
        {title: "Email Marketing Campaigns", duration: "1h 30m"}
      ],
      fullDescription: "This course is designed for aspiring entrepreneurs who want to master the art of digital marketing. You'll learn how to build an effective online presence, create compelling content, and use various digital channels to drive sales. The course covers everything from crafting your brand's voice to analyzing campaign performance."
    },
    {
      id: 2,
      title: "Financial Planning for Startups",
      category: "Finance",
      description: "A practical guide to budgeting, fundraising, and managing your business finances from day one.",
      thumbnail: "assets/img/f-p.png",
      instructor: {
        name: "Aisha Sohail",
        img: "assets/img/aishasohail.png"
      },
      lessons: [
        {title: "Creating a Business Budget", duration: "1h 50m"},
        {title: "Understanding Financial Statements", duration: "2h 10m"},
        {title: "Funding Your Business", duration: "2h 30m"},
        {title: "Taxation and Legal Basics", duration: "1h 0m"}
      ],
      fullDescription: "Taking control of your finances is the key to business longevity. This course provides a clear, step-by-step framework for managing your startup's money. You'll learn how to create realistic budgets, understand profit and loss statements, and explore different funding options, from bootstrapping to seeking angel investors. The course demystifies financial concepts and empowers you to make smart decisions."
    },
    {
      id: 3,
      title: "E-Commerce Store Setup",
      category: "Technology",
      description: "Build your online store from scratch using popular platforms like Shopify and WooCommerce.",
      thumbnail: "assets/img/e-store.png",
      instructor: {
        name: "Sara Javed",
        img: "assets/img/sara.png"
      },
      lessons: [
        {title: "Choosing the Right Platform", duration: "1h 0m"},
        {title: "Setting Up Your Storefront", duration: "2h 0m"},
        {title: "Product Listing and Management", duration: "1h 45m"},
        {title: "Payment Gateways & Shipping", duration: "1h 30m"}
      ],
      fullDescription: "Ready to sell your products online? This hands-on course will walk you through the entire process of setting up a professional e-commerce store. We'll cover everything from platform selection and design to product photography and setting up secure payment methods. By the end, you'll have a fully functional online store ready to take its first order."
    },
    {
      id: 4,
      title: "Branding and Visual Identity",
      category: "Marketing",
      description: "Develop a strong brand identity that resonates with your target audience and sets you apart.",
      thumbnail: "assets/img/logo.png",
      instructor: {
        name: "Maria Qureshi",
        img: "assets/img/maria.png"
      },
      lessons: [
        {title: "What is a Brand?", duration: "1h 10m"},
        {title: "Creating a Brand Story", duration: "1h 40m"},
        {title: "Logo Design and Color Palette", duration: "2h 20m"},
        {title: "Consistent Messaging Across Platforms", duration: "1h 50m"}
      ],
      fullDescription: "Your brand is more than just a logo; it's the feeling you evoke in your customers. This course helps you define your brand's core values, create a compelling brand story, and translate that into a cohesive visual identity. Learn to craft a brand that not only looks good but also builds trust and loyalty."
    },
    {
      id: 5,
      title: "Mastering Social Media Ads",
      category: "Marketing",
      description: "Learn how to create and manage profitable ad campaigns on platforms like Facebook and Instagram.",
      thumbnail: "assets/img/social.png",
      instructor: {
        name: "Fatima Raza",
        img: "assets/img/fatima.png"
      },
      lessons: [
        {title: "Fundamentals of Social Ads", duration: "1h 30m"},
        {title: "Audience Targeting", duration: "2h 0m"},
        {title: "Ad Copy and Visuals", duration: "1h 45m"},
        {title: "Analyzing Campaign Performance", duration: "2h 15m"}
      ],
      fullDescription: "This course is your blueprint for running successful paid social media campaigns. You'll dive deep into audience targeting, learn to write effective ad copy, and understand the metrics that matter. Stop wasting money on ads that don't convert and start building campaigns that generate real results for your business."
    },
    {
      id: 6,
      title: "Product Photography for Beginners",
      category: "Creative",
      description: "Transform your product photos from average to amazing using just your smartphone.",
      thumbnail: "assets/img/img.png",
      instructor: {
        name: "Zoya Ali",
        img: "assets/img/zoya.png"
      },
      lessons: [
        {title: "Smartphone Photography Essentials", duration: "1h 0m"},
        {title: "Lighting and Composition", duration: "1h 45m"},
        {title: "Editing with Free Apps", duration: "1h 30m"},
        {title: "Creating a Home Studio", duration: "1h 15m"}
      ],
      fullDescription: "Great product photos can make all the difference. This course empowers you to take stunning, professional-quality pictures of your products without expensive gear. We'll cover everything from lighting techniques and composition to editing on your phone, giving your online store a polished and professional look."
    },
    {
      id: 7,
      title: "Public Speaking & Pitching",
      category: "Leadership",
      description: "Develop confidence and learn to deliver powerful pitches that captivate investors and customers.",
      thumbnail: "assets/img/public2.jpeg",
      instructor: {
        name: "Hina Chaudhry",
        img: "assets/img/hinach.png"
      },
      lessons: [
        {title: "Overcoming Stage Fright", duration: "1h 20m"},
        {title: "Structuring Your Pitch", duration: "1h 50m"},
        {title: "Body Language & Vocal Tone", duration: "2h 0m"},
        {title: "Handling Q&A Sessions", duration: "1h 30m"}
      ],
      fullDescription: "Speaking in front of an audience can be intimidating, but it's a vital skill for every business owner. This course helps you build the confidence to speak clearly and persuasively. You'll learn to structure a compelling pitch, use effective body language, and engage your audience, whether you're pitching to investors or speaking to a crowd."
    },
    {
      id: 8,
      title: "Startup Legal Basics",
      category: "Legal",
      description: "Understand the key legal aspects of starting a business, from registration to contracts.",
      thumbnail: "assets/img/basic.png",
      instructor: {
        name: "Sobia Akram",
        img: "assets/img/sobia.png"
      },
      lessons: [
        {title: "Business Structures", duration: "1h 15m"},
        {title: "Intellectual Property", duration: "1h 45m"},
        {title: "Contracts and Agreements", duration: "2h 0m"},
        {title: "Employment Law", duration: "1h 30m"}
      ],
      fullDescription: "Navigating the legal landscape can be complex. This course provides a clear overview of the legal requirements for a new business, helping you avoid common pitfalls. We'll cover everything from choosing the right business structure to protecting your intellectual property and understanding basic contracts, ensuring your business is built on a solid legal foundation."
    },
    {
      id: 9,
      title: "Customer Service Excellence",
      category: "Operations",
      description: "Build a loyal customer base by mastering the art of exceptional customer service.",
      thumbnail: "assets/img/customer.png",
      instructor: {
        name: "Asma Rehman",
        img: "assets/img/asma.png"
      },
      lessons: [
        {title: "The Customer-First Mindset", duration: "1h 0m"},
        {title: "Handling Difficult Situations", duration: "1h 30m"},
        {title: "Building Customer Loyalty", duration: "1h 45m"},
        {title: "Collecting and Using Feedback", duration: "1h 15m"}
      ],
      fullDescription: "Customer service is the heart of every successful business. This course provides practical strategies for building strong relationships with your customers, turning them into advocates for your brand. Learn how to effectively resolve issues, gather valuable feedback, and create a service experience that keeps customers coming back for more."
    },
    {
      id: 10,
      title: "Scaling Your Small Business",
      category: "Strategy",
      description: "A comprehensive guide to scaling your operations and expanding your business profitably.",
      thumbnail: "assets/img/business.png",
      instructor: {
        name: "Nida Ejaz",
        img: "assets/img/sara.png"
      },
      lessons: [
        {title: "Growth Strategies", duration: "1h 45m"},
        {title: "Team Building and Delegation", duration: "2h 30m"},
        {title: "Operational Efficiency", duration: "2h 0m"},
        {title: "Financial Modeling for Growth", duration: "1h 45m"}
      ],
      fullDescription: "Ready to take your business to the next level? This course focuses on the strategic planning required for successful scaling. You'll learn how to identify new market opportunities, build a capable team, and optimize your business processes to handle increased demand without sacrificing quality or profitability."
    },
    {
      id: 11,
      title: "Building a Personal Brand",
      category: "Marketing",
      description: "Learn how to establish yourself as an authority in your field and attract new opportunities.",
      thumbnail: "assets/img/branding-p.png",
      instructor: {
        name: "Anam Siddiqui",
        img: "assets/img/anam.png"
      },
      lessons: [
        {title: "Defining Your Niche", duration: "1h 10m"},
        {title: "Storytelling for Your Brand", duration: "1h 40m"},
        {title: "Content Marketing for Personal Brand", duration: "2h 20m"},
        {title: "Networking and Community Building", duration: "1h 50m"}
      ],
      fullDescription: "A strong personal brand is a powerful asset. This course helps you define your unique value proposition and communicate it effectively to the world. You'll learn to use content, networking, and social media to build credibility and attract customers who trust and believe in you."
    },
    {
      id: 12,
      title: "Social Media for Business",
      category: "Marketing",
      description: "Create and implement a social media strategy that drives engagement and growth.",
      thumbnail: "assets/img/socialmedia1.png",
      instructor: {
        name: "Sobia Akram",
        img: "assets/img/sobia2.png"
      },
      lessons: [
        {title: "Choosing the Right Platforms", duration: "1h 0m"},
        {title: "Creating a Content Calendar", duration: "1h 45m"},
        {title: "Analytics and Performance Tracking", duration: "2h 0m"},
        {title: "Community Engagement", duration: "1h 30m"}
      ],
      fullDescription: "Social media is no longer optional for businesses. This course will equip you with the skills to create a strategic social media plan that generates results. Learn to define your goals, create a content calendar, and use analytics to measure your success and grow your online community."
    },
    {
      id: 13,
      title: "Email Marketing Mastery",
      category: "Marketing",
      description: "Learn how to build an email list and run campaigns that convert subscribers into customers.",
      thumbnail: "assets/img/mail.png",
      instructor: {
        name: "Hina Chaudhry",
        img: "assets/img/same.png"
      },
      lessons: [
        {title: "Building Your Email List", duration: "1h 30m"},
        {title: "Writing Compelling Subject Lines", duration: "1h 45m"},
        {title: "Automated Email Sequences", duration: "2h 15m"},
        {title: "Segmentation and Personalization", duration: "1h 30m"}
      ],
      fullDescription: "Email marketing remains one of the most effective tools for nurturing leads and driving sales. This course teaches you how to build a high-quality email list and create campaigns that resonate with your audience. You'll learn to craft engaging content, set up automated sequences, and use personalization to boost your conversion rates."
    },
    {
      id: 14,
      title: "Content Creation Strategy",
      category: "Creative",
      description: "Develop a content plan that attracts and engages your target audience across multiple platforms.",
      thumbnail: "assets/img/content.png",
      instructor: {
        name: "Zoya Ali",
        img: "assets/img/z-a.png"
      },
      lessons: [
        {title: "Finding Your Content Niche", duration: "1h 10m"},
        {title: "Brainstorming and Ideation", duration: "1h 50m"},
        {title: "Content Formats", duration: "2h 0m"},
        {title: "Distribution and Promotion", duration: "1h 40m"}
      ],
      fullDescription: "Content is king, but without a strategy, it's just noise. This course will teach you how to create a a strategic content plan that aligns with your business goals. You'll learn to brainstorm ideas, choose the right formats, and distribute your content effectively to build a loyal audience and establish your authority."
    },
    {
      id: 15,
      title: "Time Management for Entrepreneurs",
      category: "Leadership",
      description: "Learn effective techniques to manage your time, boost productivity, and avoid burnout.",
      thumbnail: "assets/img/time.png",
      instructor: {
        name: "Nida Ejaz",
        img: "assets/img/same.png"
      },
      lessons: [
        {title: "The Productivity Mindset", duration: "1h 0m"},
        {title: "Prioritization Techniques", duration: "1h 30m"},
        {title: "Setting and Achieving Goals", duration: "1h 45m"},
        {title: "Avoiding Procrastination", duration: "1h 15m"}
      ],
      fullDescription: "As an entrepreneur, your time is your most valuable asset. This course provides a range of practical strategies to help you manage your time effectively, prioritize your tasks, and achieve your goals without feeling overwhelmed. Learn to work smarter, not harder, and reclaim your work-life balance."
    }
  ];
  