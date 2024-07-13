import { useEffect, useState } from "react";
import { firebaseConfigSnippet, signInSnippet, signUpSnippet } from "./codeSnippet";
import { FaRegCopy } from "react-icons/fa";

const Documentation = () => {
  const [activeTab, setActiveTab] = useState<string>('#introduction');
  const [openSubLists, setOpenSubLists] = useState<any>({});

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    document.querySelector(tab)?.scrollIntoView({ behavior: 'smooth' });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Code copied to clipboard!');
  };

  const toggleSubList = (key: string) => {
    setOpenSubLists((prevState: any) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentActiveTab = '';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentActiveTab = `#${section.id}`;
        }
      });

      if (currentActiveTab) {
        setActiveTab(currentActiveTab);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container mx-auto flex">
      <div className="bg-slate-200 w-72 min-h-screen text-black fixed h-full">
        <div className="p-4 pb-0">
          <h2 className="text-2xl font-semibold">Documentation</h2>
        </div>
        <nav className="p-4">
          <ul>
            <li className={`mb-2 ${activeTab === "#introduction" ? "text-cyan-600" : ""}`}>
              <a href="#introduction" onClick={() => handleTabClick("#introduction")}>
                Introduction
              </a>
            </li>
            <li className={`mb-2 ${activeTab === "#installation" ? "text-cyan-600" : ""}`}>
              <a href="#installation" onClick={() => handleTabClick("#installation")}>
                Installation
              </a>
            </li>
            <li className={`mb-2 ${activeTab === "#firebase-Setup" ? "text-cyan-600" : ""}`}>
              <a href="#firebase-Setup" onClick={() => handleTabClick("#firebase-Setup")}>
                Firebase Setup
              </a>
            </li>
            <li className={`mb-2 ${activeTab === "#firebase-auth" ? "text-cyan-600" : ""}`}>
              <a href="#firebase-auth" onClick={() => handleTabClick("#firebase-auth")}>
                Firebase Authentication
              </a>
            </li>
            <ul className="ml-4 mt-2">
              <li className={`mb-2 ${activeTab === "#password-authentication" ? "text-cyan-600" : ""}`}>
                <a href="#password-authentication" onClick={() => handleTabClick("#password-authentication")}>
                  Password Authentication
                </a>
              </li>
              <li className={`mb-2 ${activeTab === "#email-link-authentication" ? "text-cyan-600" : ""}`}>
                <a href="#email-link-authentication" onClick={() => handleTabClick("#email-link-authentication")}>
                  Email Link Authentication
                </a>
              </li>
              <li className={`mb-2 ${activeTab === "#google-authentication" ? "text-cyan-600" : ""}`}>
                <a href="#google-authentication" onClick={() => handleTabClick("#google-authentication")}>
                  Google
                </a>
              </li>
              <li className={`mb-2 ${activeTab === "#facebook-authentication" ? "text-cyan-600" : ""}`}>
                <a href="#facebook-authentication" onClick={() => handleTabClick("#facebook-authentication")}>
                  Facebook
                </a>
              </li>
              <li className={`mb-2 ${activeTab === "#github-authentication" ? "text-cyan-600" : ""}`}>
                <a href="#github-authentication" onClick={() => handleTabClick("#github-authentication")}>
                  GitHub
                </a>
              </li>
              <li className={`mb-2 ${activeTab === "#twitter-authentication" ? "text-cyan-600" : ""}`}>
                <a href="#twitter-authentication" onClick={() => handleTabClick("#twitter-authentication")}>
                  Twitter
                </a>
              </li>
              <li className={`mb-2 ${activeTab === "#yahoo-authentication" ? "text-cyan-600" : ""}`}>
                <a href="#yahoo-authentication" onClick={() => handleTabClick("#yahoo-authentication")}>
                  Yahoo
                </a>
              </li>
              <li className={`mb-2 ${activeTab === "#phone-authentication" ? "text-cyan-600" : ""}`}>
                <a href="#phone-authentication" onClick={() => handleTabClick("#phone-authentication")}>
                  Phone Number
                </a>
              </li>
              <li className={`mb-2 ${activeTab === "#custom-authentication" ? "text-cyan-600" : ""}`}>
                <a href="#custom-authentication" onClick={() => handleTabClick("#custom-authentication")}>
                  Custom Authentication
                </a>
              </li>
              <li className={`mb-2 ${activeTab === "#anonymous-authentication" ? "text-cyan-600" : ""}`}>
                <a href="#anonymous-authentication" onClick={() => handleTabClick("#anonymous-authentication")}>
                  Anonymous Authentication
                </a>
              </li>
            </ul>
          </ul>
        </nav>
      </div>

      <div className="w-3/4 ml-auto p-4">

        <section className="mb-10 pb-5 border-double border-b-4 border-slate-200" id="introduction">
          <h2 className="text-2xl font-semibold mb-4" ># Introduction</h2>
          <p className="mb-4">This documentation provides a step-by-step guide for setting up a project using React (Vite), Tailwind CSS, Firebase, and ESLint/Prettier. The project includes user authentication with various platforms and a dashboard to display user details.</p>
        </section>

        <section className="mb-10 pb-5 border-double border-b-4 border-slate-200" id="installation">
          <h2 className="text-2xl font-semibold mb-4"># Installation</h2>

          <h3 className="font-bold mb-2">Prerequisites</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Node.js and npm installed</li>
            <li>Firebase account</li>
          </ul>

          <h3 className="font-bold mb-2">Project Setup</h3>
          <h4 className="mb-2">1. Create a new React Vite project:</h4>
          <div className="relative bg-slate-200 p-4 rounded-lg mb-4">
            <pre>
              <code>npm create vite@latest my-app -- --template react</code>
            </pre>
          </div>
          <h4 className="mb-2">2. Navigate to your project directory and install necessary dependencies:</h4>
          <div className="relative bg-slate-200 p-4 rounded-lg mb-4">
            <pre>
              <code>cd my-app</code>
            </pre>
            <pre>
              <code>npm install</code>
            </pre>
          </div>

          <h4 className="mb-2">3. Install Tailwind CSS:</h4>
          <div className="relative bg-slate-200 p-4 rounded-lg mb-4">
            <pre>
              <code>npm install -D tailwindcss postcss autoprefixer</code>
            </pre>
            <pre>
              <code>npx tailwindcss init -p</code>
            </pre>
          </div>

          <h4 className="mb-2">4. Configure Tailwind CSS in <code>tailwind.config.js</code>:</h4>
          <div className="relative bg-slate-200 p-4 rounded-lg mb-4">
            <pre>
              <code>{`module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}</code>
            </pre>
          </div>

          <h4 className="mb-2">5. Add Tailwind directives to <code>src/index.css</code>:</h4>
          <div className="relative bg-slate-200 p-4 rounded-lg mb-4">
            <pre>
              <code>{`@tailwind base;
@tailwind components;
@tailwind utilities;`}</code>
            </pre>
          </div>

          <h4 className="mb-2">6. Install ESLint and Prettier:</h4>
          <div className="relative bg-slate-200 p-4 rounded-lg mb-4">
            <pre>
              <code>npm install --save-dev eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-react</code>
            </pre>
          </div>

          <h4 className="mb-2">7. Install Firebase:</h4>
          <div className="relative bg-slate-200 p-4 rounded-lg mb-4">
            <pre>
              <code>npm install firebase</code>
            </pre>
          </div>
        </section>

        <section className="mb-10 pb-5 border-double border-b-4 border-slate-200" id="firebase-Setup">
          <h2 className="text-2xl font-semibold mb-4"># Firebase Setup and Configuration</h2>

          <h3 className="font-bold mb-2">1. Create a Firebase Project</h3>
          <ol className="list-decimal list-inside pl-3 mb-4">
            <li>Go to the <a href="https://console.firebase.google.com/" target="_blank" className="text-blue-500">Firebase Console</a>.</li>
            <li>Click on <strong>Add project</strong>.</li>
            <li>Enter your project name and follow the steps to create the project.</li>
          </ol>

          <h3 className="font-bold mb-2">2. Register Your App with Firebase</h3>
          <ol className="list-decimal list-inside pl-3 mb-4">
            <li>In the Firebase Console, navigate to <strong>Project Settings</strong>.</li>
            <li>In the <strong>Your Apps</strong> section, click on the web icon (<strong>{`</>`}</strong>).</li>
            <li>Register your app with a nickname and click <strong>Register app</strong>.</li>
          </ol>

          <h3 className="font-bold mb-2">3. Add Firebase SDK to Your Project</h3>

          <div className="relative bg-slate-200 p-4 rounded-lg mb-4">
            <button
              onClick={() => copyToClipboard(signInSnippet)}
              className="absolute top-4 right-4 bg-transparent text-gray-600 hover:text-gray-900"
            >
              <FaRegCopy size={16} />
            </button>
            <pre>
              {firebaseConfigSnippet}
            </pre>
          </div>

          <h3 className="font-bold mb-2">4. Enable Authentication Methods</h3>
          <ol className="list-decimal list-inside pl-3 mb-4">
            <li>In the Firebase Console, go to the <strong>Authentication</strong> section.</li>
            <li>Click on the <strong>Sign-in method</strong> tab.</li>
            <li>Enable the desired authentication methods (Email/Password, Google, Facebook, etc.) and configure them as needed.</li>
          </ol>
        </section>

        <section className="text-2xl font-semibold mb-5 text-cyan-600" id="firebase-auth">Firebase authentication methods</section>
        <section className="mb-10 pb-5 border-double border-b-4 border-slate-200" id="password-authentication">
          <h2 className="text-2xl font-semibold mb-4"># Email/Password Authentication:</h2>

          <h3 className="font-bold mb-2">Enable Email/Password Authentication</h3>
          <ol className="list-decimal list-inside pl-3 mb-4">
            <li>In the Firebase Console, navigate to the <strong>Authentication</strong> section.</li>
            <li>Click on the <strong>Sign-in method</strong> tab.</li>
            <li>Enable the <strong>Email/Password</strong> provider and click <strong>Save</strong>.</li>
          </ol>

          <h3 className="font-bold mb-2">Create a new user account with a password</h3>
          <ol className="list-disc list-inside pl-3 mb-4">
            <li>Create a sign-up form and validate the new account details, ensuring that the password meets your app's complexity requirements</li>
            <li>To create a new account, use <code>createUserWithEmailAndPassword</code>, passing the user's email address and chosen password</li>
          </ol>
          <div className="relative bg-slate-200 p-4 rounded-lg mb-4">
            <button
              onClick={() => copyToClipboard(signUpSnippet)}
              className="absolute top-4 right-4 bg-transparent text-gray-600 hover:text-gray-900"
            >
              <FaRegCopy size={16} />
            </button>
            <pre>
              {signUpSnippet}
            </pre>
          </div>

          <h3 className="font-bold mb-2">Sign in a user with email address and password on your app's sign-in page</h3>
          <ol className="list-disc list-inside pl-3 mb-4">
            <li>Pass the user's email and password to <code>signInWithEmailAndPassword</code></li>
          </ol>
          <div className="relative bg-slate-200 p-4 rounded-lg mb-4">
            <button
              onClick={() => copyToClipboard(signInSnippet)}
              className="absolute top-4 right-4 bg-transparent text-gray-600 hover:text-gray-900"
            >
              <FaRegCopy size={16} />
            </button>
            <pre>
              {signInSnippet}
            </pre>

          </div>
        </section>

      </div>
    </div>
  );
}

export default Documentation;
