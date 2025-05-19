// Shared data file for weekly blog posts to maintain consistency across components

export interface WeeklyBlogPost {
  id: number
  title: string
  excerpt: string
  coverImage: string
  date: string
  readTime: string
  author: string
  slug: string
  topics: string[]
  content?: string
}

export const weeklyBlogPosts: WeeklyBlogPost[] = [
  { 
    id: 1,
    title: "OJT Ep. 1: Hi, I'm Don — Officially a DOST V Intern!",
    excerpt:
      "First week in — real tasks, real lessons. Most important so far? Be courteous. It makes everything smoother.",
    coverImage: "/images/week 1/W1I3.jpg?height=600&width=1200&text=hayyss",
    date: "Feb 24 - 28, 2025",
    readTime: "3 min read",
    author: "Maidon Jeho G. Duran",
    slug: "light-and-shadow",
    topics: ["Roles", "Project", "Tasks"],
    content: `
      <p>This week also marked our official start as OJT interns at DOST V. We introduced ourselves to the team and shared how we preferred to be called. To get familiar with our new environment, we took time to roam around the facility, learning about the workplace layout, the rules and regulations, and the daily routines. During the orientation, we also met two fellow OJT students from BU Polangui, both taking up Information Systems. It was great connecting with others on a similar journey and starting to build a sense of community in our new workspace.</p> 
      <br>
      
      <h2>Tasks and Project Role</h2>
      
      <p>I was officially assigned as a UI/UX Designer for the Customer Satisfaction Form (CSF) system. In addition, one of the members from RSTL approached and recruited me to work as both a UI/UX Designer and a Front-End Developer for their ongoing internal projects. I also handle general design tasks requested by our professors or instructors, such as creating layouts, interfaces, and visual concepts as needed.</p>
      <br>
      <p>These responsibilities are giving me hands-on experience in real-world development and design workflows, and I'm excited to contribute more in the coming weeks.</p>
      <div class="grid grid-cols-2 gap-4 my-8">
        <div class="relative h-60 rounded-lg overflow-hidden">
          <img
            src="/images/week 1/w1start.jpg"
            alt="Example image 1"
            class="object-cover"
          />
        </div>
        <div class="relative h-60 rounded-lg overflow-hidden">
          <img
            src="/images/week 1/week1-pic.jpg"
            alt="Example image 2"
            class="object-cover"
          />
        </div>
      </div>
      
      <h2>During Working Hours</h2>
      
      <p>We were informed that the official working hours are from 8:00 AM to 5:00 PM, with the option to do overtime to complete our OJT requirements faster. During this time, we also helped organize supplies such as system units and external devices. Additionally, we were taught how to set up PCs by installing necessary applications and operating systems, as well as configuring user roles. These hands-on activities gave us a practical understanding of IT maintenance and support tasks within the office.</p>
      <br>
      <h2>Learning from Mentors</h2>
      
      <p>Having experienced mentors guiding me through tasks made a huge difference. Their feedback and advice helped me sharpen my skills and approach problems with more confidence.</p>
      <br>
      <p>Juggling assigned projects along with general design requests from mentors tested my ability to manage time efficiently. It's a great lesson in staying organized and meeting deadlines.</p>

      <div class="grid grid-cols-2 gap-4 my-8">
        <div class="relative h-60 rounded-lg overflow-hidden">
          <img
            src="/images/week 1/w1post.jpg"
            alt="Example image 1"
            class="object-cover"
          />
        </div>
        <div class="relative h-60 rounded-lg overflow-hidden">
          <img
            src="/images/week 1/friday.jpg"
            alt="Example image 2"
            class="object-cover"
          />
        </div>
      </div>

      <blockquote>"A week of hard work is a week closer to its goals."</blockquote>

      <div class="relative h-80 rounded-lg overflow-hidden my-8">
        <img
          src="/images/week 1/low.jpg?height=800&width=1200&text=Featured Example"
          alt="Featured example"
          class="object-cover"
        />
      </div>

      <h2>Further Exploration</h2>

     <p>As my OJT progresses, I'm eager to dive deeper into UI/UX design principles and front-end development techniques. I plan to explore new tools, frameworks, and best practices to enhance my skills and contribute more effectively to the projects. Additionally, I want to learn more about the full software development lifecycle and how IT teams coordinate across departments to deliver seamless solutions. This ongoing exploration will help me become a well-rounded IT professional.</p>
    `,
  },
  {
    id: 2,
    title: "OJT Ep. 2: Catching the Flow",
    excerpt:
      "Figuring out how things work, one assignment (and one coffee) at a time.",
    coverImage: "/images/week 2/visit.jpg?height=600&width=1200&text=Composition Fundamentals",
    date: "May 3-7, 2025",
    readTime: "3 min read",
    author: "Maidon Jeho G. Duran",
    slug: "composition-fundamentals",
    topics: ["Visitation", "Behavior", "Grind"],
    content: `
      <p>This week, our OJT coordinators visited the office and had a conversation with our mentors about the tasks we've been doing and how we've been adjusting to the internship environment. It was a good opportunity for both sides to share feedback — our mentors gave updates on our progress, while we got to reflect on what we've learned so far. The visit made things feel more official and reminded us that this journey is not just about work, but growth. It also motivated us to keep improving and make the most out of this experience.</p>
      <br>
      <h2>Team Weekly Update</h2>
      
      <p>We were formally introduced to our teams and started becoming more familiar with how each group works. I'm part of two teams — RSTL and CSF — and it's been a great experience getting to know the people I'll be working with. We also had the chance to connect more with our fellow OJTs, which made the environment feel more collaborative and less intimidating. As we spend more time together, the bond within the team is starting to grow stronger.</p>
      
      <br>
      <h2>Balance and Time Management</h2>
      
      <p>I've been learning the importance of balancing tasks and managing my time wisely. As the UI/UX designer for both projects, I'm still figuring out how to prioritize effectively — deciding which tasks need immediate attention and what can be scheduled later. It's a bit of a challenge juggling responsibilities across two teams, but I'm slowly developing a rhythm.</p>
      <br>
      <p>We also had a discussion with our project manager, which really helped clarify expectations and priorities. It was a great opportunity to ask questions, align on timelines, and get guidance on how to manage overlapping responsibilities. I'm now learning to set realistic goals, communicate more effectively, and gradually build a workflow that works for both teams without burning out.</p>
      


      <div class="grid grid-cols-2 gap-4 my-8">
        <div class="relative h-60 rounded-lg overflow-hidden">
          <img
            src="/images/week 2/csfteam.jpg?height=500&width=500&text=Example 1"
            alt="Example image 1"
            class="object-cover"
          />
        </div>
        <div class="relative h-60 rounded-lg overflow-hidden">
          <img
            src="/images/week 2/rstlteam.jpg?height=500&width=500&text=Example 2"
            alt="Example image 2"
            class="object-cover"
          />
        </div>
      </div>

      <blockquote>"Time doesn't need more hours—it needs more intention."— Avery Miles</blockquote>

      <div class="relative h-80 rounded-lg overflow-hidden my-8">
        <img
          src="/images/week 2/COVW2.jpg?height=800&width=1200&text=Featured Example"
          alt="Featured example"
          class="object-cover"
        />
      </div>

      <h2>Further Exploration</h2>
            <p>Time management is more than just checking tasks off a list — it's about aligning your time with your goals and values. If you find yourself overwhelmed or constantly behind, consider exploring these ideas:</p>
            <br>
            <ul>
              <li><strong>Prioritization Techniques</strong> – Learn about methods like the Eisenhower Matrix or the ABCDE Method to identify what truly matters.</li>
              <li><strong>Time Blocking</strong> – Schedule specific hours of your day for focused work, meetings, breaks, and creative tasks.</li>
              <li><strong>Energy Management</strong> – Understand when you're most productive during the day and schedule your hardest tasks accordingly.</li>
              <li><strong>Digital Tools</strong> – Try using apps like Notion, Trello, Google Calendar, or Pomodoro timers to structure your day efficiently.</li>
              <li><strong>Reflection & Review</strong> – Set aside time each week to reflect on what went well, what didn't, and how you can improve your approach moving forward.</li>
            </ul>
            <br>
            <p>Effective time management is a skill you develop over time. Start small, stay consistent, and don't be afraid to adjust your strategy as you learn more about what works for you.</p>
    `,
  },
  {
    id: 3,
    title: "OJT Ep. 3: Communication",
    excerpt:
      "Good chats with users made it easier to understand what they really expect and helped steer our work in the right direction.",
    coverImage: "/images/week 3/w3cover.jpg?height=600&width=1200&text=hayyss",
    date: "March 10-14,2025",
    readTime: "3 min read",
    author: "Maidon Jeho G. Duran",
    slug: "color-theory",
    topics: ["Collaboration", "Details", "Mood"],
    content: `
      <p>Meeting and communicating with end users was definitely one of the highlights of our internship so far. At first, we were a bit nervous — after all, these are the people who will actually use what we're designing! But once the conversations started, it quickly became clear how valuable their feedback is.</p>
      <br>
      <h2>User Meetings</h2>
      
      <p>We also had a productive team meeting with the management of RSTL and CSF. This gave us a clearer picture of the project goals and expectations from the leadership side, helping us align our work with the organization's vision.</p>
      <br>
      <p>From these discussions, we discovered the importance of clear communication and staying open to new ideas. It showed us that the best designs come from teamwork — not just within our project group, but with the users and management alike.</p>
      <br>
      <p>Overall, meeting with end users and having direct conversations with the management taught us that great products don't happen in isolation. They're built by listening, learning, and working together every step of the way.</p>
      
     
      


      <div class="grid grid-cols-2 gap-4 my-8">
        <div class="relative h-60 rounded-lg overflow-hidden">
          <img
            src="/images/week 3/meeting.jpg?height=500&width=500&text=Example 1"
            alt="Example image 1"
            class="object-cover"
          />
        </div>
        <div class="relative h-60 rounded-lg overflow-hidden">
          <img
            src="/images/week 3/w3desks.jpg?height=500&width=500&text=Example 2"
            alt="Example image 2"
            class="object-cover"
          />
        </div>
      </div>

      <blockquote>"Communication is the real work of leadership."— Nitin Nohria</blockquote>

      <div class="relative h-80 rounded-lg overflow-hidden my-8">
        <img
          src="/images/week 3/w3low.jpg?height=800&width=1200&text=Featured Example"
          alt="Featured example"
          class="object-cover"
        />
      </div>

      <h2>Further Exploration</h2>

      <p>
        To deepen our understanding of effective communication with end users and management, consider exploring the following areas:
      </p>

      <ul>
        <li>Best practices in stakeholder engagement and feedback integration</li>
        <li>Techniques such as user interviews, surveys, and focus groups for gathering user insights</li>
        <li>Agile methodologies and continuous feedback loops to keep projects aligned with user needs</li>
        <li>Communication models that improve clarity and reduce misunderstandings</li>
      </ul>
      <br>
      <p>
        Applying these strategies can enhance project outcomes and cultivate a culture of innovation and teamwork.
      </p>
    `,
  },
  {
    id: 4,
    title: "OJT Ep. 4: ONE DOST!",
    excerpt: "Everyone was welcoming and supportive. Being part of DOST V that works together with a shared goal made us feel proud and connected to the DOST community.",
    coverImage: "/images/week 4/w3cover.jpg?height=600&width=1200&text=Visual Storytelling",
    date: "March 17-21, 2025",
    readTime: "9 min read",
    author: "Alex Morgan",
    slug: "storytelling-through-sequence",
    topics: ["Storytelling", "Editing", "Presentation"],
    content: `
      <p>We met people from different DOST V units and truly felt the spirit of unity. Saying “ONE DOST” wasn’t just a phrase — it reflected the teamwork, support, and shared purpose we experienced. It reminded us that we’re part of something bigger.</p>
      <br>
      <h2>Meeting New People Means More Coding</h2>
        <p>
            As we expanded our network within DOST V, I discovered that every new interaction brought new opportunities — and more tasks! Meeting with different departments like RSTL and CSF opened doors for collaboration, allowing me to take on additional responsibilities, especially in UI/UX design and front-end development. Each meeting introduced fresh perspectives and coding challenges that helped me grow not just technically, but also as a team player. Every handshake, every introduction often led to another design request or a task to improve a system — and I welcomed it all with excitement and curiosity.
            </p>

      <br>
      <h2>Forked from the Main Branch</h2>
          <p>
          This week was a bittersweet one as we said goodbye to one of the most genuine mentors we've met — Kuya Bins. Despite knowing from the beginning that he was preparing to leave, it still felt surreal when the day actually came. Kuya Bins was the one who helped us get into DOST V, and in just a short time, he treated us like younger brothers, guiding us through our tasks with patience, humor, and heart. 
          </p>
          <br>
        <p>
          Kuya Bins was like our extra hand — always ready, always reliable. Whenever we needed help or had questions, he was the first one we turned to. His support, patience, and warm energy made our early days easier and more meaningful. Though his time with us was short, the impact he left will definitely last. We wish him the best in his next chapter and will carry his guidance with us throughout the rest of our training.
          </p>

      
      <div class="grid grid-cols-2 gap-4 my-8">
        <div class="relative h-60 rounded-lg overflow-hidden">
          <img
            src="/images/week 4/us.jpg?height=500&width=500&text=Example 1"
            alt="Example image 1"
            class="object-cover"
          />
        </div>
        <div class="relative h-60 rounded-lg overflow-hidden">
          <img
            src="/images/week 4/W1I4.jpg?height=500&width=500&text=Example 2"
            alt="Example image 2"
            class="object-cover"
          />
        </div>
      </div>
        <blockquote>
          “The people who are crazy enough to think they can change the world are the ones who do.”  
          <footer>– Steve Jobs</footer>
        </blockquote>
      <div class="relative h-80 rounded-lg overflow-hidden my-8">
        <img
          src="/images/week 4/bins.jpg?height=800&width=1200&text=Featured Example"
          alt="Featured example"
          class="object-cover"
        />
      </div>
    `,
  },
  {
    id: 5,
    title: "OJT Ep. 5: Queens and Princesses!",
    excerpt: "A glimpse into how DOST celebrated Women’s Month with pampering, fun, and continued dedication from its inspiring female team.",
    coverImage: "/images/week 5/celeb.jpg?height=600&width=1200&text=Portraiture",
    date: "March 24-28, 2025",
    readTime: "3 min read",
    author: "Maidon Jeho G. Duran",
    slug: "art-of-portraiture",
    topics: ["Women", "Celebration", "Fun"],
    content: `
      <p>This week, we got to experience the fun and pampering side of DOST V's Women's Month celebration. It was a great way to show appreciation for the hard work and dedication of our female colleagues, and it also gave us a chance to bond with them outside of work.</p>
      <br>
      <h2>The Pampering Sessions</h2>
      
      <p>The pampering sessions were a great way to show appreciation for the hard work and dedication of our female colleagues. It was a great way to bond with them outside of work, and it also gave us a chance to learn more about them and their interests. We also got to see how they take care of themselves and how they take care of their skin.</p>
      <br>
      
      <p>The DOST lobby was buzzing with energy thanks to several booths selling different products — from tasty snacks to unique finds — giving the space a lively mini-market feel that added to the festive spirit.
      <br>
      Even with all the fun, the work didn’t stop. We stayed focused and continued developing the systems assigned to us with the same dedication. This week was a great reminder that caring for people and progress go hand in hand.</p>
      <br>
      <div class="grid grid-cols-2 gap-4 my-8">
        <div class="relative h-60 rounded-lg overflow-hidden">
          <img
            src="/images/week 5/celeb1.jpg?height=500&width=500&text=Example 1"
            alt="Example image 1"
            class="object-cover"
          />
        </div>
        <div class="relative h-60 rounded-lg overflow-hidden">
          <img
            src="/images/week 5/celeb2.jpg?height=500&width=500&text=Example 2"
            alt="Example image 2"
            class="object-cover"
          />
        </div>
      </div>
      <h2>Weekly Progress</h2>
      <p>
        As the UI/UX designer for both the Customer Satisfaction Feedback (CSF) and the Regional Science and Technology Laboratory (RSTL), as well as the front-end developer, my main objective is to ensure the design and implementation of user-friendly interfaces that enhance the overall experience for both internal users and stakeholders.
      </p>
      <br>
      <p>
       Each week, I focus on progressing the development of intuitive layouts, interactive elements, and responsive designs while maintaining clear communication and regular updates with our project head. This ongoing reporting allows us to align project goals, address feedback promptly, and ensure that the systems meet the functional and aesthetic standards required by the DOST.
      </p>

      <div class="grid grid-cols-2 gap-4 my-8">
        <div class="relative h-60 rounded-lg overflow-hidden">
          <img
            src="/images/week 5/meet.jpg?height=500&width=500&text=Example 1"
            alt="Example image 1"
            class="object-cover"
          />
        </div>
        <div class="relative h-60 rounded-lg overflow-hidden">
          <img
            src="/images/week 5/meet2.jpg?height=500&width=500&text=Example 2"
            alt="Example image 2"
            class="object-cover"
          />
        </div>
      </div>

      <blockquote>"Progress celebrated, momentum gained."</blockquote>

      <div class="relative h-80 rounded-lg overflow-hidden my-8">
        <img
          src="/images/week 5/lowc.jpg?height=800&width=1200&text=Featured Example"
          alt="Featured example"
          class="object-cover"
        />
      </div>
    `,
  },
  {
    id: 6,
    title: "OJT Ep. 6: Momentum",
    excerpt:
      "I gradually gained momentum as tasks became more familiar, my confidence grew, and I started contributing with purpose and clarity.",
    coverImage: "/images/week 6/low.jpg?height=600&width=1200&text=Landscape Photography",
    date: "Mar. 31 - Apr. 4, 2025",
    readTime: "3 min read",
    author: "Maidon Jeho G. Duran",
    slug: "landscape-mastery",
    topics: ["Momentum", "Growth", "Rhythm"],
    content: `
      <p>At this point in our internship, tasks started to feel more natural. What was once unfamiliar has slowly become routine. From adjusting to the office environment to handling real responsibilities, I can say I’m starting to find my rhythm. Each task is no longer just a requirement, but a chance to improve, contribute, and grow. The momentum is real—and it’s energizing.</p>
      <br>
      <h2>Collaborating with Purpose</h2>
      
      <p>Momentum isn’t just about individual pace—it’s about team chemistry. I’ve grown more comfortable working with other OJTs and full-time staff. Whether it’s through shared tasks, feedback sessions, or quick conversations, I’ve realized how important communication is in sustaining progress and avoiding burnout.</p>
      <BR>
      
      <p>I’ve learned that collaboration isn’t just about working together—it’s about working together with purpose. Each task is an opportunity to learn, grow, and contribute. The more we work together, the more we can achieve. The momentum is real—and it’s energizing.</p>
      
    <div class="grid grid-cols-2 gap-4 my-8">
        <div class="relative h-80 rounded-lg overflow-hidden">
          <img
            src="/images/week 6/coll.jpg?height=500&width=500&text=Example 1"
            alt="Example image 1"
            class="object-cover"
          />
        </div>
        <div class="relative h-80 rounded-lg overflow-hidden">
          <img
            src="/images/week 6/me.jpg?height=500&width=500&text=Example 2"
            alt="Example image 2"
            class="object-cover"
          />
        </div>


    `,
  },
  {
    id: 7,
    title: "OJT Ep. 7: Stability",
    excerpt: "Keeping things stable has helped me stay on track and make sure everything works smoothly for everyone.",
    coverImage: "/images/week 7/meeting.jpg?height=600&width=1200&text=Street Photography",
    date: "April 7-11,2025",
    readTime: "3 min read",
    author: "Maidon Jeho G. Duran",
    slug: "street-photography-essentials",
    topics: ["Street", "Candid", "Urban"],
    content: `
      <h2>Nonstop Development Mode</h2>
      <p>As this phase of the internship unfolded, I found myself deep in continuous development work. The projects I’m handling demanded consistent focus, and I embraced the momentum by improving not only my coding but also my ability to adapt to new requirements. Each day brought new challenges, and I began to apply a more professional approach when planning and executing development tasks.</p> 
      <br>
      <p>Alongside development, I took on several design requests from different teams within the department. From user interfaces to visual assets, I learned to handle quick turnarounds while maintaining quality. This taught me how to communicate better with clients, understand their needs, and translate those into clean, purposeful designs—all under time constraints.</p>
      
    <br>
      
      <p>Another unexpected but rewarding part of this phase was assisting walk-in clients. Whether they needed technical support or general guidance, I stepped up to help, which improved my soft skills and confidence in dealing with people professionally. It reminded me that working in IT isn't just about screens and systems—it’s also about being of service.</p>

      <div class="grid grid-cols-2 gap-4 my-8">
        <div class="relative h-60 rounded-lg overflow-hidden">
          <img
            src="/images/week 7/code.jpg?height=500&width=500&text=Example 1"
            alt="Example image 1"
            class="object-cover"
          />
        </div>
        <div class="relative h-60 rounded-lg overflow-hidden">
          <img
            src="/images/week 7/gang.jpg?height=500&width=500&text=Example 2"
            alt="Example image 2"
            class="object-cover"
          />
        </div>
      </div>

      <div class="relative h-80 rounded-lg overflow-hidden my-8">
        <img
          src="/images/week 7/bag.jpg?height=800&width=1200&text=Featured Example"
          alt="Featured example"
          class="object-cover"
        />
      </div>
    `,
  },
  {
    id: 8,
    title: "OJT Ep. 8: Hands-On",
    excerpt: "I'm getting more hands-on experience with the projects and hardwares, and I'm starting to see the results of my work.",
    coverImage: "/images/week 8/fix.jpg?height=600&width=1200&text=Macro Photography",
    date: "April 14-16, 2025",
    readTime: "3 min read",
    author: "Maidon Jeho G. Duran",
    slug: "macro-photography",
    topics: ["Hardware", "Detail", "Technique"],
    content: `
      <h2>Troubleshooting</h2>
      
      <p>This week was an intense and rewarding hands-on experience where we took on the challenge of fixing and configuring system units as well as our laptops. With the guidance and support of one of our experienced mentors, we not only learned the technical steps involved but also understood the importance of a methodical approach to troubleshooting.</p>
      <br>
      <p>What made this week especially valuable was the opportunity to step outside the usual office environment and apply our skills in real-world settings. This practical exposure gave us a clearer perspective on how to diagnose and solve problems on the spot, often with limited resources.</p>
      
    <br>
      <p>Beyond technical growth, this experience boosted our confidence and problem-solving mindset—key qualities for any IT professional. Overall, Week 8 was a significant milestone in our OJT journey, blending knowledge with action and preparing us for future challenges.</p>
      
      <div class="grid grid-cols-2 gap-4 my-8">
        <div class="relative h-60 rounded-lg overflow-hidden">
          <img
            src="/images/week 8/kodak.jpg?height=500&width=500&text=Example 1"
            alt="Example image 1"
            class="object-cover"
          />
        </div>
        <div class="relative h-60 rounded-lg overflow-hidden">
          <img
            src="/images/week 8/us.jpg?height=500&width=500&text=Example 2"
            alt="Example image 2"
            class="object-cover"
          />
        </div>
      </div>
    `,
  },
  {
    id: 9,
    title: "OJT Ep. 9: Preparation",
    excerpt: "Preparing for an event is a great way to learn new skills and get hands-on experience.",
    coverImage: "/images/week 8/room.jpg?height=600&width=1200&text=Black and White",
    date: "April 17-21, 2025",
    readTime: "3 min read",
    author: "Maidon Jeho G. Duran",
    slug: "black-and-white-vision",
    topics: ["Roles", "Event", "Preparation"],
    content: `
      <p>Week 9 took us into a different kind of experience as we entered the preparation phase for an upcoming event hosted by the department. Unlike our usual routine filled with coding and development tasks, our mentor asked us to temporarily pause our main work and focus on supporting the logistical needs of the event. This included printing brochures, packing materials, and preparing other important items needed to ensure everything runs smoothly.</p>
      
      <br>
      
      <p>We were also assigned specific roles for the event itself. I was placed on the media team, where I was given the responsibility of documenting the event through photography. To help us get ready, we had a short hands-on practice session by covering an ongoing conference inside the DOST conference room. This gave me the chance to familiarize myself with the setup, find the best angles, and understand the pacing of event documentation—something I haven’t done much of before, but now really enjoy.</p>
      
      <br>
      
      <p>Aside from that, the whole team was involved in collaborative efforts to print and sort event brochures and materials. It was a refreshing change of pace and a great opportunity to work closely with fellow interns and staff members outside the usual technical environment. This week made me realize that being part of a team also means being flexible and ready to help where needed, especially during big events. It’s all part of the learning journey!</p>
    

      <div class="grid grid-cols-2 gap-4 my-8">
        <div class="relative h-60 rounded-lg overflow-hidden">
          <img
            src="/images/week 9/pic.jpg?height=500&width=500&text=Example 1"
            alt="Example image 1"
            class="object-cover"
          />
        </div>
        <div class="relative h-60 rounded-lg overflow-hidden">
          <img
            src="/images/week 9/tech.jpg?height=500&width=500&text=Example 2"
            alt="Example image 2"
            class="object-cover"
          />
        </div>
      </div>

      <div class="relative h-90 rounded-lg overflow-hidden my-8">
        <img
          src="/images/week 9/us.jpg?height=800&width=1200&text=Featured Example"
          alt="Featured example"
          class="object-cover"
        />
      </div>
    `,
  },
  {
    id: 10,
    title: "OJT Ep. 10: Innovation Summit 2025",
    excerpt: "The Innovation Summit 2025 was a dynamic two-day gathering of brilliant minds, celebrating science, technology, and forward-thinking innovations.",
    coverImage: "/images/week 10/us.png?height=600&width=1200&text=Self-Portraiture",
    date: "April 27 - May 2, 2025",
    readTime: "7 min read",
    author: "Maidon Jeho G. Duran",
    slug: "art-of-self-portraiture",
    topics: ["Science", "Technology", "Event"],
    content: `
      <p>Week 10 was a big moment for all of us as we finally put our preparations into action for the much-awaited Innovation Summit 2025. This two-day event was on a different level — not only in scale but also in significance. Delegates and officials from various DOST regional offices came together, making it a true convergence of minds, innovation, and collaboration. The atmosphere was exciting, fast-paced, and a bit overwhelming — in the best way possible.</p>
    
      <br>
      
      <p>As part of the media team, I was tasked with capturing the essence of the event through photography. This meant being present at key moments, capturing the energy of the crowd, and documenting the interactions between delegates and officials. It was a challenge, but also a great opportunity to practice my skills and learn from experienced photographers.</p>
      
      <br>
      
      <p>What made it even more memorable was having the opportunity to witness some of the DOST regional directors and leaders in person. We got to meet the DOST Undersecretary (USEC) and listen to talks that highlighted groundbreaking ideas and forward-thinking innovations. Being in a room full of professionals with decades of experience and incredible achievements gave me chills. I couldn’t help but feel inspired by their passion and dedication to their work — it was like catching a glimpse of the future I want to work toward.</p>
      
      <br>
      <p>This environment was completely new to me. As someone still starting out, it felt surreal to be part of something so important — not just as a spectator, but as someone actively contributing behind the scenes. It reminded me that growth doesn't always come from the comfort of a desk or a code editor — sometimes, it comes from stepping into unfamiliar spaces and embracing new roles. This week left me with more than just experience; it left me with motivation. I now carry a stronger sense of purpose and a clearer picture of the kind of professional I want to become.</p>
      

      <div class="grid grid-cols-2 gap-4 my-8">
        <div class="relative h-60 rounded-lg overflow-hidden">
          <img
            src="/images/week 10/us2.jpg?height=500&width=500&text=Example 1"
            alt="Example image 1"
            class="object-cover"
          />
        </div>
        <div class="relative h-60 rounded-lg overflow-hidden">
          <img
            src="/images/week 10/ojt.jpg?height=500&width=500&text=Example 2"
            alt="Example image 2"
            class="object-cover"
          />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 my-8">
        <div class="relative h-60 rounded-lg overflow-hidden">
          <img
            src="/images/week 10/vid.JPG?height=500&width=500&text=Example 1"
            alt="Example image 1"
            class="object-cover"
          />
        </div>
        <div class="relative h-60 rounded-lg overflow-hidden">
          <img
            src="/images/week 10/cap.jpg?height=500&width=500&text=Example 2"
            alt="Example image 2"
            class="object-cover"
          />
        </div>
      </div>


      <div class="relative h-80 rounded-lg overflow-hidden my-8">
        <img
          src="/images/week 10/low.jpg?height=800&width=1200&text=Featured Example"
          alt="Featured example"
          class="object-cover"
        />
      </div>

    `,
  },
  {
    id: 11,
    title: "OJT Ep. 11: Thoughts",
    excerpt:
      "Composing and lighting compelling still life images that tell stories and showcase objects with intention.",
    coverImage: "/placeholder.svg?height=600&width=1200&text=Still Life",
    date: "March 3, 2024",
    readTime: "8 min read",
    author: "Alex Morgan",
    slug: "creative-still-life",
    topics: ["Still Life", "Composition", "Lighting"],
    content: `
      <p>Still life photography offers complete creative control over composition, lighting, and subject matter. This week, we're exploring techniques for creating compelling still life images that tell stories and showcase objects with intention.</p>
      
      <h2>Concept and Story</h2>
      
      <p>The most engaging still life images go beyond simply documenting objects—they convey mood, suggest narratives, or express ideas. Before arranging your composition, consider what story or feeling you want to communicate through your selection and arrangement of objects.</p>
      
      <h2>Composition Considerations</h2>
      
      <p>Still life composition involves careful decisions about:</p>
      
      <ul>
        <li><strong>Arrangement</strong> - how objects relate to each other spatially</li>
        <li><strong>Balance</strong> - distributing visual weight across the frame</li>
        <li><strong>Negative space</strong> - using empty areas intentionally</li>
        <li><strong>Lines and shapes</strong> - creating visual pathways and geometric relationships</li>
        <li><strong>Color relationships</strong> - using harmonious or contrasting color schemes</li>
      </ul>
      
      <h2>Lighting Approaches</h2>
      
      <p>Lighting dramatically affects the mood and dimension of still life images:</p>
      
      <ul>
        <li><strong>Soft, diffused light</strong> creates gentle transitions and minimizes texture</li>
        <li><strong>Hard, directional light</strong> emphasizes texture and creates dramatic shadows</li>
        <li><strong>Backlighting</strong> creates rim light effects and can make translucent objects glow</li>
        <li><strong>Window light</strong> provides natural, directional illumination that's easy to work with</li>
      </ul>
      
      <h2>Weekly Exercise</h2>
      
      <p>This week, create three still life compositions using the same objects but different lighting approaches. Notice how the mood and emphasis change with each lighting setup.</p>

      <div class="grid grid-cols-2 gap-4 my-8">
        <div class="relative h-60 rounded-lg overflow-hidden">
          <img
            src="/placeholder.svg?height=500&width=500&text=Example 1"
            alt="Example image 1"
            class="object-cover"
          />
        </div>
        <div class="relative h-60 rounded-lg overflow-hidden">
          <img
            src="/placeholder.svg?height=500&width=500&text=Example 2"
            alt="Example image 2"
            class="object-cover"
          />
        </div>
      </div>

      <blockquote>"Photography is the story I fail to put into words." — Destin Sparks</blockquote>

      <div class="relative h-80 rounded-lg overflow-hidden my-8">
        <img
          src="/placeholder.svg?height=800&width=1200&text=Featured Example"
          alt="Featured example"
          class="object-cover"
        />
      </div>

      <h2>Further Exploration</h2>

      <p>
        As you continue to develop your skills in this area, consider these additional resources and exercises to
        deepen your understanding:
      </p>

      <ul>
        <li>Study the work of photographers who excel in this particular area</li>
        <li>Practice regularly with specific technical exercises</li>
        <li>Seek feedback from peers and mentors on your progress</li>
        <li>Experiment with combining these techniques with other aspects of photography</li>
      </ul>

      <p>
        Remember that mastery comes through consistent practice and thoughtful experimentation. Don't be afraid to
        make mistakes—they're often the most valuable learning opportunities.
      </p>
    `,
  },
  {
    id: 12,
    title: "This Week in Photography: Long Exposure Magic",
    excerpt: "Using extended exposure times to create ethereal effects and reveal the passage of time in still images.",
    coverImage: "/placeholder.svg?height=600&width=1200&text=Long Exposure",
    date: "February 25, 2024",
    readTime: "9 min read",
    author: "Alex Morgan",
    slug: "long-exposure-magic",
    topics: ["Technique", "Time", "Motion"],
    content: `
      <p>Long exposure photography uses extended shutter speeds to create ethereal effects and reveal the passage of time in still images. This week, we're exploring techniques for creating compelling long exposure photographs in various situations.</p>
      
      <h2>Essential Equipment</h2>
      
      <p>Long exposure photography typically requires:</p>
      
      <ul>
        <li><strong>A sturdy tripod</strong> to keep the camera perfectly still during extended exposures</li>
        <li><strong>Remote shutter release</strong> to avoid camera shake when triggering the shutter</li>
        <li><strong>Neutral density (ND) filters</strong> to reduce light entering the lens, allowing longer exposures in bright conditions</li>
        <li><strong>Patience</strong> - long exposures require waiting and experimentation</li>
      </ul>
      
      <h2>Creative Applications</h2>
      
      <p>Long exposure techniques can transform many subjects:</p>
      
      <ul>
        <li><strong>Moving water</strong> becomes silky and ethereal</li>
        <li><strong>Clouds</strong> show their movement across the sky</li>
        <li><strong>Urban scenes</strong> with moving lights create colorful streaks</li>
        <li><strong>Star trails</strong> reveal the earth's rotation</li>
        <li><strong>Light painting</strong> allows drawing with light sources during exposure</li>
      </ul>
      
      <h2>Technical Considerations</h2>
      
      <p>Successful long exposures require attention to several factors:</p>
      
      <ul>
        <li><strong>Calculating exposure</strong> when using ND filters requires understanding filter strength</li>
        <li><strong>Managing digital noise</strong> which can increase during very long exposures</li>
        <li><strong>Balancing static and moving elements</strong> for compelling compositions</li>
        <li><strong>Choosing appropriate shutter speeds</strong> for different effects and subjects</li>
      </ul>
      
      <h2>Weekly Exercise</h2>
      
      <p>This week, experiment with different shutter speeds on the same scene containing both static and moving elements. Try exposures ranging from 1 second to several minutes (if your equipment allows) and compare the results.</p>

      <div class="grid grid-cols-2 gap-4 my-8">
        <div class="relative h-60 rounded-lg overflow-hidden">
          <img
            src="/placeholder.svg?height=500&width=500&text=Example 1"
            alt="Example image 1"
            class="object-cover"
          />
        </div>
        <div class="relative h-60 rounded-lg overflow-hidden">
          <img
            src="/placeholder.svg?height=500&width=500&text=Example 2"
            alt="Example image 2"
            class="object-cover"
          />
        </div>
      </div>

      <blockquote>"Photography is the story I fail to put into words." — Destin Sparks</blockquote>

      <div class="relative h-80 rounded-lg overflow-hidden my-8">
        <img
          src="/placeholder.svg?height=800&width=1200&text=Featured Example"
          alt="Featured example"
          class="object-cover"
        />
      </div>

      <h2>Further Exploration</h2>

      <p>
        As you continue to develop your skills in this area, consider these additional resources and exercises to
        deepen your understanding:
      </p>

      <ul>
        <li>Study the work of photographers who excel in this particular area</li>
        <li>Practice regularly with specific technical exercises</li>
        <li>Seek feedback from peers and mentors on your progress</li>
        <li>Experiment with combining these techniques with other aspects of photography</li>
      </ul>

      <p>
        Remember that mastery comes through consistent practice and thoughtful experimentation. Don't be afraid to
        make mistakes—they're often the most valuable learning opportunities.
      </p>
    `,
  },
]

// Helper function to get previous and next posts
export function getAdjacentPosts(currentSlug: string) {
  const currentIndex = weeklyBlogPosts.findIndex((post) => post.slug === currentSlug)

  if (currentIndex === -1) {
    return { previousPost: null, nextPost: null }
  }

  const previousPost =
    weeklyBlogPosts.length > 1
      ? weeklyBlogPosts[(currentIndex - 1 + weeklyBlogPosts.length) % weeklyBlogPosts.length]
      : null
  const nextPost =
    weeklyBlogPosts.length > 1
      ? weeklyBlogPosts[(currentIndex + 1) % weeklyBlogPosts.length]
      : null

  return { previousPost, nextPost }
}

// Helper function to get related posts (excluding the current one)
export function getRelatedPosts(currentSlug: string, count = 3) {
  // In a real app, you might use tags or categories to find truly related content
  // For this example, we'll just return other posts
  return weeklyBlogPosts.filter((post) => post.slug !== currentSlug).slice(0, count)
}
