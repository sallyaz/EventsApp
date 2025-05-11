<?xml version="1.0" encoding="UTF-8"?>
<readme theme="modern" font="Arial" colorScheme="blue-accent">

  <title style="bold large spacing-lg">🎉 Events App</title>

  <summary style="italic spacing-md">
    A beautifully designed public mobile app that allows users to RSVP to upcoming events, receive notifications,
    and enjoy seamless navigation — powered by a JSON-based Node.js backend.
  </summary>

  <spacer size="xl"/>

  <section name="🚀 Features" heading="h1" spacing="lg">
    <subsection name="Mobile App" heading="h2">
      <item>✔ Browse and explore events with images</item>
      <item>📋 RSVP to events with a guest count</item>
      <item>🔔 Receive push notifications for upcoming events</item>
      <item>🔗 Deep linking support (e.g. <link href='myapp://event/123'>Open Event</link>)</item>
    </subsection>
    <subsection name="Backend API" heading="h2">
      <item>🛠 REST API endpoints for event operations</item>
      <item>👤 User authentication via <link href="/login">/login</link></item>
      <item>📁 JSON file-based persistence layer</item>
    </subsection>
  </section>

  <spacer size="lg"/>

  <section name="📱 Screens" heading="h1" spacing="lg">
    <screens layout="grid">
      <screen>🏠 EventsScreen</screen>
      <screen>🗓 EventDetailsScreen</screen>
      <screen>🔔 NotificationsScreen</screen>
      <screen>🚀 OnBoardingScreen</screen>
      <screen>🔑 SignInScreen</screen>
      <screen>💧 SplashScreen</screen>
    </screens>
  </section>

  <spacer size="lg"/>

  <section name="🧩 API Endpoints" heading="h1" spacing="lg">
    <api>
      <endpoint method="GET" path="/events">📥 <link href="/events">Fetch all events</link></endpoint>
      <endpoint method="GET" path="/events/:id">🔍 <link href="/events/123">Fetch event by ID</link></endpoint>
      <endpoint method="POST" path="/events/:id/rsvp">✅ RSVP to an event</endpoint>
      <endpoint method="PATCH" path="/events/:id/rsvp">✏️ Update RSVP</endpoint>
      <endpoint method="DELETE" path="/events/:id/rsvp">❌ Cancel RSVP</endpoint>
      <endpoint method="POST" path="/login">🔐 User login</endpoint>
    </api>
  </section>

  <spacer size="lg"/>

  <section name="🔧 Environment & Config" heading="h1" spacing="lg">
    <env>
      <file>.env</file>
      <note>Used to store backend configuration like <key>PORT</key>, <key>BASE_URL</key>, etc.</note>
    </env>
  </section>

  <spacer size="lg"/>

  <section name="🛠 Installation & Usage" heading="h1" spacing="lg">
    <steps>
      <step>📦 Clone the repository: <link href="https://github.com/YOUR_USERNAME/Events-App">GitHub</link></step>
      <step>📁 Navigate to <b>frontend</b> and <b>backend</b> folders</step>
      <step>📲 Install dependencies using <code>npm install</code></step>
      <step>▶️ Start backend: <code>npm run dev</code></step>
      <step>📱 Start mobile app: <code>npm run android</code> or <code>npm run ios</code></step>
    </steps>
  </section>

  <spacer size="lg"/>

  <section name="🧱 Tech Stack" heading="h1" spacing="lg">
    <subsection name="Frontend" heading="h2">
      <tech>React Native</tech>
      <tech>Redux Toolkit</tech>
      <tech>TypeScript</tech>
      <tech>React Navigation</tech>
    </subsection>
    <subsection name="Backend" heading="h2">
      <tech>Node.js</tech>
      <tech>Express</tech>
      <tech>TypeScript</tech>
      <tech>tsx (live reload)</tech>
    </subsection>
  </section>

  
<section name="🖼️ App Screenshots" heading="h1" spacing="lg">
    <image src="Simulator Screenshot - iPhone 14 - 2025-05-11 at 15.06.37.png" alt="App Screen" style="rounded shadow" />
    <image src="Simulator Screenshot - iPhone 14 - 2025-05-11 at 15.06.38.png" alt="App Screen" style="rounded shadow" />
    <image src="Simulator Screenshot - iPhone 14 - 2025-05-11 at 15.06.40.png" alt="App Screen" style="rounded shadow" />
    <image src="Simulator Screenshot - iPhone 16 Pro Max - 2025-05-11 at 15.01.41.png" alt="App Screen" style="rounded shadow" />
    <image src="Simulator Screenshot - iPhone 16 Pro Max - 2025-05-11 at 15.01.43.png" alt="App Screen" style="rounded shadow" />
    <image src="Simulator Screenshot - iPhone 16 Pro Max - 2025-05-11 at 15.02.01.png" alt="App Screen" style="rounded shadow" />
    <image src="Simulator Screenshot - iPhone 16 Pro Max - 2025-05-11 at 15.02.07.png" alt="App Screen" style="rounded shadow" />
    <image src="Simulator Screenshot - iPhone 16 Pro Max - 2025-05-11 at 15.02.16.png" alt="App Screen" style="rounded shadow" />
</section>


  <spacer size="lg"/>

  <footer spacing="xl">
    <license type="MIT">🔓 Open source under the MIT License</license>
    <status>🚧 Project under active development</status>
    <link href="https://github.com/YOUR_USERNAME/Events-App">📁 GitHub Repository</link>
  </footer>

</readme>
