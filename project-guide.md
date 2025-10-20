# How to Add New Projects to Your Homepage

## Quick Guide for Adding Projects

### Step 1: Open `script.js`
Find the `projectsDatabase` array at the top of the file.

### Step 2: Add Your New Project
Copy this template and fill in your project details:

```javascript
{
    id: 7, // Increment this number for each new project
    title: "Your Project Name",
    description: "Brief description of what your project does and what technologies you used.",
    image: "", // Optional: Add image URL when you have screenshots
    liveUrl: "https://your-live-app.com", // Link to your deployed app
    githubUrl: "https://github.com/yourusername/project-repo", // Link to your code
    technologies: ["Tech1", "Tech2", "Tech3"], // Array of technologies used
    category: "web", // Options: "web", "mobile", "game", "tool", "other"
    status: "new", // Options: "featured", "new", "updated", or "" for no badge
    featured: true, // true to show first, false for normal order
    date: "2025-10-20" // Today's date in YYYY-MM-DD format
}
```

### Step 3: Categories Explained
- **web**: Web applications, websites, web apps
- **mobile**: Mobile apps (iOS, Android, React Native, etc.)
- **game**: Games of any type
- **tool**: Developer tools, utilities, scripts
- **other**: Anything that doesn't fit the above

### Step 4: Status Badges
- **featured**: Gold badge for your best projects
- **new**: Green badge for recently completed projects
- **updated**: Blue badge for recently updated projects
- **""**: No badge (leave empty string)

## Example: Adding a Real Project

Let's say you built a calculator app:

```javascript
{
    id: 8,
    title: "Scientific Calculator",
    description: "A feature-rich scientific calculator with history, memory functions, and responsive design. Supports complex mathematical operations and scientific notation.",
    image: "https://your-domain.com/calculator-screenshot.png",
    liveUrl: "https://your-username.github.io/calculator",
    githubUrl: "https://github.com/your-username/scientific-calculator",
    technologies: ["HTML5", "CSS3", "JavaScript", "Math.js"],
    category: "web",
    status: "new",
    featured: false,
    date: "2025-10-20"
}
```

## Project Display Features

Your homepage will automatically:
- ✅ Show featured projects first
- ✅ Sort by date (newest first)
- ✅ Filter by category when users click filter buttons
- ✅ Show project count
- ✅ Load more projects if you have many
- ✅ Open live demos when users click the project image
- ✅ Provide links to live demo and source code

## Tips for Great Project Entries

1. **Compelling Titles**: Use descriptive, professional names
2. **Clear Descriptions**: Explain what the project does and why it's useful
3. **Technology Lists**: Include the main technologies, frameworks, and tools
4. **Working Links**: Make sure your live demo and GitHub links work
5. **Good Categories**: Choose the most appropriate category
6. **Status Strategy**: Use "featured" for your 3-5 best projects

## Adding Project Images

1. Take screenshots of your applications
2. Upload them to:
   - Your GitHub repository (in an `images` folder)
   - Image hosting service (like Imgur, Cloudinary)
   - Your own domain
3. Use the full URL in the `image` field
4. Recommended size: 600px wide, 400px tall

## Future Enhancements You Can Add

- Search functionality
- Project tags for more detailed filtering
- Star ratings or difficulty levels
- Project timelines
- Technology skill levels
- Project collaborators

Your homepage is now set up to grow with your coding journey!