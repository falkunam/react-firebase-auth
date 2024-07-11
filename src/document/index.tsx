import { useState } from "react";
import { firebaseConfigSnippet, signInSnippet } from "./codeSnippet";

const Documentation = () => {
  const [activeTab, setActiveTab] = useState<string>('#introduction');
  const [openSubLists, setOpenSubLists] = useState<any>({});

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
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

  return (
    <div className="container mx-auto p-8 flex">
      <div className="w-1/5 bg-gray-100 p-4 fixed h-full">
        {/* <h2 className="text-2xl font-semibold mb-4">Documentation</h2> */}
        <nav className="p-4">
          <ul>
            <li className={`mb-2 ${activeTab === '#introduction' ? 'bg-blue-200' : ''}`}>
              <a href="#introduction" onClick={() => handleTabClick('#introduction')}>Introduction</a>
            </li>
            <li className={`mb-2 ${activeTab === '#installation' ? 'bg-blue-200' : ''}`}>
              <a href="#installation" onClick={() => handleTabClick('#installation')}>Installation</a>
              <button onClick={() => toggleSubList('installation')} className="ml-2">
                {openSubLists['installation'] ? '▼' : '▶'}
              </button>
              {openSubLists['installation'] && (
                <ul className="ml-4 mt-2">
                  <li className={`mb-2 ${activeTab === '#project-setup' ? 'bg-blue-200' : ''}`}>
                    <a href="#project-setup" onClick={() => handleTabClick('#project-setup')}>Project Setup</a>
                  </li>
                  <li className={`mb-2 ${activeTab === '#firebase-configuration' ? 'bg-blue-200' : ''}`}>
                    <a href="#firebase-configuration" onClick={() => handleTabClick('#firebase-configuration')}>Firebase Configuration</a>
                  </li>
                </ul>
              )}
            </li>
            <li className={`mb-2 ${activeTab === '#authentication-setup' ? 'bg-blue-200' : ''}`}>
              <a href="#authentication-setup" onClick={() => handleTabClick('#authentication-setup')}>Authentication Setup</a>
              <button onClick={() => toggleSubList('authentication-setup')} className="ml-2">
                {openSubLists['authentication-setup'] ? '▼' : '▶'}
              </button>
              {openSubLists['authentication-setup'] && (
                <ul className="ml-4 mt-2">
                  <li className={`mb-2 ${activeTab === '#email-authentication' ? 'bg-blue-200' : ''}`}>
                    <a href="#email-authentication" onClick={() => handleTabClick('#email-authentication')}>Email Authentication</a>
                  </li>
                  <li className={`mb-2 ${activeTab === '#mobile-authentication' ? 'bg-blue-200' : ''}`}>
                    <a href="#mobile-authentication" onClick={() => handleTabClick('#mobile-authentication')}>Mobile Number Authentication</a>
                  </li>
                  <li className={`mb-2 ${activeTab === '#third-party-authentication' ? 'bg-blue-200' : ''}`}>
                    <a href="#third-party-authentication" onClick={() => handleTabClick('#third-party-authentication')}>Third-Party Authentication</a>
                    <button onClick={() => toggleSubList('third-party-authentication')} className="ml-2">
                      {openSubLists['third-party-authentication'] ? '▼' : '▶'}
                    </button>
                    {openSubLists['third-party-authentication'] && (
                      <ul className="ml-4 mt-2">
                        <li className={`mb-2 ${activeTab === '#facebook-authentication' ? 'bg-blue-200' : ''}`}>
                          <a href="#facebook-authentication" onClick={() => handleTabClick('#facebook-authentication')}>Facebook</a>
                        </li>
                        <li className={`mb-2 ${activeTab === '#google-authentication' ? 'bg-blue-200' : ''}`}>
                          <a href="#google-authentication" onClick={() => handleTabClick('#google-authentication')}>Google</a>
                        </li>
                        <li className={`mb-2 ${activeTab === '#instagram-authentication' ? 'bg-blue-200' : ''}`}>
                          <a href="#instagram-authentication" onClick={() => handleTabClick('#instagram-authentication')}>Instagram</a>
                        </li>
                        <li className={`mb-2 ${activeTab === '#github-authentication' ? 'bg-blue-200' : ''}`}>
                          <a href="#github-authentication" onClick={() => handleTabClick('#github-authentication')}>GitHub</a>
                        </li>
                        <li className={`mb-2 ${activeTab === '#twitter-authentication' ? 'bg-blue-200' : ''}`}>
                          <a href="#twitter-authentication" onClick={() => handleTabClick('#twitter-authentication')}>Twitter (X)</a>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>

      <div className="w-3/4 ml-auto p-4">
        <h1 className="text-3xl font-bold mb-6" id="introduction">Introduction</h1>
        <p className="mb-4">This documentation provides a step-by-step guide for setting up a project using React (Vite), Tailwind CSS, Firebase, and ESLint/Prettier. The project includes user authentication with various platforms and a dashboard to display user details.</p>

        <h2 className="text-2xl font-semibold mb-4" id="installation">Installation</h2>
        <h3>Prerequisites</h3>
        <ul className="mb-4">
          <li>Node.js and npm installed</li>
          <li>Firebase account</li>
        </ul>

        <p className="mb-4">To get started, follow these steps:</p>
        <ol className="list-decimal list-inside mb-4">
          <li>Install Node.js and npm if not already installed.</li>
          <li>Create a new Vite project:</li>
          <li>Install Tailwind CSS and configure.</li>
          <li>Set up Firebase and initialize your project.</li>
          <li>Install ESLint and Prettier for code formatting.</li>
        </ol>

        <h2 className="text-2xl font-semibold mb-4" id="firebase">Step 2: Create Authentication Components</h2>

        <h3 className="text-xl font-semibold mb-4">Sign In Component</h3>
        <pre className="bg-gray-100 p-4 rounded mb-4">
          <code>{signInSnippet}</code>
        </pre>
        <button
          onClick={() => copyToClipboard(signInSnippet)}
          className="bg-blue-500 text-white p-2 rounded mb-8"
        >
          Copy code
        </button>
      </div>
    </div>
  );
}

export default Documentation;
